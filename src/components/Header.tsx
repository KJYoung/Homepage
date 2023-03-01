import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
    const navigate = useNavigate();
    return <HeaderDiv>
            <HeaderBtn onClick={() => navigate("/Homepage")}>
                <span>HOME</span>
            </HeaderBtn>
            <HeaderBtn onClick={() => navigate("/Homepage/public")}>
                <span>PUBLIC</span>
            </HeaderBtn>
            <HeaderBtn onClick={() => navigate("/Homepage/private")}>
                <span>PRIVATE</span>
            </HeaderBtn>
            <HeaderBtn onClick={() => navigate("/Homepage/new")}>
                <span>NEW 🚧</span>
            </HeaderBtn>
    </HeaderDiv>
};

const HeaderDiv = styled.div`
  width: 100%;
  height: 40px;
  background-color: var(--hp-white);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderBtn = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  cursor: pointer;

  &:hover {
    border-bottom: 1px solid gray;
  }
  
  margin: 0px 10px 0px 10px;
  padding: 0px 15px 0px 15px;
`;

export default Header;