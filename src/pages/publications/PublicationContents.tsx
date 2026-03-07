import styled, { css } from "styled-components";
import { NavigateFunction } from "react-router-dom";
import { useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand } from "@fortawesome/free-solid-svg-icons";
import { BasicDIV } from "../../customs/Basics";
import CustomImageModal from "../../customs/CustomImageModal";
import {
  PUB1_FIG_URL,
  PUB2_FIG_URL,
  PUB2_POSTER_URL,
  PUB2_SLIDES_URL,
  PUB3_POSTER_URL,
  PUB3_REPRESENTATIVE_PIC_V2_URL,
  PUB3_SLIDES_URL,
  PUB4_REPRESENTATIVE_PIC_URL,
  PUB4_FRAMEWORK_URL,
} from "../../DATA/Public_URL";

type TPublicationAuthor = {
  name: string;
  withStar?: boolean;
  url?: string;
  isMe?: boolean;
  isLast?: boolean;
};

type TPublicationContent = {
  id: number;
  title: string;
  author: TPublicationAuthor[];
  status: string;
  status_additional?: string;
  description: string;
  imgURL: string;
  imgModalURL?: string;
  hpURL?: string;
  slideURL?: string;
  posterURL?: string;
  url: string;
  abstract: string;
  frameworkDescription?: string;
  mainResultDescription?: string;
  supResultDescription?: string;
  BibTeX?: string;
  publicationType: (string | string[])[];
};

type TPublicationContents = {
  contents: TPublicationContent[];
};

type TPublicContent = {
  publication: TPublicationContents;
};

export type PublicationViewMode = "full" | "compact";

export const JunyoungKim: TPublicationAuthor = {
  name: "Junyoung Kim",
  url: "https://kjyoung.github.io/Homepage/",
  isMe: true,
};

export const JunyoungKimStar = {
  ...JunyoungKim,
  withStar: true,
};

export const JunwonSeo: TPublicationAuthor = {
  name: "Junwon Seo",
  url: "https://junwon.me/",
};

export const MinsikJeon: TPublicationAuthor = {
  name: "Minsik Jeon",
  url: "https://msjeon.me/",
};

export const JunwonSeoStar: TPublicationAuthor = {
  ...JunwonSeo,
  withStar: true,
};

export const JihongMin: TPublicationAuthor = {
  name: "Jihong Min",
};

export const KihoKwak: TPublicationAuthor = {
  name: "Kiho Kwak",
};

export const SunamCho: TPublicationAuthor = {
  name: "Sunam Cho",
};

export const UndergradReviewPaperObj: TPublicationContent = {
  id: 1,
  title: "Analysis of Factors Causing Differences in the Human Hazards of Permetrin",
  author: [JunyoungKim, { ...SunamCho, isLast: true }],
  status: "JEAHT, 2020",
  description:
    "We analyzed research papers on the toxicity of permethrin insecticide to point out cautions when utilizing the results of existing toxicity analysis studies.",
  imgURL: PUB1_FIG_URL,
  url: "https://www.jeaht.org/upload/pdf/jeaht-23-4-171.pdf",
  abstract: "",
  publicationType: ["Domestic Journal"],
};

export const EvSemMapObj: TPublicationContent = {
  id: 2,
  title: "Evidential Semantic Mapping in Off-road Environments with Uncertainty-aware Bayesian Kernel Inference",
  author: [JunyoungKimStar, JunwonSeoStar, { ...JihongMin, isLast: true }],
  status: "IROS, 2024",
  status_additional: "Best Cognitive Papers Finalist",
  description:
    "Uncertainty-aware semantic BKI mapping framework for robust deployments in off-road environments using Evidential Deep Learning.",
  imgURL: PUB2_FIG_URL,
  slideURL: PUB2_SLIDES_URL,
  posterURL: PUB2_POSTER_URL,
  hpURL: "/Projects/Evidential-Semantic-Mapping",
  url: "https://arxiv.org/abs/2403.14138",
  abstract:
    "Robotic mapping with Bayesian Kernel Inference (BKI) has shown promise in creating semantic maps by effectively leveraging local spatial information. However, existing semantic mapping methods face challenges in constructing reliable maps in unstructured outdoor scenarios due to unreliable semantic predictions. To address this issue, we propose an evidential semantic mapping, which can enhance reliability in perceptually challenging off-road environments. We integrate Evidential Deep Learning into the semantic segmentation network to obtain the uncertainty estimate of semantic prediction. Subsequently, this semantic uncertainty is incorporated into an uncertainty-aware BKI, tailored to prioritize more confident semantic predictions when accumulating semantic information. By adaptively handling semantic uncertainties, the proposed framework constructs robust representations of the surroundings even in previously unseen environments. Comprehensive experiments across various off-road datasets demonstrate that our framework enhances accuracy and robustness, consistently outperforming existing methods in scenes with high perceptual uncertainties.",
  frameworkDescription:
    "Overview pipeline of our uncertainty-aware semantic BKI framework. With an evidential segmentation network trained by EDL, input data is processed to derive continuous semantic probability and uncertainty. These 3D semantic points are then integrated into the semantic map through Bayesian updates using the uncertainty-aware BKI, resulting in a dependable semantic map and variance map in uncertain off-road environments.",
  mainResultDescription:
    "Qualitative results of 3D semantic mapping methods. Compared to others, our method generates reliable and accurate maps that preserve semantic details while excluding noisy predictions. In RELLIS-3D, only our method reconstructs grass consistently (First row), and dirt roads and puddles in detail (Second row). In our OffRoad dataset, our method accurately reconstructs the boundaries of unpaved roads, grass, and vegetation, compared to others.",
  supResultDescription:
    "Zero-shot semantic mapping results on our OffRoad dataset using a semantic segmentation network pre-trained on RUGD. Our method robustly constructs semantic maps despite prediction uncertainties in unseen environments, whereas other methods struggle to produce clear maps.",
  BibTeX: `@inproceedings{kim2024evidential,
        author={Kim, Junyoung and Seo, Junwon and Min, Jihong},
        booktitle={2024 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)}, 
        title={Evidential Semantic Mapping in Off-road Environments with Uncertainty-aware Bayesian Kernel Inference}, 
        year={2024},
        pages={1420-1427},
        doi={10.1109/IROS58592.2024.10802766}
}`,
  publicationType: ["Conference", "Best Cognitive Robotics Papers Finalist"],
};

export const DSTEvSemMapObj: TPublicationContent = {
  id: 3,
  title: "Uncertainty-aware Semantic Mapping in Off-road Environments with Dempster-Shafer Theory of Evidence",
  author: [JunyoungKim, { ...JunwonSeo, isLast: true }],
  status: "ICRA Workshop, 2024",
  status_additional: "Spotlight Talk",
  description: "Fully Evidential Semantic Mapping framework for inherent integration of semantic uncertainty.",
  imgURL: PUB3_REPRESENTATIVE_PIC_V2_URL,
  hpURL: "/Projects/Fully-Evidential-Semantic-Mapping",
  slideURL: PUB3_SLIDES_URL,
  posterURL: PUB3_POSTER_URL,
  url: "https://arxiv.org/abs/2405.06265",
  abstract:
    "Semantic mapping with Bayesian Kernel Inference (BKI) has shown promise in providing a richer understanding of environments by effectively leveraging local spatial information. However, existing methods face challenges in constructing accurate semantic maps or reliable uncertainty maps in perceptually challenging environments due to unreliable semantic predictions. To address this issue, we propose an evidential semantic mapping framework, which integrates the evidential reasoning of Dempster-Shafer Theory of Evidence (DST) into the entire mapping pipeline by adopting Evidential Deep Learning (EDL) and Dempster's rule of combination. Additionally, the extended belief is devised to incorporate local spatial information based on their uncertainty during the mapping process. Comprehensive experiments across various off-road datasets demonstrate that our framework enhances the reliability of uncertainty maps, consistently outperforming existing methods in scenes with high perceptual uncertainties while showing semantic accuracy comparable to the best-performing semantic mapping techniques.",
  frameworkDescription:
    "Overview pipeline of our uncertainty-aware semantic BKI framework. With an evidential segmentation network trained by EDL, input data is processed to derive continuous semantic probability and uncertainty. 3D evidential points are then integrated into the semantic map through extended Dempster's Combination Rule to enable continuous semantic mapping, resulting in a dependable semantic map and uncertainty map in uncertain off-road environments.",
  mainResultDescription:
    "Qualitative results (Semantic Map) of 3D semantic mapping methods. Compared to others, our methods (EBS and Ours) generate accurate maps that preserve semantic details while excluding noisy predictions.",
  supResultDescription:
    "Qualitative results (Uncertainty Map) of 3D semantic mapping methods. Compared to others, our method generates the most well-estimated uncertainty values.",
  BibTeX: `@inproceedings{kim2024uncertaintyaware,
        title={Uncertainty-aware Semantic Mapping in Off-road Environments with Dempster-Shafer Theory of Evidence},
        author={Junyoung Kim and Junwon Seo},
        booktitle={ICRA 2024 Workshop on Resilient Off-road Autonomy},
        year={2024},
        url={https://openreview.net/forum?id=FApp8pBo3J}
}`,
  publicationType: ["Workshop", ["Spotlight Talk 4/22 (18%)", "Spot"]],
};

export const GaussianMapObj: TPublicationContent = {
  id: 4,
  title: "E2-BKI: Evidential Ellipsoidal Bayesian Kernel Inference for Uncertainty-aware Gaussian Semantic Mapping",
  author: [JunyoungKim, MinsikJeon, JihongMin, KihoKwak, { ...JunwonSeo, isLast: true }],
  status: "RA-L, 2026",
  description:
    "Evidential fusion of anisotropic Gaussians with an uncertainty-aware (ellipsoidal) BKI, yielding continuous, geometry-aligned and calibrated 3D semantic maps.",
  imgURL: PUB4_REPRESENTATIVE_PIC_URL,
  imgModalURL: PUB4_FRAMEWORK_URL,
  hpURL: "/Projects/E2-BKI",
  slideURL: "",
  posterURL: "",
  url: "",
  abstract:
    "Semantic mapping aims to construct a 3D semantic representation of the environment, providing essential knowledge for robots operating in complex outdoor settings. While Bayesian Kernel Inference (BKI) addresses discontinuities of map inference from sparse sensor data, existing semantic mapping methods suffer from various sources of uncertainties in challenging outdoor environments. To address these issues, we propose an uncertainty-aware semantic mapping framework that handles multiple sources of uncertainties, which significantly degrade mapping performance. Our method estimates uncertainties in semantic predictions using Evidential Deep Learning and incorporates them into BKI for robust semantic inference. It further aggregates noisy observations into coherent Gaussian representations to mitigate the impact of unreliable points, while employing geometry-aligned kernels that adapt to complex scene structures. These Gaussian primitives effectively fuse local geometric and semantic information, enabling robust, uncertainty-aware mapping in complex outdoor scenarios. Comprehensive evaluation across diverse off-road and urban outdoor environments demonstrates consistent improvements in mapping quality, uncertainty calibration, representational flexibility, and robustness, while maintaining real-time efficiency.",
  frameworkDescription:
    "**Overview of semantic mapping with E2-BKI.** Given evidential points with semantic probability and uncertainty, our method operates via three key stages: (1) **Gaussian Initialization** aggregates points into anisotropic Gaussian primitives encoding local information; (2) **Gaussian Refinement** merges spatially coherent primitives and prunes unreliable primitives; and (3) **Evidential Ellipsoidal BKI** performs uncertainty-aware semantic mapping using Gaussian primitives.",
  mainResultDescription: "",
  supResultDescription: "",
  BibTeX: `@article{kim2025e2bki,
      title={E2-BKI: Evidential Ellipsoidal Bayesian Kernel Inference for Uncertainty-aware Gaussian Semantic Mapping}, 
      author={Junyoung Kim and Minsik Jeon and Jihong Min and Kiho Kwak and Junwon Seo},
      year={2025},
      eprint={2509.11964},
      archivePrefix={arXiv},
      primaryClass={cs.RO},
      url={https://arxiv.org/abs/2509.11964}, 
}`,
  publicationType: ["Journal"],
};

export const PublicContent: TPublicContent = {
  publication: {
    contents: [GaussianMapObj, DSTEvSemMapObj, EvSemMapObj, UndergradReviewPaperObj],
  },
};

const getYearFromStatus = (status: string) => {
  const matchedYear = status.match(/(19|20)\d{2}/);
  return matchedYear ? Number(matchedYear[0]) : null;
};

const normalizeLink = (url?: string) => {
  if (!url) return undefined;
  const trimmed = url.trim();
  return trimmed.length > 0 ? trimmed : undefined;
};

const getTypeLabel = (type: string | string[]) => (Array.isArray(type) ? type[0] : type);

const getPrimaryType = (content: TPublicationContent) => {
  const firstType = content.publicationType[0];
  return firstType ? getTypeLabel(firstType) : "Other";
};

interface IPublicationDiv {
  publicationContent: TPublicationContent;
  setImage: (modalSrc: string, title: string, subtitle: string) => void;
  navigate: NavigateFunction;
  isDetail: boolean;
  viewMode: PublicationViewMode;
}

export const PublicationDiv = ({ publicationContent, setImage, navigate, isDetail, viewMode }: IPublicationDiv) => {
  const isCompact = viewMode === "compact";
  const imgModalURL = publicationContent.imgModalURL ?? publicationContent.imgURL;
  const paperUrl = normalizeLink(publicationContent.url);
  const hpUrl = normalizeLink(publicationContent.hpURL);
  const slideUrl = normalizeLink(publicationContent.slideURL);
  const posterUrl = normalizeLink(publicationContent.posterURL);

  const actions = [
    hpUrl ? { label: "Project", onClick: () => navigate(hpUrl), accent: true } : null,
    paperUrl ? { label: "Paper", onClick: () => window.open(paperUrl, "_blank", "noopener,noreferrer") } : null,
    slideUrl ? { label: "Slides", onClick: () => window.open(slideUrl, "_blank", "noopener,noreferrer") } : null,
    posterUrl ? { label: "Poster", onClick: () => window.open(posterUrl, "_blank", "noopener,noreferrer") } : null,
  ].filter(Boolean) as { label: string; onClick: () => void; accent?: boolean }[];

  return (
    <PublicationCard $compact={isCompact} $interactive={Boolean(hpUrl)}>
      <PreviewFrame
        type="button"
        onClick={() => setImage(imgModalURL, publicationContent.title, publicationContent.description)}
        aria-label={`Open image for ${publicationContent.title}`}
        $compact={isCompact}
      >
        <PreviewImage src={publicationContent.imgURL} alt={publicationContent.title} loading="lazy" />
        {!isCompact && (
          <PreviewHint aria-label="Expand figure">
            <FontAwesomeIcon icon={faExpand} />
          </PreviewHint>
        )}
      </PreviewFrame>

      <CardBody>
        <CardHeader>
          <TitleBlock>
            <CardTitle
              className={hpUrl ? "clickable" : ""}
              onClick={() => {
                if (hpUrl) navigate(hpUrl);
              }}
            >
              {publicationContent.title}
            </CardTitle>
            <AuthorsLine>
              {publicationContent.author.map((author, index) => {
                const suffix = author.withStar ? "*" : "";
                const showComma = !(author.isLast || index === publicationContent.author.length - 1);
                return (
                  <AuthorToken key={`${publicationContent.id}-${author.name}-${index}`} $isme={Boolean(author.isMe)}>
                    {author.url ? (
                      <a href={author.url} target="_blank" rel="noreferrer">
                        {author.name}
                      </a>
                    ) : (
                      <span>{author.name}</span>
                    )}
                    <span>{suffix}</span>
                    {showComma && <span>,</span>}
                  </AuthorToken>
                );
              })}
            </AuthorsLine>
          </TitleBlock>

          <StatusBlock>
            <StatusPill>{publicationContent.status}</StatusPill>
            {publicationContent.status_additional && <StatusHighlight>{publicationContent.status_additional}</StatusHighlight>}
          </StatusBlock>
        </CardHeader>

        {isDetail && !isCompact && (
          <TypeChipRail>
            {publicationContent.publicationType.map((type, idx) => (
              <TypeChip key={`${publicationContent.id}-${idx}`} $primary={idx === 0}>
                {getTypeLabel(type)}
              </TypeChip>
            ))}
          </TypeChipRail>
        )}

        <CardDescription $compact={isCompact}>{publicationContent.description}</CardDescription>

        {actions.length > 0 && (
          <ActionRail>
            {actions.map((action) => (
              <ActionButton
                key={`${publicationContent.id}-${action.label}`}
                type="button"
                onClick={action.onClick}
                $accent={Boolean(action.accent)}
                $compact={isCompact}
              >
                {action.label}
              </ActionButton>
            ))}
          </ActionRail>
        )}
      </CardBody>
    </PublicationCard>
  );
};

export const PublicationWrapperDiv = ({
  navigate,
  isDetail,
  viewMode = "full",
}: {
  navigate: NavigateFunction;
  isDetail: boolean;
  viewMode?: PublicationViewMode;
}) => {
  const isCompactMode = viewMode === "compact";
  const [modalOpen, setModalOpen] = useState(false);
  const [imgModalSrc, setImgModalSrc] = useState<string>();
  const [imgTitle, setImgTitle] = useState<string>();
  const [imgSubtitle, setImgSubtitle] = useState<string>();
  const [activePrimaryType, setActivePrimaryType] = useState("All");

  const publicationList = PublicContent.publication.contents;

  const stats = useMemo(() => {
    const years = publicationList
      .map((item) => getYearFromStatus(item.status))
      .filter((item): item is number => item !== null);

    const latestYear = years.length > 0 ? Math.max(...years) : null;
    return {
      total: publicationList.length,
      recent: publicationList.filter((item) => item.status_additional).length,
      latestYear,
    };
  }, [publicationList]);

  const setModalImage = (modalSrc: string, title: string, subtitle: string) => {
    setImgModalSrc(modalSrc);
    setImgTitle(title);
    setImgSubtitle(subtitle);
    setModalOpen(true);
  };

  const primaryTypeFilters = useMemo(
    () => ["All", ...Array.from(new Set(publicationList.map((content) => getPrimaryType(content))))],
    [publicationList]
  );

  const visiblePublications = useMemo(() => {
    if (isCompactMode) return publicationList.slice(0, 3);
    if (activePrimaryType === "All") return publicationList;
    return publicationList.filter((content) => getPrimaryType(content) === activePrimaryType);
  }, [activePrimaryType, isCompactMode, publicationList]);

  return (
    <SectionRoot $compact={isCompactMode}>
      {isCompactMode ? (
        <CompactHeader>
          <CompactTitle>Selected Publications</CompactTitle>
          <CompactLink type="button" onClick={() => navigate("/Projects/")}>
            View all
          </CompactLink>
        </CompactHeader>
      ) : (
        <SectionHero>
          <HeroTextGroup>
            <HeroEyebrow>Research Archive</HeroEyebrow>
            <HeroTitle className="clickable" onClick={() => navigate("/Projects/")}>
              Publications
            </HeroTitle>
            <HeroDescription>
              {/* A curated timeline of papers spanning uncertainty-aware semantic mapping, evidential learning, and robust outdoor perception. */}
            </HeroDescription>
            <HeroNote>* Equal contributions are denoted by *</HeroNote>
          </HeroTextGroup>

          <HeroStats>
            <StatTile>
              <strong>{stats.total}</strong>
              <span>Total Works</span>
            </StatTile>
            <StatTile>
              <strong>{stats.recent}</strong>
              <span>Highlighted</span>
            </StatTile>
            <StatTile>
              <strong>{stats.latestYear ?? "-"}</strong>
              <span>Latest Year</span>
            </StatTile>
          </HeroStats>
        </SectionHero>
      )}

      {!isCompactMode && (
        <FilterPanel>
          <FilterRail>
            {primaryTypeFilters.map((type) => (
              <FilterChip
                key={type}
                type="button"
                onClick={() => setActivePrimaryType(type)}
                $active={activePrimaryType === type}
              >
                {type}
              </FilterChip>
            ))}
          </FilterRail>
          <FilterMeta>
            <strong>{visiblePublications.length}</strong>
            <span>items</span>
          </FilterMeta>
        </FilterPanel>
      )}

      <CardsStack $compact={isCompactMode}>
        {visiblePublications.length === 0 ? (
          <FilterEmpty>There are no publications in this category yet.</FilterEmpty>
        ) : (
          visiblePublications.map((content) => (
            <PublicationDiv
              key={content.title}
              publicationContent={content}
              setImage={setModalImage}
              navigate={navigate}
              isDetail={isDetail}
              viewMode={viewMode}
            />
          ))
        )}
      </CardsStack>

      <CustomImageModal
        isActive={modalOpen}
        onClose={() => setModalOpen(false)}
        imgSrc={imgModalSrc}
        imgTitle={imgTitle}
        imgSubtitle={imgSubtitle}
      />
    </SectionRoot>
  );
};

const SectionRoot = styled.section<{ $compact: boolean }>`
  width: 100%;
  max-width: 1280px;
  margin: ${({ $compact }) => ($compact ? "8px auto 14px" : "18px auto 12px")};
  padding: ${({ $compact }) => ($compact ? "0" : "18px")};
  border-radius: ${({ $compact }) => ($compact ? "0" : "28px")};
  background: ${({ $compact }) => ($compact ? "transparent" : "linear-gradient(180deg, #fcfdff 0%, #f3f7fd 100%)")};
  border: ${({ $compact }) => ($compact ? "0" : "1px solid #dbe4f1")};
  box-shadow: ${({ $compact }) => ($compact ? "none" : "0 14px 36px rgba(13, 29, 55, 0.09)")};

  @media (max-width: 840px) {
    margin-top: ${({ $compact }) => ($compact ? "8px" : "10px")};
    border-radius: ${({ $compact }) => ($compact ? "0" : "20px")};
    padding: ${({ $compact }) => ($compact ? "0" : "14px")};
  }
`;

const CompactHeader = styled.div`
  width: 100%;
  margin: 0 0 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CompactTitle = styled.h3`
  color: #14304f;
  font-size: 24px;
  font-weight: 800;
`;

const CompactLink = styled.button`
  border: 1px solid #c9d9ee;
  background: #f6fbff;
  color: #2c6095;
  border-radius: 999px;
  padding: 6px 12px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background: #edf5ff;
  }
`;

const SectionHero = styled.div`
  width: 100%;
  border-radius: 22px;
  padding: 18px;
  border: 1px solid rgba(208, 220, 237, 0.92);
  background:
    radial-gradient(circle at 82% 16%, rgba(133, 185, 255, 0.2) 0%, rgba(133, 185, 255, 0) 50%),
    linear-gradient(170deg, #f8fbff 0%, #eef4ff 100%);
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 12px;

  @media (max-width: 980px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const HeroTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const HeroEyebrow = styled.span`
  color: #406893;
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.56px;
`;

const HeroTitle = styled.h2`
  color: #10263f;
  font-size: clamp(26px, 3.1vw, 36px);
  font-weight: 800;
  line-height: 1.08;

  &.clickable {
    cursor: pointer;
  }

  &.clickable:hover {
    color: #1d59a2;
  }
`;

const HeroDescription = styled.p`
  color: #456382;
  font-size: 14px;
  line-height: 1.45;
  max-width: 760px;
`;

const HeroNote = styled.span`
  color: #567595;
  font-size: 12px;
  font-weight: 600;
`;

const HeroStats = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(3, minmax(98px, 1fr));
  gap: 8px;
  width: min(430px, 100%);
`;

const FilterPanel = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;

const FilterRail = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const FilterChip = styled.button<{ $active: boolean }>`
  border-radius: 999px;
  border: 1px solid ${({ $active }) => ($active ? "#4b84d8" : "#c8d8ea")};
  background: ${({ $active }) => ($active ? "linear-gradient(160deg, #4b84d8 0%, #2f71cc 100%)" : "#ffffff")};
  color: ${({ $active }) => ($active ? "#ffffff" : "#355b84")};
  padding: 6px 12px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.18s ease, filter 0.18s ease;

  &:hover {
    transform: translateY(-1px);
    filter: brightness(0.98);
  }
`;

const FilterMeta = styled.div`
  margin-left: auto;
  min-width: 112px;
  height: 34px;
  padding: 0 12px;
  border-radius: 999px;
  border: 1px solid #cfe0f2;
  background: #f7fbff;
  color: #456d98;
  font-size: 14px;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  strong {
    color: #204f84;
    font-size: 16px;
    font-weight: 800;
    line-height: 1;
  }

  span {
    font-size: 13px;
    font-weight: 700;
    line-height: 1;
  }
`;

const StatTile = styled.div`
  border-radius: 14px;
  padding: 10px 11px;
  border: 1px solid rgba(199, 214, 235, 0.92);
  background: rgba(255, 255, 255, 0.75);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.82);
  display: flex;
  flex-direction: column;
  gap: 3px;

  strong {
    color: #123a66;
    font-size: 18px;
    font-weight: 800;
    line-height: 1;
  }

  span {
    color: #5a7698;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.28px;
  }
`;

const CardsStack = styled.div<{ $compact: boolean }>`
  margin-top: ${({ $compact }) => ($compact ? "0" : "13px")};
  display: flex;
  flex-direction: column;
  gap: ${({ $compact }) => ($compact ? "9px" : "12px")};
`;

const PublicationCard = styled.article<{ $compact: boolean; $interactive: boolean }>`
  position: relative;
  overflow: hidden;
  width: 100%;
  display: grid;
  grid-template-columns: ${({ $compact }) => ($compact ? "minmax(190px, 240px) 1fr" : "minmax(230px, 288px) 1fr")};
  gap: ${({ $compact }) => ($compact ? "10px" : "13px")};
  padding: ${({ $compact }) => ($compact ? "10px" : "12px")};
  border-radius: ${({ $compact }) => ($compact ? "14px" : "18px")};
  border: 1px solid #d7e1ee;
  background: linear-gradient(180deg, #ffffff 0%, #f9fbff 100%);
  box-shadow: ${({ $compact }) => ($compact ? "0 5px 12px rgba(13, 29, 55, 0.05)" : "0 8px 19px rgba(13, 29, 55, 0.07)")};
  transition: transform 0.24s ease, border-color 0.24s ease, box-shadow 0.24s ease, background 0.24s ease;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: radial-gradient(circle at 86% 14%, rgba(116, 172, 255, 0.18) 0%, rgba(116, 172, 255, 0) 58%);
    opacity: 0;
    transition: opacity 0.24s ease;
    pointer-events: none;
  }

  @media (hover: hover) {
    ${({ $interactive, $compact }) =>
      $interactive &&
      css`
        &:hover,
        &:focus-within {
          transform: translateY(-2px);
          border-color: #bdd1ea;
          background: linear-gradient(180deg, #ffffff 0%, #f2f8ff 100%);
          box-shadow: ${$compact ? "0 10px 21px rgba(13, 29, 55, 0.1)" : "0 14px 30px rgba(13, 29, 55, 0.14)"};
        }

        &:hover::before,
        &:focus-within::before {
          opacity: 1;
        }

        &:hover h3,
        &:focus-within h3 {
          color: #1d59a2;
        }
      `}
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const PreviewFrame = styled.button<{ $compact: boolean }>`
  position: relative;
  width: 100%;
  min-height: ${({ $compact }) => ($compact ? "132px" : "160px")};
  border-radius: ${({ $compact }) => ($compact ? "12px" : "14px")};
  overflow: hidden;
  border: 1px solid rgba(205, 216, 231, 0.95);
  cursor: pointer;
  background: #ffffff;
  box-shadow: 0 8px 18px rgba(26, 58, 104, 0.09);

  &:hover img {
    transform: scale(1.015);
  }
`;

const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  min-height: 132px;
  object-fit: contain;
  padding: 5px;
  transition: transform 0.24s ease;
`;

const PreviewHint = styled.span`
  position: absolute;
  left: 10px;
  bottom: 10px;
  width: 31px;
  height: 31px;
  border-radius: 11px;
  border: 1px solid rgba(194, 213, 236, 0.95);
  background: rgba(251, 254, 255, 0.92);
  color: #2f567f;
  font-size: 13px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 12px rgba(25, 52, 90, 0.14);
  backdrop-filter: blur(2px);
`;

const CardBody = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 3px 2px 3px 0;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;

  @media (max-width: 980px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const TitleBlock = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const CardTitle = styled.h3`
  color: #132e4d;
  font-size: clamp(15px, 1.65vw, 20px);
  font-weight: 700;
  line-height: 1.25;

  &.clickable {
    cursor: pointer;
  }

  &.clickable:hover {
    color: #1d59a2;
  }
`;

const AuthorsLine = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 4px;
  column-gap: 4px;
`;

const AuthorToken = styled(BasicDIV)<{ $isme: boolean }>`
  width: fit-content;
  display: inline-flex;
  align-items: baseline;
  gap: 1px;
  background: transparent;
  color: ${({ $isme }) => ($isme ? "#153e6d" : "#405f82")};
  font-size: 14px;
  font-weight: ${({ $isme }) => ($isme ? 700 : 500)};

  a,
  span {
    line-height: 1.2;
  }

  a {
    text-decoration: ${({ $isme }) => ($isme ? "underline" : "none")};
  }
`;

const StatusBlock = styled.div`
  min-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 5px;

  @media (max-width: 980px) {
    min-width: 0;
    align-items: flex-start;
  }
`;

const StatusPill = styled.span`
  border-radius: 999px;
  border: 1px solid rgba(180, 205, 236, 0.92);
  background: linear-gradient(180deg, #edf5ff 0%, #e5efff 100%);
  color: #205591;
  font-size: 12px;
  font-weight: 700;
  padding: 5px 11px;
`;

const StatusHighlight = styled.span`
  color: #b61e1e;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.2px;
`;

const TypeChipRail = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const TypeChip = styled.span<{ $primary: boolean }>`
  border-radius: 999px;
  border: 1px solid ${({ $primary }) => ($primary ? "rgba(80, 130, 203, 0.5)" : "rgba(186, 204, 225, 0.9)")};
  background: ${({ $primary }) => ($primary ? "linear-gradient(180deg, #eaf2ff 0%, #dfeaff 100%)" : "#f8fbff")};
  color: ${({ $primary }) => ($primary ? "#27548c" : "#4f6987")};
  font-size: 11px;
  font-weight: ${({ $primary }) => ($primary ? 700 : 600)};
  padding: 4px 10px;
`;

const CardDescription = styled.p<{ $compact: boolean }>`
  color: #304a69;
  font-size: ${({ $compact }) => ($compact ? "13px" : "14px")};
  line-height: 1.44;
  display: -webkit-box;
  -webkit-line-clamp: ${({ $compact }) => ($compact ? 2 : 3)};
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ActionRail = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
`;

const ActionButton = styled.button<{ $accent: boolean; $compact: boolean }>`
  border-radius: 999px;
  border: 1px solid ${({ $accent }) => ($accent ? "#4f8de7" : "#c7d7ea")};
  background: ${({ $accent }) => ($accent ? "linear-gradient(160deg, #4f8de7 0%, #2e73d6 100%)" : "#f7fbff")};
  color: ${({ $accent }) => ($accent ? "#ffffff" : "#244f7d")};
  padding: ${({ $compact }) => ($compact ? "5px 10px" : "6px 12px")};
  font-size: ${({ $compact }) => ($compact ? "11px" : "12px")};
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s ease, filter 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    filter: brightness(0.98);
  }
`;

const FilterEmpty = styled.div`
  width: 100%;
  border-radius: 14px;
  border: 1px dashed #c6d8ec;
  background: #f7fbff;
  color: #4f6987;
  font-size: 14px;
  font-weight: 600;
  padding: 18px 14px;
  text-align: center;
`;
