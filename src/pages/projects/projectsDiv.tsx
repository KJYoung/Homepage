import { H2, LinkSpan, SPAN } from "../../customs/Spans";
import { DOCUMENT_ROOT, PublicBR } from "../MainPage";
import { TagBubble } from "../../customs/TagBubbleStatic";
import { getSRandomHex } from "../../utils/Color";
import { FlexColumnStart, FlexRowEnd } from "../../customs/Divs";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BasicDIV } from "../../customs/Basics";
import { useState } from "react";

interface IPropsExtensibleSPAN {
    content: JSX.Element;
    extContent: JSX.Element;
};

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

export const ExtensibleSPAN = ({ content, extContent } : IPropsExtensibleSPAN) => {
    const [extended, setExtended] = useState(false);

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

export const ProjectsDiv = () => {
    const navigate = useNavigate();

    return <FlexColumnStart marginTop="20px" marginBottom="20px">
        <H2 onClick={() => { navigate('/Projects/'); }}>Projects</H2>
        <PublicBR />

        <ExtensibleSPAN content={<>
            <SPAN fontWeight="600" marginLeft='20px'>2024 LLM Hackathon @ FriendliAI</SPAN>
            <TagBubble color={getSRandomHex(13)}>Grand Prize (1st out of 13 teams)</TagBubble>
        </>} extContent={<FlexColumnStart backgroundColor="hp-back-darker" padding="10px" borderRadius="8px">
            <SPAN marginLeft='30px'>Knowledge Graph AI: we built a RAG (Retrieval-Augmented Generation) model to simplify the identification and study of a vast array of artificial intelligence papers by concept, using a combination of knowledge graphs and large language models (LLMs).</SPAN>
            <FlexRowEnd marginTop='5px' backgroundColor="transparent">
                <LinkSpan marginLeft='20px' content="[Github Repo]" targetUrl="https://github.com/KJYoung/KnowledgeGraphAI/"/>
                <LinkSpan marginLeft='20px' content="[LinkedIn Post1]" targetUrl="https://www.linkedin.com/posts/friendliai_friendliai-friendliaihackathon-friendli-activity-7201442148292943875-tvQh?utm_source=share&utm_medium=member_desktop"/>
                <LinkSpan marginLeft='20px' content="[LinkedIn Post2]" targetUrl="https://www.linkedin.com/posts/kim-junyoung_friendliai-llm-hackathon-activity-7200682031083577346-mrOy?utm_source=share&utm_medium=member_desktop"/>
                <LinkSpan marginLeft='20px' content="[Official X Post]" targetUrl="https://x.com/friendliai/status/1795676942617952276"/>
            </FlexRowEnd>
        </FlexColumnStart>}/>
        <ExtensibleSPAN content={<>
            <SPAN fontWeight="600" marginLeft='20px'>2022 Fall Semester FitTogether Team Project</SPAN>
        </>} extContent={<FlexColumnStart backgroundColor="hp-back-darker" padding="10px" borderRadius="8px">
            <FlexRowEnd marginTop='5px' backgroundColor="transparent">
                <LinkSpan marginLeft='20px' content="[Github Repo]" targetUrl="https://github.com/swsnu/swppfall2022-team4/"/>
            </FlexRowEnd>
        </FlexColumnStart>}/>
        <ExtensibleSPAN content={<>
            <SPAN fontWeight="600" marginLeft='20px'>2021 miliTECH Challenge Team Project</SPAN>
            <TagBubble color={getSRandomHex(13)}>Ministerial Award (1st out of 6 teams)</TagBubble>
        </>} extContent={<FlexColumnStart backgroundColor="hp-back-darker" padding="10px" borderRadius="8px">
            <SPAN marginLeft='30px'>감시 정찰을 위한 딥러닝 기반 표적 인식 알고리즘 연구, 과학기술정보통신부 장관상</SPAN>
            <SPAN marginLeft='30px'>Adversarial AI.</SPAN>
            <FlexRowEnd marginTop='5px' backgroundColor="transparent">
                <LinkSpan marginLeft='20px' content="[Awards PDF]" targetUrl={DOCUMENT_ROOT + "miliTECH_Award.pdf"}/>
            </FlexRowEnd>
        </FlexColumnStart>}/>
    </FlexColumnStart>
}