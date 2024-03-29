import styled from "styled-components";
import { BasicDIV } from "./Basics";

export const Flex = styled(BasicDIV)`
    display: flex;
    width: 100%;
    height: 100%;
    /* border: 1px solid green; */
`;
export const FlexNotFull = styled(BasicDIV)`
    display: flex;
`;
export const FlexColumnStartCenterNotFull = styled(FlexNotFull)`
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;
export const FlexColumnStart = styled(Flex)`
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;
export const FlexColumnStartCenter = styled(Flex)`
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;
export const FlexColumnCenter = styled(Flex)`
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const FlexRowStart = styled(Flex)`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;
export const FlexRowEnd = styled(Flex)`
    flex-direction: row;
    justify-content: flex-end;
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