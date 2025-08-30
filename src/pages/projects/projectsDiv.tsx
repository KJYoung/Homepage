import { H2, LinkSpan, SPAN } from "../../customs/Spans";
import { DOCUMENT_ROOT, PublicBR } from "../public/Public";
import { ExtensibleSPAN } from "../PublicDep";
import { TagBubble } from "../../customs/TagBubbleStatic";
import { getSRandomHex } from "../../utils/Color";
import { FlexColumnStart, FlexRowEnd } from "../../customs/Divs";
import { useNavigate } from "react-router-dom";

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