import React from "react";
import PropTypes from "prop-types"

import { Container, Header, Button } from "./index.css"

const OnboardingMessage = ({
  onRandomChatroomBtnClick,
  onCreateChatroomClick
}) => {
  return (
    <Container>
      <Header>
        <b>ヽ(✿ﾟ▽ﾟ)ノ</b><br />
        馬上開始你的聊天吧~
      </Header>

      <Button onClick={onRandomChatroomBtnClick}>隨機進入群組</Button>
      <Button onClick={onCreateChatroomClick}>新增聊天室</Button>
    </Container>
  )
};

OnboardingMessage.propTypes = {
  onRandomChatroomBtnClick: PropTypes.func,
  onCreateChatroomClick: PropTypes.func
}

export default OnboardingMessage;
