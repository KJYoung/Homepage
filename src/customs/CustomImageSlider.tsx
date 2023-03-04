import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

type ImageInfoPairsType = {
    url: string;
    title?: string;
};

interface IPropsCustomImageSlider {
    width: number;
    height: number;
    images: ImageInfoPairsType[];
    showBullets?: boolean;
    showNavs?: boolean;
    periodicChange: boolean;
};
interface IPropsWH {
    width: number;
    height: number;
};
interface IPropsActive {
    current: boolean;
}

const CustomImageSlider = ({ width, height, images, periodicChange } : IPropsCustomImageSlider) => {
    const imgLength = images.length;

    // Gallery Periodic Change
    const [index, setIndex] = useState(1);
    const timeoutRef = useRef(setTimeout(() => {}, 10000));

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    const leftIndicatorOnClick = () => { setIndex( index > 1 ? index - 1 : 1 ) };
    const rightIndicatorOnClick = () => { setIndex( index < imgLength ? index + 1 : imgLength ) };
    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() => {
            if(periodicChange)
                setIndex((prevIndex) => (prevIndex === imgLength ? 1 : prevIndex + 1));
        }, 5000);
        return () => {
            resetTimeout();
        };
    }, [index, imgLength, periodicChange]);

    return <CustomImageSliderWrapper>
        <span>커스텀 이미지 슬라이더 {index}</span>
        <Wrapper width={width} height={height + 50}>
            <Slider width={width * imgLength} height={height + 50} style={{ transform: `translateX(-${(width * (index - 1))}px)`}}>
                {images.map((img, i) => {
                    return <div>
                        <img key={i} src={img.url} style={{ width: `${width}px`}} alt="imgElement"/>
                        {img.title && <span>TITLE : {img.title}</span>}
                    </div>
                })}
            </Slider>
            <nav className="BottomIndicator">
                {Array.from(Array(imgLength).keys()).map((_, i) => <NavBtn key={i} onClick={() => setIndex(i + 1)} current={index === i+1}/>)}
            </nav>
            <nav className="LeftIndicator">
                <button onClick={leftIndicatorOnClick}>{'<'}</button>
            </nav>
            <nav className="RightIndicator">
                <button onClick={rightIndicatorOnClick}>{'>'}</button>
            </nav>
        </Wrapper>
    </CustomImageSliderWrapper>
}


const CustomImageSliderWrapper = styled.div`
    border: 1px solid blue;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Wrapper = styled.div<IPropsWH>`
    width: ${({ width }) => `${width}px`};;
    height: ${({ height }) => `${height}px`};;
    position: relative;
    overflow: hidden;

    nav.BottomIndicator {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 1rem;
        display: flex;
        gap: 5px;
    };
    nav.LeftIndicator {
        position: absolute;
        left: 1rem;
        top: 50%;
    };
    nav.RightIndicator {
        position: absolute;
        right: 1rem;
        top: 50%;
    };
`;

const NavBtn = styled.button<IPropsActive>`
    padding: 0px;
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;

    ${({ current }) =>
    current &&
    `
      background-color: rgba(255, 0, 0, 0.9);
    `};

`;

const Slider = styled.div<IPropsWH>`
    display: flex;
    /* transition: transform 1.2s ease-in-out; */
    img {
        object-fit: cover;
    }
    > div {
        display: flex;
        flex-direction: column;
    }
`;

export default CustomImageSlider;