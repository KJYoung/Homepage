import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { PORTRAIT1_URL, PORTRAIT2_URL } from "../DATA/Public_URL";

const portraits = [
  { src: PORTRAIT2_URL, label: "Current (2026)" },
  { src: PORTRAIT1_URL, label: "Past (2022)" },
];

const Portrait = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const currentPortrait = useMemo(() => portraits[selectedIndex], [selectedIndex]);

  const goPrev = () => {
    setSelectedIndex((prev) => (prev - 1 + portraits.length) % portraits.length);
  };
  const goNext = () => {
    setSelectedIndex((prev) => (prev + 1) % portraits.length);
  };

  useEffect(() => {
    if (!isGalleryOpen) return;

    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsGalleryOpen(false);
        return;
      }
      if (event.key === "ArrowLeft") {
        goPrev();
        return;
      }
      if (event.key === "ArrowRight") {
        goNext();
      }
    };

    window.addEventListener("keydown", keyDownHandler);
    return () => {
      window.removeEventListener("keydown", keyDownHandler);
    };
  }, [isGalleryOpen]);

  return (
    <>
      <MainPortraitButton
        type="button"
        onClick={() => {
          setSelectedIndex(0);
          setIsGalleryOpen(true);
        }}
        aria-label="Open portrait gallery"
      >
        <MainPortrait src={PORTRAIT2_URL} alt="Portrait" />
      </MainPortraitButton>

      {isGalleryOpen && (
        <Overlay onClick={() => setIsGalleryOpen(false)}>
          <GalleryCard onClick={(e) => e.stopPropagation()}>
            <TopBar>
              <Caption>{currentPortrait.label}</Caption>
              <CloseButton type="button" onClick={() => setIsGalleryOpen(false)} aria-label="Close gallery">
                <FontAwesomeIcon icon={faXmark} />
              </CloseButton>
            </TopBar>

            <MainImage src={currentPortrait.src} alt={currentPortrait.label} />
            <KeyboardHint>Use keyboard: &#8592; / &#8594; to navigate, ESC to close</KeyboardHint>

            <ThumbnailRow>
              {portraits.map((portrait, index) => (
                <ThumbnailButton
                  key={portrait.src}
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  $active={index === selectedIndex}
                  aria-label={`Show ${portrait.label}`}
                >
                  <Thumbnail src={portrait.src} alt={portrait.label} />
                </ThumbnailButton>
              ))}
            </ThumbnailRow>
          </GalleryCard>
        </Overlay>
      )}
    </>
  );
};

const MainPortraitButton = styled.button`
  background: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;
`;

const MainPortrait = styled.img`
  border-radius: 20px;
  border: 1px solid black;
  width: 185px;
  max-height: 480px;
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.62);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
  padding: 16px;
`;

const GalleryCard = styled.div`
  width: min(92vw, 660px);
  max-height: 92vh;
  background: white;
  border-radius: 16px;
  padding: 14px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const Caption = styled.span`
  font-size: 14px;
  font-weight: 700;
`;

const CloseButton = styled.button`
  border: 1px solid #333;
  background: transparent;
  border-radius: 999px;
  width: 32px;
  height: 32px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainImage = styled.img`
  width: 100%;
  max-height: 70vh;
  object-fit: contain;
  border-radius: 10px;
  border: 1px solid #ddd;
`;

const KeyboardHint = styled.span`
  margin-top: 10px;
  text-align: center;
  color: #555;
  font-size: 13px;
`;

const ThumbnailRow = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: center;
  column-gap: 8px;
`;

const ThumbnailButton = styled.button<{ $active: boolean }>`
  padding: 0;
  border: ${({ $active }) => ($active ? "2px solid #1976d2" : "1px solid #bbb")};
  border-radius: 8px;
  background: transparent;
  overflow: hidden;
  cursor: pointer;
`;

const Thumbnail = styled.img`
  width: 70px;
  height: 100px;
  object-fit: cover;
`;

export default Portrait;
