import { faHome, faPhotoFilm, faScroll } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { PORTRAIT2_SMALL_URL } from "../DATA/Public_URL";
import { coreActions, selectCore, TabState } from "../store/slices/core";
import { LANGUAGE } from "../utils/Language";
import { useNavigate } from "react-router-dom";

const NAV_MAIN_PAGE = "/";
const NAV_PROJ_PAGE = "/Projects";
const NAV_GALL_PAGE = "/gallery";

interface IPropsHeader {
  isMobile: boolean;
  language: LANGUAGE;
}

interface IPropsNavButton {
  $active: boolean;
}

const NAV_ITEMS = [
  { tab: TabState.PUBLIC, label: "Home", icon: faHome, link: NAV_MAIN_PAGE },
  { tab: TabState.PROJECTS, label: "Publications", icon: faScroll, link: NAV_PROJ_PAGE },
  { tab: TabState.GALLERY, label: "Gallery", icon: faPhotoFilm, link: NAV_GALL_PAGE },
];

const Header = ({ isMobile }: IPropsHeader) => {
  const coreState = useSelector(selectCore);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goTo = (tab: TabState, link: string) => {
    dispatch(coreActions.setTab({ selectedTab: tab }));
    navigate(link);
  };

  const isActiveTab = (tab: TabState) => tab === coreState.selectedTab;
  const activeIndex = Math.max(0, NAV_ITEMS.findIndex((item) => item.tab === coreState.selectedTab));

  if (isMobile) {
    return (
      <MobileHeaderRoot>
        <MobileGlassPanel>
          <MobileActiveIndicator $index={activeIndex} />
          {NAV_ITEMS.map((item) => (
            <MobileNavButton
              key={item.tab}
              type="button"
              $active={isActiveTab(item.tab)}
              onClick={() => goTo(item.tab, item.link)}
              aria-label={item.label}
            >
              <FontAwesomeIcon icon={item.icon} />
              <span>{item.label}</span>
            </MobileNavButton>
          ))}
        </MobileGlassPanel>
      </MobileHeaderRoot>
    );
  }

  return (
    <HeaderRoot className="no-select">
      <HeaderInner>
        <BrandButton type="button" onClick={() => goTo(TabState.PUBLIC, NAV_MAIN_PAGE)}>
          <BrandPortrait src={PORTRAIT2_SMALL_URL} alt="Junyoung Kim portrait" />
          <BrandText>
            <strong>Junyoung Kim</strong>
            <span>Personal Archive</span>
          </BrandText>
        </BrandButton>

        <DesktopNavPill>
          <DesktopActiveIndicator $index={activeIndex} />
          {NAV_ITEMS.map((item) => (
            <DesktopNavButton
              key={item.tab}
              type="button"
              $active={isActiveTab(item.tab)}
              onClick={() => goTo(item.tab, item.link)}
            >
              <FontAwesomeIcon icon={item.icon} />
              <span>{item.label}</span>
            </DesktopNavButton>
          ))}
        </DesktopNavPill>
      </HeaderInner>
    </HeaderRoot>
  );
};

const HeaderRoot = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 30;
  background:
    linear-gradient(
      90deg,
      rgba(106, 162, 245, 0.2) 0%,
      rgba(246, 250, 255, 0.88) 22%,
      rgba(250, 252, 255, 0.93) 50%,
      rgba(255, 250, 246, 0.88) 78%,
      rgba(255, 170, 122, 0.19) 100%
    ),
    linear-gradient(180deg, rgba(253, 254, 255, 0.94) 0%, rgba(246, 249, 253, 0.92) 100%);
  border-bottom: 1px solid rgba(210, 222, 238, 0.8);
  backdrop-filter: blur(8px);
  box-shadow: 0 6px 18px rgba(12, 25, 45, 0.07);
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    left: 14%;
    right: 14%;
    bottom: 0;
    height: 2px;
    border-radius: 999px;
    background: linear-gradient(90deg, rgba(116, 175, 255, 0) 0%, rgba(72, 132, 239, 0.7) 50%, rgba(116, 175, 255, 0) 100%);
  }
`;

const HeaderInner = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 11px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BrandButton = styled.button`
  border: 0;
  background: transparent;
  display: inline-flex;
  align-items: center;
  gap: 11px;
  cursor: pointer;
  padding: 4px 5px;
  border-radius: 14px;
  transition: transform 0.2s ease, background 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    background: rgba(236, 243, 252, 0.7);
  }
`;

const BrandPortrait = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 11px;
  object-fit: cover;
  object-position: center;
  border: 1px solid rgba(201, 216, 236, 0.95);
  box-shadow: 0 8px 16px rgba(23, 53, 100, 0.22);
`;

const BrandText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  strong {
    font-size: 15px;
    font-weight: 800;
    color: #15283f;
    letter-spacing: 0.25px;
  }

  span {
    margin-top: 2px;
    color: #6c83a0;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.28px;
    text-transform: uppercase;
  }
`;

const DesktopNavPill = styled.nav`
  position: relative;
  isolation: isolate;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: center;
  gap: 6px;
  padding: 6px;
  min-width: 414px;
  border-radius: 999px;
  border: 1px solid rgba(208, 220, 236, 0.9);
  background: linear-gradient(180deg, rgba(253, 254, 255, 0.9) 0%, rgba(248, 251, 255, 0.9) 100%);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.88), 0 3px 9px rgba(13, 29, 55, 0.08);
`;

const DesktopActiveIndicator = styled.div<{ $index: number }>`
  position: absolute;
  top: 6px;
  bottom: 6px;
  left: 6px;
  width: calc((100% - 24px) / 3);
  border-radius: 999px;
  background: linear-gradient(180deg, #edf4ff 0%, #e6efff 100%);
  border: 1px solid rgba(103, 151, 230, 0.55);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.92), 0 6px 14px rgba(39, 87, 160, 0.2);
  transform: translateX(calc(${({ $index }) => $index} * (100% + 6px)));
  transition: transform 460ms cubic-bezier(0.22, 1, 0.36, 1);
  will-change: transform;
  z-index: 0;
`;

const DesktopNavButton = styled.button<IPropsNavButton>`
  position: relative;
  z-index: 1;
  border: 0;
  border-radius: 999px;
  padding: 10px 14px;
  width: 100%;
  min-width: 0;
  cursor: pointer;
  background: transparent;
  color: ${({ $active }) => ($active ? "#1f5fc4" : "#435d7a")};
  font-weight: ${({ $active }) => ($active ? 700 : 600)};
  font-size: 13px;
  justify-content: center;
  text-align: center;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: color 0.22s ease, transform 0.22s ease;

  &:hover {
    color: ${({ $active }) => ($active ? "#1f5fc4" : "#2f4c6f")};
    transform: translateY(-0.5px);
  }

  svg,
  span {
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: translateY(-0.5px);
  }
`;

const MobileHeaderRoot = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 30;
  padding: 9px 10px;
  background:
    linear-gradient(
      90deg,
      rgba(108, 166, 248, 0.18) 0%,
      rgba(249, 252, 255, 0.9) 24%,
      rgba(250, 252, 255, 0.93) 50%,
      rgba(255, 251, 247, 0.9) 76%,
      rgba(255, 176, 134, 0.16) 100%
    ),
    linear-gradient(180deg, rgba(252, 253, 255, 0.95) 0%, rgba(246, 248, 252, 0.93) 100%);
  border-bottom: 1px solid rgba(212, 223, 238, 0.9);
  backdrop-filter: blur(8px);
`;

const MobileGlassPanel = styled.nav`
  position: relative;
  isolation: isolate;
  width: 100%;
  border: 1px solid rgba(211, 221, 235, 0.94);
  border-radius: 16px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.84) 0%, rgba(248, 251, 255, 0.84) 100%);
  box-shadow: 0 7px 18px rgba(12, 25, 45, 0.1);
  padding: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5px;
`;

const MobileActiveIndicator = styled.div<{ $index: number }>`
  position: absolute;
  top: 5px;
  bottom: 5px;
  left: 5px;
  width: calc((100% - 20px) / 3);
  border-radius: 12px;
  background: linear-gradient(180deg, #edf4ff 0%, #e6efff 100%);
  border: 1px solid rgba(103, 151, 230, 0.55);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.92), 0 4px 10px rgba(35, 81, 150, 0.2);
  transform: translateX(calc(${({ $index }) => $index} * (100% + 5px)));
  transition: transform 440ms cubic-bezier(0.22, 1, 0.36, 1);
  will-change: transform;
  z-index: 0;
`;

const MobileNavButton = styled.button<IPropsNavButton>`
  position: relative;
  z-index: 1;
  border: 0;
  border-radius: 12px;
  padding: 8px 4px;
  background: transparent;
  color: ${({ $active }) => ($active ? "#1f5fc4" : "#445f7d")};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 4px;
  transition: transform 0.2s ease, color 0.2s ease;

  &:active {
    transform: scale(0.97);
  }

  svg {
    font-size: 15px;
  }

  span {
    font-size: 10px;
    font-weight: 700;
    line-height: 1;
    letter-spacing: 0.2px;
  }
`;

export default Header;
