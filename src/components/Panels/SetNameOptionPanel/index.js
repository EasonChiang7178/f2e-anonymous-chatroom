import React from "react";
import PropTypes from "prop-types";

import { PanelContainer, Panel, Button } from "../panels.css";

const SetNameOptionPanel = ({ onAnonymousBtnClick, onNicknameClick }) => {
  return (
    <PanelContainer>
      <Panel>
        <Button onClick={onAnonymousBtnClick}>匿名聊天</Button>
        <Button onClick={onNicknameClick}>暱稱聊天</Button>
      </Panel>
    </PanelContainer>
  );
};

SetNameOptionPanel.propTypes = {
  onAnonymousBtnClick: PropTypes.func,
  onNicknameClick: PropTypes.func
};

const SetNameOptionPanelContainer = () => {
  return (
    <SetNameOptionPanel
      onAnonymousBtnClick={() => console.warn("anonymous")}
      onNicknameClick={() => console.warn("nickname")}
    />
  );
};

export default SetNameOptionPanelContainer;
