import { faHome, faPerson, faPhotoFilm, faScroll } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { coreActions, DarkLightState, selectCore, TabState } from "../store/slices/core";
import { LANGUAGE } from "../utils/Language";
import { useNavigate } from "react-router-dom";

interface IPropsHeader {
    isMobile: boolean;
    language: LANGUAGE;
}
interface IPropsTabState {
    tabState: TabState;
};

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

        color: ${({ tabState }) => isActiveTab(tabState)};
    `;
    return isMobile ? <MobileHeaderRoot>
        {/* MOBILE HEADER */}
        <MobileHeaderCenter>
            <HeaderBtn tabState={TabState.MAIN} onClick={() => dispatch(coreActions.setTab({selectedTab: TabState.MAIN}))}>
                <FontAwesomeIcon icon={faHome}/>
            </HeaderBtn>
            <HeaderBtn tabState={TabState.PUBLIC} onClick={() => dispatch(coreActions.setTab({selectedTab: TabState.PUBLIC}))}>
                <FontAwesomeIcon icon={faScroll}/>
            </HeaderBtn>
            <HeaderBtn tabState={TabState.PRIVATE} onClick={() => dispatch(coreActions.setTab({selectedTab: TabState.PRIVATE}))}>
                <FontAwesomeIcon icon={faPerson}/>
            </HeaderBtn>
            <HeaderBtn tabState={TabState.GALLERY} onClick={() => dispatch(coreActions.setTab({selectedTab: TabState.GALLERY}))}>
                <FontAwesomeIcon icon={faPhotoFilm}/>
            </HeaderBtn>
        </MobileHeaderCenter>
    </MobileHeaderRoot> 
    :
    <HeaderRoot>
    {/* DESKTOP HEADER */}
        <HeaderLeft onClick={() => dispatch(coreActions.setTab({selectedTab: TabState.MAIN}))}></HeaderLeft>
        <HeaderCenter>
            {language === 'KO' &&
                <>
                    <HeaderBtn tabState={TabState.MAIN} onClick={() => dispatch(coreActions.setTab({selectedTab: TabState.MAIN}))}>
                        <span>HOME</span>
                    </HeaderBtn>
                    <HeaderBtn tabState={TabState.PUBLIC} onClick={() => dispatch(coreActions.setTab({selectedTab: TabState.PUBLIC}))}>
                        <span>PUBLIC</span>
                    </HeaderBtn>
                    <HeaderBtn tabState={TabState.PRIVATE} onClick={() => dispatch(coreActions.setTab({selectedTab: TabState.PRIVATE}))}>
                        <span>PRIVATE</span>
                    </HeaderBtn>
                    <HeaderBtn tabState={TabState.GALLERY} onClick={() => dispatch(coreActions.setTab({selectedTab: TabState.GALLERY}))}>
                        <span>Gallery</span>
                    </HeaderBtn>
                    <HeaderBtn tabState={TabState.NEW} onClick={() => dispatch(coreActions.setTab({selectedTab: TabState.NEW}))}>
                        <span>NEW 🚧</span>
                    </HeaderBtn>
                </>
            }
        </HeaderCenter>
        
        <HeaderRight>
            <div className="LanguageSelector">
                <span className={language === 'EN' ? "selected" : ""} onClick={() => navigate('/Homepage/')}>EN</span>
                <span className={language === 'KO' ? "selected" : ""} onClick={() => navigate('/Homepage/ko/')}>KO</span>
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