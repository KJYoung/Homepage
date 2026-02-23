import { faHome, faPhotoFilm, faScroll } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { coreActions, selectCore, TabState } from "../store/slices/core";
import { LANGUAGE } from "../utils/Language";
import { useNavigate } from "react-router-dom";
import { NAV_GALL_PAGE, NAV_MAIN_PAGE, NAV_PROJ_PAGE } from "../App";

interface IPropsHeader {
    isMobile: boolean;
    language: LANGUAGE;
}

// 1. color 대신 isActive (활성화 여부)를 받도록 변경
interface IPropsTabState {
    isActive: boolean; 
}

// 2. 머티리얼 + 물방울 효과가 적용된 HeaderBtn
const HeaderBtn = styled.div<IPropsTabState>`
    position: relative;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 0px 10px;
    padding: 0px 15px;
    
    /* 텍스트 색상 전환 애니메이션 */
    color: ${({ isActive }) => (isActive ? 'var(--hp-blue-active)' : 'var(--hp-gray)')};
    font-weight: ${({ isActive }) => (isActive ? '700' : '500')};
    transition: color 0.3s ease;
    overflow: hidden; /* 물방울 번짐이 버튼 밖으로 나가지 않게 제어 */

    /* [Hover 효과] 가운데서 퍼져나가는 물방울(Ripple) 배경 효과 */
    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        background-color: rgba(0, 0, 0, 0.04); /* 은은한 회색 물방울 */
        border-radius: 50%;
        transform: translate(-50%, -50%);
        transition: width 0.4s ease-out, height 0.4s ease-out;
        z-index: -1;
    }

    &:hover::before {
        width: 150px; /* 버튼 크기에 맞춰 물방울이 퍼짐 */
        height: 150px;
    }

    /* [Active & Hover 효과] 하단에 부드럽게 차오르는 둥근 밑줄 */
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: ${({ isActive }) => (isActive ? '100%' : '0')};
        height: 3px;
        background-color: var(--hp-blue-active);
        border-radius: 3px 3px 0 0; /* 물방울처럼 상단이 둥근 형태 */
        transition: width 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); /* 쫀득한 타이밍 함수 */
    }

    &:hover::after {
        width: ${({ isActive }) => (isActive ? '100%' : '50%')}; /* Hover 시 살짝 밑줄이 생김 */
        background-color: ${({ isActive }) => (isActive ? 'var(--hp-blue-active)' : 'lightgray')};
    }
`;

const Header = ({ isMobile, language }: IPropsHeader ) => {
    const coreState = useSelector(selectCore);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // 3. 색상 문자열 반환 대신 boolean 반환으로 단순화
    const isActiveTab = (tab: TabState) => tab === coreState.selectedTab;

    const go_to_fn = (action: TabState, link: string) => {
        dispatch(coreActions.setTab({selectedTab: action}));
        navigate(link);
    };

    return isMobile ? (
        <MobileHeaderRoot>
            {/* MOBILE HEADER */}
            <MobileHeaderCenter>
                <HeaderBtn isActive={isActiveTab(TabState.PUBLIC)} onClick={() => go_to_fn(TabState.PUBLIC, NAV_MAIN_PAGE)}>
                    <FontAwesomeIcon icon={faHome}/>
                </HeaderBtn>
                <HeaderBtn isActive={isActiveTab(TabState.PROJECTS)} onClick={() => go_to_fn(TabState.PROJECTS, NAV_PROJ_PAGE)}>
                    <FontAwesomeIcon icon={faScroll}/>
                </HeaderBtn>
                <HeaderBtn isActive={isActiveTab(TabState.GALLERY)} onClick={() => go_to_fn(TabState.GALLERY, NAV_GALL_PAGE)}>
                    <FontAwesomeIcon icon={faPhotoFilm}/>
                </HeaderBtn>
            </MobileHeaderCenter>
        </MobileHeaderRoot> 
    ) : (
        <HeaderRoot className="no-select">
        {/* DESKTOP HEADER */}
            <HeaderLeft onClick={() => dispatch(coreActions.setTab({selectedTab: TabState.MAIN}))}></HeaderLeft>
            <HeaderCenter>
                <HeaderBtn isActive={isActiveTab(TabState.PUBLIC)} onClick={() => go_to_fn(TabState.PUBLIC, NAV_MAIN_PAGE)}>
                    <span>HOME</span>
                </HeaderBtn>
                <HeaderBtn isActive={isActiveTab(TabState.PROJECTS)} onClick={() => go_to_fn(TabState.PROJECTS, NAV_PROJ_PAGE)}>
                    <span>PUBLICATIONS</span>
                </HeaderBtn>
                <HeaderBtn isActive={isActiveTab(TabState.GALLERY)} onClick={() => go_to_fn(TabState.GALLERY, NAV_GALL_PAGE)}>
                    <span>GALLERY</span>
                </HeaderBtn>
            </HeaderCenter>
            
            <HeaderRight>
            </HeaderRight>
        </HeaderRoot>
    );
};

const HeaderRoot = styled.div`
  width: 100%;
  height: 40px;
  background-color: var(--hp-white);

  display: grid;
  grid-template-columns: 2fr 8fr 2fr;

  border-bottom: 1px solid var(--hp-gray);
`;
const MobileHeaderRoot = styled.div`
  width: 100%;
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
  border-bottom: 1px solid var(--hp-gray);
`;
const MobileHeaderCenter = styled(HeaderCenter)`
    height: 65px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;

export default Header;