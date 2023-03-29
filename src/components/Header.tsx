import { faHome, faPerson, faPhotoFilm, faScroll } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { coreActions, DarkLightState, LanguageState, selectCore, TabState } from "../store/slices/core";

interface IPropsHeader {
    isMobile: boolean;
}
const Header = ({ isMobile }: IPropsHeader ) => {
    const coreState = useSelector(selectCore);
    const dispatch = useDispatch();
    return isMobile ? <MobileHeaderRoot>
            {/* MOBILE HEADER */}
            <HeaderCenter>
                <HeaderBtn onClick={() => dispatch(coreActions.setTab({selectedTab: TabState.MAIN}))}>
                    <FontAwesomeIcon icon={faHome}/>
                </HeaderBtn>
                <HeaderBtn onClick={() => dispatch(coreActions.setTab({selectedTab: TabState.PUBLIC}))}>
                    <FontAwesomeIcon icon={faScroll}/>
                </HeaderBtn>
                <HeaderBtn onClick={() => dispatch(coreActions.setTab({selectedTab: TabState.PRIVATE}))}>
                    <FontAwesomeIcon icon={faPerson}/>
                </HeaderBtn>
                <HeaderBtn onClick={() => dispatch(coreActions.setTab({selectedTab: TabState.GALLERY}))}>
                    <FontAwesomeIcon icon={faPhotoFilm}/>
                </HeaderBtn>
            </HeaderCenter>
        </MobileHeaderRoot> 
        :
        <HeaderRoot>
        {/* DESKTOP HEADER */}
            <HeaderLeft onClick={() => dispatch(coreActions.setTab({selectedTab: TabState.MAIN}))}>
            VKJYOUNG(김준영).
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
                <div className="LanguageSelector">
                    <span className={coreState.language === LanguageState.ENGLISH ? "selected" : ""}
                          onClick={() => dispatch(coreActions.setLang({ language: LanguageState.ENGLISH }))}>EN</span>
                    <span className={coreState.language === LanguageState.KOREAN ? "selected" : ""}
                          onClick={() => dispatch(coreActions.setLang({ language: LanguageState.KOREAN }))}>KO</span>
                </div>
                <div className="DarkLightSelector">
                    <span className={coreState.darkLight === DarkLightState.DARK ? "selected" : ""}
                          onClick={() => dispatch(coreActions.setDarkLight({ darkLight: DarkLightState.DARK }))}>DARK</span>
                    <span className={coreState.darkLight === DarkLightState.LIGHT ? "selected" : ""}
                          onClick={() => dispatch(coreActions.setDarkLight({ darkLight: DarkLightState.LIGHT }))}>LIGHT</span>
                </div>
            </HeaderRight>
        </HeaderRoot>
};

const HeaderRoot = styled.div`
  width: 100%;
  height: 40px;
  background-color: var(--hp-white);

  display: grid;
  grid-template-columns: 2fr 8fr 2fr;

  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
`;
const MobileHeaderRoot = styled.div`
  width: 100%;
  min-width: 500px;
  height: 40px;
  background-color: var(--hp-white);
  
  display: flex;
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
    display: flex;
    flex-direction: column;
    > div {
        width: 100%;
        height: 50%;
        > span {
            margin-right: 10px;
            font-weight: 700;
            cursor: pointer;
            &.selected {
                color: gray;
                cursor: default;
            }
        }
    }
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