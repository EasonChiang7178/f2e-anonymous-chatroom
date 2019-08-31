import React from "react";
import PropTypes from "prop-types";

import Layout from "../layouts";
import AppProvider from "../contexts/AppProvider";

const wrapPageElement = ({ element, props }) => (
  <AppProvider>
    <Layout {...props}>{element}</Layout>
  </AppProvider>
);

wrapPageElement.propTypes = {
  element: PropTypes.any,
  props: PropTypes.any
};

export default wrapPageElement;
