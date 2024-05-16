import { FlexColumnStartCenter, FlexColumnStartCenterNotFull, FlexRowCenter, FlexRowStart } from "../../customs/Divs"
import { H1, H3, SPAN } from "../../customs/Spans"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TabState, coreActions } from "../../store/slices/core";
import { DSTEvSemMapObj, EvSemMapObj, JunwonSeo, JunyoungKim } from "../public/PublicationContents";
import { ARXIV_ICON_URL, PUB3_FRAMEWORK_URL, PUB3_RES1_URL, PUB3_RES2_URL } from "../../DATA/Public_URL";
import styled from "styled-components";
import { BibTexContent, BibTexSection, IconImg } from "./CommonStyles";
import { TagBubble } from "../../customs/TagBubbleStatic";
import { getSTRRandomHex } from "../../utils/Color";
import { useNavigate } from "react-router-dom";

export const DSTEvSemMapping = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(coreActions.setTab({selectedTab: TabState.PROJECTS}));
    }, [dispatch]);

    return <FlexColumnStartCenter>
        {/* TITLE */}
        <FlexRowCenter marginTop="40px" >
            <H1 fontSize="36px" marginLeft="120px" marginRight="120px">
                {DSTEvSemMapObj.title}
            </H1>
        </FlexRowCenter>
        {/* AUTHOR */}
        <FlexRowCenter marginTop="20px" padding="5px">
            <SPAN fontSize="20px" className="clickable" marginRight="12px" onClick={() => window.open(JunyoungKim.url, '_blank')}>Junyoung Kim,</SPAN>
            <SPAN fontSize="20px" className="clickable" onClick={() => window.open(JunwonSeo.url, '_blank')}>Junwon Seo</SPAN>
        </FlexRowCenter>
        {/* ICONS */}
        <FlexRowCenter marginTop="0px">
            <IconImg src={ARXIV_ICON_URL} onClick={() => window.open('https://arxiv.org/abs/2405.06265', '_blank')} />
        </FlexRowCenter>
        <FlexColumnStartCenter marginTop="0px">
            <TagBubble className="clickable-white" padding="2px 20px" onClick={() => navigate(EvSemMapObj.hpURL!)} color={getSTRRandomHex('DSTEv')}>For more information, refer to our previous work</TagBubble>
        </FlexColumnStartCenter>
        <FlexColumnStartCenter marginTop="10px">
            <FlexRowCenter>
                <H1 fontSize="32px">Abstract</H1>
            </FlexRowCenter>
            <FlexRowCenter marginTop="16px">
                <SPAN maxWidth="min(100%, 820px)" lineHeight={1.6} textAlign="justify">{DSTEvSemMapObj.abstract}</SPAN>
            </FlexRowCenter>
        </FlexColumnStartCenter>

        <FlexColumnStartCenter marginTop="50px">
            <FlexRowCenter marginBottom="20px">
                <H1 fontSize="32px">Our Framework</H1>
            </FlexRowCenter>
            <Pub3FrameworkImg src={PUB3_FRAMEWORK_URL} alt={"Framework Overview"} />
            <FlexRowCenter marginTop="16px">
                <SPAN maxWidth="min(100%, 1200px)" lineHeight={1.6} textAlign="justify">▲ {DSTEvSemMapObj.frameworkDescription}</SPAN>
            </FlexRowCenter>
        </FlexColumnStartCenter>
        <FlexColumnStartCenter marginTop="50px">
            <FlexRowCenter marginBottom="20px">
                <H1 fontSize="32px">Results</H1>
            </FlexRowCenter>
            <Pub3FrameworkImg src={PUB3_RES1_URL} alt={"Main Result"} />
            <FlexRowCenter marginTop="16px">
                <SPAN maxWidth="min(100%, 1200px)" lineHeight={1.6} textAlign="justify">▲ {DSTEvSemMapObj.mainResultDescription}</SPAN>
            </FlexRowCenter>
        </FlexColumnStartCenter>
        <FlexColumnStartCenter marginTop="50px">
            <Pub3FrameworkImg src={PUB3_RES2_URL} alt={"ZeroShot Result"} />
            <FlexRowCenter marginTop="16px">
                <SPAN maxWidth="min(100%, 1200px)" lineHeight={1.6} textAlign="justify">▲ {DSTEvSemMapObj.supResultDescription}</SPAN>
            </FlexRowCenter>
        </FlexColumnStartCenter>
        
        <FlexColumnStartCenterNotFull marginTop="30px" marginBottom="100px" width="min(100%, 1200px)">
            <FlexRowStart width="min(100%, 1200px)">
                <H3>BibTeX</H3>
            </FlexRowStart>
            <BibTexSection width="min(100%, 1200px)" marginTop="12px">
                <BibTexContent>{DSTEvSemMapObj.BibTeX}</BibTexContent>
            </BibTexSection>
        </FlexColumnStartCenterNotFull>

    </FlexColumnStartCenter>
}

const Pub3FrameworkImg = styled.img`
    max-width: min(100%, 1200px);
    border-radius: 20px;
    padding: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); /* Change the values as per your preference */
`;