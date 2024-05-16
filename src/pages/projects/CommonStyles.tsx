import styled from "styled-components";
import { BasicDIV } from "../../customs/Basics";

export const IconImg = styled.img`
    max-width: 36px;
    max-height: 36px;
    margin: 16px;
    cursor: pointer;
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