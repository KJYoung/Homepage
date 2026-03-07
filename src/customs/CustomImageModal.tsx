import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface CustomImageModalIprops {
  isActive: boolean;
  onClose: () => void;
  imgSrc: string | undefined;
  imgTitle: string | undefined;
  imgSubtitle: string | undefined;
}

const CustomImageModal = ({ isActive, onClose, imgSrc, imgTitle, imgSubtitle }: CustomImageModalIprops) => {
  useEffect(() => {
    if (!isActive) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", keyDownHandler);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", keyDownHandler);
    };
  }, [isActive, onClose]);

  if (!isActive) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalCard role="dialog" aria-modal="true" aria-label={imgTitle ?? "Publication image"}>
        <ModalTop>
          <TitleGroup>
            <ImgTitle>{imgTitle ?? "Untitled Image"}</ImgTitle>
            {imgSubtitle && <ImgSubtitle>{imgSubtitle}</ImgSubtitle>}
          </TitleGroup>
          <ModalCloseBtn type="button" onClick={onClose} aria-label="Close modal">
            <FontAwesomeIcon icon={faXmark} />
          </ModalCloseBtn>
        </ModalTop>
        <ImageViewport>
          {imgSrc ? <img src={imgSrc} alt={imgTitle ?? "publication"} /> : <EmptyText>No image available.</EmptyText>}
        </ImageViewport>
        <MetaHint>Click outside or press ESC to close.</MetaHint>
      </ModalCard>
    </ModalOverlay>
  );
};

const overlayEnter = keyframes`
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

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1200;
  padding: clamp(64px, 11vh, 96px) 18px 24px;
  background: rgba(10, 15, 22, 0.58);
  backdrop-filter: blur(7px) saturate(108%);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  animation: ${overlayEnter} 0.2s ease;
`;

const ModalCard = styled.div`
  width: min(1260px, 100%);
  max-height: calc(100vh - clamp(84px, 13vh, 118px));
  border-radius: 20px;
  border: 1px solid rgba(188, 204, 223, 0.9);
  background: linear-gradient(180deg, #ffffff 0%, #f6f9fd 100%);
  box-shadow: 0 24px 62px rgba(8, 19, 38, 0.44);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${cardEnter} 0.24s cubic-bezier(0.22, 0.61, 0.36, 1);
`;

const ModalTop = styled.div`
  width: 100%;
  min-height: 68px;
  padding: 15px 16px 13px;
  border-bottom: 1px solid rgba(212, 222, 236, 0.9);
  background: linear-gradient(180deg, #fafdff 0%, #f4f8ff 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
`;

const TitleGroup = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ModalCloseBtn = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 11px;
  border: 1px solid rgba(214, 224, 238, 0.95);
  background: #ffffff;
  color: #355679;
  font-size: 17px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s ease, background 0.2s ease, color 0.2s ease;

  &:hover {
    background: #edf4ff;
    color: #1f5fc4;
    transform: translateY(-1px);
  }
`;

const ImgTitle = styled.span`
  font-size: clamp(17px, 2.1vw, 25px);
  font-weight: 800;
  color: #122a44;
  line-height: 1.15;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ImgSubtitle = styled.span`
  color: #4d698a;
  font-size: 13px;
  line-height: 1.3;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ImageViewport = styled.div`
  width: 100%;
  flex: 1;
  min-height: 280px;
  padding: clamp(8px, 1.8vw, 16px);
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(circle at 50% 0%, #f3f7fe 0%, #e7edf8 100%);
  overflow: auto;

  &::-webkit-scrollbar {
    width: 9px;
    height: 9px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 999px;
    background: rgba(110, 136, 167, 0.5);
  }

  img {
    max-width: 100%;
    max-height: calc(100vh - 230px);
    object-fit: contain;
    border-radius: 12px;
    box-shadow: 0 14px 34px rgba(13, 29, 55, 0.18);
    border: 1px solid rgba(202, 214, 231, 0.9);
  }
`;

const MetaHint = styled.span`
  width: 100%;
  padding: 10px 16px 13px;
  border-top: 1px solid rgba(215, 225, 238, 0.85);
  color: #557092;
  font-size: 12px;
  letter-spacing: 0.1px;
  background: #f6f9fd;
`;

const EmptyText = styled.span`
  color: #4b627f;
  font-weight: 600;
`;

export default CustomImageModal;
