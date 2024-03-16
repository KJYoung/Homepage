import { useState } from "react";
import styled from "styled-components";
import { H2, H3, LinkSpan, SPAN } from "../customs/Spans";
import { D_Day_Calculator, D_Day_Percent_Calculator, Reverse_D_Day_Calculator } from "../utils/TimeCal";
import { BasicDIV } from "../customs/Basics";

export const DOCUMENT_ROOT = process.env.PUBLIC_URL + "/document/";

interface IPropsExtensibleSPAN {
    content: JSX.Element;
    extContent: JSX.Element;
};

export const ExtensibleSPAN = ({ content, extContent } : IPropsExtensibleSPAN) => {
    const [extended, setExtended] = useState(false);

    const ExtensibleSPANWrapper = styled(BasicDIV)`
        width: 100%;
        display: flex;
        flex-direction: column;
    `;
    const ExtensibleSPANTitle = styled.div`
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;
    `;
    const ExtensibleBtn = styled.span`
        color: var(--hp-blue);
        cursor: pointer;
        &:active {
            color: var(--hp-blue-active);
        };

        -webkit-user-select: none; /* Safari */
        -ms-user-select: none; /* IE 10 and IE 11 */
        user-select: none; /* Standard syntax */

        font-size: 22px;
    `;
    const ExtensibleSPANBody = styled.div`
        width: 100%;
        display: flex;
        margin-top: 5px;
        margin-left: 5px;
        margin-bottom: 10px;
    `;
    return <ExtensibleSPANWrapper>
        <ExtensibleSPANTitle>
            {content}
            <ExtensibleBtn onClick={() => setExtended(!extended)}>{extended ? '▲' : '▼'}</ExtensibleBtn>
        </ExtensibleSPANTitle>
        {extended && <ExtensibleSPANBody>
                {extContent}
        </ExtensibleSPANBody>}
    </ExtensibleSPANWrapper>
}


const Public = () => {
    return <PublicWrapper>
        <EducationDiv>
            <H2>Education & Research & Career</H2><BR />
            <H3 marginLeft='10px'>History</H3>
            <SPAN marginLeft='20px'>
                <span className="bold">2017.03 ~ 2019.02 </span>
                한성과학고등학교 조기졸업
            </SPAN>

            <ExtensibleSPAN content={<>
                <SPAN marginLeft='20px'>
                    <span className="bold">2019.03 ~ 2023.02 </span>
                    서울대학교 졸업(생명과학부, 컴퓨터공학부 복수전공)
                </SPAN>
            </>} extContent={<FlexBox>
                <SPAN marginLeft='30px' fontWeight={800}>[BIO] BioScience Subjects</SPAN>
                <SPAN marginLeft='40px'>- 세포생물학, 생화학(1,2), 유전학, 분자생물학, 조직세포학, 생물다양성과 환경, 현대식물학, 신경생물학, 생물정보학개론, 생물공학</SPAN>
                <SPAN marginLeft='40px'>- 생명과학전공실험(1,2), 생명과학연구실습(1,2,4), 생명과학특수연구(1)</SPAN>
                <SPAN marginLeft='30px' fontWeight={800}>[CSE] Computer Science & Engineering Subjects</SPAN>
                <SPAN marginLeft='40px'>- 자료구조, 프로그래밍연습, 이산수학, 논리설계, 전기전자회로, 컴퓨터구조, 알고리즘, 컴퓨터모델링, 컴퓨터프로그래밍, 프로그래밍언어, 시스템프로그래밍, 딥러닝의 기초, 운영체제, 소프트웨어 개발의 원리와 실습</SPAN>
                <SPAN marginLeft='40px'>- 공학연구의 실습(1)</SPAN>
                <SPAN marginLeft='40px'>- 선형대수학, 인공지능 이론 및 응용 세미나, 심층신경망의 수학적 기초</SPAN>
                <SPAN marginLeft='30px' fontWeight={800}>[Summary]</SPAN>
                <SPAN marginLeft='40px'>- 4.17/4.30, Summa Cum Laude(최우등졸업), 차석 졸업</SPAN>
            </FlexBox>}/>
            
            <SPAN marginLeft='20px'>
                <span className="bold">2023.04 ~ 2026.05 </span>
                과학기술전문사관 복무
            </SPAN>
            <SPAN marginLeft='20px'>{D_Day_Calculator(2026, 5, 31)}, {Reverse_D_Day_Calculator(2026, 5, 31)}, {D_Day_Percent_Calculator(2026, 5, 31)}</SPAN>
            <H3 marginLeft='10px' marginTop="15px">Subjects</H3>
            <SPAN marginLeft='20px'>BioScience, Computer Science & Engineering.</SPAN>
        </EducationDiv>
        <InternshipDiv>
            <H2>Internship</H2><BR /> 
            
            <ExtensibleSPAN content={<>
                <SPAN marginLeft='20px'>2020.Winter. @SNU Biology, Prof. 공영윤</SPAN>
            </>} extContent={<FlexBox>
                <SPAN marginLeft='30px'>Learn basic techniques.</SPAN>
                <SPAN marginLeft='30px'>Genotyping; Cre-loxP construct</SPAN>
                <SPAN marginLeft='30px'>Grip Strength, EMG, western blot, FACS, H&E staining & IHC, qRT-PCR</SPAN>
                <SPAN marginLeft='30px'>IV injection, ICV injection, Mouse anatomy</SPAN>
                <RightAlignDiv>
                    <LinkSpan content="[Laboratory of Development & Disease Modeling]" targetUrl="https://biosci.snu.ac.kr/labdnd"/>
                </RightAlignDiv>
            </FlexBox>}/>
            
            <ExtensibleSPAN content={<>
                <SPAN marginLeft='20px'>2021.Summer. @SNU Biology, Prof. 김형</SPAN>
            </>} extContent={<FlexBox>
                <SPAN marginLeft='30px'>Modify the program(blip) to make the electric current output (C++)</SPAN>
                <SPAN marginLeft='30px'>Basal Ganglia, Superior colliculus related Neural Circuits</SPAN>
                <RightAlignDiv>
                    <LinkSpan content="[Cognitive Circuitry Lab]" targetUrl="https://cocila.net/"/>
                </RightAlignDiv>
            </FlexBox>}/>

            <ExtensibleSPAN content={<>
                <SPAN marginLeft='20px'>2021.Winter,<br/>2022.Spring,<br/>2022.Summer. @SNU Biology, Prof. Martin Steinegger</SPAN>
            </>} extContent={<FlexBox>
                <SPAN marginLeft='30px'>Construct the docker images for the integrated CryoET analyses.</SPAN>
                <SPAN marginLeft='30px'>Transplant warp partially into linux. Warp : Based on C# .NET framework.</SPAN>
                <SPAN marginLeft='30px'>Improve the existing denoiser for cryoEM/ET images.</SPAN>
                <RightAlignDiv>
                    <LinkSpan content="[Steinegger Lab]" targetUrl="https://steineggerlab.com/"/>
                </RightAlignDiv>
            </FlexBox>}/>

            <ExtensibleSPAN content={<>
                <SPAN marginLeft='20px'>2022.Fall. @SNU CSE, Prof. 이광근</SPAN>
            </>} extContent={<FlexBox>
                <SPAN marginLeft='30px'>About Rescript Type System, GenType</SPAN>
                <RightAlignDiv>
                    <LinkSpan content="[Programming Research Laboratory (ROPAS)]" targetUrl="http://ropas.snu.ac.kr/"/>
                </RightAlignDiv>
            </FlexBox>}/>

        </InternshipDiv>
        <PublicationDiv>
            <H2>Publication</H2><BR />
            <ExtensibleSPAN content={<>
                <SPAN marginLeft='20px'>2020. Analysis of Factors Causing Differences in the Human Hazards of Permetrin</SPAN>
            </>} extContent={<FlexBox>
                <SPAN marginLeft='30px'>Author: 김준영, 조수남</SPAN>
                <RightAlignDiv>
                    <LinkSpan content="[Paper Link]" targetUrl="https://www.jeaht.org/upload/pdf/jeaht-23-4-171.pdf"/>
                </RightAlignDiv>
            </FlexBox>}/>
        </PublicationDiv>
        <DevelopmentDiv>
            <H2>Development</H2><BR />
            <H3 marginLeft='10px'>Fluent Programming Language(or Framework, Library)</H3>
            <SPAN marginLeft='20px'>Java(+Android App), Python(+Django), C, C++, TypeScript(+React, React Native), NodeJS</SPAN>
            <H3 marginLeft='10px'>Programming Language I've ever tried</H3>
            <SPAN marginLeft='20px'>Verilog, OCaml, RISC-V Assembly, C#(+DotNet Framework), Dart(+Flutter), ReScript, R, Matlab Scripts</SPAN>
            <H3 marginLeft='10px'>Projects</H3>
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
        </DevelopmentDiv>
        <ArtDiv>
            <H2>Art</H2><BR />
            <SPAN marginLeft='20px'>Not Yet</SPAN>
        </ArtDiv>
    </PublicWrapper>
};

const PublicWrapper = styled.div`
    width: 100%;
    padding-left: 20%;
    padding-right: 20%;
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
const ArtDiv = styled(ContentDiv)`
    
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
export default Public;