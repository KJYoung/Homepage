import styled from "styled-components";
import { LinkSpan } from "../components/LinkSpan";

const Public = () => {
    return <div>
        <EducationDiv>
            <h2>Education</h2>
            <span>2017.03 ~ 2019.02 한성과학고등학교 조기졸업</span>
            <span>2019.03 ~ 2023.02 서울대학교 졸업(생명과학부, 컴퓨터공학부 복수전공)</span>
            <span>TBA.</span>
        </EducationDiv>
        <InternshipDiv>
            <h2>Internship</h2>
            <span>2020.Winter. Laboratory of Development & Disease Modeling @SNU Biology department, Prof. 공영윤</span>
            <span>2021.Summer. @SNU Biology department, Prof. 김형</span>
            <LinkSpan content="[Cognitive Circuitry Lab]" targetUrl="https://cocila.net/"/>
            <span>2021.Winter, 2022.Spring, 2022.Summer. @SNU Biology department, Prof. Martin Steinegger</span>
            <LinkSpan content="[Steinegger Lab]" targetUrl="https://steineggerlab.com/"/>
            <span>2022.Fall. @SNU CSE department, Prof. 이광근</span>
            <LinkSpan content="[Programming Research Laboratory (ROPAS)]" targetUrl="http://ropas.snu.ac.kr/"/>
        </InternshipDiv>
        <PublicationDiv>
            <h2>Publication</h2>
            <span>Analysis of Factors Causing Differences in the Human Hazards of Permetrin</span>
            <span>https://www.jeaht.org/upload/pdf/jeaht-23-4-171.pdf</span>
        </PublicationDiv>
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

`
export default Public;