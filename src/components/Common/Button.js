import styled from "styled-components";
import { COLOR } from "../../constants";

export default styled.button`
  width: 135px;
  height: 30px;
  padding: 0;
  background: transparent;
  border: 1px solid #707070;
  font-size: 14px;
  color: ${COLOR.WHITE};
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover, &:active {
    color: ${COLOR.YELLOW};
  }
`
