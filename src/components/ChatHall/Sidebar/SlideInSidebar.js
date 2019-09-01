import React from "react";
import PropTypes from "prop-types";

import {
  SlideInSidebarWrapper,
  HideSidebarButton,
  HeaderSmallIcon,
  SlideInHeader,
  LeftArrowIcon,
  UtilityWrapper,
  Button,
  SearchInputWrapper,
  SearchInput,
  MagnifyGlassIcon,
  RightTriangle,
  Collapse,
  CollapsePanel
} from "./index.css";

const SlideInSidebar = ({ active, onHideBtnClick, onRandomChatroomBtnClick }) => {
  const collapseExpandIcon = ({ isActive }) => (
    <RightTriangle style={{ transform: `rotate(${isActive ? 90 : 0}deg) translateY(-50%)` }} />
  );

  return (
    <SlideInSidebarWrapper active={active}>
      <SlideInHeader>
        <HeaderSmallIcon />
        聊天大廳
        <HideSidebarButton onClick={() => onHideBtnClick(false)}>
          <LeftArrowIcon />
        </HideSidebarButton>
      </SlideInHeader>

      <UtilityWrapper>
        <Button onClick={onRandomChatroomBtnClick}>隨機進入群組</Button>

        <SearchInputWrapper>
          <SearchInput placeholder="搜尋聊天室名稱或編號" />
          <MagnifyGlassIcon />
        </SearchInputWrapper>
      </UtilityWrapper>

      <Collapse defaultActiveKey="public" expandIcon={collapseExpandIcon}>
        <CollapsePanel key="public" header="公開聊天室 (0)">123</CollapsePanel>
        <CollapsePanel key="history" header="最近加入的聊天室">abc</CollapsePanel>
      </Collapse>
    </SlideInSidebarWrapper>
  );
};

SlideInSidebar.propTypes = {
  active: PropTypes.bool,
  onHideBtnClick: PropTypes.func.isRequired,
  onRandomChatroomBtnClick: PropTypes.func
};

export default SlideInSidebar;
