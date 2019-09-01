import React from "react"

const defaultContextValue = {
  username: "",
  chatrooms: [
    {
      id: "CH001",
      type: "public",
      name: "肚子好餓喔，吃什麼好？",
      limitOfMember: 30,
      participates: ["id000001", "love5566"],
      messages: []
    },
    {
      id: "CH3d5",
      type: "public",
      name: "安安你好，你的名字是...",
      limitOfMember: 5,
      participates: ["love5566"],
      messages: []
    }
  ],
  chatroomsHistory: ["CH3d5"],
  activeChatrooms: [],
  currentChatroom: "",
  setUsername: () => {}
}

const Context = React.createContext(defaultContextValue)

class ChatroomContextProvider extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      username: "",
      chatrooms: defaultContextValue.chatrooms,
      chatroomsHistory: defaultContextValue.chatroomsHistory,
      activeChatrooms: [],
      currentChatroom: "",
      setUsername: this.setUsername
    };
  }

  setUsername = (updatedUsername) => {
    this.setState(() => ({ username: updatedUsername }))
  }

  render = () => {
    const { children } = this.props

    return (
      <Context.Provider value={this.state}>
        {children}
      </Context.Provider>
    )
  }
}

const ChatroomContextConsumer = Context.Consumer

export { Context as default, ChatroomContextProvider, ChatroomContextConsumer }
