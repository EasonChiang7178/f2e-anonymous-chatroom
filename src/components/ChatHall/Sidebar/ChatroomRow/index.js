import React from "react"
import PropTypes from "prop-types"

import { Wrapper, Name, Status } from "./index.css"

const ChatroomRow = ({
  id, name, memberNum, memberLimit, onClick
}) => {
  const numberNumString =  memberNum + (memberNum < 10 ? " " : "");
  const numberLimitString = (memberLimit < 10 ? ' ': '') + memberLimit;

  return (
    <Wrapper onClick={() => onClick(id)}>
      <Name>{`${id} ${name}`}</Name>
      <Status>{`${numberNumString}/${numberLimitString}`}</Status>
    </Wrapper>
  )
}

ChatroomRow.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  memberNum: PropTypes.number,
  numberLimit: PropTypes.number,
  onClick: PropTypes.func
}

export default ChatroomRow
