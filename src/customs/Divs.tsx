import styled from "styled-components";
import { BasicDIV } from "./Basics";

export const Flex = styled(BasicDIV)`
    display: flex;
`;
export const FlexColumnCenter = styled(BasicDIV)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const FlexRowCenter = styled(BasicDIV)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;