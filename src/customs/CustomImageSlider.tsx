import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

export type ImageInfoPairsType = {
    url: string;
    title?: string;
    subtitle?: string;
    description?: string;
    location?: string;
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
    width?: number;
    height?: number;
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
        <Wrapper width={width}>
            <Slider width={width * imgLength} style={{ transform: `translateX(-${(width * (index - 1))}px)`}}>
                {images.map((img, i) => {
                    return <div>
                        <div style={{ position: 'relative'}}>
                            <ImgWrapper style={{ width: `${width}px`, height: `${height}px`, backgroundColor: `var(--hp-gray)` }}>
                                <img key={i} src={img.url} style={{ width: `${width}px`, maxHeight: `${height}px`}} alt="imgElement"/>
                            </ImgWrapper>
                            <nav className="BottomIndicator">
                                {Array.from(Array(imgLength).keys()).map((_, i) => <NavBtn key={i} onClick={() => setIndex(i + 1)} current={index === i+1}/>)}
                            </nav>
                        </div>
                        <div style={{ position: 'relative', width: '100%'}}>
                            <TitleWrapper>
                                <ImgTitle>{img.title ? img.title : "정보 없음."}</ImgTitle>
                                <ImgSubtitle>{img.subtitle && img.subtitle}</ImgSubtitle>
                            </TitleWrapper>
                            {img.location && <ImgLocation>LOC</ImgLocation>}
                        </div>
                        <ImgDescription>{img.description ? img.description : "정보 없음."}</ImgDescription>
                    </div>
                })}
            </Slider>
            <nav className="LeftIndicator">
                <LRIndicator onClick={leftIndicatorOnClick}>{'<'}</LRIndicator>
            </nav>
            <nav className="RightIndicator">
                <LRIndicator onClick={rightIndicatorOnClick}>{'>'}</LRIndicator>
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
    height: 100%;
    padding-bottom: 40px;
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
        top: 40%;
    };
    nav.RightIndicator {
        position: absolute;
        right: 1rem;
        top: 40%;
    };
`;
const ImgWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
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
const ImgLocation = styled.span`
    position: absolute;
    right: 1rem;
    top: 35%;
`;
const ImgDescription = styled.span`
    margin: 5px 0px 5px 10px;
    font-size: 19px;
    font-weight: 400;
    color: var(--hp-subtext);
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
const LRIndicator = styled.button`
    border: none;
    background: none;
    padding: 15px;
    font-size: 40px;
    color: var(--hp-white);

    cursor: pointer;
`;

const Slider = styled.div<IPropsWH>`
    display: flex;
    align-items: center;
    /* transition: transform 0.5s ease-in-out; */
    img {
        object-fit: cover;
    }
    > div {
        display: flex;
        flex-direction: column;
    }
`;

export default CustomImageSlider;