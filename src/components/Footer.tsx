
import styled from "styled-components";
import { LastUpdatedGit } from "./LastUpdatedGit";

const Footer = () => {
  return (
    <FooterDiv>
      <FooterInner>
        <BrandBlock>
          <BrandName>Junyoung Kim</BrandName>
          <MetaText>Research Officer, Agency for Defense Development (ADD)</MetaText>
          <MetaText>Seoul, South Korea</MetaText>
          <MetaText>© {new Date().getFullYear()} Junyoung Kim</MetaText>
        </BrandBlock>

        <LinkBlock>
          <FooterLink href="mailto:jykim157@snu.ac.kr">Email</FooterLink>
          <FooterLink href="https://github.com/KJYoung" target="_blank" rel="noopener noreferrer">GitHub</FooterLink>
          <FooterLink href="https://www.linkedin.com/in/kim-junyoung" target="_blank" rel="noopener noreferrer">LinkedIn</FooterLink>
          <FooterLink href="https://scholar.google.co.kr/citations?user=w2JODm8AAAAJ&hl=en&oi=sra" target="_blank" rel="noopener noreferrer">Google Scholar</FooterLink>
        </LinkBlock>
      </FooterInner>
      <UpdatedAt>
        <LastUpdatedGit repoName="KJYoung/Homepage" filePath="README.md" />
      </UpdatedAt>
    </FooterDiv>
  );
};

const FooterDiv = styled.div`
  width: 100%;
  background-color: #2c323a;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 20px 14px;
  box-sizing: border-box;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  color: #d1d7de;
`;

const FooterInner = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;

  @media (max-width: 760px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;

const BrandBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`;

const BrandName = styled.span`
  color: #ffffff;
  font-weight: 700;
  font-size: 15px;
`;

const MetaText = styled.span`
  color: #d1d7de;
  font-size: 13px;
  line-height: 1.3;
`;

const LinkBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 6px 10px;

  @media (max-width: 760px) {
    justify-content: flex-start;
  }
`;

const FooterLink = styled.a`
  color: #c9ddff;
  text-decoration: none;
  font-size: 13px;

  &:hover {
    text-decoration: underline;
  }
`;

const UpdatedAt = styled.div`
  width: 100%;
  max-width: 1280px;
  margin-top: 10px;
  padding-top: 9px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  font-size: 12px;
  color: #b4bec8;

  @media (max-width: 760px) {
    margin-top: 12px;
  }
`;

export default Footer;
