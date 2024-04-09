import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { FlexRowCenter } from './Divs';
import { SPAN } from './Spans';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

// Hyperparameters for sizing!
const LINEWIDTH = 4;
const HANDLESIZE = 45;

const ImageContainer = styled.div<{ minHeight : number }>`
  position: relative;
  width: 100%; /* 컨테이너의 너비를 조정하려면 이 값을 변경하세요 */
  min-height: ${(props) => props.minHeight}px; /* Set min-height based on aspect ratio */
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
  width: ${LINEWIDTH}px;
  background-color: #000; /* 슬라이더 색상 */
`;

const Handle = styled.div`
  position: absolute;
  z-index: 4;
  height: ${HANDLESIZE}px;
  width: ${HANDLESIZE}px;
  border-radius: 50%;
  background-color: #fff; /* 핸들 색상 */
  border: ${LINEWIDTH - 1}px solid #000; /* 핸들 테두리 */
  top: 50%;
  left: ${- 0.5 * (HANDLESIZE - LINEWIDTH)}px;
  transform: translateY(-50%);
  cursor: ew-resize;

  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 15px;
`;

const ImageSlider = ({ imageA, imageB } : { imageA: string, imageB: string}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [loadingImageA, setLoadingImageA] = useState(true);
  const [loadingImageB, setLoadingImageB] = useState(true);
  const handleImageALoad = () => setLoadingImageA(false);
  const handleImageBLoad = () => setLoadingImageB(false);
  const containerRef = useRef<HTMLDivElement>(null); // ImageContainer 참조

  const [aspectRatio, setAspectRatio] = useState<number | null>(null);
  const [minHeight, setMinHeight] = useState<number>(0);

  useEffect(() => {
    setLoadingImageA(true);
    setLoadingImageB(true);

    // Assume A and B has same aspect ratio;
    const img = new Image();
    img.src = imageA;
    img.onload = () => {
      const ratio = (img.naturalHeight / img.naturalWidth) * 100;
      setAspectRatio(ratio);
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        const minHeightValue = (ratio / 100) * width;
        setMinHeight(minHeightValue);
      }
    };
  }, [imageA, imageB]);

  useEffect(() => {
    const handleResize = () => {
      if (aspectRatio && containerRef.current) {
        const width = containerRef.current.offsetWidth;
        const minHeightValue = (aspectRatio / 100) * width;
        setMinHeight(minHeightValue);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [aspectRatio]);

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
        }else if (newPosition < 0){
          setSliderPosition(0);
        }else if (newPosition > 100){
          setSliderPosition(100);
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
    <ImageContainer ref={containerRef} minHeight={minHeight}>
      {loadingImageA || loadingImageB ? <FlexRowCenter backgroundColor='hp-gray' color='hp-white' width='min(100%, 1000px)' height={`${minHeight}px`}>
          <SPAN fontSize='44px'>Loading...</SPAN>
        </FlexRowCenter> : null}
      <ImageA src={imageA} alt="Image A" onLoad={handleImageALoad} style={{ display: loadingImageA ? 'none' : 'block' }} />
      <ImageB src={imageB} alt="Image B" onLoad={handleImageBLoad} style={{ display: loadingImageB ? 'none' : 'block', clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0% 100%)` }} />
      {!loadingImageA && !loadingImageB && <>
        <Slider style={{ left: `${sliderPosition}%` }}>
          <Handle onMouseDown={startDrag} onTouchStart={startDrag}>
            <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight : '6px' }} />            
            <FontAwesomeIcon icon={faArrowRight} />
          </Handle>
        </Slider>
      </>
      }
    </ImageContainer>
  );
};
  
export default ImageSlider;