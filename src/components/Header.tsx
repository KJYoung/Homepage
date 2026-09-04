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
  background: var(--color-surface-header);
  border-bottom: 1px solid var(--color-border);
  backdrop-filter: blur(10px);
  box-shadow: var(--shadow-subtle);
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0 0 auto;
    height: 3px;
    background: var(--umich-maize);
  }
`;

const HeaderInner = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 10px 16px;
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
  border-radius: 8px;
  transition: background-color 0.18s ease;

  &:hover {
    background: var(--umich-maize-wash);
  }
`;

const BrandPortrait = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 11px;
  object-fit: cover;
  object-position: center;
  border: 1px solid var(--umich-maize-deep);
  box-shadow: var(--shadow-subtle);
`;

const BrandText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  strong {
    font-size: 15px;
    font-weight: 800;
    color: var(--umich-navy);
    letter-spacing: 0.25px;
  }

  span {
    margin-top: 2px;
    color: var(--color-text-muted);
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
  gap: 0;
  min-width: 390px;
  border-bottom: 1px solid var(--color-border);
`;

const DesktopActiveIndicator = styled.div<{ $index: number }>`
  position: absolute;
  left: 0;
  bottom: -1px;
  width: calc(100% / 3);
  height: 3px;
  background: var(--umich-maize);
  transform: translateX(calc(${({ $index }) => $index} * 100%));
  transition: transform 380ms cubic-bezier(0.22, 1, 0.36, 1);
  will-change: transform;
  z-index: 0;
`;

const DesktopNavButton = styled.button<IPropsNavButton>`
  position: relative;
  z-index: 1;
  border: 0;
  border-radius: 0;
  padding: 11px 14px;
  width: 100%;
  min-width: 0;
  cursor: pointer;
  background: transparent;
  color: ${({ $active }) => ($active ? "var(--umich-navy)" : "var(--color-text-muted)")};
  font-weight: ${({ $active }) => ($active ? 700 : 600)};
  font-size: 13px;
  justify-content: center;
  text-align: center;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: color 0.18s ease, background-color 0.18s ease;

  &:hover {
    color: var(--umich-navy);
    background: var(--umich-navy-wash);
  }

  svg {
    color: ${({ $active }) => ($active ? "var(--umich-navy)" : "var(--color-text-faint)")};
    transition: transform 0.18s ease, color 0.18s ease;
  }

  &:hover svg {
    transform: translateY(-1px) scale(1.05);
  }
`;

const MobileHeaderRoot = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 30;
  padding: 7px 10px 8px;
  background: var(--color-surface-header-mobile);
  border-bottom: 1px solid var(--color-border);
  box-shadow: var(--shadow-subtle);
`;

const MobileGlassPanel = styled.nav`
  position: relative;
  isolation: isolate;
  width: 100%;
  border-bottom: 1px solid var(--color-border);
  background: transparent;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0;
`;

const MobileActiveIndicator = styled.div<{ $index: number }>`
  position: absolute;
  left: 0;
  bottom: -1px;
  width: calc(100% / 3);
  height: 3px;
  background: var(--umich-maize);
  transform: translateX(calc(${({ $index }) => $index} * 100%));
  transition: transform 380ms cubic-bezier(0.22, 1, 0.36, 1);
  will-change: transform;
  z-index: 0;
`;

const MobileNavButton = styled.button<IPropsNavButton>`
  position: relative;
  z-index: 1;
  border: 0;
  border-radius: 0;
  padding: 8px 4px 9px;
  background: transparent;
  color: ${({ $active }) => ($active ? "var(--umich-navy)" : "var(--color-text-muted)")};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 4px;
  transition: color 0.18s ease, background-color 0.18s ease;

  &:hover {
    color: var(--umich-navy);
    background: var(--umich-navy-wash);
  }

  &:hover svg {
    transform: translateY(-1px) scale(1.05);
  }

  &:active {
    transform: scale(0.97);
  }

  svg {
    font-size: 15px;
    transition: transform 0.18s ease;
  }

  span {
    font-size: 10px;
    font-weight: 700;
    line-height: 1;
    letter-spacing: 0.2px;
  }
`;

export default Header;
