import styled from "styled-components"
import ReactSelect from "react-select"

import { Label, NicknameInput } from "../Panels/SetNicknamePanel/index.css"
import { Button as StyledButton } from "../Panels/panels.css"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const CloseButton = styled.button`
  padding: 0;
  background: transparent;
  border: none;
  font-size: 16px;
  line-height: 19px;
  color: #6C6C6C;
  cursor: pointer;
  align-self: flex-end;

  &:focus {
    outline: none;
  }
`

export const Header = styled(Label)`
  margin-bottom: 41px;
`

export const NameInput = styled(NicknameInput)`
  margin-bottom: 20px;
`

export const Button = styled(StyledButton)`
  margin-top: 10px;
`

export const LimitSelectWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 17px;
`

export const LimitSelect = styled(ReactSelect)`
  margin: 0 4px 0px 5px;
`

export const LimitMessage = styled.span`
  margin-left: 3px;
  font-size: 10px;
  line-height: 12px;
  color: #6C6C6C;
`
