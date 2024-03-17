import styled from "styled-components"
import { ARXIV_ICON_URL, YOUTUBE_ICON_URL } from "../../DATA/Public_URL"
import { FlexColumnStartCenter, FlexRowCenter } from "../../customs/Divs"
import { H3, SPAN } from "../../customs/Spans"

const IconImg = styled.img`
    max-width: 36px;
    max-height: 36px;
    margin: 16px;
    cursor: pointer;
`;
export const EvidentialSemanticMapping = () => {
    return <FlexColumnStartCenter>
        {/* TITLE */}
        <FlexRowCenter marginTop="40px">
            <H3>
                Evidential Semantic Mapping in Off-road Environments with Uncertainty-aware Bayesian Kernel Inference
            </H3>
        </FlexRowCenter>
        {/* AUTHOR */}
        <FlexRowCenter marginTop="20px">
            <SPAN>
                Junyoung Kim*, Junwon Seo*, Jihong Min
            </SPAN>
        </FlexRowCenter>
        {/* ICONS */}
        <FlexRowCenter marginTop="0px">
            <IconImg src={ARXIV_ICON_URL} />
            <IconImg src={YOUTUBE_ICON_URL} />
        </FlexRowCenter>
        <FlexRowCenter>
            Coming Soon... (Work In Progress)
        </FlexRowCenter>
    </FlexColumnStartCenter>
}