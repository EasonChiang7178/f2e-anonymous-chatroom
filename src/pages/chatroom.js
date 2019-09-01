import React, { useEffect, useContext } from "react";
import { navigate } from "gatsby";

import SEO from "../layouts/SEO";
import ChatroomContext from "../contexts/ChatroomContext";
import ChatHall from "../components/ChatHall";

const ChatroomPage = () => {
  const { username } = useContext(ChatroomContext)
  useEffect(() => {
    if(!username) navigate("/")
  }, [])
  
  return (
    <>
      <SEO title="匿名聊天室 | 聊天大廳" />
      <ChatHall />
    </>
  )
};

export default ChatroomPage;
