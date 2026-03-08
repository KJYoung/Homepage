import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useEffect, useMemo, useState } from "react";
import styled, { keyframes } from "styled-components";
import { PORTRAIT1_URL, PORTRAIT2_URL } from "../DATA/Public_URL";

const portraits = [
  { src: PORTRAIT2_URL, label: "Current (2026)" },
  { src: PORTRAIT1_URL, label: "Past (2022)" },
];

const Portrait = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const currentPortrait = useMemo(() => portraits[selectedIndex], [selectedIndex]);

  const closeGallery = useCallback(() => {
    setIsGalleryOpen(false);
  }, []);

  const goPrev = useCallback(() => {
    setSelectedIndex((prev) => (prev - 1 + portraits.length) % portraits.length);
  }, []);

  const goNext = useCallback(() => {
    setSelectedIndex((prev) => (prev + 1) % portraits.length);
  }, []);

  useEffect(() => {
    if (!isGalleryOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.ctrlKey || event.metaKey || event.altKey) return;

      if (event.key === "Escape") {
        event.preventDefault();
        closeGallery();
        return;
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goPrev();
        return;
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        goNext();
      }
    };

    window.addEventListener("keydown", keyDownHandler);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", keyDownHandler);
    };
  }, [closeGallery, goNext, goPrev, isGalleryOpen]);

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
        <Overlay onClick={closeGallery}>
          <GalleryCard onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label="Portrait gallery">
            <TopBar>
              <CaptionBlock>
                <CaptionTitle>{currentPortrait.label}</CaptionTitle>
                <CaptionSub>
                  {selectedIndex + 1} / {portraits.length}
                </CaptionSub>
              </CaptionBlock>
              <CloseButton type="button" onClick={closeGallery} aria-label="Close gallery">
                <FontAwesomeIcon icon={faXmark} />
              </CloseButton>
            </TopBar>

            <ImageViewport>
              <MainImage src={currentPortrait.src} alt={currentPortrait.label} />
            </ImageViewport>

            <KeyboardHint>Keyboard: ← / → navigate · ESC close</KeyboardHint>

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
  border: 1px solid #1b2532;
  width: 185px;
  max-height: 480px;
`;

const overlayFade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const cardEnter = keyframes`
  from {
    opacity: 0;
    transform: translateY(8px) scale(0.985);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1200;
  padding: 26px 18px;
  background: rgba(11, 17, 26, 0.62);
  backdrop-filter: blur(7px) saturate(104%);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${overlayFade} 0.2s ease;

  @media (max-width: 820px) {
    padding: clamp(74px, 12vh, 106px) 16px 24px;
    align-items: flex-start;
  }
`;

const GalleryCard = styled.div`
  width: min(94vw, 740px);
  max-height: calc(100vh - 52px);
  border-radius: 18px;
  border: 1px solid rgba(190, 205, 224, 0.95);
  background: linear-gradient(180deg, #ffffff 0%, #f5f9ff 100%);
  box-shadow: 0 24px 58px rgba(7, 16, 31, 0.44);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${cardEnter} 0.24s cubic-bezier(0.22, 0.61, 0.36, 1);

  @media (max-width: 820px) {
    max-height: calc(100vh - clamp(98px, 14vh, 132px));
  }
`;

const TopBar = styled.div`
  width: 100%;
  min-height: 66px;
  padding: 12px 14px;
  border-bottom: 1px solid rgba(214, 223, 237, 0.95);
  background: linear-gradient(180deg, #fafcff 0%, #f3f8ff 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const CaptionBlock = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const CaptionTitle = styled.span`
  color: #133155;
  font-size: 17px;
  font-weight: 800;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CaptionSub = styled.span`
  color: #4f6c8d;
  font-size: 12px;
  font-weight: 700;
`;

const CloseButton = styled.button`
  border: 1px solid rgba(203, 217, 236, 0.95);
  background: #ffffff;
  color: #355a86;
  border-radius: 11px;
  width: 35px;
  height: 35px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: #edf4ff;
    color: #1f5fc4;
  }
`;

const ImageViewport = styled.div`
  width: 100%;
  flex: 1;
  min-height: 320px;
  padding: 10px;
  background: radial-gradient(circle at 50% 0%, #f0f6ff 0%, #e7eef9 100%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainImage = styled.img`
  width: 100%;
  max-height: calc(100vh - 310px);
  object-fit: contain;
  border-radius: 11px;
  border: 1px solid rgba(204, 216, 233, 0.95);
  box-shadow: 0 12px 28px rgba(15, 31, 55, 0.16);
`;

const KeyboardHint = styled.span`
  width: 100%;
  padding: 9px 12px;
  text-align: center;
  color: #4f6a89;
  font-size: 12px;
  font-weight: 600;
  border-top: 1px solid rgba(217, 227, 239, 0.9);
  border-bottom: 1px solid rgba(217, 227, 239, 0.9);
  background: #f8fbff;
`;

const ThumbnailRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 8px;
  padding: 11px 12px 12px;
  background: #f7fbff;
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 999px;
    background: rgba(130, 156, 188, 0.48);
  }
`;

const ThumbnailButton = styled.button<{ $active: boolean }>`
  padding: 0;
  min-width: 72px;
  border: ${({ $active }) => ($active ? "2px solid #2f79df" : "1px solid #b7c9de")};
  border-radius: 10px;
  background: #ffffff;
  overflow: hidden;
  cursor: pointer;
  box-shadow: ${({ $active }) => ($active ? "0 8px 17px rgba(32, 97, 191, 0.2)" : "none")};
`;

const Thumbnail = styled.img`
  width: 72px;
  height: 98px;
  object-fit: cover;
`;

export default Portrait;
