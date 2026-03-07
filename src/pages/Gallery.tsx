import { faPause, faPlay, faSliders } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import CustomCheckbox from "../customs/CustomCheckbox";
import CustomImageSlider, { ImageInfoPairsType } from "../customs/CustomImageSlider";
import {
  BELGIUM_images,
  FRANCE_images,
  GREECE_images,
  ITALY_images,
  NETHERLANDS_images,
  SWISS_images,
  TURKIYE_images,
} from "../DATA/Gallery_URL";
import { selectCore } from "../store/slices/core";

export enum CATEGORY {
  NONE = 0,
  FRANCE = 1,
  BELGIUM = 2,
  NETHERLANDS = 3,
  SWISS = 4,
  TURKIYE = 5,
  GREECE = 6,
  ITALY = 7,
}

type CategoryItem = {
  key: string;
  value: CATEGORY;
  label: string;
  emoji: string;
  images: ImageInfoPairsType[];
};

const GALLERY_CATEGORIES: CategoryItem[] = [
  { key: "france", value: CATEGORY.FRANCE, label: "Paris, Colmar, Strasbourg", emoji: "🇫🇷", images: FRANCE_images },
  { key: "belgium", value: CATEGORY.BELGIUM, label: "Brussels, Antwerpen", emoji: "🇧🇪", images: BELGIUM_images },
  { key: "netherlands", value: CATEGORY.NETHERLANDS, label: "Amsterdam", emoji: "🇳🇱", images: NETHERLANDS_images },
  { key: "swiss", value: CATEGORY.SWISS, label: "Bern, Interlaken, Jungfrau", emoji: "🇨🇭", images: SWISS_images },
  { key: "turkiye", value: CATEGORY.TURKIYE, label: "Istanbul, Cappadocia", emoji: "🇹🇷", images: TURKIYE_images },
  { key: "greece", value: CATEGORY.GREECE, label: "Santorini, Athens", emoji: "🇬🇷", images: GREECE_images },
  { key: "italy", value: CATEGORY.ITALY, label: "Rome, Vatican, Venice", emoji: "🇮🇹", images: ITALY_images },
];

const SPEED_OPTIONS = [
  { label: "3 sec", value: 3000 },
  { label: "5 sec", value: 5000 },
  { label: "8 sec", value: 8000 },
];

const parseCategoryFromParams = (searchParams: URLSearchParams): CATEGORY => {
  const queryCategory = searchParams.get("category");
  if (!queryCategory) return CATEGORY.NONE;

  const matchedCategory = GALLERY_CATEGORIES.find((item) => item.key === queryCategory);
  return matchedCategory?.value ?? CATEGORY.NONE;
};

interface IPropsGallery {
  isMobile: boolean;
}

function Gallery({ isMobile }: IPropsGallery) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState<CATEGORY>(() => parseCategoryFromParams(searchParams));
  const [periodicChange, setPeriodicChange] = useState(false);
  const [playbackMs, setPlaybackMs] = useState(5000);
  const { windowSize } = useSelector(selectCore);

  useEffect(() => {
    const categoryFromUrl = parseCategoryFromParams(searchParams);
    setCategory((prev) => (prev === categoryFromUrl ? prev : categoryFromUrl));
  }, [searchParams]);

  useEffect(() => {
    const nextSearchParams = new URLSearchParams(searchParams);
    const matchedCategory = GALLERY_CATEGORIES.find((item) => item.value === category);

    if (matchedCategory) {
      nextSearchParams.set("category", matchedCategory.key);
    } else {
      nextSearchParams.delete("category");
    }

    if (nextSearchParams.toString() !== searchParams.toString()) {
      setSearchParams(nextSearchParams, { replace: true });
    }
  }, [category, searchParams, setSearchParams]);

  const selectedCategory = useMemo(
    () => GALLERY_CATEGORIES.find((item) => item.value === category),
    [category]
  );
  const selectedImages = selectedCategory?.images;
  const [galleryWidth, galleryHeight] = [windowSize[0], (windowSize[1] * 560) / 1200];
  const compactLayout = isMobile || windowSize[0] < 860;
  const autoPlayEnabled = periodicChange && Boolean(selectedImages);

  return (
    <GalleryPage>
      <HeroCard>
        <HeroTitle>Travel Gallery</HeroTitle>
        <HeroDescription>
          Pick a trip category and browse with keyboard, swipe, thumbnails, and fullscreen mode.
        </HeroDescription>
      </HeroCard>

      <CategoryGrid>
        {GALLERY_CATEGORIES.map((item) => (
          <CategoryCard
            key={item.key}
            type="button"
            onClick={() => setCategory(item.value)}
            $active={item.value === category}
            aria-pressed={item.value === category}
          >
            <CategoryEmoji>{item.emoji}</CategoryEmoji>
            <CategoryTitle>{item.label}</CategoryTitle>
            <CategoryCount>{item.images.length} photos</CategoryCount>
          </CategoryCard>
        ))}
      </CategoryGrid>

      <StatusBar>
        {selectedCategory ? (
          <StatusText>
            {selectedCategory.emoji} {selectedCategory.label} selected • {selectedCategory.images.length} photos
            {autoPlayEnabled ? ` • Auto ${playbackMs / 1000}s` : ""}
          </StatusText>
        ) : (
          <StatusText>Select any category to begin.</StatusText>
        )}
      </StatusBar>

      <GalleryStage>
        {selectedImages ? (
          <ViewerSection>
            <CustomImageSlider
              _width={galleryWidth}
              _height={galleryHeight}
              images={selectedImages}
              showBullets={true}
              showNavs={true}
              slideShow={{ periodicChange: periodicChange ? playbackMs : 99999, transTime: 0.42 }}
            />
            <ViewerToolbar $compact={compactLayout}>
              <ToolbarTitle>
                <FontAwesomeIcon icon={faSliders} />
                Playback
              </ToolbarTitle>
              <ToolbarControls>
                <ToggleLabel>
                  <CustomCheckbox checked={periodicChange} onClickListener={() => setPeriodicChange((prev) => !prev)} />
                  <span>{periodicChange ? "Auto-play on" : "Auto-play off"}</span>
                  <FontAwesomeIcon icon={periodicChange ? faPlay : faPause} />
                </ToggleLabel>

                <SpeedChipGroup>
                  {SPEED_OPTIONS.map((speedOption) => (
                    <SpeedChip
                      key={speedOption.value}
                      type="button"
                      onClick={() => setPlaybackMs(speedOption.value)}
                      $active={playbackMs === speedOption.value}
                      disabled={!periodicChange}
                    >
                      {speedOption.label}
                    </SpeedChip>
                  ))}
                </SpeedChipGroup>
              </ToolbarControls>
            </ViewerToolbar>
          </ViewerSection>
        ) : (
          <EmptyPanel>
            <h3>Choose a category</h3>
            <p>Use the category cards above to open photos.</p>
          </EmptyPanel>
        )}
      </GalleryStage>
    </GalleryPage>
  );
}

const GalleryPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding-bottom: 8px;
`;

const HeroCard = styled.div`
  border-radius: 20px;
  background: linear-gradient(145deg, #fdfefe 0%, #f3f6fb 100%);
  border: 1px solid #dfe6ef;
  box-shadow: 0 6px 16px rgba(15, 30, 57, 0.08);
  padding: 22px 24px;
`;

const HeroTitle = styled.h2`
  font-size: 30px;
  font-weight: 800;
  color: #12355f;
  letter-spacing: 0.2px;
`;

const HeroDescription = styled.p`
  margin-top: 8px;
  font-size: 15px;
  color: #445f82;
  line-height: 1.45;
`;

const ToggleLabel = styled.div`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  color: #1f2e41;
  font-weight: 600;
  font-size: 13px;
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  gap: 11px;
`;

const CategoryCard = styled.button<{ $active: boolean }>`
  border-radius: 16px;
  border: ${({ $active }) => ($active ? "2px solid #1f74ff" : "1px solid #d8e0ec")};
  background: ${({ $active }) => ($active ? "linear-gradient(160deg, #edf4ff 0%, #ffffff 100%)" : "#ffffff")};
  padding: 12px 13px;
  text-align: left;
  cursor: pointer;
  box-shadow: ${({ $active }) =>
    $active ? "0 8px 18px rgba(25, 92, 198, 0.14)" : "0 3px 10px rgba(15, 30, 57, 0.06)"};
  transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    border-color: #7ba9f9;
    transform: translateY(-2px);
    box-shadow: 0 10px 22px rgba(16, 42, 83, 0.1);
  }
`;

const CategoryEmoji = styled.div`
  font-size: 19px;
`;

const CategoryTitle = styled.div`
  margin-top: 6px;
  color: #1a2e48;
  font-size: 13px;
  font-weight: 700;
  line-height: 1.32;
`;

const CategoryCount = styled.div`
  margin-top: 5px;
  color: #5a6f87;
  font-size: 12px;
`;

const StatusBar = styled.div`
  background: #f7faff;
  border: 1px solid #d9e4f2;
  border-radius: 12px;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.6);
  padding: 10px 13px;
`;

const StatusText = styled.span`
  color: #305174;
  font-size: 13px;
  font-weight: 600;
`;

const GalleryStage = styled.div`
  width: 100%;
  min-height: 580px;
  display: flex;
  justify-content: center;
`;

const ViewerSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
`;

const ViewerToolbar = styled.div<{ $compact: boolean }>`
  width: min(100%, 1200px);
  border: 1px solid #d8e2ef;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 3px 9px rgba(15, 29, 52, 0.06);
  padding: 8px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  flex-direction: ${({ $compact }) => ($compact ? "column" : "row")};
  align-items: ${({ $compact }) => ($compact ? "flex-start" : "center")};
`;

const ToolbarTitle = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #355577;
  font-size: 12px;
  font-weight: 700;
`;

const ToolbarControls = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;

const SpeedChipGroup = styled.div`
  display: inline-flex;
  gap: 6px;
`;

const SpeedChip = styled.button<{ $active: boolean }>`
  border: 1px solid ${({ $active }) => ($active ? "#2f7fff" : "#c8d4e6")};
  border-radius: 999px;
  background: ${({ $active }) => ($active ? "#e9f2ff" : "#f8fbff")};
  color: ${({ $active }) => ($active ? "#1f5fcc" : "#385676")};
  font-size: 12px;
  font-weight: 700;
  padding: 5px 10px;
  cursor: pointer;

  &:disabled {
    opacity: 0.45;
    cursor: default;
  }
`;

const EmptyPanel = styled.div`
  width: min(100%, 900px);
  border: 1px dashed #c7d4e4;
  border-radius: 16px;
  padding: 30px;
  background: #fafcff;
  color: #50647d;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 8px;
`;

export default Gallery;
