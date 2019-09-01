import React from "react";
import { Normalize } from "styled-normalize";
import { createGlobalStyle } from "styled-components";

import { COLOR } from "../constants";

import "rc-collapse/assets/index.css";

const Global = createGlobalStyle`
  body {
    font-family: Consolas, monaco, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Microsoft JhengHei', 'Open Sans', sans-serif;
    background-color: ${COLOR.BLACK};
  }
`;

class GlobalStyles extends React.PureComponent {
  render = () => (
    <>
      <Normalize />
      <Global />
    </>
  );
}

export default GlobalStyles;
