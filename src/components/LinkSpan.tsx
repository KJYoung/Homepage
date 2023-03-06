import styled from "styled-components";

interface IPropsLinkSpan {
    content: string;
    targetUrl: string;
};

export const LinkSpan = ({ content, targetUrl } : IPropsLinkSpan) => {
    return <LinkSpanStyle target="_blank" href={targetUrl} rel="noreferrer">{content}</LinkSpanStyle>
};

const LinkSpanStyle = styled.a`
  color: var(--hp-blue);
  font-weight: 500;

  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  &:active {
    color: var(--hp-blue-active);
  }
`;