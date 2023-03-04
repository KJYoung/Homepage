import React from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface CustomImageModalIprops {
  isActive: boolean;
  onClose: () => void;
  modalRef: React.MutableRefObject<null>;
  modalAnimRef: React.MutableRefObject<null>;
  imgSrc: string | undefined;
  imgTitle: string | undefined;
  imgSubtitle: string | undefined;
};

const CustomImageModal = ({ isActive, onClose, modalRef, modalAnimRef, imgSrc, imgTitle, imgSubtitle }: CustomImageModalIprops) => {

  const closeHandler = () => {
    onClose?.();
  };

  const Modal = (
    <CSSTransition in={isActive} nodeRef={modalAnimRef} timeout={110} classNames="modal" unmountOnExit>
      <ModalOverlay ref={modalAnimRef}>
        <ModalContent className="modal" ref={modalRef}>
          <Divdiv>
            <CategoryWrapper>
              <TitleWrapper>
                  <ImgTitle>{imgTitle ? imgTitle : "제목 없음."}</ImgTitle>
                  <ImgSubtitle>{imgSubtitle && imgSubtitle}</ImgSubtitle>
              </TitleWrapper>
              <ModalExitWrapper>
                <ModalCloseBtn onClick={closeHandler}>
                  <FontAwesomeIcon icon={faX} />
                </ModalCloseBtn>
              </ModalExitWrapper>
            </CategoryWrapper>
            <ImageModalContent>
                <img src={imgSrc} alt="full screen form"/>
            </ImageModalContent>
          </Divdiv>
        </ModalContent>
      </ModalOverlay>
    </CSSTransition>
  );
  return Modal;
};

export const ModalOverlay = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0px;
  left: 0;
  bottom: 0;
  right: 0;

  background-color: var(--hp-modal-background);
`;

const ModalContent = styled.div`
  width: fit-content;
  height: fit-content;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 15px;
  /* Modal Shadow */
  -webkit-box-shadow: 0 10px 12px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 10px 12px rgba(0, 0, 0, 0.3);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
  -webkit-background-clip: padding-box;
  -moz-background-clip: padding-box;
  background-clip: padding-box;
`;

const ModalExitWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 20px;
  color: var(--hp-red);
`;

const Divdiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--hp-white);
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  border-radius: inherit;
`;

const ModalCloseBtn = styled.div`
  width: fit-content;
  cursor: pointer;
`;

const CategoryWrapper = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  align-items: center;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-color: var(--fit-white);

  div:nth-child(2) {
    border-left: 1px solid black;
  }
`;
const TitleWrapper = styled.div`
    display: flex;
    align-items: flex-end;
`;
const ImgTitle = styled.span`
    margin: 10px 5px 5px 10px;
    font-size: 26px;
    font-weight: 500;
    color: var(--hp-text);
`;
const ImgSubtitle = styled.span`
    margin: 10px 0px 5px 10px;
    font-size: 17px;
    font-weight: 400;
    color: var(--hp-subtext);
`;

const ImageModalContent = styled.div`
  margin-top: 40px;
  height: 85vh;
  width: 98vw;
  display: flex;
  justify-content: center;
  align-items: center;
  
  background-color: var(--hp-gray);
  img {
    max-width: 98vw;
    max-height: 85vh;
    width: auto;
    height: auto;
  }
`;

export default CustomImageModal;
