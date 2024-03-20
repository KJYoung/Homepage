import styled from "styled-components"
import YouTube from "react-youtube";
import { ARXIV_ICON_URL, YOUTUBE_ICON_URL } from "../../DATA/Public_URL"
import { FlexColumnStartCenter, FlexColumnStartCenterNotFull, FlexRowCenter } from "../../customs/Divs"
import { H3, SPAN } from "../../customs/Spans"
import { CustomToggle } from "../../customs/CustomToggle";
import { useEffect, useState } from "react";
import { BasicDIV } from "../../customs/Basics";
import { useDispatch } from "react-redux";
import { TabState, coreActions } from "../../store/slices/core";
import { JunwonSeo, JunyoungKim } from "../public/PublicationContents";

const IconImg = styled.img`
    max-width: 36px;
    max-height: 36px;
    margin: 16px;
    cursor: pointer;
`;
export const EvidentialSemanticMapping = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(coreActions.setTab({selectedTab: TabState.PROJECTS}));
    }, [dispatch]);
    const [isShortVideo, setIsShortVideo] = useState<boolean>(false);
    const YoutubeOption = {
        height: '315',
        width: '560',
        playerVars: {
            autoplay: 1,
        },
    };
    return <FlexColumnStartCenter>
        {/* TITLE */}
        <FlexRowCenter marginTop="40px">
            <H3>
                Evidential Semantic Mapping in Off-road Environments with Uncertainty-aware Bayesian Kernel Inference
            </H3>
        </FlexRowCenter>
        {/* AUTHOR */}
        <FlexRowCenter marginTop="20px">
            <SPAN className="clickable" onClick={() => window.open(JunyoungKim.url, '_blank')}>Junyoung Kim</SPAN>
            <SPAN marginRight="5px">*, </SPAN> 
            <SPAN className="clickable" onClick={() => window.open(JunwonSeo.url, '_blank')}>Junwon Seo</SPAN>
            <SPAN marginRight="5px">*, </SPAN> 
            <SPAN>Jihong Min</SPAN>   
        </FlexRowCenter>
        {/* ICONS */}
        <FlexRowCenter marginTop="0px">
            <IconImg src={ARXIV_ICON_URL} />
            <IconImg src={YOUTUBE_ICON_URL} />
        </FlexRowCenter>
        <FlexRowCenter marginBottom="15px">
            <CustomToggle toggleState={isShortVideo} onText="1 min" offText="5 min" onToggle={() => { setIsShortVideo(iSV => !iSV) }} width={'120px'} />
        </FlexRowCenter>
        {/* <FlexColumnStartCenter style={{pointerEvents: 'none'}} className="no-select"> */}
        <FlexColumnStartCenterNotFull position="relative" borderRadius="16px" className="no-select" padding="15px" backgroundColor={isShortVideo ? "youtube-mode-one" : "youtube-mode-two"}>
            {isShortVideo ? 
                <YouTube videoId="91ct6I_8iXg" opts={YoutubeOption} id="video" style={{zIndex: 2}}/> :
                <YouTube videoId="5cYY5c25GqE" opts={YoutubeOption} id="video" style={{zIndex: 2}}/> 
            }
            <Overlay margin="15px" />
        </FlexColumnStartCenterNotFull>
        <FlexRowCenter>
            Work In Progress...
        </FlexRowCenter>
    </FlexColumnStartCenter>
}

export const Overlay = styled(BasicDIV)`
  position: absolute;
  top: 0;
  left: 0;
  width: 560px;
  height: 315px;
  background-color: black;
  opacity: 1.0; /* Adjust opacity as needed */
  z-index: 1; /* Ensure overlay is above other content */
`;