
import styled from "styled-components";
import { BasicDIV } from "../customs/Basics";
import { LastUpdatedGit } from "./LastUpdatedGit";

const Footer = () => {
  
  return <FooterDiv>
    <BasicDIV backgroundColor="transparent" color="hp-white" marginBottom="10px">VKJY. Junyoung Kim.</BasicDIV>
    <BasicDIV backgroundColor="transparent" color="hp-white"><LastUpdatedGit repoName="KJYoung/Homepage" filePath="README.md" /></BasicDIV>
  </FooterDiv>
};

const FooterDiv = styled.div`
  width: 100%;
  height: 100px;
  background-color: var(--hp-footer);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: gray;
`;

export default Footer;