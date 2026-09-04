import { faChevronDown, faChevronUp, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";

const DOCUMENT_ROOT = process.env.PUBLIC_URL + "/document/";

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
  color: var(--color-text-strong);
  font-size: 21px;
  font-weight: 700;
`;

const HeaderMeta = styled.span`
  color: var(--color-text-muted);
  font-size: 12px;
  font-weight: 700;
`;

const CardsColumn = styled.div`
  margin-top: 8px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--color-border);
`;

const ProjectCard = styled.article<{ $open: boolean }>`
  width: 100%;
  border-bottom: 1px solid ${({ $open }) => ($open ? "var(--color-border-strong)" : "var(--color-border)")};
  background: ${({ $open }) => ($open ? "var(--color-surface-subtle)" : "transparent")};
  transition: background-color 0.2s ease, border-color 0.2s ease;

  &:hover {
    border-color: var(--umich-maize-deep);
    background: var(--umich-navy-wash);
  }
`;

const CardHeadButton = styled.button`
  width: 100%;
  border: 0;
  background: transparent;
  padding: 14px 10px;
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
  color: var(--color-text-faint);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.02em;
`;

const ProjectTitle = styled.h3`
  color: var(--color-text-strong);
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
  color: var(--color-text-muted);
  padding: 0;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  max-width: 350px;

  svg {
    color: var(--umich-maize-deep);
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
  width: 24px;
  height: 24px;
  color: var(--color-text-faint);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

const CardBody = styled.div`
  width: 100%;
  padding: 0 10px 15px;
  display: flex;
  flex-direction: column;
  gap: 11px;
`;

const DescriptionList = styled.ul`
  margin: 2px 0 0;
  padding-left: 18px;
  color: var(--color-text-muted);

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
  color: var(--color-link);
  font-size: 12px;
  font-weight: 700;
  padding: 0;
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color 0.18s ease;

  &:hover {
    color: var(--umich-navy);
  }
`;
