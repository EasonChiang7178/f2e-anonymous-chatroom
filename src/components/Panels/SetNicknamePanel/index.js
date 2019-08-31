import React, { useState } from "react";
import PropTypes from "prop-types";
import { navigate } from "gatsby";

import { PanelContainer, Panel, Button } from "../panels.css";
import { Label, NicknameInput } from "./index.css";

const SetNicknamePanel = ({ defaultNickname, onConfirmBtnClick }) => {
  const [nicknameValue, setNicknameValue] = useState(defaultNickname)
  const onNicknameChange = e => setNicknameValue(e.currentTarget.value)

  const isButtonDisabled = nicknameValue ? false : true

  return (
    <PanelContainer>
      <Panel>
        <Label>暱稱聊天</Label>
        <NicknameInput value={nicknameValue} placeholder="輸入暱稱" onChange={onNicknameChange} />

        <Button
          className={isButtonDisabled === false ? "" : "disabled"}
          disabled={isButtonDisabled}
          onClick={onConfirmBtnClick}
        >
          確定
        </Button>
      </Panel>
    </PanelContainer>
  );
};

SetNicknamePanel.propTypes = {
  defaultNickname: PropTypes.string,
  onConfirmBtnClick: PropTypes.func
};

const SetNicknamePanelContainer = () => {
  const onConfirmBtnClick = () => {
    navigate("/chatroom");
  };

  return (
    <SetNicknamePanel
      defaultNickname=""
      onConfirmBtnClick={onConfirmBtnClick}
    />
  );
};

export default SetNicknamePanelContainer;
