import { faMapLocationDot, faMaximize } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useOnClickOutside } from "usehooks-ts";
import CustomImageModal from "./CustomImageModal";

export type ImageInfoPairsType = {
    url: string;
    title?: string;
    subtitle?: string;
    description?: string;
    location?: string;
};

// Public Interface
export interface IPropsCustomImageSlider {
    width: number; // width of the CustomImageSlider. IN pixel. ex. 300 => '300px'
    height: number; // height of the CustomImageSlider. IN pixel. ex. 300 => '300px'
    images: ImageInfoPairsType[]; // images.
    showBullets?: boolean; // show bottom Bullets?
    showNavs?: boolean; // show left&right navigators?
    slideShow?: {
        periodicChange: number; // period of the conversion. IN milliseconds. ex. 5000 => '5000ms'
        transTime?: number; // transition time(animation duration). IN seconds. ex. 0.5 => '0.5s'
    }; // if valid, then show the slide show(periodic change).
};
// Public Interface for CustomImageDivSlider
export interface IPropsCustomImageDivSlider {
    width: number; // width of the CustomImageSlider. IN pixel. ex. 300 => '300px'
    height: number; // height of the CustomImageSlider. IN pixel. ex. 300 => '300px'
    images: JSX.Element[]; // imageDivs.
    showBullets?: boolean; // show bottom Bullets?
    showNavs?: boolean; // show left&right navigators?
    slideShow?: {
        periodicChange: number; // period of the conversion. IN milliseconds. ex. 5000 => '5000ms'
        transTime?: number; // transition time(animation duration). IN seconds. ex. 0.5 => '0.5s'
    }; // if valid, then show the slide show(periodic change).
};

// Private.
interface IPropsWH {
    width?: number;
    height?: number;
    transitionTime?: number;
};
interface IPropsActive {
    current: boolean;
}

const CustomImageSlider = ({ width, height, images, showBullets, showNavs, slideShow } : IPropsCustomImageSlider) => {
    const imgLength = images.length;

    // Params Processing
    
    // Gallery Periodic Change
    const [index, setIndex] = useState(1);
    const timeoutRef = useRef(setTimeout(() => {}, 10000));

    // Image Modal ------------------------------------------
    const [tagModalOpen, setTagModalOpen] = useState(false);
    const modalRef = useRef(null);
    const modalAnimRef = useRef(null);
    const [imgSrc, setImgSrc] = useState<string | undefined>();
    const [imgTitle, setImgTitle] = useState<string | undefined>();
    const [imgSubtitle, setImgSubtitle] = useState<string | undefined>();

    // Disable modal when OnClickOutside
    const TagDetailOnClose = () => {
        setTagModalOpen(false);
    };
    useOnClickOutside(modalRef, TagDetailOnClose, 'mousedown');
    // Image Modal End --------------------------------------
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
            if(slideShow)
                setIndex((prevIndex) => (prevIndex === imgLength ? 1 : prevIndex + 1));
        }, slideShow ? slideShow.periodicChange : 99999);
        return () => {
            resetTimeout();
        };
    }, [index, imgLength, slideShow]);
    
    return <CustomImageSliderWrapper>
        <Wrapper width={width}>
            <Slider width={width * imgLength} style={{ transform: `translateX(-${(width * (index - 1))}px)`}} transitionTime={slideShow?.transTime}>
                {images.map((img, i) => {
                    return <div>
                        <div style={{ position: 'relative'}}>
                            <ImgWrapper style={{ width: `${width}px`, height: `${height}px`, backgroundColor: `var(--hp-gray)` }}>
                                <img key={i} src={img.url} style={{ width: `${width}px`, maxHeight: `${height}px`}} alt="imgElement"/>
                            </ImgWrapper>
                            {showBullets && <nav className="BottomIndicator">
                                {Array.from(Array(imgLength).keys()).map((_, i) => <NavBtn key={i} onClick={() => setIndex(i + 1)} current={index === i+1}/>)}
                            </nav>}
                            <nav className="FullScreenBtn">
                                <FontAwesomeIcon icon={faMaximize} onClick={() => {
                                    setImgSrc(img.url);
                                    setImgTitle(img.title);
                                    setImgSubtitle(img.subtitle);
                                    setTagModalOpen(true);
                                }}/>
                            </nav>
                        </div>
                        <div style={{ position: 'relative', width: '100%'}}>
                            <TitleWrapper>
                                <ImgTitle>{img.title ? img.title : "제목 없음."}</ImgTitle>
                                <ImgSubtitle>{img.subtitle && img.subtitle}</ImgSubtitle>
                            </TitleWrapper>
                            {img.location && <ImgLocation>
                                <a target="_blank" href={img.location} rel="noreferrer">
                                    <FontAwesomeIcon icon={faMapLocationDot}/>
                                </a>
                            </ImgLocation>}
                        </div>
                        <ImgDescription>{img.description ? img.description : "설명 없음."}</ImgDescription>
                    </div>
                })}
            </Slider>
            {showNavs && <nav className="LeftIndicator">
                <LRIndicator onClick={leftIndicatorOnClick}>{'<'}</LRIndicator>
            </nav>}
            {showNavs && <nav className="RightIndicator">
                <LRIndicator onClick={rightIndicatorOnClick}>{'>'}</LRIndicator>
            </nav>}
        </Wrapper>
        {CustomImageModal({
            isActive: tagModalOpen,
            onClose: TagDetailOnClose,
            modalRef,
            modalAnimRef,
            imgSrc,
            imgTitle,
            imgSubtitle,
        })}
    </CustomImageSliderWrapper>
}

const CustomImageSliderWrapper = styled.div`
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

    nav {
        position: absolute;
    }

    nav.BottomIndicator {
        left: 50%;
        transform: translateX(-50%);
        bottom: 1rem;
        display: flex;
        align-items: center;
        gap: 7px;
    };
    nav.LeftIndicator {
        left: 1rem;
        top: 40%;
    };
    nav.RightIndicator {
        right: 1rem;
        top: 40%;
    };
    nav.FullScreenBtn {
        right: 1rem;
        top: 1rem;

        font-size: 22px;
        color: var(--hp-blue);
        cursor: pointer;
    }
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
    top: 30%;
    font-size: 24px;
    color: var(--hp-text-blue);

    cursor: pointer;
`;
const ImgDescription = styled.span`
    margin: 5px 0px 5px 10px;
    font-size: 19px;
    font-weight: 400;
    color: var(--hp-subtext);
`;

const NavBtn = styled.button<IPropsActive>`
    padding: 0px;
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    background-color: var(--hp-white);
    border: 1px solid black;
    
    cursor: pointer;
    ${
        ({ current }) =>
        current &&
        `
            cursor: default;
            width: 1rem;
            height: 1rem;
            background-color: var(--hp-blue);
        `
    };
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
    ${
        ({ transitionTime }) =>
        transitionTime &&
        `
            transition: transform ${transitionTime}s ease-in-out;
        `
    };
    img {
        object-fit: cover;
    }
    > div {
        display: flex;
        flex-direction: column;
    }
`;

export const CustomImageDivSlider = ({ width, images, showBullets, showNavs, slideShow } : IPropsCustomImageDivSlider) => {
    // Without 'Fullscreen', 'Information(Title, Description, ...)' Function.

    const imgLength = images.length;
    
    // Gallery Periodic Change
    const [index, setIndex] = useState(1);
    const timeoutRef = useRef(setTimeout(() => {}, 10000));
    const showDirectionRef = useRef(false);

    // Image Modal End --------------------------------------
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
            if(slideShow){
                if(index === imgLength && showDirectionRef.current === false){
                    showDirectionRef.current = true;
                }
                if(index === 1 && showDirectionRef.current === true){
                    showDirectionRef.current = false;
                }
                if(showDirectionRef.current){
                    setIndex((prev) => (prev-1));
                }else{
                    setIndex((prev) => (prev+1));
                }
            }
        }, slideShow ? slideShow.periodicChange : 99999);
        return () => {
            resetTimeout();
        };
    }, [index, imgLength, slideShow]);
    
    return <CustomImageSliderWrapper>
        <DivWrapper width={width}>
            <Slider width={width * imgLength} style={{ transform: `translateX(-${(width * (index - 1))}px)`}} transitionTime={slideShow?.transTime}>
                {images.map((img) => {
                    return <div>
                        <div style={{ position: 'relative'}}>
                            {img}
                            {showBullets && <nav className="BottomIndicator">
                                {Array.from(Array(imgLength).keys()).map((_, i) => <NavBtn key={i} onClick={() => setIndex(i + 1)} current={index === i+1}/>)}
                            </nav>}
                        </div>
                    </div>
                })}
            </Slider>
            {showNavs && <nav className="LeftIndicator">
                <LRIndicator onClick={leftIndicatorOnClick}>{'<'}</LRIndicator>
            </nav>}
            {showNavs && <nav className="RightIndicator">
                <LRIndicator onClick={rightIndicatorOnClick}>{'>'}</LRIndicator>
            </nav>}
        </DivWrapper>
    </CustomImageSliderWrapper>
};
const DivWrapper = styled.div<IPropsWH>`
    width: ${({ width }) => `${width}px`};;
    height: 100%;
    position: relative;
    overflow: hidden;

    nav {
        position: absolute;
    }

    nav.BottomIndicator {
        left: 50%;
        transform: translateX(-50%);
        top: 1rem;
        display: flex;
        align-items: center;
        gap: 7px;
    };
    nav.LeftIndicator {
        left: 1rem;
        top: 40%;
    };
    nav.RightIndicator {
        right: 1rem;
        top: 40%;
    };
    nav.FullScreenBtn {
        right: 1rem;
        top: 1rem;

        font-size: 22px;
        color: var(--hp-blue);
        cursor: pointer;
    }
`;
export default CustomImageSlider;