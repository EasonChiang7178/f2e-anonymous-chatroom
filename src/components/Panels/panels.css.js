import styled from "styled-components"
import { COLOR } from "../../constants";

export const PanelContainer = styled.div`
  height: 100vh;
  min-height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Panel = styled.div`
  width: 250px;
  height: 250px;
  padding-bottom: 11px;
  background: ${COLOR.GRAY};
  border: 1px solid ${COLOR.GRAY};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 3px 30px #0000007A;
  box-sizing: border-box;
`

export const Button = styled.button`
  padding: 0;
  border: none;
  background: transparent;
  color: ${COLOR.WHITE};
  line-height: 23px;
  font-size: 20px;
  display: block;
  cursor: pointer;
  transition: opacity .3s ease;

  &:hover {
    color: ${COLOR.YELLOW};
  }
  &:focus, &:active {
    outline: none;
  }

  & + & {
    margin-top: 50px;
  }

  &::before {
    content: "["
  }
  &::after {
    content: "]"
  }

  &.disabled {
    opacity: .6;
    color: ${COLOR.WHITE};
    cursor: not-allowed;
  }
`
