import { FlexColumnStartCenter, FlexRowCenter } from "../../customs/Divs"
import { H1, SPAN } from "../../customs/Spans"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TabState, coreActions } from "../../store/slices/core";
import { DSTEvSemMapObj, JunwonSeo, JunyoungKim } from "../public/PublicationContents";

export const DSTEvSemMapping = () => {
    const dispatch = useDispatch();
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
            {/* <IconImg src={ARXIV_ICON_URL} onClick={() => window.open('https://arxiv.org/abs/2403.14138', '_blank')} /> */}
            {/* <IconImg src={YOUTUBE_ICON_URL} onClick={() => window.open('https://youtu.be/5cYY5c25GqE', '_blank')} /> */}
        </FlexRowCenter>
        <FlexColumnStartCenter marginTop="30px">
            <FlexRowCenter>
                <H1 fontSize="32px">Abstract</H1>
            </FlexRowCenter>
            <FlexRowCenter marginTop="16px">
                <SPAN maxWidth="min(100%, 820px)" lineHeight={1.6} textAlign="justify">{DSTEvSemMapObj.abstract}</SPAN>
            </FlexRowCenter>
        </FlexColumnStartCenter>
    </FlexColumnStartCenter>
}