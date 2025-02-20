import { useNavigate } from "react-router-dom";
import { PublicationWrapperDiv } from "./PublicationContents";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TabState, coreActions } from "../../store/slices/core";

export const PublicationsMain = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(coreActions.setTab({selectedTab: TabState.PROJECTS}));
    }, [dispatch]);
    return <div>
        <PublicationWrapperDiv navigate={navigate} isDetail={true} />
    </div>
};