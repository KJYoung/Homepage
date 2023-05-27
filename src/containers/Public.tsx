import { useState } from "react";
import styled from "styled-components";
import { LinkSpan } from "../components/LinkSpan";

export interface IPropsBasicCSS {
    marginLeft?: string;
    marginRight?: string;
    marginTop?: string;
    marginBottom?: string;
};

const BasicSPAN = styled.span<IPropsBasicCSS>`
    margin-left: ${({ marginLeft }) => marginLeft};
    margin-right: ${({ marginRight }) => marginRight};
    margin-top: ${({ marginTop }) => marginTop};
    margin-bottom: ${({ marginBottom }) => marginBottom};
`;
const SPAN = styled(BasicSPAN)``;
const BasicDIV = styled.span<IPropsBasicCSS>`
    margin-left: ${({ marginLeft }) => marginLeft};
    margin-right: ${({ marginRight }) => marginRight};
    margin-top: ${({ marginTop }) => marginTop};
    margin-bottom: ${({ marginBottom }) => marginBottom};
`;

interface IPropsExtensibleSPAN {
    content: JSX.Element;
    extContent: JSX.Element;
};
const ExtensibleSPAN = ({ content, extContent } : IPropsExtensibleSPAN) => {
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
    const D_Day_Calculator = (year: number, _month: number, day: number) => {
        const MS_TO_DAY = 1000 * 60 * 60 * 24;
        const _today = new Date();
        const today = new Date(_today.getFullYear(), _today.getMonth(), _today.getDate());
        const month = _month - 1;
        
        const target = new Date(year, month, day);
        if( today < target ){
            const result = Math.ceil( ( target.getTime() - today.getTime() ) / MS_TO_DAY );
            return `[D-Day : ${result}]`;
        } else {
            const result = Math.ceil( ( today.getTime() - target.getTime() ) / MS_TO_DAY );
            return `[${result} Days Before]`;
        }
    };
    const Reverse_D_Day_Calculator = (year: number, _month: number, day: number) => {
        // Assume : Today < [yy,_m_m, dd]
        const MS_TO_DAY = 1000 * 60 * 60 * 24;
        const _today = new Date();
        const today = new Date(_today.getFullYear(), _today.getMonth(), _today.getDate());
        const month = _month - 1;
        
        const target = new Date(year, month, day);
        const result = Math.ceil( ( target.getTime() - today.getTime() ) / MS_TO_DAY );
        today.setDate(today.getDate()-result);
        return today.toDateString();
    }
    return <div>
        <EducationDiv>
            <H2>Education & Research & Career</H2><BR />
            <H3 marginLeft='10px'>History</H3>
            <SPAN marginLeft='20px'>2017.03 ~ 2019.02 한성과학고등학교 조기졸업 {D_Day_Calculator(2019, 2, 1)}</SPAN>
            <SPAN marginLeft='20px'>2019.03 ~ 2023.02 서울대학교 졸업(생명과학부, 컴퓨터공학부 복수전공) {D_Day_Calculator(2023, 2, 24)}</SPAN>
            <SPAN marginLeft='20px'>2023.04 ~ 2026.05 과학기술전문사관 복무 {D_Day_Calculator(2026, 5, 31)}, {Reverse_D_Day_Calculator(2026, 5, 31)}</SPAN>
            <H3 marginLeft='10px'>Subjects</H3>
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
                <RightAlignDiv>
                    <LinkSpan content="[Paper Link]" targetUrl="https://www.jeaht.org/upload/pdf/jeaht-23-4-171.pdf"/>
                </RightAlignDiv>
            </FlexBox>}/>
        </PublicationDiv>
        <DevelopmentDiv>
            <H2>Development</H2><BR />
            <H3 marginLeft='10px'>Fluent Programming Language(or Framework, Library)</H3>
            <SPAN marginLeft='20px'>Java(+Android App Dev), Python(+Django), C, C++, TypeScript(+ReactJS)</SPAN>
            <H3 marginLeft='10px'>Programming Language I've ever tried</H3>
            <SPAN marginLeft='20px'>Verilog, OCaml, RISC-V Assembly, C#, Dart, ReScript</SPAN>
            <H3 marginLeft='10px'>Projects</H3>
            <ExtensibleSPAN content={<>
                <SPAN marginLeft='20px'>2022 Fall Semester FitTogether Team Project</SPAN>
            </>} extContent={<FlexBox>
                <RightAlignDiv>
                    <LinkSpan marginLeft='20px' content="[Github Repo]" targetUrl="https://github.com/swsnu/swppfall2022-team4/"/>
                </RightAlignDiv>
            </FlexBox>}/>
        </DevelopmentDiv>
        <ArtDiv>
            <H2>Art</H2><BR />
            <SPAN marginLeft='20px'>Not Yet</SPAN>
        </ArtDiv>
    </div>
};

const FlexBox = styled.div`
    background-color: var(--hp-back-darker);
    
    margin-left: 15px;
    padding: 8px 8px 8px 0px;
    width: 100%;
    display: flex;
    flex-direction: column;
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

const H2 = styled(SPAN)`
    font-size: 23px;
    font-weight: 600;
`;
const H3 = styled(SPAN)`
    font-size: 20px;
    font-weight: 500;
`;

const BR = styled.div`
    width: 100%;
    border-bottom: 1px solid gray;
    margin-bottom: 10px;
`;
export default Public;