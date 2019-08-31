import React from "react";
import PropTypes from "prop-types";

import GlobalStyles from "./GlobalStyles";

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    {children}
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
