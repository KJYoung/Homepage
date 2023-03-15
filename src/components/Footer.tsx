import styled from "styled-components";

const Footer = () => {
    return <FooterDiv>
      2023. VKJY. Junyoung Kim.
    </FooterDiv>
};

const FooterDiv = styled.div`
  width: 100%;
  height: 100px;
  background-color: var(--hp-footer);

  display: flex;
  justify-content: center;
  align-items: center;

  color: gray;
`;

export default Footer;