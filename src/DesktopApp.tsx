import { useSelector } from "react-redux";
import Gallery from "./pages/Gallery";
import MainPage from "./pages/MainPage";
import New from "./pages/New";
import Private from "./pages/Private";
import Public from "./pages/Public";
import { selectCore, TabState } from "./store/slices/core";
import { LANGUAGE } from "./utils/Language";
import PublicEn from "./pages/public/Public";

interface DesktopAppProps {
  language: LANGUAGE
};

export const DesktopApp = ( { language } : DesktopAppProps) => {
    const coreState = useSelector(selectCore);
    
    if(language === 'KO'){
      return (
        <>
            {coreState.selectedTab === TabState.MAIN && <MainPage />}
            {coreState.selectedTab === TabState.PUBLIC && <Public />}
            {coreState.selectedTab === TabState.PRIVATE && <Private />}
            {coreState.selectedTab === TabState.GALLERY && <Gallery isMobile={false}/>}
            {coreState.selectedTab === TabState.NEW && <New />}
        </>
      );
    }else if(language === 'EN'){
      return < PublicEn />;
    }else{
      return <>
        <span>Unreachable</span>
      </>
    }
  };
  
