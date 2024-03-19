import { faHome, faPerson, faPhotoFilm, faScroll } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { coreActions, DarkLightState, selectCore, TabState } from "../store/slices/core";
import { LANGUAGE } from "../utils/Language";
import { useNavigate } from "react-router-dom";
import { NAV_GALL_PAGE, NAV_LOBBY_PAGE, NAV_MAIN_PAGE, NAV_NEWW_PAGE, NAV_PRIV_PAGE } from "../App";

interface IPropsHeader {
    isMobile: boolean;
    language: LANGUAGE;
}
interface IPropsTabState {
    color: string;
};

const HeaderBtn = styled.div<IPropsTabState>`
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

    color: ${({ color }) => color};
`;

const Header = ({ isMobile, language }: IPropsHeader ) => {
    const coreState = useSelector(selectCore);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isActiveTab = (tab: TabState) => {
        if(tab === coreState.selectedTab){
            return 'var(--hp-blue-active)';
        }else{
            return 'var(--hp-gray)';
        }
    }
    const go_to_fn = (action: TabState, link: string) => {
        dispatch(coreActions.setTab({selectedTab: action}));
        navigate(link);
    };

    return isMobile ? <MobileHeaderRoot>
        {/* MOBILE HEADER */}
        <MobileHeaderCenter>
            {/* <HeaderBtn color={isActiveTab(TabState.MAIN)} onClick={() => go_to_fn(TabState.MAIN, NAV_LOBBY_PAGE)}>
                <FontAwesomeIcon icon={faHome}/>
            </HeaderBtn> */}
            <HeaderBtn color={isActiveTab(TabState.PUBLIC)} onClick={() => go_to_fn(TabState.PUBLIC, NAV_MAIN_PAGE)}>
                <FontAwesomeIcon icon={faScroll}/>
            </HeaderBtn>
            {/* <HeaderBtn color={isActiveTab(TabState.PRIVATE)} onClick={() => go_to_fn(TabState.PRIVATE, NAV_PRIV_PAGE)}>
                <FontAwesomeIcon icon={faPerson}/>
            </HeaderBtn> */}
            <HeaderBtn color={isActiveTab(TabState.GALLERY)} onClick={() => go_to_fn(TabState.GALLERY, NAV_GALL_PAGE)}>
                <FontAwesomeIcon icon={faPhotoFilm}/>
            </HeaderBtn>
        </MobileHeaderCenter>
    </MobileHeaderRoot> 
    :
    <HeaderRoot>
    {/* DESKTOP HEADER */}
        <HeaderLeft onClick={() => dispatch(coreActions.setTab({selectedTab: TabState.MAIN}))}></HeaderLeft>
        <HeaderCenter>
            {/* <HeaderBtn color={isActiveTab(TabState.MAIN)} onClick={() => go_to_fn(TabState.MAIN, NAV_LOBBY_PAGE)}>
                <span>HOME</span>
            </HeaderBtn> */}
            <HeaderBtn color={isActiveTab(TabState.PUBLIC)} onClick={() => go_to_fn(TabState.PUBLIC, NAV_MAIN_PAGE)}>
                <span>HOME</span>
            </HeaderBtn>
            {/* <HeaderBtn color={isActiveTab(TabState.PRIVATE)} onClick={() => go_to_fn(TabState.PRIVATE, NAV_PRIV_PAGE)}>
                <span>PRIVATE</span>
            </HeaderBtn> */}
            <HeaderBtn color={isActiveTab(TabState.GALLERY)} onClick={() => go_to_fn(TabState.GALLERY, NAV_GALL_PAGE)}>
                <span>GALLERY</span>
            </HeaderBtn>
            {/* <HeaderBtn color={isActiveTab(TabState.NEW)} onClick={() => go_to_fn(TabState.NEW, NAV_NEWW_PAGE)}>
                <span>NEW 🚧</span>
            </HeaderBtn> */}
        </HeaderCenter>
        
        <HeaderRight>
            <div className="LanguageSelector">
                <span className={language === 'EN' ? "selected" : ""} onClick={() => dispatch(coreActions.setLanguage({language: 'EN'}))}>EN</span>
                <span className={language === 'KO' ? "selected" : ""} onClick={() => dispatch(coreActions.setLanguage({language: 'KO'}))}>KO</span>
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
  height: 65px;
  background-color: var(--hp-white);
  
  svg {
   height: 30px;
  }
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
        cursor: pointer;
        > span {
            margin-right: 10px;
            font-weight: 700;
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
const MobileHeaderCenter = styled(HeaderCenter)`
    height: 65px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`;

export default Header;