import styled from "styled-components"
import StyledButton from "../../Common/Button";

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Header = styled.p`
  margin: 0;
  margin-bottom: 32px;
  font-size: 12px;
  color: #6C6C6C;
  text-align: center;
  line-height: 14px;

  > b {
    margin-bottom: 4px;
    font-size: 20px;
    font-weight: 400;
    line-height: 27px;
    font-family: "Segoe UI";
  }
`

export const Button = styled(StyledButton)`
  & + & {
    margin-top: 22px;
  }
`
