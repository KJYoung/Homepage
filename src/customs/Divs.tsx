import styled from "styled-components";
import { BasicDIV } from "./Basics";

export const Flex = styled(BasicDIV)`
    display: flex;
    width: ${({ width = '100%' }) => width};
    height: ${({ height = '100%' }) => height};
    /* border: 1px solid green; */

    flex-wrap: ${({ flexWrap }) => flexWrap};
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
export const FlexRowSpaceBetweenEnd = styled(Flex)`
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
`