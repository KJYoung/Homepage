import styled from "styled-components";
import { H1, H4, H5, LinkSpan, SPAN } from "../../customs/Spans";
import { PORTRAIT_URL } from "../../DATA/Public_URL";
import { notificationSuccess } from "../../utils/sendNoti";
import { useNavigate } from "react-router-dom";
import { PublicationWrapperDiv } from "../publications/PublicationContents";
import { BR } from "../../customs/Basics";
import { FlexColumnStart, FlexRowCenter, FlexRowSpaceBetweenEnd, FlexRowStart } from "../../customs/Divs";
import { TagBubble } from "../../customs/TagBubbleStatic";
import { getSRandomHex } from "../../utils/Color";
import { ProjectsDiv } from "../projects/projectsDiv";
import { useDesktopViewport } from "../../hooks/useDesktopViewport";

export const DOCUMENT_ROOT = process.env.PUBLIC_URL + "/document/";

export const PublicBR = styled(BR)`
    margin-top: 5px;
    margin-bottom: 5px;
`;

const PublicEn = () => {
    const navigate = useNavigate();

    const sendEmailHandler = () => {
        navigator.clipboard.writeText("jykim157@snu.ac.kr");
        notificationSuccess('EMAIL', "Email Address was copied to your clipboard");
    };
    useDesktopViewport(1280);

    const CVGoogleLinkID = "1MWuxEqLO_bV-DrOa_GCJ4PBJG4INh9px";
    return <PublicWrapper>
        <GeneralDiv>
            <GeneralMainDiv>
                <FlexColumnStart width="800px">
                    <H1 marginBottom="12px">Junyoung Kim</H1>
                    <br />
                    <SPAN marginRight="10px" fontSize="18px" lineHeight={1.3}>
                        I am a Research Officer at{' '}
                        <LinkSpan content="Agency for Defense Development (ADD)" targetUrl="https://www.add.re.kr/eps"/>
                        {' '}in the South Korea.
                        I completed my bachelor's degree (Summa Cum Laude) in{' '}
                        <LinkSpan content="Biological Sciences" targetUrl="https://biosci.snu.ac.kr/en"/>
                        {' '}&{' '}
                        <LinkSpan content="Computer Science and Engineering" targetUrl="https://cse.snu.ac.kr/en"/>
                        {' '}at the{' '}
                        <LinkSpan content="Seoul National University (SNU)" targetUrl="https://en.snu.ac.kr/index.html"/>
                        .
                    </SPAN>
                    <FlexRowCenter>
                        <CVButtonWrapper>
                            <CVButton 
                                href={`https://drive.google.com/file/d/${CVGoogleLinkID}/view?usp=sharing`} 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <DownloadIcon viewBox="0 0 24 24">
                                    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                                </DownloadIcon>
                                Curriculum Vitae
                            </CVButton>
                        </CVButtonWrapper>
                    </FlexRowCenter>
                </FlexColumnStart>
                <Portrait src={PORTRAIT_URL} alt="imgElement"/>
            </GeneralMainDiv>
            <ContactInfoDiv>
                <a href="mailto:jykim157@snu.ac.kr">Send Email</a>
                |
                <span onClick={sendEmailHandler} className="link">Copy Email</span>
                |
                <a href="https://github.com/KJYoung">Github</a>
                |
                <a href="https://www.linkedin.com/in/kim-junyoung">LinkedIn</a>
                |
                <a href="https://scholar.google.co.kr/citations?user=w2JODm8AAAAJ&hl=en&oi=sra">Google Scholar</a>
            </ContactInfoDiv>
        </GeneralDiv>
        <FlexColumnStart marginBottom="20px">
            <H1>Profile</H1>
            <PublicBR />
            <H4 marginLeft='10px' marginBottom="6px">History</H4>
            <H5 marginLeft='20px' lineHeight={1.2} marginBottom="4px">✅ 2017.03 ~ 2019.02 Hansung Science High School (HSHS) - High School</H5>
            <H5 marginLeft='20px' lineHeight={1.2}>✅ 2019.03 ~ 2023.02 Seoul National University (SNU) - Bachelor</H5>
            <SPAN marginLeft='40px' lineHeight={1.2} marginBottom="4px">
                ✦ <SPAN fontWeight="600">Biological Sciences, Computer Science and Engineering</SPAN> (Double Major) 
                <br />
                ✦ <SPAN fontWeight="600">Summa Cum Laude</SPAN> (4.17/4.30; 2<SPAN fontSize="10px" verticalAlign="super">nd</SPAN>/40)
                <br />
            </SPAN>
            <H5 marginLeft='20px' lineHeight={1.2}>🔄 2023.04 ~ 2026.05 Agency for Defense Development (ADD) - Military Service</H5>
            <SPAN marginLeft='40px' lineHeight={1.2}>
                ✦ Research Officer for National Defense (ROND)
            </SPAN>

            <FlexRowSpaceBetweenEnd>
                <H4 marginLeft='10px' marginBottom="4px" marginTop="20px">Research Interests</H4>
            </FlexRowSpaceBetweenEnd>
            <FlexRowStart marginLeft="35px" flexWrap="wrap">
                <TagBubble color={getSRandomHex(5)}>Uncertainty-aware Perception</TagBubble>
                <TagBubble color={getSRandomHex(6)}>Information Theory</TagBubble>
                <TagBubble color={getSRandomHex(5)}>3D Scene Understanding</TagBubble>
                <TagBubble color={getSRandomHex(5)}>Sensor Fusion</TagBubble>
                <TagBubble color={getSRandomHex(6)}>Better Scene Representation</TagBubble>
                <TagBubble color={getSRandomHex(5)}>Active Perception & Exploration</TagBubble>
                <TagBubble color={getSRandomHex(5)}>Multi-agent Perception</TagBubble>
                <TagBubble color={getSRandomHex(3)}>Human Robot Interaction</TagBubble>
            </FlexRowStart>
        </FlexColumnStart>
        <PublicationWrapperDiv navigate={navigate} isDetail={false} />
        <ProjectsDiv />
    </PublicWrapper>
};

const Portrait = styled.img`
    border-radius: 20px;
    border: 1px solid black;
    width: 185px;
    max-height: 480px;
`;

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
        color: var(--hp-blue);
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
`;

const ContactInfoDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;

    margin-top: 5px;

    span, a {
        margin: 0px 8px 0px 8px;
    }
`;

const CVButtonWrapper = styled.div`
    margin-top: 24px;
    display: flex;
    justify-content: flex-start;
`;

const CVButton = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 9px 23px; /* border 두께만큼 1px 줄임 */
    
    background: transparent;
    color: #1976d2; /* 텍스트 색상 (hp-blue와 비슷한 계열) */
    
    /* 테두리 추가 */
    border: 2px solid #1976d2;
    border-radius: 30px;
    
    font-size: 15px;
    font-weight: 700;
    text-decoration: none;
    
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    cursor: pointer;

    /* 아이콘 색상 상속 */
    svg {
        fill: #1976d2;
        transition: fill 0.3s ease;
    }

    &:hover {
        background: #1976d2;
        color: white;
        box-shadow: 0 4px 12px rgba(25, 118, 210, 0.3);
        transform: translateY(-2px);

        svg {
            fill: white;
        }
    }
`;

const DownloadIcon = styled.svg`
    width: 18px;
    height: 18px;
    fill: currentColor;
    margin-right: 8px;
`;

export default PublicEn;