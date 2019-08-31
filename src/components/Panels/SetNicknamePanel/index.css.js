import styled from "styled-components"
import { COLOR } from "../../../constants"

export const Label = styled.label`
  font-size: 20px;
  line-height: 27px;
  margin-bottom: 16px;
  color: ${COLOR.BLUE};
`

export const NicknameInput = styled.input`
  padding: 1px 0;
  margin-bottom: 24px;
  border: none;
  border-bottom: 1px solid ${COLOR.BRIGHT_GARY};
  background: transparent;
  color: ${COLOR.WHITE};
  font-size: 14px;
  line-height: 17px;
  text-align: center;

  &:focus {
    outline: none;
    border-bottom-color: ${COLOR.YELLOW};
  }

  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: #6C6C6C;
  }
  ::-moz-placeholder { /* Firefox 19+ */
    color: #6C6C6C;
  }
  :-ms-input-placeholder { /* IE 10+ */
    color: #6C6C6C;
  }
  :-moz-placeholder { /* Firefox 18- */
    color: #6C6C6C;
  }
`
