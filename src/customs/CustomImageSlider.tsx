import {
  faChevronLeft,
  faChevronRight,
  faLocationDot,
  faMaximize,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";

const SWIPE_THRESHOLD = 46;

export type ImageInfoPairsType = {
  url: string;
  title?: string;
  subtitle?: string;
  description?: string;
  location?: string;
};

export interface IPropsCustomImageSlider {
  _width: number;
  _height: number;
  images: ImageInfoPairsType[];
  showBullets?: boolean;
  showNavs?: boolean;
  slideShow?: {
    periodicChange: number;
    transTime?: number;
  };
}

export interface IPropsCustomImageDivSlider {
  width: number;
  height: number;
  images: JSX.Element[];
  showBullets?: boolean;
  showNavs?: boolean;
  slideShow?: {
    periodicChange: number;
    transTime?: number;
  };
}

const CustomImageSlider = ({
  _width,
  _height,
  images,
  showBullets,
  showNavs,
  slideShow,
}: IPropsCustomImageSlider) => {
  const imageLength = images.length;
  const widthEff = _width > 1200 ? 1200 : _width;
  const heightEff = _width > 1200 ? 560 : _height;
  const transitionTime = slideShow?.transTime ?? 0.42;

  const [index, setIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);
  const touchStartXRef = useRef<number | null>(null);
  const sliderShellRef = useRef<HTMLDivElement>(null);

  const currentImage = images[index];
  const progress = useMemo(
    () => (imageLength > 0 ? ((index + 1) / imageLength) * 100 : 0),
    [imageLength, index]
  );
  const canAutoPlay = Boolean(slideShow && slideShow.periodicChange < 99000 && imageLength > 1);

  useEffect(() => {
    setIndex(0);
  }, [images]);

  useEffect(() => {
    if (!canAutoPlay || isHovering || isFullscreenOpen) return;

    const timeoutId = window.setTimeout(() => {
      setIndex((prev) => (prev + 1) % imageLength);
    }, slideShow?.periodicChange ?? 5000);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [
    canAutoPlay,
    imageLength,
    index,
    isFullscreenOpen,
    isHovering,
    slideShow?.periodicChange,
  ]);

  useEffect(() => {
    if (!isFullscreenOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isFullscreenOpen]);

  const isSliderFocused = () => {
    if (!sliderShellRef.current) return false;
    return sliderShellRef.current.contains(document.activeElement);
  };

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      const eventTarget = event.target as HTMLElement | null;
      if (eventTarget && ["INPUT", "TEXTAREA", "SELECT"].includes(eventTarget.tagName)) return;
      if (event.ctrlKey || event.metaKey || event.altKey) return;

      if (key === "f" || event.code === "KeyF") {
        event.preventDefault();
        setIsFullscreenOpen((prev) => !prev);
        return;
      }
      if (event.key === "Escape" && isFullscreenOpen) {
        event.preventDefault();
        setIsFullscreenOpen(false);
        return;
      }

      const keyboardEnabled = isFullscreenOpen || isSliderFocused() || isHovering;
      if (!keyboardEnabled) return;

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setIndex((prev) => (prev - 1 + imageLength) % imageLength);
        return;
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setIndex((prev) => (prev + 1) % imageLength);
        return;
      }
    };

    window.addEventListener("keydown", keyDownHandler);
    return () => {
      window.removeEventListener("keydown", keyDownHandler);
    };
  }, [imageLength, isFullscreenOpen, isHovering]);

  const goPrev = () => {
    if (imageLength === 0) return;
    setIndex((prev) => (prev - 1 + imageLength) % imageLength);
  };

  const goNext = () => {
    if (imageLength === 0) return;
    setIndex((prev) => (prev + 1) % imageLength);
  };

  const onTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartXRef.current = event.touches[0].clientX;
  };

  const onTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartXRef.current === null) return;
    const delta = event.changedTouches[0].clientX - touchStartXRef.current;
    touchStartXRef.current = null;

    if (Math.abs(delta) < SWIPE_THRESHOLD) return;
    if (delta > 0) {
      goPrev();
    } else {
      goNext();
    }
  };

  if (imageLength === 0) {
    return (
      <CustomImageSliderWrapper>
        <EmptyState>No images available.</EmptyState>
      </CustomImageSliderWrapper>
    );
  }

  return (
    <CustomImageSliderWrapper>
      <SliderShell
        ref={sliderShellRef}
        width={widthEff}
        tabIndex={0}
        onClick={() => sliderShellRef.current?.focus()}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <Viewport height={heightEff} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          <ProgressTrack>
            <ProgressActive progress={progress} />
          </ProgressTrack>

          <Track index={index} transitionTime={transitionTime}>
            {images.map((image, imageIndex) => (
              <Slide key={`${image.url}-${imageIndex}`}>
                <SlideImage
                  src={image.url}
                  alt={image.title ?? `Gallery image ${imageIndex + 1}`}
                  loading={Math.abs(imageIndex - index) <= 1 ? "eager" : "lazy"}
                  onClick={() => setIsFullscreenOpen(true)}
                />
              </Slide>
            ))}
          </Track>

          {showNavs && imageLength > 1 && (
            <>
              <NavButton type="button" onClick={goPrev} $left aria-label="Previous image">
                <FontAwesomeIcon icon={faChevronLeft} />
              </NavButton>
              <NavButton type="button" onClick={goNext} aria-label="Next image">
                <FontAwesomeIcon icon={faChevronRight} />
              </NavButton>
            </>
          )}

          <TopActions>
            <TopActionButton type="button" onClick={() => setIsFullscreenOpen(true)}>
              <FontAwesomeIcon icon={faMaximize} />
              Fullscreen
            </TopActionButton>
          </TopActions>

          <IndexBadge>
            {index + 1} / {imageLength}
          </IndexBadge>
        </Viewport>

        <MetaPanel>
          <MetaTop>
            <MetaTitle>{currentImage.title ?? `Photo ${index + 1}`}</MetaTitle>
            {currentImage.location && (
              <LocationAnchor href={currentImage.location} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLocationDot} />
                Map
              </LocationAnchor>
            )}
          </MetaTop>

          {currentImage.subtitle && <MetaSubtitle>{currentImage.subtitle}</MetaSubtitle>}
          <MetaDescription>{currentImage.description ?? "Click image or press F to enter fullscreen."}</MetaDescription>
          <MetaHint>Keyboard: ← / → move, F fullscreen, ESC close.</MetaHint>
        </MetaPanel>

        {showBullets && imageLength > 1 && (
          <ThumbRail>
            {images.map((image, imageIndex) => (
              <ThumbButton
                key={`${image.url}-thumb-${imageIndex}`}
                type="button"
                onClick={() => setIndex(imageIndex)}
                $active={index === imageIndex}
                aria-label={`Go to image ${imageIndex + 1}`}
              >
                <ThumbImage
                  src={image.url}
                  alt={image.title ?? `Thumbnail ${imageIndex + 1}`}
                  loading="lazy"
                />
              </ThumbButton>
            ))}
          </ThumbRail>
        )}
      </SliderShell>

      {isFullscreenOpen && (
        <FullscreenOverlay onClick={() => setIsFullscreenOpen(false)}>
          <FullscreenPanel onClick={(event) => event.stopPropagation()}>
            <FullscreenHeader>
              <FullscreenTitle>
                {currentImage.title ?? `Photo ${index + 1}`} ({index + 1}/{imageLength})
              </FullscreenTitle>
              <FullscreenButtons>
                {currentImage.location && (
                  <FullscreenLink href={currentImage.location} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLocationDot} />
                    Map
                  </FullscreenLink>
                )}
                <CloseButton type="button" onClick={() => setIsFullscreenOpen(false)} aria-label="Close fullscreen">
                  <FontAwesomeIcon icon={faXmark} />
                </CloseButton>
              </FullscreenButtons>
            </FullscreenHeader>

            <FullscreenViewport onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
              <FullscreenImage src={currentImage.url} alt={currentImage.title ?? `Gallery image ${index + 1}`} />
              {imageLength > 1 && (
                <>
                  <FullscreenNavButton type="button" onClick={goPrev} $left aria-label="Previous image">
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </FullscreenNavButton>
                  <FullscreenNavButton type="button" onClick={goNext} aria-label="Next image">
                    <FontAwesomeIcon icon={faChevronRight} />
                  </FullscreenNavButton>
                </>
              )}
            </FullscreenViewport>

            {showBullets && imageLength > 1 && (
              <FullscreenThumbRail>
                {images.map((image, imageIndex) => (
                  <ThumbButton
                    key={`${image.url}-fullscreen-thumb-${imageIndex}`}
                    type="button"
                    onClick={() => setIndex(imageIndex)}
                    $active={index === imageIndex}
                  >
                    <ThumbImage
                      src={image.url}
                      alt={image.title ?? `Thumbnail ${imageIndex + 1}`}
                      loading="lazy"
                    />
                  </ThumbButton>
                ))}
              </FullscreenThumbRail>
            )}
          </FullscreenPanel>
        </FullscreenOverlay>
      )}
    </CustomImageSliderWrapper>
  );
};

const CustomImageSliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const EmptyState = styled.div`
  width: min(100%, 960px);
  padding: 24px;
  border-radius: 14px;
  text-align: center;
  background: #f3f5f8;
  color: #58606e;
  font-weight: 600;
`;

const SliderShell = styled.div<{ width: number }>`
  width: ${({ width }) => `${width}px`};
  max-width: 1200px;
  border-radius: 20px;
  background: #f9fbff;
  border: 1px solid #d7dfec;
  box-shadow: 0 8px 20px rgba(15, 29, 52, 0.1);
  padding: 12px;
  outline: none;

  &:focus-visible {
    box-shadow: 0 0 0 3px rgba(33, 117, 255, 0.35), 0 12px 28px rgba(15, 29, 52, 0.16);
  }
`;

const Viewport = styled.div<{ height: number }>`
  width: 100%;
  height: ${({ height }) => `${height}px`};
  border-radius: 15px;
  overflow: hidden;
  background: #1f252e;
  position: relative;
  user-select: none;
`;

const ProgressTrack = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 5px;
  background: rgba(255, 255, 255, 0.25);
  z-index: 3;
`;

const ProgressActive = styled.div<{ progress: number }>`
  width: ${({ progress }) => `${progress}%`};
  height: 100%;
  background: linear-gradient(90deg, #4a9bff 0%, #9fd0ff 100%);
  transition: width 0.25s ease;
`;

const Track = styled.div<{ index: number; transitionTime: number }>`
  width: 100%;
  height: 100%;
  display: flex;
  transform: translateX(${({ index }) => `-${index * 100}%`});
  transition: transform ${({ transitionTime }) => `${transitionTime}s`} cubic-bezier(0.22, 0.61, 0.36, 1);
`;

const Slide = styled.div`
  min-width: 100%;
  height: 100%;
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: zoom-in;
`;

const NavButton = styled.button<{ $left?: boolean }>`
  width: 44px;
  height: 44px;
  border-radius: 999px;
  border: 0;
  background: rgba(17, 24, 35, 0.54);
  color: white;
  cursor: pointer;
  position: absolute;
  top: 50%;
  ${({ $left }) => ($left ? "left: 12px;" : "right: 12px;")}
  transform: translateY(-50%);
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(17, 24, 35, 0.76);
  }
`;

const TopActions = styled.div`
  position: absolute;
  right: 12px;
  top: 12px;
  z-index: 4;
  display: flex;
  gap: 8px;
`;

const TopActionButton = styled.button`
  border: 0;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.9);
  color: #1f3252;
  padding: 6px 11px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  display: inline-flex;
  gap: 6px;
  align-items: center;

  &:hover {
    background: #ffffff;
  }
`;

const IndexBadge = styled.div`
  position: absolute;
  left: 12px;
  top: 12px;
  z-index: 4;
  border-radius: 999px;
  background: rgba(7, 12, 19, 0.62);
  color: white;
  font-size: 12px;
  font-weight: 700;
  padding: 5px 11px;
`;

const MetaPanel = styled.div`
  margin-top: 10px;
  background: white;
  border: 1px solid #d9e1ee;
  border-radius: 13px;
  padding: 12px 14px 11px;
`;

const MetaTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const MetaTitle = styled.div`
  color: #18263a;
  font-size: 18px;
  font-weight: 800;
`;

const LocationAnchor = styled.a`
  color: #2e78ff;
  font-size: 13px;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  text-decoration: none;
`;

const MetaSubtitle = styled.div`
  margin-top: 4px;
  color: #3d516b;
  font-size: 14px;
  font-weight: 600;
`;

const MetaDescription = styled.div`
  margin-top: 8px;
  color: #49576b;
  font-size: 14px;
  line-height: 1.36;
`;

const MetaHint = styled.div`
  margin-top: 8px;
  font-size: 12px;
  color: #6f7f95;
`;

const ThumbRail = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding-bottom: 2px;

  &::-webkit-scrollbar {
    height: 7px;
  }
  &::-webkit-scrollbar-thumb {
    background: #c2cfde;
    border-radius: 999px;
  }
`;

const ThumbButton = styled.button<{ $active: boolean }>`
  width: 74px;
  height: 52px;
  padding: 0;
  border: ${({ $active }) => ($active ? "2px solid #2779ff" : "1px solid #bdcadc")};
  border-radius: 10px;
  overflow: hidden;
  background: #f1f4f8;
  cursor: pointer;
  flex: 0 0 auto;
`;

const ThumbImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const FullscreenOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 40;
  background: rgba(9, 14, 22, 0.88);
  backdrop-filter: blur(2px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

const FullscreenPanel = styled.div`
  width: min(98vw, 1440px);
  max-height: 96vh;
  border-radius: 18px;
  background: #131a23;
  border: 1px solid rgba(255, 255, 255, 0.15);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const FullscreenHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  background: rgba(255, 255, 255, 0.06);
  color: #edf3ff;
`;

const FullscreenTitle = styled.div`
  font-size: 14px;
  font-weight: 700;
`;

const FullscreenButtons = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const FullscreenLink = styled.a`
  text-decoration: none;
  color: #9ec6ff;
  font-size: 13px;
  font-weight: 700;
  display: inline-flex;
  gap: 6px;
  align-items: center;
`;

const CloseButton = styled.button`
  border: 0;
  width: 34px;
  height: 34px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.14);
  color: #fff;
  cursor: pointer;
`;

const FullscreenViewport = styled.div`
  width: 100%;
  height: min(80vh, 960px);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FullscreenImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const FullscreenNavButton = styled.button<{ $left?: boolean }>`
  width: 52px;
  height: 52px;
  border-radius: 999px;
  border: 0;
  background: rgba(255, 255, 255, 0.17);
  color: white;
  cursor: pointer;
  position: absolute;
  top: 50%;
  ${({ $left }) => ($left ? "left: 16px;" : "right: 16px;")}
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FullscreenThumbRail = styled.div`
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding: 10px 12px 12px;
  background: rgba(255, 255, 255, 0.04);
`;

export default CustomImageSlider;
