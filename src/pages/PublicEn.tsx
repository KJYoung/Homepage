import styled from "styled-components";
import { H1, H2, H3, LinkSpan, SPAN } from "../customs/Spans";
import { ExtensibleSPAN } from "./Public";
import { PORTRAIT_URL } from "../DATA/Public_URL";
import { notificationSuccess } from "../utils/sendNoti";
import { useNavigate } from "react-router-dom";

export const DOCUMENT_ROOT = process.env.PUBLIC_URL + "/document/";

const PublicEn = () => {
    const navigate = useNavigate();
    return <PublicWrapper>
        <GeneralDiv>
            <GeneralMainDiv>
                <GeneralTextWrapper>
                    <H2>Junyoung Kim</H2>
                    I'm a Robotics&Computer Vision researcher at ADD.
                    <br />
                    (Work In Progress...)
                </GeneralTextWrapper>
                <Portrait src={PORTRAIT_URL} alt="imgElement"/>
            </GeneralMainDiv>
            <ContactInfoDiv>
                <a href="mailto:jykim157@snu.ac.kr">Send Email</a>
                |
                <span onClick={() => {
                    navigator.clipboard.writeText("jykim157@snu.ac.kr");
                    notificationSuccess('EMAIL', "Email Address was copied to your clipboard")
                }} className="link">Copy Email</span>
                |
                <a href="https://github.com/KJYoung">Github</a>
                |
                <a href="https://www.linkedin.com/in/kim-junyoung">LinkedIn</a>
                |
                <a href="https://scholar.google.co.kr/citations?user=w2JODm8AAAAJ&hl=en&oi=sra">Google Scholar</a>
            </ContactInfoDiv>
        </GeneralDiv>
        <EducationDiv>
            <H1>Education & Research & Career</H1><BR />
            <H3 marginLeft='10px'>History</H3>
            <SPAN marginLeft='20px'>
                <span className="bold">2019.03 ~ 2023.02 Seoul National University(SNU)</span>
                <br/>
                &nbsp;&nbsp; Double Major(BioScience,Computer Science&Engineering)
                <br/>
                &nbsp;&nbsp; 4.17/4.30, Summa Cum Laude(2nd/40)
            </SPAN>
            
            <SPAN marginLeft='20px'>
                <span className="bold">2023.04 ~ 2026.05 Agency for Defense Development(ADD)</span>
                <br/>
                &nbsp;&nbsp; Research Officer for National Defense(ROND)
            </SPAN>
            <H3 marginLeft='10px' marginTop="15px">Subjects</H3>
            <SPAN marginLeft='20px'>
                <span className="bold">CSE</span>: Computer Vision, Robotics, Artificial Intelligence, Uncertainty</SPAN>
            <SPAN marginLeft='20px'>
                <span className="bold">BIO</span>: BioInformatics, NeuroScience, cryo-EM, cryo-ET</SPAN>
        </EducationDiv>
        <PublicationDiv>
            <H2 onClick={() => { navigate('/Projects/'); }}>Publication</H2><BR />
                <SPAN marginLeft='30px'>2020. Analysis of Factors Causing Differences in the Human Hazards of Permetrin</SPAN>
                <RightAlignDiv>
                    <LinkSpan content="[Paper Link]" targetUrl="https://www.jeaht.org/upload/pdf/jeaht-23-4-171.pdf"/>
                </RightAlignDiv>
        </PublicationDiv>
        <ProjectsDiv>
            <H2 onClick={() => { navigate('/Projects/'); }}>Projects</H2><BR />
            <ExtensibleSPAN content={<>
                <SPAN marginLeft='20px'>2022 Fall Semester FitTogether Team Project</SPAN>
            </>} extContent={<FlexBox>
                <RightAlignDiv>
                    <LinkSpan marginLeft='20px' content="[Github Repo]" targetUrl="https://github.com/swsnu/swppfall2022-team4/"/>
                </RightAlignDiv>
            </FlexBox>}/>
            <ExtensibleSPAN content={<>
                <SPAN marginLeft='20px'>2021 miliTECH Challenge Team Project</SPAN>
            </>} extContent={<FlexBox>
                <SPAN marginLeft='30px'>감시 정찰을 위한 딥러닝 기반 표적 인식 알고리즘 연구, 과학기술정보통신부 장관상</SPAN>
                <SPAN marginLeft='30px'>Adversarial AI.</SPAN>
                <RightAlignDiv>
                    <LinkSpan marginLeft='20px' content="[Awards PDF]" targetUrl={DOCUMENT_ROOT + "miliTECH_Award.pdf"}/>
                </RightAlignDiv>
            </FlexBox>}/>
        </ProjectsDiv>
        <InternshipDiv>
            <H2>Internship</H2><BR />
            <ExtensibleSPAN content={<>
                <SPAN marginLeft='20px'>2022.Fall. @SNU CSE, Prof. Kwangkeun Yi</SPAN>
            </>} extContent={<FlexBox>
                <SPAN marginLeft='30px'>About Rescript Type System, GenType</SPAN>
                <RightAlignDiv>
                    <LinkSpan content="[Programming Research Laboratory (ROPAS)]" targetUrl="https://ropas.snu.ac.kr/~kwang/"/>
                </RightAlignDiv>
            </FlexBox>}/>
            <ExtensibleSPAN content={<>
                <SPAN marginLeft='20px'>2021.Winter~2022.Summer. @SNU Biology, Prof. Martin Steinegger</SPAN>
            </>} extContent={<FlexBox>
                <SPAN marginLeft='30px'>Construct the docker images for the integrated CryoET analyses.</SPAN>
                <SPAN marginLeft='30px'>Transplant warp partially into linux. Warp : Based on C# .NET framework.</SPAN>
                <SPAN marginLeft='30px'>Improve the existing denoiser for cryoEM/ET images.</SPAN>
                <RightAlignDiv>
                    <LinkSpan content="[Steinegger Lab]" targetUrl="https://steineggerlab.com/"/>
                </RightAlignDiv>
            </FlexBox>}/>
            <SPAN marginLeft='20px'>2021.Summer. @SNU Biology, Prof. Hyoung F. Kim</SPAN>
            <SPAN marginLeft='20px'>2020.Winter. @SNU Biology, Prof. Young-Yun Kong</SPAN>
        </InternshipDiv>
        <DevelopmentDiv>
            <H2>Development</H2><BR />
            <H3 marginLeft='10px'>Fluent Programming Language(or Framework, Library)</H3>
            <SPAN marginLeft='20px'>Java(+Android App), Python(+Django), C, C++, TypeScript(+React, React Native), NodeJS</SPAN>
            <H3 marginLeft='10px'>Programming Languages I've tried</H3>
            <SPAN marginLeft='20px'>Verilog, OCaml, RISC-V Assembly, C#(+DotNet Framework), Dart(+Flutter), ReScript, R, Matlab Scripts</SPAN>
        </DevelopmentDiv>
    </PublicWrapper>
};

const Portrait = styled.img`
    border-radius: 20px;
    border: 1px solid black;
    width: 185px;
    max-height: 480px;
`;

const PublicWrapper = styled.div`
    width: 850px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > div {
        width: 100%;
    };

    a, .link {
        color: var(--hp-blue);
        cursor: pointer;
    };
`;
const FlexBox = styled.div`
    background-color: var(--hp-back-darker);
    
    margin-left: 15px;
    padding: 10px 10px 10px 10px;
    width: 100%;
    display: flex;
    flex-direction: column;

    border-radius: 8px;
`
const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    span {
        margin-bottom: 2px;
    }
    margin-bottom: 20px;
`
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
const GeneralTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
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
const EducationDiv = styled(ContentDiv)`
    margin-top: 10px;
    margin-bottom: 15px;
`;
const InternshipDiv = styled(ContentDiv)`
    
`;
const PublicationDiv = styled(ContentDiv)`

`;
const DevelopmentDiv = styled(ContentDiv)`

`;
const ProjectsDiv = styled(ContentDiv)`
    
`;
const RightAlignDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;

const BR = styled.div`
    width: 100%;
    border-bottom: 1px solid gray;
    margin-bottom: 10px;
`;

export default PublicEn;