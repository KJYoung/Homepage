import styled from "styled-components";
import { LinkSpan } from "../components/LinkSpan";

const Public = () => {
    return <div>
        <EducationDiv>
            <H2>Education</H2>
            <SPAN marginLeft='20px'>2017.03 ~ 2019.02 한성과학고등학교 조기졸업</SPAN>
            <SPAN marginLeft='20px'>2019.03 ~ 2023.02 서울대학교 졸업(생명과학부, 컴퓨터공학부 복수전공)</SPAN>
        </EducationDiv>
        <InternshipDiv>
            <H2>Internship</H2>
            <SPAN marginLeft='20px'>2020.Winter. Laboratory of Development & Disease Modeling @SNU Biology department, Prof. 공영윤</SPAN>
            <SPAN marginLeft='20px'>2021.Summer. @SNU Biology department, Prof. 김형</SPAN>
            <LinkSpan content="[Cognitive Circuitry Lab]" targetUrl="https://cocila.net/"/>
            <SPAN marginLeft='20px'>2021.Winter, 2022.Spring, 2022.Summer. @SNU Biology department, Prof. Martin Steinegger</SPAN>
            <LinkSpan content="[Steinegger Lab]" targetUrl="https://steineggerlab.com/"/>
            <SPAN marginLeft='20px'>2022.Fall. @SNU CSE department, Prof. 이광근</SPAN>
            <LinkSpan content="[Programming Research Laboratory (ROPAS)]" targetUrl="http://ropas.snu.ac.kr/"/>
        </InternshipDiv>
        <PublicationDiv>
            <H2>Publication</H2>
            <SPAN marginLeft='20px'>2020. Analysis of Factors Causing Differences in the Human Hazards of Permetrin</SPAN>
            <LinkSpan content="자세히보기" targetUrl="https://www.jeaht.org/upload/pdf/jeaht-23-4-171.pdf"/>
        </PublicationDiv>
        <DevelopmentDiv>
            <H2>Development</H2>
            <H3 marginLeft='10px'>Fluent Programming Language(or Framework, Library)</H3>
            <SPAN marginLeft='20px'>Java(+Android App Dev), Python(+Django), C, C++, TypeScript(+ReactJS)</SPAN>
            <H3 marginLeft='10px'>Programming Language I've ever tried</H3>
            <SPAN marginLeft='20px'>Verilog, OCaml, RISC-V Assembly, C#, Dart, ReScript</SPAN>
            <H3 marginLeft='10px'>Projects</H3>
            <LinkSpan content="2022 Fall Semester FitTogether Team Project" targetUrl="https://github.com/swsnu/swppfall2022-team4/"/>
        </DevelopmentDiv>
        <ArtDiv>
            <H2>Art</H2>
        </ArtDiv>
    </div>
};

const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    span {
        margin-bottom: 2px;
    }
`
const EducationDiv = styled(ContentDiv)`

`;

const InternshipDiv = styled(ContentDiv)`
    
`;
const PublicationDiv = styled(ContentDiv)`

`;
const DevelopmentDiv = styled(ContentDiv)`

`;
const ArtDiv = styled(ContentDiv)`
    
`;

interface IPropsSPAN {
    marginLeft?: string;
    marginRight?: string;
    marginTop?: string;
    marginBottom?: string;
};
const SPAN = styled.span<IPropsSPAN>`
    margin-left: ${({ marginLeft }) => marginLeft};
    margin-right: ${({ marginRight }) => marginRight};
    margin-top: ${({ marginTop }) => marginTop};
    margin-bottom: ${({ marginBottom }) => marginBottom};
`;

const H2 = styled(SPAN)`
    font-size: 23px;
    font-weight: 600;
`;
const H3 = styled(SPAN)`
    font-size: 20px;
    font-weight: 500;
`;
export default Public;