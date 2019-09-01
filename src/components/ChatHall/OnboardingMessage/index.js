import React from "react";
import PropTypes from "prop-types"

import { Container, Header, Button } from "./index.css"

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

export default OnboardingMessage;
