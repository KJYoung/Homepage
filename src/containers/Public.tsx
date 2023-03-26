import styled from "styled-components";
import { LinkSpan } from "../components/LinkSpan";

const Public = () => {
    return <div>
        <EducationDiv>
            <h2>Education</h2>
            <span>2017.03 ~ 2019.02 한성과학고등학교 조기졸업</span>
            <span>2019.03 ~ 2023.02 서울대학교 졸업(생명과학부, 컴퓨터공학부 복수전공)</span>
        </EducationDiv>
        <InternshipDiv>
            <h2>Internship</h2>
            <NormalSpan>
                <span>2020.Winter. Laboratory of Development & Disease Modeling @SNU Biology department, Prof. 공영윤</span>
            </NormalSpan>
            <NormalSpan>
                <span>2021.Summer. @SNU Biology department, Prof. 김형</span>
                <LinkSpan content="[Cognitive Circuitry Lab]" targetUrl="https://cocila.net/"/>
            </NormalSpan>
            <NormalSpan>
                <span>2021.Winter, 2022.Spring, 2022.Summer. @SNU Biology department, Prof. Martin Steinegger</span>
                <LinkSpan content="[Steinegger Lab]" targetUrl="https://steineggerlab.com/"/>
            </NormalSpan>
            <NormalSpan>
                <span>2022.Fall. @SNU CSE department, Prof. 이광근</span>
                <LinkSpan content="[Programming Research Laboratory (ROPAS)]" targetUrl="http://ropas.snu.ac.kr/"/>
            </NormalSpan>
        </InternshipDiv>
        <PublicationDiv>
            <h2>Publication</h2>
            <NormalSpan>
                <span>2020. Analysis of Factors Causing Differences in the Human Hazards of Permetrin</span>
                <LinkSpan content="자세히보기" targetUrl="https://www.jeaht.org/upload/pdf/jeaht-23-4-171.pdf"/>
            </NormalSpan>
        </PublicationDiv>
        <DevelopmentDiv>
            <h2>Development</h2>
            <NormalSpan>Fluent Programming Language(or Framework, Library)</NormalSpan>
            <NormalSpan>Java(+Android App Dev), Python(+Django), C, C++, TypeScript(+ReactJS)</NormalSpan>
            <NormalSpan>Programming Language I've ever tried</NormalSpan>
            <NormalSpan>Verilog, OCaml, RISC-V Assembly, C#, Dart, ReScript</NormalSpan>
            <NormalSpan>Projects</NormalSpan>
            <LinkSpan content="2022 Fall Semester FitTogether Team Project" targetUrl="https://github.com/swsnu/swppfall2022-team4/"/>

        </DevelopmentDiv>
        <ArtDiv>
            <h2>Art</h2>
        </ArtDiv>
    </div>
};

const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    h2 {
        font-size: 20px;
        font-weight: 500;
    };
    > span {
        margin-left: 10px;
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

const NormalSpan = styled.div`
  display: flex;
  > span {
    margin-left: 10px;
    margin-right: 5px;
  }
`;
export default Public;