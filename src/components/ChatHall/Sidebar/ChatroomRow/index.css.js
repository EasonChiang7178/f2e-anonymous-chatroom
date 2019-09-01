import styled from "styled-components"
import { COLOR } from "../../../../constants";

export const Wrapper = styled.div`
  padding: 1px 0;
  font-size: 10px;
  line-height: 12px;
  color: ${COLOR.WHITE};
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  & + & {
    margin-top: 6px;
  }

  &:hover {
    color: ${COLOR.YELLOW};
  }
`

export const Name = styled.div``

export const Status = styled.div``
