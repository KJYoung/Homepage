import styled from "styled-components";
import { H1, H2, H3, H4, H5, LinkSpan, SPAN } from "../../customs/Spans";
import { ExtensibleSPAN } from "../PublicDep";
import { PORTRAIT_URL } from "../../DATA/Public_URL";
import { notificationSuccess } from "../../utils/sendNoti";
import { useNavigate } from "react-router-dom";
import { PublicationWrapperDiv } from "../publications/PublicationContents";
import { BR } from "../../customs/Basics";
import { FlexColumnStart, FlexRowEnd, FlexRowSpaceBetweenEnd, FlexRowStart } from "../../customs/Divs";
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

    const CVGoogleLinkID = "1He4LMy3hCk1oDAhF1IpDxeVqaDmigsoN";
    return <PublicWrapper>
        <GeneralDiv>
            <GeneralMainDiv>
                <FlexColumnStart>
                    <H2 marginBottom="12px">Junyoung Kim</H2>
                    <br />
                    <SPAN marginRight="10px">I am a Robotics & Computer Vision researcher at Agency for Defense Development (ADD) in the South Korea.</SPAN>
                    <br />
                    <SPAN fontWeight="700" marginRight="10px">Research Interests</SPAN>
                    <SPAN marginRight="10px" marginLeft="8px">✦ Uncertainty-aware Perception</SPAN>
                    <SPAN marginRight="10px" marginLeft="8px">✦ Robotic Mapping</SPAN>
                    <SPAN marginRight="10px" marginLeft="8px">✦ Open-Vocabulary Interaction</SPAN>
                    <SPAN marginRight="10px" marginLeft="8px">✦ Active Perception</SPAN>
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
                <a href={`https://drive.google.com/file/d/${CVGoogleLinkID}/view?usp=sharing`}>CV</a>
                |
                <a href="https://www.linkedin.com/in/kim-junyoung">LinkedIn</a>
                |
                <a href="https://scholar.google.co.kr/citations?user=w2JODm8AAAAJ&hl=en&oi=sra">Google Scholar</a>
            </ContactInfoDiv>
        </GeneralDiv>
        <FlexColumnStart marginBottom="20px">
            <H1>Profile</H1>
            <PublicBR />
            <H3 marginLeft='10px' marginBottom="4px">History</H3>
            <H5 marginLeft='20px' lineHeight={1.2}>✅ 2017.03 ~ 2019.02 Hansung Science High School (HSHS) - High School</H5>
            <H5 marginLeft='20px' lineHeight={1.2}>✅ 2019.03 ~ 2023.02 Seoul National University (SNU) - Bachelor</H5>
            <SPAN marginLeft='40px' lineHeight={1.2}>
                ✦ <SPAN fontWeight="600">Double Major</SPAN> (BioScience, Computer Science&Engineering) 
                <br />
                ✦ <SPAN fontWeight="600">Summa Cum Laude</SPAN> (4.17/4.30; 2<SPAN fontSize="10px" verticalAlign="super">nd</SPAN>/40)]
                <br />
            </SPAN>
            <H5 marginLeft='20px' lineHeight={1.2}>🔄 2023.04 ~ 2026.05 Agency for Defense Development (ADD) - Military Service</H5>
            <SPAN marginLeft='40px' lineHeight={1.2}>
                ✦ Research Officer for National Defense (ROND)
            </SPAN>

            <FlexRowSpaceBetweenEnd>
                <H3 marginLeft='10px' marginBottom="4px" marginTop="20px">Interests</H3>
                <SPAN fontSize="13px" marginLeft='10px' marginBottom="4px" marginTop="20px"></SPAN>
            </FlexRowSpaceBetweenEnd>
            <ExtensibleSPAN content={<>
                <SPAN marginLeft='20px'>Current & Future Interests</SPAN>
            </>} extContent={<FlexRowStart marginLeft="35px" flexWrap="wrap">
                <TagBubble color={getSRandomHex(0)}>Computer Vision</TagBubble>
                <TagBubble color={getSRandomHex(1)}>Robotics</TagBubble>
                <TagBubble color={getSRandomHex(2)}>Uncertainty-aware *</TagBubble>
                <TagBubble color={getSRandomHex(3)}>Evidential Deep Learning</TagBubble>
                <TagBubble color={getSRandomHex(4)}>Active Perception</TagBubble>
                <TagBubble color={getSRandomHex(5)}>Semantic Segmentation</TagBubble>
                <TagBubble color={getSRandomHex(6)}>SLAM</TagBubble>
                <TagBubble color={getSRandomHex(7)}>Sensor Fusion</TagBubble>
                <TagBubble color={getSRandomHex(8)}>Multi-agent Collaboration</TagBubble>
                <TagBubble color={getSRandomHex(9)}>Off-road deployments</TagBubble>
            </FlexRowStart>}/>
            <ExtensibleSPAN content={<>
                <SPAN marginLeft='20px'>Past Interests</SPAN>
            </>} extContent={<FlexRowStart marginLeft="35px" flexWrap="wrap">
                <TagBubble color={getSRandomHex(101)}>BioInformatics</TagBubble>
                <TagBubble color={getSRandomHex(102)}>NeuroScience</TagBubble>
                <TagBubble color={getSRandomHex(103)}>cryoEM</TagBubble>
                <TagBubble color={getSRandomHex(104)}>cryoET</TagBubble>
            </FlexRowStart>}/>
        </FlexColumnStart>
        <PublicationWrapperDiv navigate={navigate} isDetail={false} />
        <ProjectsDiv />
        <InternshipDiv>
            <H2>Internship</H2>
            <PublicBR />
            <ExtensibleSPAN content={<>
                <SPAN marginLeft='20px'>2022.Fall. @SNU CSE, Prof. Kwangkeun Yi</SPAN>
            </>} extContent={<FlexBox>
                <SPAN marginLeft='30px'>About Rescript Type System, GenType</SPAN>
                <FlexRowEnd marginTop='5px' backgroundColor="transparent">
                    <LinkSpan content="[Programming Research Laboratory (ROPAS)]" targetUrl="https://ropas.snu.ac.kr/~kwang/"/>
                </FlexRowEnd>
            </FlexBox>}/>
            <ExtensibleSPAN content={<>
                <SPAN marginLeft='20px'>2021.Winter~2022.Summer. @SNU Biology, Prof. Martin Steinegger</SPAN>
            </>} extContent={<FlexBox>
                <SPAN marginLeft='30px'>Construct the docker images for the integrated CryoET analyses.</SPAN>
                <SPAN marginLeft='30px'>Transplant warp partially into linux. Warp : Based on C# .NET framework.</SPAN>
                <SPAN marginLeft='30px'>Improve the existing denoiser for cryoEM/ET images.</SPAN>
                <FlexRowEnd marginTop='5px' backgroundColor="transparent">
                    <LinkSpan content="[Steinegger Lab]" targetUrl="https://steineggerlab.com/"/>
                </FlexRowEnd>
            </FlexBox>}/>
            <SPAN marginLeft='20px'>2021.Summer. @SNU Biology, Prof. Hyoung F. Kim</SPAN>
            <SPAN marginLeft='20px'>2020.Winter. @SNU Biology, Prof. Young-Yun Kong</SPAN>
        </InternshipDiv>
        <FlexColumnStart>
            <H2>Development</H2>
            <PublicBR />
            <H4 marginLeft='10px' marginBottom='5px'>Fluent Programming Language(or Framework, Library)</H4>
            <SPAN marginLeft='20px' marginBottom='5px'>Java(+Android App), Python(+Django), C, C++, TypeScript(+React, React Native), NodeJS</SPAN>
            <H4 marginLeft='10px' marginBottom='5px'>Programming Languages I've tried</H4>
            <SPAN marginLeft='20px' marginBottom='5px'>Verilog, OCaml, RISC-V Assembly, C#(+DotNet Framework), Dart(+Flutter), ReScript, R, Matlab Scripts</SPAN>
        </FlexColumnStart>
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
const FlexBox = styled.div`
    background-color: var(--hp-back-darker);
    
    margin-left: 15px;
    padding: 10px 10px 10px 10px;
    width: 100%;
    display: flex;
    flex-direction: column;

    border-radius: 8px;
`;
const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    span {
        margin-bottom: 2px;
    }
    margin-bottom: 20px;
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

const InternshipDiv = styled(ContentDiv)`
    
`;

export default PublicEn;