import { useNavigate } from "react-router-dom";
import { PublicationWrapperDiv } from "./PublicationContents";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TabState, coreActions } from "../../store/slices/core";
import styled from "styled-components";

export const PublicationsMain = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(coreActions.setTab({ selectedTab: TabState.PROJECTS }));
  }, [dispatch]);

  return (
    <PageRoot>
      <BackdropShape />
      <PageBody>
        <PublicationWrapperDiv navigate={navigate} isDetail={true} viewMode="full" />
      </PageBody>
    </PageRoot>
  );
};

const PageRoot = styled.div`
  width: 100%;
  min-height: 100%;
  position: relative;
  padding: 2px 0 18px;
  overflow: hidden;
`;

const BackdropShape = styled.div`
  position: absolute;
  right: -160px;
  top: -90px;
  width: 500px;
  height: 340px;
  border-radius: 46%;
  background: radial-gradient(circle at 35% 42%, rgba(132, 186, 255, 0.25) 0%, rgba(132, 186, 255, 0) 70%);
  pointer-events: none;
`;

const PageBody = styled.div`
  position: relative;
  z-index: 1;
`;
