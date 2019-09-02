import React, { useContext } from "react";
import PropTypes from "prop-types"

import { Container, Header, Button } from "./index.css"
import ChatroomContext from "../../../contexts/ChatroomContext";

const OnboardingMessage = ({
  onRandomChatroomBtnClick,
  onCreateChatroomBtnClick
}) => {
  return (
    <Container>
      <Header>
        <b>ヽ(✿ﾟ▽ﾟ)ノ</b><br />
        馬上開始你的聊天吧~
      </Header>

      <Button onClick={onRandomChatroomBtnClick}>隨機進入群組</Button>
      <Button onClick={onCreateChatroomBtnClick}>新增聊天室</Button>
    </Container>
  )
};

OnboardingMessage.propTypes = {
  onRandomChatroomBtnClick: PropTypes.func,
  onCreateChatroomBtnClick: PropTypes.func
}


const OnboardingMessageContainer = () => {
  const { toShowCreateChatroomModal } = useContext(ChatroomContext);

  return (
    <OnboardingMessage
      onRandomChatroomBtnClick={() => {}}
      onCreateChatroomBtnClick={() => toShowCreateChatroomModal(true)}
    />
  )
}


export default OnboardingMessageContainer;
