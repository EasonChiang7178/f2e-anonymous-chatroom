import React from "react"

const defaultContextValue = {
  username: "",
  setUsername: () => {}
}

const Context = React.createContext(defaultContextValue)

class ChatroomContextProvider extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      username: "",
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
