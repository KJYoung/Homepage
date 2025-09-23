import { FlexColumnStartCenter, FlexColumnStartCenterNotFull, FlexRowCenter, FlexRowStart } from "../../customs/Divs"
import { H1, H3, SPAN } from "../../customs/Spans"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TabState, coreActions } from "../../store/slices/core";
import { DSTEvSemMapObj, EvSemMapObj, JunwonSeo, JunyoungKim } from "./PublicationContents";
import { ARXIV_ICON_URL, EXTERNAL_ICON_URL, GITHUB_ICON_URL, PUB3_FRAMEWORK_URL, PUB3_RES1_URL, PUB3_RES2_URL } from "../../DATA/Public_URL";
import styled from "styled-components";
import { BibTexContent, BibTexSection, IconImg } from "./CommonStyles";
import { TagBubble } from "../../customs/TagBubbleStatic";
import { getSTRRandomHex } from "../../utils/Color";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonChalkboard } from "@fortawesome/free-solid-svg-icons";
import { useDesktopViewport } from "../../hooks/useDesktopViewport";

export const DSTEvSemMapping = () => {
    useDesktopViewport(1280);
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
            <IconImg src={GITHUB_ICON_URL} onClick={() => window.open('https://github.com/junwon-vision/EvSemMap', '_blank')} />
        </FlexRowCenter>

        {/* Additional Materials */}
        <FlexRowCenter marginTop="0px">
            <TagBubble className="clickable" padding="16px 15px" onClick={() => window.open(DSTEvSemMapObj.slideURL!, '_blank')} color={getSTRRandomHex('Spot')}>
                <FontAwesomeIcon icon={faPersonChalkboard} fontSize={18}/>
                <SPAN marginLeft="8px">Slides</SPAN>
            </TagBubble>
            <TagBubble className="clickable" padding="16px 15px" onClick={() => window.open(DSTEvSemMapObj.posterURL!, '_blank')} color={getSTRRandomHex('Poster')}>
                <FontAwesomeIcon icon={faPersonChalkboard} fontSize={18}/>
                <SPAN marginLeft="8px">Poster</SPAN>
            </TagBubble>
        </FlexRowCenter>

        {/* Additional Information */}
        <FlexRowCenter marginTop="10px" marginBottom="0px">
            <SPAN fontSize="20px" color="hp-black" fontWeight="700">For more information, refer to our previous work</SPAN>
            <IconImg src={EXTERNAL_ICON_URL} onClick={() => navigate(EvSemMapObj.hpURL!)} className="clickable small" />
        </FlexRowCenter>

        <FlexColumnStartCenter marginTop="5px" marginBottom="15px">
            <FlexRowCenter marginTop="0px" marginBottom="5px">
                <SPAN fontSize="20px" color="hp-purple" fontWeight="700">Accepted to ICRA 2024 Workshop on Resilient Off-road Autonomy</SPAN>
                <IconImg src={EXTERNAL_ICON_URL} onClick={() => window.open('https://theairlab.org/icra2024_offroad_workshop/', '_blank')} className="clickable small" />
            </FlexRowCenter>
            <TagBubble padding="2px 20px" color={getSTRRandomHex('Spot')}>Spotlight Talk 4/22 (18%)</TagBubble>
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