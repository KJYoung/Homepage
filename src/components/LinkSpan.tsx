import styled from "styled-components";
import { IPropsBasicCSS } from "../containers/Public";

interface IPropsLinkSpan {
    content: string;
    targetUrl: string;

    marginLeft?: string;
    marginRight?: string;
    marginTop?: string;
    marginBottom?: string;
};

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