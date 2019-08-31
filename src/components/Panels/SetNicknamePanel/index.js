import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { navigate } from "gatsby";

import { PanelContainer, Panel, Button } from "../panels.css";
import { Label, NicknameInput } from "./index.css";
import ChatroomContext from "../../../contexts/ChatroomContext";

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
          onClick={() => onConfirmBtnClick(nicknameValue)}
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
  const { setUsername, username } = useContext(ChatroomContext)

  const onConfirmBtnClick = (nickname) => {
    setUsername(nickname);
    navigate("/chatroom");
  };

  return (
    <SetNicknamePanel
      defaultNickname={username}
      onConfirmBtnClick={onConfirmBtnClick}
    />
  );
};

export default SetNicknamePanelContainer;
