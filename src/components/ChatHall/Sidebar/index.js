import React from "react"
import PropTypes from "prop-types"

import FixedSidebar from "./FixedSidebar";
import SlideInSidebar from "./SlideInSidebar";
import { Container } from "./index.css";

const Sidebar = ({ active, onToggleBtnClick }) => {
  return (
    <Container active={active}>
      <FixedSidebar onActiveBtnClick={onToggleBtnClick} />
      <SlideInSidebar active={active} onHideBtnClick={onToggleBtnClick} />
    </Container>
  )
}

Sidebar.propTypes = {
  active: PropTypes.bool,
  onToggleBtnClick: PropTypes.func
}

export default Sidebar
