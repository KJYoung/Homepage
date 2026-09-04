
import styled from "styled-components";
import { LastUpdatedGit } from "./LastUpdatedGit";

const Footer = () => {
  return (
    <FooterDiv>
      <FooterInner>
        <BrandBlock>
          <BrandName>Junyoung Kim</BrandName>
          <MetaText>Ph.D. Student, University of Michigan</MetaText>
          <MetaText>Ann Arbor, Michigan</MetaText>
          <MetaText>© {new Date().getFullYear()} Junyoung Kim</MetaText>
        </BrandBlock>

        <LinkBlock>
          <FooterLink href="mailto:jyoungk@umich.edu">Email</FooterLink>
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
  background-color: var(--color-surface-navy);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 20px 14px;
  box-sizing: border-box;
  border-top: 1px solid var(--color-on-navy-border);
  color: var(--color-on-navy-muted);
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
  color: var(--color-on-navy);
  font-weight: 700;
  font-size: 15px;
`;

const MetaText = styled.span`
  color: var(--color-on-navy-muted);
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
  color: var(--umich-maize);
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
  border-top: 1px solid var(--color-on-navy-border);
  font-size: 12px;
  color: var(--color-on-navy-faint);

  @media (max-width: 760px) {
    margin-top: 12px;
  }
`;

export default Footer;
