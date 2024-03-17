import styled from "styled-components";
import { BasicSPAN, IPropsBasicCSS } from "./Basics";

interface IPropsLinkSpan {
    content: string;
    targetUrl: string;

    marginLeft?: string;
    marginRight?: string;
    marginTop?: string;
    marginBottom?: string;
};

export const SPAN = styled(BasicSPAN)`
    &.clickable {
        cursor: pointer;
        &:hover {
            color: var(--hp-blue-hover);
        }
        &:active {
            color: var(--hp-blue-active);
        }
    }
`;

export const H1 = styled(SPAN)`
    font-size: 28px;
    font-weight: 600;
`;
export const H2 = styled(SPAN)`
    font-size: 26px;
    font-weight: 600;
`;
export const H3 = styled(SPAN)`
    font-size: 24px;
    font-weight: 600;
`;
export const H4 = styled(SPAN)`
    font-size: 20px;
    font-weight: 600;
`;
export const H5 = styled(SPAN)`
    font-size: 16px;
    font-weight: 600;
`;

// LinkSpan: Link 기능이 있는 푸른 색의 Span
export const LinkSpan = ({ content, targetUrl, marginLeft, marginRight, marginTop, marginBottom } : IPropsLinkSpan) => {
    return <LinkSpanStyle 
              target="_blank" href={targetUrl} rel="noreferrer"
              marginLeft={marginLeft} marginRight={marginRight} marginTop={marginTop} marginBottom={marginBottom}
            >{content}</LinkSpanStyle>
};

const LinkSpanStyle = styled.a<IPropsBasicCSS>`
  color: var(--hp-blue);
  font-weight: 500;

  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  &:active {
    color: var(--hp-blue-active);
  }

  margin-left: ${({ marginLeft }) => marginLeft};
  margin-right: ${({ marginRight }) => marginRight};
  margin-top: ${({ marginTop }) => marginTop};
  margin-bottom: ${({ marginBottom }) => marginBottom};
`;