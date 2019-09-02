import React, { useState } from "react"
import PropTypes from "prop-types"

import { Wrapper, CloseButton, Header, NameInput, Button, LimitSelectWrapper, LimitSelect, LimitMessage } from "./index.css"
import { COLOR } from "../../constants";

const selectStyles = {
  control: provided => ({
    ...provided,
    width: "48px",
    border: `1px solid ${COLOR.BRIGHT_GARY}`,
    borderRadius: "0",
    background: "transparent",
    minHeight: "25px",
    height: "25px",
    ':focus': {
      borderColor: COLOR.YELLOW,
      boxShadow: "none"
    },
    ':hover': {
      borderColor: COLOR.YELLOW,
      boxShadow: "none"
    }
  }),
  indicatorsContainer: provided => ({
    ...provided,
    width: "22px",
    height: "25px",
    transform: "translateX(-7px)"
  }),
  indicatorSeparator: () => ({ display: "none" }),
  menu: provided => ({ ...provided, margin: 0, borderRadius: 0, background: COLOR.GRAY }),
  menuList: provided => ({ ...provided, padding: "0" }),
  option: (provided, { isFocused, isSelected }) => ({
    ...provided,
    color: isSelected || isFocused
      ? COLOR.YELLOW
      : COLOR.WHITE ,
    backgroundColor: "transparent",
    ':active': {
      backgroundColor: "transparent"
    }
  }),
  singleValue: provided => ({
    ...provided, 
    fontSize: "12px",
    color: COLOR.WHITE
  })
}

const selectOptions = Array.from(Array(29)).map((_, i) => ({ value: i + 2, label: `${i + 2}` }))

const CreateChatroomModal = ({ onModalClose, onConformBtnClick }) => {
  const [chatroomName, setChatroomName] = useState("")
  const [selectedLimit, setLimit] = useState(2)

  const isButtonDisabled = chatroomName ? false : true;

  return (
    <Wrapper>
      <CloseButton onClick={onModalClose}>X</CloseButton>
      <Header>新增聊天室</Header>

      <NameInput
        value={chatroomName}
        placeholder="聊天室名稱"
        onChange={e => setChatroomName(e.currentTarget.value)}
      />

      <LimitSelectWrapper>
        限制
        <LimitSelect
          isSearchable={false}
          styles={selectStyles}
          options={selectOptions}
          defaultValue={selectOptions[0]}
          onChange={(option) => setLimit(option.value)}
        />
        人
        <LimitMessage>(上限30人)</LimitMessage>
      </LimitSelectWrapper>

      <Button
        className={isButtonDisabled === false ? "" : "disabled"}
        disabled={isButtonDisabled}
        onClick={() => {
          onConformBtnClick({ name: chatroomName, limitOfMember: selectedLimit })
          onModalClose()
        }}
      >
        確定
      </Button>
    </Wrapper>
  )
}

CreateChatroomModal.propTypes = {
  onModalClose: PropTypes.func,
  onConformBtnClick: PropTypes.func
}

export default CreateChatroomModal
