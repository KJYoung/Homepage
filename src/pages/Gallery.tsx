import { faPause, faPlay, faSliders } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import CustomCheckbox from "../customs/CustomCheckbox";
import CustomImageSlider, { ImageInfoPairsType } from "../customs/CustomImageSlider";
import {
  AUSTRIA_images,
  BELGIUM_images,
  CZECH_images,
  FRANCE_images,
  GREECE_images,
  HUNGARY_images,
  ITALY_images,
  JAPAN_images,
  NETHERLANDS_images,
  SPAIN_images,
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
  JAPAN = 8,
  AUSTRIA = 9,
  HUNGARY = 10,
  CZECH = 11,
  SPAIN = 12,
}

type CategoryItem = {
  key: string;
  value: CATEGORY;
  label: string;
  emoji: string;
  defaultMapQuery: string;
  images: ImageInfoPairsType[];
};

const GALLERY_CATEGORIES: CategoryItem[] = [
  {
    key: "france",
    value: CATEGORY.FRANCE,
    label: "Paris, Colmar, Strasbourg",
    emoji: "🇫🇷",
    defaultMapQuery: "Paris France",
    images: FRANCE_images,
  },
  {
    key: "belgium",
    value: CATEGORY.BELGIUM,
    label: "Brussels, Antwerpen",
    emoji: "🇧🇪",
    defaultMapQuery: "Brussels Belgium",
    images: BELGIUM_images,
  },
  {
    key: "netherlands",
    value: CATEGORY.NETHERLANDS,
    label: "Amsterdam",
    emoji: "🇳🇱",
    defaultMapQuery: "Amsterdam Netherlands",
    images: NETHERLANDS_images,
  },
  {
    key: "swiss",
    value: CATEGORY.SWISS,
    label: "Bern, Interlaken, Jungfrau",
    emoji: "🇨🇭",
    defaultMapQuery: "Interlaken Switzerland",
    images: SWISS_images,
  },
  {
    key: "turkiye",
    value: CATEGORY.TURKIYE,
    label: "Istanbul, Cappadocia",
    emoji: "🇹🇷",
    defaultMapQuery: "Istanbul Turkiye",
    images: TURKIYE_images,
  },
  {
    key: "greece",
    value: CATEGORY.GREECE,
    label: "Santorini, Athens",
    emoji: "🇬🇷",
    defaultMapQuery: "Athens Greece",
    images: GREECE_images,
  },
  {
    key: "italy",
    value: CATEGORY.ITALY,
    label: "Rome, Vatican, Venice",
    emoji: "🇮🇹",
    defaultMapQuery: "Rome Italy",
    images: ITALY_images,
  },
  {
    key: "japan",
    value: CATEGORY.JAPAN,
    label: "Fukuoka, Tokyo, Kyoto",
    emoji: "🇯🇵",
    defaultMapQuery: "Tokyo Japan",
    images: JAPAN_images,
  },
  {
    key: "austria",
    value: CATEGORY.AUSTRIA,
    label: "Vienna",
    emoji: "🇦🇹",
    defaultMapQuery: "Vienna Austria",
    images: AUSTRIA_images,
  },
  {
    key: "hungary",
    value: CATEGORY.HUNGARY,
    label: "Budapest",
    emoji: "🇭🇺",
    defaultMapQuery: "Budapest Hungary",
    images: HUNGARY_images,
  },
  {
    key: "czech",
    value: CATEGORY.CZECH,
    label: "Prague",
    emoji: "🇨🇿",
    defaultMapQuery: "Prague Czech Republic",
    images: CZECH_images,
  },
  {
    key: "spain",
    value: CATEGORY.SPAIN,
    label: "Barcelona",
    emoji: "🇪🇸",
    defaultMapQuery: "Barcelona Spain",
    images: SPAIN_images,
  },
];

const CONFERENCE_TRAVELS = [
  "ICRA 2024 - 🇯🇵 Yokohama",
  "IROS 2024 - 🇦🇪 Abu Dhabi",
  "CoRL 2025 - 🇰🇷 Seoul",
  "ICRA 2026 - 🇦🇹 Vienna",
];

const SPEED_OPTIONS = [
  { label: "3 sec", value: 3000 },
  { label: "5 sec", value: 5000 },
  { label: "8 sec", value: 8000 },
];

const createMapsSearchUrl = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

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
  const selectedImages = useMemo(() => {
    if (!selectedCategory || selectedCategory.images.length === 0) return undefined;
    const fallbackLocation = createMapsSearchUrl(selectedCategory.defaultMapQuery);
    return selectedCategory.images.map((image) => (image.location ? image : { ...image, location: fallbackLocation }));
  }, [selectedCategory]);
  const [galleryWidth, galleryHeight] = [windowSize[0], (windowSize[1] * 560) / 1200];
  const compactLayout = isMobile || windowSize[0] < 860;
  const autoPlayEnabled = periodicChange && Boolean(selectedImages);

  return (
    <GalleryPage>
      <TravelSummaryCard>
        <TravelSummaryEyebrow>Conferences</TravelSummaryEyebrow>
        <TravelSummaryTitle>International Conferences Attended</TravelSummaryTitle>
        <TravelSummaryList>
          {CONFERENCE_TRAVELS.map((item) => (
            <TravelSummaryItem key={item}>{item}</TravelSummaryItem>
          ))}
        </TravelSummaryList>
      </TravelSummaryCard>

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
          <StatusText>Select any category to begin. Newly added categories will appear here once photos are added.</StatusText>
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

const TravelSummaryCard = styled.div`
  border-radius: 18px;
  background: var(--color-surface-subtle);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-subtle);
  padding: 18px 22px;
`;

const TravelSummaryEyebrow = styled.div`
  color: var(--color-text-faint);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 6px;
`;

const TravelSummaryTitle = styled.h2`
  color: var(--color-text-strong);
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const TravelSummaryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const TravelSummaryItem = styled.div`
  display: inline-flex;
  align-items: center;
  min-height: 34px;
  padding: 0 12px;
  border-radius: 999px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  color: var(--color-text-muted);
  font-size: 13px;
  font-weight: 600;
  box-shadow: var(--shadow-subtle);
`;

const HeroCard = styled.div`
  border-radius: 20px;
  background: linear-gradient(145deg, var(--color-surface) 0%, var(--color-surface-subtle) 100%);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-subtle);
  padding: 22px 24px;
`;

const HeroTitle = styled.h2`
  font-size: 30px;
  font-weight: 800;
  color: var(--color-text-strong);
  letter-spacing: 0.2px;
`;

const HeroDescription = styled.p`
  margin-top: 8px;
  font-size: 15px;
  color: var(--color-text-muted);
  line-height: 1.45;
`;

const ToggleLabel = styled.div`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  color: var(--color-text);
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
  border: ${({ $active }) => ($active ? "2px solid var(--umich-navy)" : "1px solid var(--color-border)")};
  background: ${({ $active }) => ($active ? "linear-gradient(160deg, var(--umich-maize-wash) 0%, var(--color-surface) 100%)" : "var(--color-surface)")};
  padding: 12px 13px;
  text-align: left;
  cursor: pointer;
  box-shadow: ${({ $active }) =>
    $active ? "var(--shadow-card)" : "var(--shadow-subtle)"};
  transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    border-color: var(--umich-maize-deep);
    transform: translateY(-2px);
    box-shadow: var(--shadow-card);
  }
`;

const CategoryEmoji = styled.div`
  font-size: 19px;
`;

const CategoryTitle = styled.div`
  margin-top: 6px;
  color: var(--color-text-strong);
  font-size: 13px;
  font-weight: 700;
  line-height: 1.32;
`;

const CategoryCount = styled.div`
  margin-top: 5px;
  color: var(--color-text-muted);
  font-size: 12px;
`;

const StatusBar = styled.div`
  background: var(--color-surface-subtle);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  box-shadow: var(--highlight-inset-soft);
  padding: 10px 13px;
`;

const StatusText = styled.span`
  color: var(--color-text-muted);
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
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  border-radius: 12px;
  box-shadow: var(--shadow-subtle);
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
  color: var(--color-text-muted);
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
  border: 1px solid ${({ $active }) => ($active ? "var(--umich-navy)" : "var(--color-border-strong)")};
  border-radius: 999px;
  background: ${({ $active }) => ($active ? "var(--umich-maize-wash)" : "var(--color-surface-subtle)")};
  color: ${({ $active }) => ($active ? "var(--umich-navy)" : "var(--color-text-muted)")};
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
  border: 1px dashed var(--color-border-strong);
  border-radius: 16px;
  padding: 30px;
  background: var(--color-surface-subtle);
  color: var(--color-text-muted);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 8px;
`;

export default Gallery;
