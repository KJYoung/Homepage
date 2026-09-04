import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { H1, H4, H5, LinkSpan, SPAN } from "../customs/Spans";
import { notificationSuccess } from "../utils/sendNoti";
import { useNavigate } from "react-router-dom";
import { PublicationWrapperDiv } from "./publications/PublicationContents";
import { BR } from "../customs/Basics";
import { FlexColumnStart, FlexRowSpaceBetweenEnd } from "../customs/Divs";
import { ProjectsDiv } from "./projects/projectsDiv";
import Portrait from "../components/Portrait";

export const DOCUMENT_ROOT = process.env.PUBLIC_URL + "/document/";

export const PublicBR = styled(BR)`
    margin-top: 5px;
    margin-bottom: 5px;
`;

const RESEARCH_INTERESTS = [
    "Uncertainty-aware Perception",
    "Information Theory",
    "3D Scene Understanding",
    "Sensor Fusion",
    "Better Scene Representation",
    "Active Perception & Exploration",
    "Multi-agent Perception",
    "Human Robot Interaction",
];

const SOCIAL_LINKS = [
    { label: "Google Scholar", href: "https://scholar.google.co.kr/citations?user=w2JODm8AAAAJ&hl=en&oi=sra", icon: "scholar" },
];

const PORTRAIT_SOCIAL_LINKS = [
    { label: "GitHub", href: "https://github.com/KJYoung", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/kim-junyoung", icon: "linkedin" },
];

const EMAIL_ADDRESS = "jyoungk@umich.edu";
const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@!*";

const ActionIcon = ({ icon }: { icon: string }) => {
    if (icon === "download") {
        return (
            <ActionIconSvg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3.5a1 1 0 0 1 1 1V12.1l2.8-2.8a1 1 0 1 1 1.4 1.4l-4.5 4.5a1 1 0 0 1-1.4 0l-4.5-4.5a1 1 0 0 1 1.4-1.4L11 12.1V4.5a1 1 0 0 1 1-1ZM5 18a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Z" />
            </ActionIconSvg>
        );
    }

    if (icon === "github") {
        return (
            <ActionIconSvg viewBox="0 0 24 24" aria-hidden="true" $iconType="github">
                <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 5.02 3.25 9.27 7.76 10.77.57.11.77-.25.77-.56 0-.27-.01-1.17-.02-2.12-3.16.69-3.82-1.34-3.82-1.34-.52-1.31-1.26-1.66-1.26-1.66-1.03-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1.01 1.72 2.64 1.22 3.28.94.1-.73.39-1.22.71-1.5-2.52-.29-5.18-1.26-5.18-5.6 0-1.24.44-2.25 1.16-3.04-.12-.29-.5-1.44.11-3 0 0 .95-.31 3.11 1.16a10.8 10.8 0 0 1 5.66 0c2.16-1.47 3.11-1.16 3.11-1.16.62 1.56.24 2.71.12 3 .72.79 1.16 1.8 1.16 3.04 0 4.35-2.67 5.31-5.21 5.59.4.35.76 1.04.76 2.1 0 1.52-.01 2.74-.01 3.11 0 .31.2.68.78.56 4.5-1.5 7.74-5.75 7.74-10.77C23.25 5.48 18.27.5 12 .5Z" />
            </ActionIconSvg>
        );
    }

    if (icon === "linkedin") {
        return (
            <ActionIconSvg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5.4 8.4a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6ZM3.9 9.8h3v10.3h-3V9.8Zm4.9 0h2.9v1.4h.1c.4-.8 1.4-1.6 3-1.6 3.2 0 3.8 2.1 3.8 4.9v5.6h-3v-5c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7v5.1h-3V9.8Z" />
            </ActionIconSvg>
        );
    }

    return (
        <ActionIconSvg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 3.5c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5Zm0 1.8a6.7 6.7 0 0 1 6.6 5.6h-4.8a9.2 9.2 0 0 0-1.3-3.4A6.7 6.7 0 0 1 12 5.3Zm-1.9.4A7.3 7.3 0 0 0 8.4 11H5.4a6.7 6.7 0 0 1 4.7-5.3Zm-4.7 7.1h3a7.3 7.3 0 0 0 1.7 5.3 6.7 6.7 0 0 1-4.7-5.3Zm6.6 5.8c-.8-.4-1.7-2.1-2-4h4c-.3 1.9-1.2 3.6-2 4Zm2.3-.5a7.3 7.3 0 0 0 1.7-5.3h3a6.7 6.7 0 0 1-4.7 5.3Zm1.7-7.1a7.3 7.3 0 0 0-1.7-5.3 6.7 6.7 0 0 1 4.7 5.3h-3Z" />
        </ActionIconSvg>
    );
};

const MainPage = () => {
    const navigate = useNavigate();
    const [revealedEmail, setRevealedEmail] = useState("");
    const [isEmailRevealing, setIsEmailRevealing] = useState(false);
    const revealIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
        return () => {
            if (revealIntervalRef.current) {
                clearInterval(revealIntervalRef.current);
            }
        };
    }, []);

    const revealEmailHandler = () => {
        if (revealedEmail === EMAIL_ADDRESS) {
            navigator.clipboard.writeText(EMAIL_ADDRESS);
            notificationSuccess("EMAIL", "Email Address was copied to your clipboard");
            return;
        }

        if (isEmailRevealing) return;

        setIsEmailRevealing(true);
        let revealIndex = 0;

        revealIntervalRef.current = setInterval(() => {
            const nextValue = EMAIL_ADDRESS
                .split("")
                .map((character, index) => {
                    if (index < revealIndex) return character;
                    if (character === "@" || character === "." || character === "_") return character;
                    return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
                })
                .join("");

            setRevealedEmail(nextValue);
            revealIndex += 1;

            if (revealIndex > EMAIL_ADDRESS.length) {
                if (revealIntervalRef.current) {
                    clearInterval(revealIntervalRef.current);
                    revealIntervalRef.current = null;
                }
                setRevealedEmail(EMAIL_ADDRESS);
                setIsEmailRevealing(false);
            }
        }, 38);
    };

    const CVGoogleLinkID = "1MWuxEqLO_bV-DrOa_GCJ4PBJG4INh9px";
    const actionLinks = [
        {
            label: "CV",
            href: `https://drive.google.com/file/d/${CVGoogleLinkID}/view?usp=sharing`,
            icon: "download",
        },
        ...SOCIAL_LINKS,
    ];

    return <PublicWrapper>
        <GeneralDiv>
            <GeneralMainDiv>
                <IntroColumn>
                    <NameRow>
                        <H1 marginBottom="12px">Junyoung Kim</H1>
                        <RevealEmailButton
                            type="button"
                            onClick={revealEmailHandler}
                            $revealed={Boolean(revealedEmail)}
                            aria-label={revealedEmail ? `Email: ${revealedEmail}` : "Reveal email"}
                        >
                            {revealedEmail || "reveal email"}
                        </RevealEmailButton>
                    </NameRow>
                    <br />
                    <IntroParagraph marginRight="10px" fontSize="18px" lineHeight={1.3}>
                        I am a first-year Ph.D. student in{' '}
                        <LinkSpan content="Naval Architecture & Marine Engineering" targetUrl="https://name.engin.umich.edu/"/>
                        {' '}at the{' '}
                        <LinkSpan content="University of Michigan" targetUrl="https://umich.edu/"/>
                        , advised by Prof.{' '}
                        <LinkSpan content="Alan Papalia" targetUrl="https://alanpapalia.github.io/"/>
                        .
                    </IntroParagraph>
                    <IntroParagraph marginRight="10px" fontSize="18px" lineHeight={1.3} $spaced>
                        Previously, I worked as a Research Officer at{' '}
                        <LinkSpan content="Agency for Defense Development (ADD)" targetUrl="https://www.add.re.kr/eps"/>
                        {' '}in South Korea, completing my military service. I received my bachelor's degree (Summa Cum Laude) with a double major in{' '}
                        <LinkSpan content="Biological Sciences" targetUrl="https://biosci.snu.ac.kr/en"/>
                        {' '}&{' '}
                        <LinkSpan content="Computer Science and Engineering" targetUrl="https://cse.snu.ac.kr/en"/>
                        {' '}from{' '}
                        <LinkSpan content="Seoul National University (SNU)" targetUrl="https://en.snu.ac.kr/index.html"/>
                        .
                    </IntroParagraph>
                    <ActionRow>
                        {actionLinks.map(({ label, href, icon }) => (
                            <ContactChip key={label} href={href} target="_blank" rel="noreferrer">
                                <ActionIcon icon={icon} />
                                <ContactChipLabel>{label}</ContactChipLabel>
                            </ContactChip>
                        ))}
                    </ActionRow>
                </IntroColumn>
                <PortraitColumn>
                    <Portrait />
                    <PortraitSocialRow>
                        {PORTRAIT_SOCIAL_LINKS.map(({ label, href, icon }) => (
                            <PortraitSocialLink
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={label}
                                title={label}
                            >
                                <ActionIcon icon={icon} />
                            </PortraitSocialLink>
                        ))}
                    </PortraitSocialRow>
                </PortraitColumn>
            </GeneralMainDiv>
        </GeneralDiv>
        <ProfileSection>
            <SectionTitle>Profile</SectionTitle>
            <PublicBR />
            <ProfileHistoryLine>
                <HistoryPeriod>🔄 2026.08 ~ Present</HistoryPeriod>
                <HistoryTitle>University of Michigan - Ph.D. Student</HistoryTitle>
            </ProfileHistoryLine>
            <ProfileHistoryLine>
                <HistoryPeriod>✅ 2023.04 ~ 2026.05</HistoryPeriod>
                <HistoryTitle>Agency for Defense Development (ADD) - Military Service</HistoryTitle>
            </ProfileHistoryLine>
            <ProfileDetail>
                ✦ Research Officer for National Defense (ROND)
            </ProfileDetail>
            <ProfileHistoryLine>
                <HistoryPeriod>✅ 2019.03 ~ 2023.02</HistoryPeriod>
                <HistoryTitle>Seoul National University (SNU) - Bachelor</HistoryTitle>
            </ProfileHistoryLine>
            <ProfileDetail $last>
                ✦ Biological Sciences, Computer Science and Engineering (Double Major) 
                <br />
                ✦ Summa Cum Laude (4.17/4.30; 2<SPAN fontSize="10px" verticalAlign="super">nd</SPAN>/40)
                <br />
            </ProfileDetail>
            <ProfileHistoryLine $last>
                <HistoryPeriod>✅ 2017.03 ~ 2019.02</HistoryPeriod>
                <HistoryTitle>Hansung Science High School (HSHS) - High School</HistoryTitle>
            </ProfileHistoryLine>

            <ResearchHeader>
                <H4 marginLeft='10px' marginBottom="4px" marginTop="20px">Research Interests</H4>
            </ResearchHeader>
            <InterestsWrap>
                {RESEARCH_INTERESTS.map((interest) => <InterestChip key={interest}>{interest}</InterestChip>)}
            </InterestsWrap>
        </ProfileSection>
        <PublicationWrapperDiv navigate={navigate} isDetail={false} viewMode="compact" />
        <ProjectsDiv />
    </PublicWrapper>
};

const PublicWrapper = styled.div`
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 16px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > div {
        width: 100%;
    }

    a, .link {
        color: var(--color-link);
        cursor: pointer;
    }
`;

const GeneralDiv = styled.div`
    display: flex;
    flex-direction: column;
    span {
        margin-bottom: 2px;
    }
    margin-top: 10px;
    margin-bottom: 15px;
`;
const GeneralMainDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;

    @media (max-width: 980px) {
        flex-direction: column-reverse;
        align-items: center;
        gap: 14px;
    }
`;

const IntroColumn = styled(FlexColumnStart)`
    width: min(100%, 800px);
    background: transparent;
`;

const PortraitColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

const PortraitSocialRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
`;

const PortraitSocialLink = styled.a`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    border: 1px solid var(--color-border);
    background: var(--color-surface);
    box-shadow: var(--shadow-subtle);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.18s ease, background-color 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease;

    svg {
        width: 19px;
        height: 19px;
        fill: var(--umich-navy);
    }

    &:hover {
        transform: translateY(-2px);
        border-color: var(--umich-maize-deep);
        background: var(--umich-maize-wash);
        box-shadow: var(--shadow-card);
    }
`;

const NameRow = styled.div`
    display: flex;
    align-items: baseline;
    gap: 18px;
    flex-wrap: wrap;
`;

const RevealEmailButton = styled.button<{ $revealed: boolean }>`
    border: none;
    background: transparent;
    padding: 0 0 0 2px;
    margin: 0 0 12px;
    color: ${({ $revealed }) => ($revealed ? "var(--color-text-muted)" : "var(--color-text-faint)")};
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.02em;
    cursor: pointer;
    transition: color 0.24s ease, transform 0.24s ease, opacity 0.24s ease;
    opacity: ${({ $revealed }) => ($revealed ? 1 : 0.82)};

    &:hover {
        color: ${({ $revealed }) => ($revealed ? "var(--umich-navy)" : "var(--color-text-muted)")};
        opacity: 1;
        transform: translateY(-1px);
    }
`;

const IntroParagraph = styled(SPAN)<{ $spaced?: boolean }>`
    display: block;
    margin-top: ${({ $spaced }) => ($spaced ? "14px" : "0")};
`;

const ActionRow = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 12px;
    margin-top: 26px;
`;

const ContactChip = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 40px;
    gap: 9px;
    padding: 0 19px;
    border-radius: 999px;
    border: 1px solid var(--color-border-strong);
    background: var(--color-surface);
    box-shadow: var(--shadow-subtle);
    text-decoration: none;
    overflow: hidden;
    transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease, background-color 0.18s ease;

    &:hover {
        transform: translateY(-2px);
        border-color: var(--umich-maize-deep);
        background: var(--umich-maize-wash);
        box-shadow: var(--shadow-card);
    }

    &:active {
        transform: translateY(0);
        background: var(--color-surface-muted);
        box-shadow: var(--shadow-subtle);
    }
`;

const ActionIconSvg = styled.svg<{ $iconType?: string }>`
    display: block;
    width: ${({ $iconType }) => ($iconType === "github" ? "17px" : "15px")};
    height: ${({ $iconType }) => ($iconType === "github" ? "17px" : "15px")};
    fill: var(--color-link);
    flex-shrink: 0;
`;

const ContactChipLabel = styled.span`
    color: var(--color-link);
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.02em;
    line-height: 1;
`;

const ProfileSection = styled(FlexColumnStart)`
    width: 100%;
    margin-bottom: 16px;
    padding: 0;
    background: transparent;
    --history-period-width: 190px;
`;

const ProfileHistoryLine = styled(H5)<{ $last?: boolean }>`
    display: grid;
    grid-template-columns: var(--history-period-width) minmax(0, 1fr);
    align-items: baseline;
    gap: 10px;
    margin: 0 0 ${({ $last }) => ($last ? "4px" : "7px")} 20px;
    line-height: 1.35;

    @media (max-width: 560px) {
        align-items: flex-start;
        grid-template-columns: 1fr;
        gap: 2px;
    }
`;

const HistoryPeriod = styled.span`
    width: 100%;
    color: var(--color-text-faint);
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.01em;
    white-space: nowrap;

    @media (max-width: 560px) {
        padding-right: 0;
    }
`;

const HistoryTitle = styled.span`
    color: var(--color-text-strong);
    font-size: 16px;
    font-weight: 600;
`;

const ProfileDetail = styled(SPAN)<{ $last?: boolean }>`
    display: block;
    margin: 0 0 ${({ $last }) => ($last ? "8px" : "7px")} calc(30px + var(--history-period-width));
    color: var(--color-text-muted);
    font-size: 14px;
    line-height: 1.35;

    @media (max-width: 560px) {
        margin-left: 20px;
    }
`;

const ResearchHeader = styled(FlexRowSpaceBetweenEnd)`
    background: transparent;
`;

const SectionTitle = styled.h3`
    color: var(--color-text-strong);
    font-size: 21px;
    font-weight: 700;
`;

const InterestsWrap = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-left: 35px;
    margin-top: 2px;
    gap: 8px;

    @media (max-width: 900px) {
        margin-left: 10px;
    }
`;

const InterestChip = styled.span`
    border-radius: 999px;
    border: 1px solid var(--color-border);
    background: var(--color-surface-subtle);
    color: var(--color-text-muted);
    font-size: 12px;
    font-weight: 600;
    padding: 5px 11px;
    line-height: 1.2;
`;

export default MainPage;
