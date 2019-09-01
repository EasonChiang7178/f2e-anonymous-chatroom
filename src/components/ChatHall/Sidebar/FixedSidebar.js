import React from "react"
import PropTypes from "prop-types"

import { SidebarWrapper, ToggleButton, HeaderIcon, Header, RightArrowIcon } from "./index.css"

const FixedSidebar = ({ onActiveBtnClick }) => {
  return (
    <SidebarWrapper>
      <ToggleButton onClick={() => onActiveBtnClick(true)}>
        <HeaderIcon />
        <Header>聊天大廳</Header>
        <RightArrowIcon />
      </ToggleButton>
    </SidebarWrapper>
  )
}

FixedSidebar.propTypes = {
  onActiveBtnClick: PropTypes.func.isRequired
}

export default FixedSidebar
