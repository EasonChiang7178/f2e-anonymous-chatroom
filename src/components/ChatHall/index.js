import React, { useState } from "react"
import PropTypes from "prop-types"

import { Wrapper, ChatWindowWrapper } from "./index.css"
import Sidebar from "./Sidebar"
import ChatWindow from "./ChatWindow"
import OnboardingMessage from "./OnboardingMessage"

const ChatHall = ({ joinedChatroomIds }) => {
  const [isSidebarActive, toggleSidebar] = useState(true)

  return (
    <Wrapper>
      <Sidebar active={isSidebarActive} onToggleBtnClick={toggleSidebar} />
      <ChatWindowWrapper shrink={isSidebarActive}>
        {
          joinedChatroomIds.length > 0
            ? <ChatWindow chatroomIds={joinedChatroomIds} />
            : <OnboardingMessage />
        }
      </ChatWindowWrapper>
    </Wrapper>
  )
}

ChatHall.propTypes = {
  joinedChatroomIds: PropTypes.array.isRequired
}
ChatHall.defaultProps = {
  joinedChatroomIds: []
}

export default ChatHall
