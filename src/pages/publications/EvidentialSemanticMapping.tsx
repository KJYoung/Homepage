import styled from "styled-components"
import YouTube from "react-youtube";
import { ARXIV_ICON_URL, PUB2_FRAMEWORK_URL, PUB2_SEM_VAR_OBJ, PUB2_RES1_URL, PUB2_RES2_URL, YOUTUBE_ICON_URL, GITHUB_ICON_URL, EXTERNAL_ICON_URL } from "../../DATA/Public_URL"
import { FlexColumnStartCenter, FlexColumnStartCenterNotFull, FlexRowCenter, FlexRowStart } from "../../customs/Divs"
import { H1, H3, SPAN } from "../../customs/Spans"
import { CustomToggle } from "../../customs/CustomToggle";
import { useEffect, useState } from "react";
import { BasicDIV } from "../../customs/Basics";
import { useDispatch } from "react-redux";
import { TabState, coreActions } from "../../store/slices/core";
import { EvSemMapObj, JunwonSeo, JunyoungKim } from "./PublicationContents";
import ImageSlider from "../../customs/CustomTwoImageViewer";
import { TagBubble } from "../../customs/TagBubbleStatic";
import { getSTRRandomHex } from "../../utils/Color";
import { BibTexContent, BibTexSection, IconImg } from "./CommonStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonChalkboard } from "@fortawesome/free-solid-svg-icons";

const SIZE_MULTIPLE = 1.5;
const YOUTUBE_WIDTH = 560 * SIZE_MULTIPLE;
const YOUTUBE_HEIGHT = 315 * SIZE_MULTIPLE;
const YoutubeOption = {
    height: YOUTUBE_HEIGHT,
    width: YOUTUBE_WIDTH,
    playerVars: {
        autoplay: 0,
    },
};

type EvSemMap_METHOD = 'BKI' | 'CON' | 'SEE' | 'OUR';

export const EvidentialSemanticMapping = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(coreActions.setTab({selectedTab: TabState.PROJECTS}));
    }, [dispatch]);
    const [isShortVideo, setIsShortVideo] = useState<boolean>(false);
    const [varVisMethod, setVarVisMethod] = useState<EvSemMap_METHOD>('OUR');
    const getMethodColor = (method : string) => {
        if(varVisMethod === method){
            return getSTRRandomHex(method);
        }else{
            return 'gray';
        }
    }

    return <FlexColumnStartCenter>
        {/* TITLE */}
        <FlexRowCenter marginTop="40px" >
            <H1 fontSize="36px" marginLeft="120px" marginRight="120px">
                Evidential Semantic Mapping in Off-road Environments with Uncertainty-aware Bayesian Kernel Inference
            </H1>
        </FlexRowCenter>
        {/* AUTHOR */}
        <FlexRowCenter marginTop="20px" padding="5px">
            <SPAN fontSize="20px" className="clickable" onClick={() => window.open(JunyoungKim.url, '_blank')}>Junyoung Kim</SPAN>
            <SPAN marginRight="12px">*, </SPAN> 
            <SPAN fontSize="20px" className="clickable" onClick={() => window.open(JunwonSeo.url, '_blank')}>Junwon Seo</SPAN>
            <SPAN marginRight="12px">*, </SPAN> 
            <SPAN fontSize="20px" >Jihong Min</SPAN>   
        </FlexRowCenter>
        {/* ICONS */}
        <FlexRowCenter marginTop="0px">
            <IconImg src={ARXIV_ICON_URL} onClick={() => window.open('https://arxiv.org/abs/2403.14138', '_blank')} />
            <IconImg src={YOUTUBE_ICON_URL} onClick={() => window.open('https://youtu.be/5cYY5c25GqE', '_blank')} />
            <IconImg src={GITHUB_ICON_URL} onClick={() => window.open('https://github.com/junwon-vision/EvSemMap', '_blank')} />
        </FlexRowCenter>

        {/* Additional Materials */}
        <FlexRowCenter marginTop="0px">
            <TagBubble className="clickable" padding="16px 15px" onClick={() => window.open(EvSemMapObj.slideURL!, '_blank')} color={getSTRRandomHex('Spot')}>
                <FontAwesomeIcon icon={faPersonChalkboard} fontSize={18}/>
                <SPAN marginLeft="8px">Slides</SPAN>
            </TagBubble>
            <TagBubble className="clickable" padding="16px 15px" onClick={() => window.open(EvSemMapObj.posterURL!, '_blank')} color={getSTRRandomHex('Poster')}>
                <FontAwesomeIcon icon={faPersonChalkboard} fontSize={18}/>
                <SPAN marginLeft="8px">Poster</SPAN>
            </TagBubble>
        </FlexRowCenter>

        <FlexRowCenter marginTop="10px" marginBottom="0px">
            <SPAN fontSize="20px" color="hp-black" fontWeight="700">Accepted to IROS 2024</SPAN>
            {/* <IconImg src={EXTERNAL_ICON_URL} onClick={() => window.open('https://iros2024-abudhabi.org/', '_blank')} className="clickable small" /> */}
            <IconImg src={EXTERNAL_ICON_URL} onClick={() => window.open('https://ieeexplore.ieee.org/document/10802766/', '_blank')} className="clickable small" />
        </FlexRowCenter>
        <FlexColumnStartCenter marginTop="5px" marginBottom="15px">
            <FlexRowCenter marginTop="0px" marginBottom="5px">
                <SPAN fontSize="20px" color="hp-purple" fontWeight="700">Nominated on Best Cognitive Robotics Papers Finalists</SPAN>
                <IconImg src={EXTERNAL_ICON_URL} onClick={() => window.open('https://ras.papercept.net/conferences/conferences/IROS24/program/IROS24_ContentListWeb_2.html#tuat2', '_blank')} className="clickable small" />
            </FlexRowCenter>
        </FlexColumnStartCenter>
        <FlexRowCenter>
            <CustomToggle toggleState={isShortVideo} onText="1 min" offText="5 min" onToggle={() => { setIsShortVideo(iSV => !iSV) }} width={'120px'} />
        </FlexRowCenter>
        <FlexColumnStartCenterNotFull marginTop="10px" position="relative" borderRadius="22px" className="no-select" padding="6px" backgroundColor={isShortVideo ? "hp-green" : "hp-purple"}>
            <BasicDIV width={`min(100%, ${YOUTUBE_WIDTH}px)`} height={`${YOUTUBE_HEIGHT}px`} borderRadius="16px" overflow="hidden" backgroundColor={isShortVideo ? "hp-green" : "hp-purple"}>
                {isShortVideo ? 
                    <YouTube videoId="91ct6I_8iXg" opts={YoutubeOption} id="video" style={{zIndex: 2}}/>
                    :
                    <YouTube videoId="5cYY5c25GqE" opts={YoutubeOption} id="video" style={{zIndex: 2}}/> 
                }
            </BasicDIV>
        </FlexColumnStartCenterNotFull>
        <FlexColumnStartCenter marginTop="30px">
            <FlexRowCenter>
                <H1 fontSize="32px">Abstract</H1>
            </FlexRowCenter>
            <FlexRowCenter marginTop="16px">
                <SPAN maxWidth="min(100%, 820px)" lineHeight={1.6} textAlign="justify">{EvSemMapObj.abstract}</SPAN>
            </FlexRowCenter>
        </FlexColumnStartCenter>

        <FlexColumnStartCenter marginTop="30px">
            <FlexRowCenter marginBottom="20px">
                <H1 fontSize="32px">Interactive Visualization of Semantic Map and its Uncertainty Map</H1>
            </FlexRowCenter>
            <FlexRowCenter marginBottom="10px">
                <TagBubble margin="1px 16px" cursor="pointer" onClick={() => setVarVisMethod('BKI')} color={getMethodColor('BKI')} isPrime={varVisMethod === 'BKI'}>S-BKI</TagBubble>
                <TagBubble margin="1px 16px" cursor="pointer" onClick={() => setVarVisMethod('CON')} color={getMethodColor('CON')} isPrime={varVisMethod === 'CON'}>ConvBKI</TagBubble>
                <TagBubble margin="1px 16px" cursor="pointer" onClick={() => setVarVisMethod('SEE')} color={getMethodColor('SEE')} isPrime={varVisMethod === 'SEE'}>SEE-CSOM</TagBubble>
                <TagBubble margin="1px 16px" cursor="pointer" onClick={() => setVarVisMethod('OUR')} color={getMethodColor('OUR')} isPrime={varVisMethod === 'OUR'}>Ours (EBS)</TagBubble>
            </FlexRowCenter>
            <ImageSlider adjustAspect={-0.12} imageA={PUB2_SEM_VAR_OBJ[varVisMethod][1]} imageB={PUB2_SEM_VAR_OBJ[varVisMethod][0]} />
        </FlexColumnStartCenter>

        <FlexColumnStartCenter marginTop="50px">
            <FlexRowCenter marginBottom="20px">
                <H1 fontSize="32px">Our Framework</H1>
            </FlexRowCenter>
            <Pub2FrameworkImg src={PUB2_FRAMEWORK_URL} alt={"Framework Overview"} />
            <FlexRowCenter marginTop="16px">
                <SPAN maxWidth="min(100%, 1200px)" lineHeight={1.6} textAlign="justify">▲ {EvSemMapObj.frameworkDescription}</SPAN>
            </FlexRowCenter>
        </FlexColumnStartCenter>
        <FlexColumnStartCenter marginTop="50px">
            <FlexRowCenter marginBottom="20px">
                <H1 fontSize="32px">Results</H1>
            </FlexRowCenter>
            <Pub2FrameworkImg src={PUB2_RES1_URL} alt={"Main Result"} />
            <FlexRowCenter marginTop="16px">
                <SPAN maxWidth="min(100%, 1200px)" lineHeight={1.6} textAlign="justify">▲ {EvSemMapObj.mainResultDescription}</SPAN>
            </FlexRowCenter>
        </FlexColumnStartCenter>
        <FlexColumnStartCenter marginTop="50px">
            <Pub2FrameworkImg src={PUB2_RES2_URL} alt={"ZeroShot Result"} />
            <FlexRowCenter marginTop="16px">
                <SPAN maxWidth="min(100%, 1200px)" lineHeight={1.6} textAlign="justify">▲ {EvSemMapObj.supResultDescription}</SPAN>
            </FlexRowCenter>
        </FlexColumnStartCenter>
        
        <FlexColumnStartCenterNotFull marginTop="30px" marginBottom="100px" width="min(100%, 1200px)">
            <FlexRowStart width="min(100%, 1200px)">
                <H3>BibTeX</H3>
            </FlexRowStart>
            <BibTexSection width="min(100%, 1200px)" marginTop="12px">
                <BibTexContent>{EvSemMapObj.BibTeX}</BibTexContent>
            </BibTexSection>
        </FlexColumnStartCenterNotFull>
    </FlexColumnStartCenter>
}

const Pub2FrameworkImg = styled.img`
    max-width: min(100%, 1200px);
    border-radius: 20px;
    padding: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); /* Change the values as per your preference */
`;

