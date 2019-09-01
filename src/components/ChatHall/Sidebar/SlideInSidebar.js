import React from "react";
import PropTypes from "prop-types";

import {
  SlideInSidebarWrapper,
  HideSidebarButton,
  HeaderSmallIcon,
  SlideInHeader,
  LeftArrowIcon,
} from "./index.css";

const SlideInSidebar = ({ active, onHideBtnClick }) => {
  return (
    <SlideInSidebarWrapper active={active}>
      <SlideInHeader>
        <HeaderSmallIcon />
        聊天大廳
        
        <HideSidebarButton onClick={() => onHideBtnClick(false)}>
          <LeftArrowIcon />
        </HideSidebarButton>
      </SlideInHeader>
    </SlideInSidebarWrapper>
  );
};

SlideInSidebar.propTypes = {
  active: PropTypes.bool,
  onHideBtnClick: PropTypes.func.isRequired
};

export default SlideInSidebar;
