import styled from "styled-components";
import { BasicDIV } from "./Basics";

export const Flex = styled(BasicDIV)`
    display: flex;
    width: 100%;
    height: 100%;

    /* border: 1px solid green; */
`;
export const FlexColumnStart = styled(Flex)`
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;
export const FlexColumnCenter = styled(Flex)`
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const FlexRowCenter = styled(Flex)`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
export const FlexRowSpaceBetween = styled(Flex)`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`