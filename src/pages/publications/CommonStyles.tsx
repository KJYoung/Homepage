import styled from "styled-components";
import { BasicDIV } from "../../customs/Basics";

export const IconImg = styled.img`
    max-width: 36px;
    max-height: 36px;
    margin: 16px;
    cursor: pointer;
    &.small {
      max-width: 26px;
      max-height: 26px;
      margin: 3px;
    }
    &.clickable {
        cursor: pointer;
        &:hover {
          filter: invert(56%) sepia(69%) saturate(1396%) hue-rotate(194deg) brightness(98%) contrast(104%); /* var(--hp-blue-hover) converted at https://codepen.io/sosuke/pen/Pjoqqp */
        }
        &:active {
          filter: invert(31%) sepia(89%) saturate(2099%) hue-rotate(211deg) brightness(102%) contrast(104%); /* var(--hp-blue-active) converted at https://codepen.io/sosuke/pen/Pjoqqp */
        }
    }
`;

export const BibTexSection = styled(BasicDIV)`
  padding: 20px;
  background-color: var(--bibtex-bg);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const BibTexContent = styled.pre`
  font-family: 'Courier New', Courier, monospace;
  font-size: 16px;
  color: var(--bibtex-fg);
  white-space: pre-wrap;
  line-height: 1.3;
`;