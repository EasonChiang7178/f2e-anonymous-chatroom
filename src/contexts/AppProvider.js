import React from "react";
import PropTypes from "prop-types";

import { ChatroomContextProvider } from "./ChatroomContext";

const AppProvider = ({ children }) => {
  return (
    <ChatroomContextProvider>
      {children}
    </ChatroomContextProvider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default AppProvider;
