import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { FlexRowCenter } from './Divs';
import { SPAN } from './Spans';

const ImageContainer = styled.div`
  position: relative;
  width: 100%; /* 컨테이너의 너비를 조정하려면 이 값을 변경하세요 */
  min-height: 500px;

  max-width: 1000px;
  overflow: hidden;
`;

const ImageSkeleton = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
`;
const ImageA = styled(ImageSkeleton)`
  z-index: 1;
`;

const ImageB = styled(ImageSkeleton)`
  z-index: 2;
`;

const Slider = styled.div`
  position: absolute;
  z-index: 3;
  background-color: transparent;
  height: 100%;
  width: 2px;
  background-color: #000; /* 슬라이더 색상 */
`;

const Handle = styled.div`
  position: absolute;
  z-index: 4;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: #fff; /* 핸들 색상 */
  border: 2px solid #000; /* 핸들 테두리 */
  top: 50%;
  transform: translateY(-50%);
  cursor: ew-resize;
`;

const ImageSlider = ({ imageA, imageB } : { imageA: string, imageB: string}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [loadingImageA, setLoadingImageA] = useState(true);
  const [loadingImageB, setLoadingImageB] = useState(true);
  const handleImageALoad = () => setLoadingImageA(false);
  const handleImageBLoad = () => setLoadingImageB(false);
  const containerRef = useRef<HTMLDivElement>(null); // ImageContainer 참조

  useEffect(() => {
    setLoadingImageA(true);
    setLoadingImageB(true);
  }, [imageA, imageB]);

  const getPointerPosition = (e: any) => {
    // Check if it's a touch event
    if (e.touches && e.touches.length > 0) {
      return e.touches[0].clientX;
    }
    // Otherwise, it's a mouse event
    return e.clientX;
  };

  const handleDrag = (e: any) => {
    e.preventDefault();
    requestAnimationFrame(() => {
      if (containerRef.current) {
        const container = containerRef.current.getBoundingClientRect();
        const pointerX = getPointerPosition(e); // Get the appropriate X value (mouse or touch)
        const newPosition = ((pointerX - container.left) / container.width) * 100;
        if (newPosition >= 0 && newPosition <= 100) {
          setSliderPosition(newPosition);
        }
      }
    });
  };

  const startDrag = (e:any) => {
    e.preventDefault();
    // Add mouse event listeners
    document.addEventListener('mousemove', handleDrag);
    document.addEventListener('mouseup', stopDrag, { once: true });
    // Add touch event listeners
    document.addEventListener('touchmove', handleDrag);
    document.addEventListener('touchend', stopDrag, { once: true });
  };
  const stopDrag = () => {
    // Remove mouse event listeners
    document.removeEventListener('mousemove', handleDrag);
    // Remove touch event listeners
    document.removeEventListener('touchmove', handleDrag);
  };

  return (
    <ImageContainer ref={containerRef}>
      {loadingImageA || loadingImageB ? <FlexRowCenter backgroundColor='hp-gray' color='hp-white' width='1000px' height='500px'>
          <SPAN fontSize='44px'>Loading...</SPAN>
        </FlexRowCenter> : null}
      <ImageA src={imageA} alt="Image A" onLoad={handleImageALoad} style={{ display: loadingImageA ? 'none' : 'block' }} />
      <ImageB src={imageB} alt="Image B" onLoad={handleImageBLoad} style={{ display: loadingImageB ? 'none' : 'block', clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0% 100%)` }} />
      <Slider style={{ left: `${sliderPosition}%` }}>
        <Handle onMouseDown={startDrag} onTouchStart={startDrag} style={{ left: `-15px` }} />
      </Slider>
    </ImageContainer>
  );
};
  
export default ImageSlider;