import React, { useRef, useState } from 'react';
import styled from 'styled-components';

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
    const containerRef = useRef<HTMLDivElement>(null); // ImageContainer 참조
  
    const handleDrag = (e:any) => {
      e.preventDefault();
      requestAnimationFrame(() => {
        if (containerRef.current) {
          const container = containerRef.current.getBoundingClientRect();
          const newPosition = ((e.clientX - container.left) / container.width) * 100;
          if (newPosition >= 0 && newPosition <= 100) {
            setSliderPosition(newPosition);
          }
        }
      });
    };
  
    const startDrag = (e:any) => {
      e.preventDefault();
      document.addEventListener('mousemove', handleDrag);
      document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', handleDrag);
      }, { once: true });
    };
  
    return (
      <ImageContainer ref={containerRef}>
        <ImageA src={imageA} alt="Image A" />
        <ImageB src={imageB} alt="Image B" style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0% 100%)` }} />
        <Slider style={{ left: `${sliderPosition}%` }}>
          <Handle style={{ left: `-15px` }} onMouseDown={startDrag} />
        </Slider>
      </ImageContainer>
    );
  };
  
  export default ImageSlider;