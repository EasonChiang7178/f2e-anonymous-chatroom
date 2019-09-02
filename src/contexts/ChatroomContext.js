import React from "react"
import ReactModal from "react-modal"
import shortid from "shortid"

import CreateChatroomModal from "../components/CreateChatroomModal"

ReactModal.setAppElement("#___gatsby");

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
  showCreateChatroomModal: false,
  setUsername: () => {},
  toShowCreateChatroomModal: () => {},
  createChatroom: () => {}
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
      showCreateChatroomModal: false,
      setUsername: this.setUsername,
      toShowCreateChatroomModal: this.toShowCreateChatroomModal,
      createChatroom: this.createChatroom
    };
  }

  setUsername = (updatedUsername) => {
    this.setState(() => ({ username: updatedUsername }))
  }

  toShowCreateChatroomModal = (toShow) => {
    this.setState(() => ({ showCreateChatroomModal: toShow }))
  }

  createChatroom = (chatroom) => {
    const defaultChatroom = {
      type: "public",
      name: "公開聊天室",
      limitOfMember: 2,
      participates: [],
    }

    this.setState(state => ({
      chatrooms: state.chatrooms.concat({
        ...defaultChatroom,
        ...chatroom,
        id: `CH${shortid.generate().slice(0,3)}`
      })
    }))
  }

  render = () => {
    const { children } = this.props

    return (
      <Context.Provider value={this.state}>
        {children}
        <ReactModal
          isOpen={this.state.showCreateChatroomModal}
          className="create-chatroom-modal__content"
          overlayClassName="create-chatroom-modal__overlay"
        >
          <CreateChatroomModal
            onModalClose={() => this.toShowCreateChatroomModal(false)}
            onConformBtnClick={chatroom => this.createChatroom(chatroom)}
          />
        </ReactModal>
      </Context.Provider>
    )
  }
}

const ChatroomContextConsumer = Context.Consumer

export { Context as default, ChatroomContextProvider, ChatroomContextConsumer }
