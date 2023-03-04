import { useDispatch } from "react-redux";
import styled from "styled-components";
import { coreActions } from "../store/slices/core";

export enum TabState {
    MAIN = 0, PUBLIC = 1, PRIVATE = 2, GALLERY = 3, NEW = 4
};

const Header = () => {
    const dispatch = useDispatch();
    return <HeaderRoot>
        <HeaderLeft onClick={() => dispatch(coreActions.setTab({selectedTab: TabState.MAIN}))}>
            VKJY, Junyoung Kim(김준영).
        </HeaderLeft>
        <HeaderCenter>
            <HeaderBtn onClick={() => dispatch(coreActions.setTab({selectedTab: TabState.MAIN}))}>
                <span>HOME</span>
            </HeaderBtn>
            <HeaderBtn onClick={() => dispatch(coreActions.setTab({selectedTab: TabState.PUBLIC}))}>
                <span>PUBLIC</span>
            </HeaderBtn>
            <HeaderBtn onClick={() => dispatch(coreActions.setTab({selectedTab: TabState.PRIVATE}))}>
                <span>PRIVATE</span>
            </HeaderBtn>
            <HeaderBtn onClick={() => dispatch(coreActions.setTab({selectedTab: TabState.GALLERY}))}>
                <span>Gallery</span>
            </HeaderBtn>
            <HeaderBtn onClick={() => dispatch(coreActions.setTab({selectedTab: TabState.NEW}))}>
                <span>NEW 🚧</span>
            </HeaderBtn>
        </HeaderCenter>
        <HeaderRight>
            LANG.
            DARK.
        </HeaderRight>
    </HeaderRoot>
};

const HeaderRoot = styled.div`
  width: 100%;
  height: 40px;
  background-color: var(--hp-white);

  display: grid;
  grid-template-columns: 2fr 8fr 2fr;
`;

const HeaderLeft = styled.div`
    background-color: var(--hp-header-left);
    display: flex;
    justify-content: center;
    align-items: center;
    
    cursor: pointer;
`;
const HeaderRight = styled.div`
    background-color: var(--hp-header-right);
`;
const HeaderCenter = styled.div`
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