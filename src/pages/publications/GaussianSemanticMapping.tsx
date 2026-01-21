import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { ARXIV_ICON_URL, EXTERNAL_ICON_URL, PUB4_FRAMEWORK_URL, PUB4_CHALLENGES_URL, PUB4_QUALRES_URL, YOUTUBE_ICON_URL } from "../../DATA/Public_URL"
import { FlexColumnStartCenter, FlexColumnStartCenterNotFull, FlexRowCenter, FlexRowStart } from "../../customs/Divs"
import { H1, H3, SPAN } from "../../customs/Spans"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TabState, coreActions } from "../../store/slices/core";
import { GaussianMapObj, JunwonSeo, JunyoungKim, MinsikJeon } from "./PublicationContents";
import { BibTexContent, BibTexSection, IconImg } from "./CommonStyles";
import { useDesktopViewport } from "../../hooks/useDesktopViewport";
import { BasicDIV } from "../../customs/Basics";
import YouTube from "react-youtube";

const SIZE_MULTIPLE = 1.75;
const YOUTUBE_WIDTH = 560 * SIZE_MULTIPLE;
const YOUTUBE_HEIGHT = 315 * SIZE_MULTIPLE;
const YoutubeOption = {
    height: YOUTUBE_HEIGHT,
    width: YOUTUBE_WIDTH,
    playerVars: {
        autoplay: 0,
    },
};

export const GaussianSemanticMapping = () => {
    useDesktopViewport(1280);
    const dispatch = useDispatch();
    const isShortVideo = true;
    useEffect(() => {
        dispatch(coreActions.setTab({selectedTab: TabState.PROJECTS}));
    }, [dispatch]);

    return <FlexColumnStartCenter>
        {/* TITLE */}
        <FlexRowCenter marginTop="40px" >
            <H1 fontSize="36px" marginLeft="120px" marginRight="120px">
                E2-BKI: Evidential Ellipsoidal Bayesian Kernel Inference for Uncertainty-aware Gaussian Semantic Mapping
            </H1>
        </FlexRowCenter>
        {/* AUTHOR */}
        <FlexRowCenter marginTop="20px" padding="5px">
            <SPAN fontSize="20px" className="clickable" onClick={() => window.open(JunyoungKim.url, '_blank')}>Junyoung Kim</SPAN>
            <SPAN marginRight="12px">, </SPAN> 
            <SPAN fontSize="20px" className="clickable" onClick={() => window.open(MinsikJeon.url, '_blank')}>Minsik Jeon</SPAN>
            <SPAN marginRight="12px">, </SPAN> 
            <SPAN fontSize="20px" >Jihong Min</SPAN>   
            <SPAN marginRight="12px">, </SPAN> 
            <SPAN fontSize="20px" >Kiho Kwak</SPAN>   
            <SPAN marginRight="12px">, </SPAN> 
            <SPAN fontSize="20px" className="clickable" onClick={() => window.open(JunwonSeo.url, '_blank')}>Junwon Seo</SPAN>
        </FlexRowCenter>
        {/* ICONS */}
        <FlexRowCenter marginTop="0px">
            <IconImg src={ARXIV_ICON_URL} onClick={() => window.open('https://arxiv.org/abs/2509.11964', '_blank')} />
            <IconImg src={YOUTUBE_ICON_URL} onClick={() => window.open('https://youtu.be/bsqARNKvnjQ', '_blank')} />
            {/* <IconImg src={GITHUB_ICON_URL} onClick={() => window.open('https://github.com/junwon-vision/EvSemMap', '_blank')} /> */}
        </FlexRowCenter>

        {/* Additional Materials */}
        {/* <FlexRowCenter marginTop="0px">
            <TagBubble className="clickable" padding="16px 15px" onClick={() => window.open(GaussianMapObj.slideURL!, '_blank')} color={getSTRRandomHex('Spot')}>
                <FontAwesomeIcon icon={faPersonChalkboard} fontSize={18}/>
                <SPAN marginLeft="8px">Slides</SPAN>
            </TagBubble>
            <TagBubble className="clickable" padding="16px 15px" onClick={() => window.open(GaussianMapObj.posterURL!, '_blank')} color={getSTRRandomHex('Poster')}>
                <FontAwesomeIcon icon={faPersonChalkboard} fontSize={18}/>
                <SPAN marginLeft="8px">Poster</SPAN>
            </TagBubble>
        </FlexRowCenter> */}

        <FlexRowCenter marginTop="10px" marginBottom="0px">
            <SPAN fontSize="20px" color="hp-black" fontWeight="700">Accepted to RA-L 2026</SPAN>
            <IconImg src={EXTERNAL_ICON_URL} onClick={() => window.open('https://ieeexplore.ieee.org/document/11352513', '_blank')} className="clickable small" />
        </FlexRowCenter>

        <FlexColumnStartCenterNotFull marginTop="10px" position="relative" borderRadius="22px" className="no-select" padding="6px" backgroundColor={isShortVideo ? "hp-green" : "hp-purple"}>
            <BasicDIV width={`min(100%, ${YOUTUBE_WIDTH}px)`} height={`${YOUTUBE_HEIGHT}px`} borderRadius="16px" overflow="hidden" backgroundColor={isShortVideo ? "hp-green" : "hp-purple"}>
                {isShortVideo ? 
                    <YouTube videoId="bsqARNKvnjQ" opts={YoutubeOption} id="video" style={{zIndex: 2}}/>
                    :
                    `None` 
                }
            </BasicDIV>
        </FlexColumnStartCenterNotFull>

        <FlexColumnStartCenter marginTop="30px">
            <FlexRowCenter>
                <H1 fontSize="32px">Abstract</H1>
            </FlexRowCenter>
            <FlexRowCenter marginTop="16px">
                <SPAN maxWidth="min(100%, 820px)" lineHeight={1.6} textAlign="justify">{GaussianMapObj.abstract}</SPAN>
            </FlexRowCenter>
        </FlexColumnStartCenter>

        <FlexColumnStartCenter marginTop="50px">
            <Pub4Img src={PUB4_CHALLENGES_URL} alt={"Challenges"} />
            <FlexRowCenter marginTop="16px">
                <SPAN maxWidth="min(100%, 1200px)" lineHeight={1.6} textAlign="justify">
                    <ReactMarkdown>{`▲ **Key limitations of S-BKI and our solutions.** 
                        The static isotropic kernel in S-BKI does not account for
                        (a) **semantic uncertainty** arising from neural network predictions,
                        (b) **spatial uncertainty** caused by misalignment with local scene geometry, and
                        (c) **observation uncertainty** from distant noisy measurements.
                        Our method addresses these by (a) prioritizing reliable information via uncertainty estimates, (b) adapting kernels to local scene geometry, and (c) leveraging local context through Gaussian primitives.
                    `}</ReactMarkdown>
                </SPAN>
            </FlexRowCenter>
        </FlexColumnStartCenter>
        
        <FlexColumnStartCenter marginTop="50px">
            <Pub4Img src={PUB4_FRAMEWORK_URL} alt={"Framework Overview"} />
            <FlexRowCenter marginTop="16px">
                <SPAN maxWidth="min(100%, 1200px)" lineHeight={1.6} textAlign="justify">
                    <ReactMarkdown>{`▲ ${GaussianMapObj.frameworkDescription}`}</ReactMarkdown>
                </SPAN>
            </FlexRowCenter>
        </FlexColumnStartCenter>

        <FlexColumnStartCenter marginTop="50px">
            <Pub4Img src={PUB4_QUALRES_URL} alt={"Main Qualitative Results"} />
            <FlexRowCenter marginTop="16px">
                <SPAN maxWidth="min(100%, 1200px)" lineHeight={1.6} textAlign="justify">
                    <ReactMarkdown>{`▲ **Qualitative comparison** of semantic mapping results on *RELLIS-3D*, *OffRoad*, and *KITTI-360*.
                        Compared to baselines, our method produces more accurate and visually consistent semantic reconstructions across diverse scenes.
                    `}</ReactMarkdown>
                </SPAN>
            </FlexRowCenter>
        </FlexColumnStartCenter>

        <FlexColumnStartCenter marginTop="50px">
            <FlexRowCenter marginBottom="20px">
                <H1 fontSize="32px">More Results and Video will be updated soon!</H1>
            </FlexRowCenter>
        </FlexColumnStartCenter>

        <FlexColumnStartCenterNotFull marginTop="30px" marginBottom="100px" width="min(100%, 1200px)">
            <FlexRowStart width="min(100%, 1200px)">
                <H3>BibTeX</H3>
            </FlexRowStart>
            <BibTexSection width="min(100%, 1200px)" marginTop="12px">
                <BibTexContent>{GaussianMapObj.BibTeX}</BibTexContent>
            </BibTexSection>
        </FlexColumnStartCenterNotFull>
    </FlexColumnStartCenter>
}

const Pub4Img = styled.img`
    max-width: min(100%, 1200px);
    border-radius: 20px;
    padding: 10px;
`;