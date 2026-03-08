import { faChevronDown, faChevronUp, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";
import { BR } from "../../customs/Basics";

const DOCUMENT_ROOT = process.env.PUBLIC_URL + "/document/";

const ProjectsBR = styled(BR)`
  margin-top: 5px;
  margin-bottom: 5px;
`;

type ProjectLink = {
  label: string;
  url: string;
};

type ProjectItem = {
  id: string;
  title: string;
  period: string;
  award?: string;
  description: string[];
  links: ProjectLink[];
};

const PROJECT_ITEMS: ProjectItem[] = [
  {
    id: "friendli-2024",
    title: "LLM Hackathon @ FriendliAI",
    period: "2024 Team Project",
    award: "Grand Prize (1st out of 13 teams)",
    description: [
      "Built Knowledge Graph AI, a RAG system that combines knowledge graphs with LLMs for concept-driven paper discovery.",
    ],
    links: [
      { label: "GitHub Repo", url: "https://github.com/KJYoung/KnowledgeGraphAI/" },
      {
        label: "LinkedIn Post 1",
        url: "https://www.linkedin.com/posts/friendliai_friendliai-friendliaihackathon-friendli-activity-7201442148292943875-tvQh?utm_source=share&utm_medium=member_desktop",
      },
      {
        label: "LinkedIn Post 2",
        url: "https://www.linkedin.com/posts/kim-junyoung_friendliai-llm-hackathon-activity-7200682031083577346-mrOy?utm_source=share&utm_medium=member_desktop",
      },
      { label: "Official X Post", url: "https://x.com/friendliai/status/1795676942617952276" },
    ],
  },
  {
    id: "fittogether-2022",
    title: "FitTogether",
    period: "2022 Fall Semester Team Project",
    description: ["Full-stack team project developed in SWPP at Seoul National University."],
    links: [{ label: "GitHub Repo", url: "https://github.com/swsnu/swppfall2022-team4/" }],
  },
  {
    id: "militech-2021",
    title: "miliTECH Challenge",
    period: "2021 Team Project",
    award: "Ministerial Award (1st out of 6 teams)",
    description: [
      "Developed a deep-learning target recognition method for surveillance and reconnaissance scenarios.",
      "Studied robustness topics including adversarial AI.",
    ],
    links: [{ label: "Awards PDF", url: DOCUMENT_ROOT + "miliTECH_Award.pdf" }],
  },
];

export const ProjectsDiv = () => {
  const [openCardId, setOpenCardId] = useState<string>("");

  const toggleCard = (id: string) => {
    setOpenCardId((prev) => (prev === id ? "" : id));
  };

  return (
    <SectionRoot>
      <SectionHeader>
        <ProjectSectionTitle>Projects</ProjectSectionTitle>
        {/* <HeaderMeta>{PROJECT_ITEMS.length} highlighted works</HeaderMeta> */}
      </SectionHeader>
      <ProjectsBR />

      <CardsColumn>
        {PROJECT_ITEMS.map((item) => {
          const isOpen = openCardId === item.id;
          return (
            <ProjectCard key={item.id} $open={isOpen}>
              <CardHeadButton type="button" onClick={() => toggleCard(item.id)} aria-expanded={isOpen}>
                <HeadLeft>
                  <PeriodPill>{item.period}</PeriodPill>
                  <ProjectTitle>{item.title}</ProjectTitle>
                </HeadLeft>

                <HeadRight>
                  {item.award && (
                    <AwardPill>
                      <FontAwesomeIcon icon={faTrophy} />
                      <span>{item.award}</span>
                    </AwardPill>
                  )}
                  <ChevronBadge>
                    <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
                  </ChevronBadge>
                </HeadRight>
              </CardHeadButton>

              {isOpen && (
                <CardBody>
                  <DescriptionList>
                    {item.description.map((descriptionItem, index) => (
                      <li key={`${item.id}-${index}`}>{descriptionItem}</li>
                    ))}
                  </DescriptionList>

                  <LinkRow>
                    {item.links.map((link) => (
                      <ProjectLinkChip key={`${item.id}-${link.label}`} href={link.url} target="_blank" rel="noreferrer">
                        {link.label}
                      </ProjectLinkChip>
                    ))}
                  </LinkRow>
                </CardBody>
              )}
            </ProjectCard>
          );
        })}
      </CardsColumn>
    </SectionRoot>
  );
};

const SectionRoot = styled.section`
  width: 100%;
  margin: 12px 0 20px;
`;

const SectionHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 10px;
  margin-bottom: 4px;
`;

const ProjectSectionTitle = styled.h3`
  color: #14304f;
  font-size: 21px;
  font-weight: 700;
`;

const HeaderMeta = styled.span`
  color: #5d789a;
  font-size: 12px;
  font-weight: 700;
`;

const CardsColumn = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ProjectCard = styled.article<{ $open: boolean }>`
  width: 100%;
  border-radius: 16px;
  border: 1px solid ${({ $open }) => ($open ? "#bfd3eb" : "#d8e3f0")};
  background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
  box-shadow: ${({ $open }) =>
    $open ? "0 12px 26px rgba(13, 29, 55, 0.12)" : "0 6px 14px rgba(13, 29, 55, 0.06)"};
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: #c2d6ee;
    box-shadow: 0 11px 22px rgba(13, 29, 55, 0.11);
    transform: translateY(-1px);
  }
`;

const CardHeadButton = styled.button`
  width: 100%;
  border: 0;
  background: transparent;
  padding: 14px 14px 13px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
  cursor: pointer;
  text-align: left;
`;

const HeadLeft = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const PeriodPill = styled.span`
  width: fit-content;
  border-radius: 999px;
  padding: 4px 10px;
  border: 1px solid #c9d7e9;
  background: #f4f8fe;
  color: #4a6789;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12px;
`;

const ProjectTitle = styled.h3`
  color: #152f4e;
  font-size: clamp(16px, 1.9vw, 21px);
  font-weight: 800;
  line-height: 1.2;
`;

const HeadRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
`;

const AwardPill = styled.div`
  border-radius: 999px;
  border: 1px solid rgba(223, 172, 62, 0.52);
  background: linear-gradient(180deg, #fff7e9 0%, #fff0cb 100%);
  color: #8b6100;
  padding: 6px 10px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  max-width: 350px;

  svg {
    font-size: 12px;
    flex-shrink: 0;
  }

  span {
    font-size: 11px;
    font-weight: 700;
    line-height: 1.2;
  }
`;

const ChevronBadge = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 9px;
  border: 1px solid #cddbed;
  background: #f7fbff;
  color: #3d6087;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

const CardBody = styled.div`
  width: 100%;
  padding: 0 14px 14px;
  border-top: 1px solid #e3ebf6;
  display: flex;
  flex-direction: column;
  gap: 11px;
`;

const DescriptionList = styled.ul`
  margin: 11px 0 0;
  padding-left: 18px;
  color: #304c6d;

  li {
    font-size: 14px;
    line-height: 1.45;
    margin-bottom: 6px;
  }

  li:last-child {
    margin-bottom: 0;
  }
`;

const LinkRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
`;

const ProjectLinkChip = styled.a`
  border-radius: 999px;
  border: 1px solid #c5d8ef;
  background: #f7fbff;
  color: #205891;
  font-size: 12px;
  font-weight: 700;
  padding: 6px 11px;
  transition: transform 0.18s ease, filter 0.18s ease, border-color 0.18s ease;

  &:hover {
    border-color: #95b9e6;
    transform: translateY(-1px);
    filter: brightness(0.99);
  }
`;
