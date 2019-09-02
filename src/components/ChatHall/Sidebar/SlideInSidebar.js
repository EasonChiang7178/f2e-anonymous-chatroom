import React, { useContext, useState } from "react";
import PropTypes from "prop-types";

import ChatroomRow from "./ChatroomRow"
import {
  SlideInSidebarWrapper,
  HideSidebarButton,
  HeaderSmallIcon,
  SlideInHeader,
  LeftArrowIcon,
  UtilityWrapper,
  Button,
  SearchInputWrapper,
  SearchInput,
  MagnifyGlassIcon,
  RightTriangle,
  Collapse,
  CollapsePanel,
  FooterButton
} from "./index.css";
import ChatroomContext from "../../../contexts/ChatroomContext";

const SlideInSidebar = ({
  active,
  chatrooms,
  chatroomsHistory,
  onHideBtnClick,
  onRandomChatroomBtnClick,
  onCreateChatroomBtnClick,
  onChatroomClick
}) => {
  const [searchKeyword, setSearchKeyword] = useState("")

  const collapseExpandIcon = ({ isActive }) => (
    <RightTriangle style={{ transform: `rotate(${isActive ? 90 : 0}deg) translateY(-50%)` }} />
  );

  const publicChatroomsToShow = chatrooms
    .filter(room => room.type === "public")
    .filter(room => room.name.indexOf(searchKeyword) !== -1)

  const historyChatroomsToShow = chatroomsHistory
    .map(id => chatrooms.find(i => i.id === id))
    .filter(room => room.name.indexOf(searchKeyword) !== -1)

  return (
    <SlideInSidebarWrapper active={active}>
      <SlideInHeader>
        <HeaderSmallIcon />
        聊天大廳
        <HideSidebarButton onClick={() => onHideBtnClick(false)}>
          <LeftArrowIcon />
        </HideSidebarButton>
      </SlideInHeader>

      <UtilityWrapper>
        <Button onClick={onRandomChatroomBtnClick}>隨機進入群組</Button>

        <SearchInputWrapper>
          <SearchInput value={searchKeyword} placeholder="搜尋聊天室名稱" onChange={e => setSearchKeyword(e.currentTarget.value)} />
          <MagnifyGlassIcon />
        </SearchInputWrapper>
      </UtilityWrapper>

      <Collapse defaultActiveKey="public" expandIcon={collapseExpandIcon}>
        <CollapsePanel key="public" header={`公開聊天室 (${publicChatroomsToShow.length})`}>
          {publicChatroomsToShow.map(room => (
            <ChatroomRow
              key={room.id}
              id={room.id}
              name={room.name}
              memberNum={room.participates.length}
              memberLimit={room.limitOfMember}
              onClick={onChatroomClick}
            />
          ))}
        </CollapsePanel>
        <CollapsePanel key="history" header="最近加入的聊天室">
          {historyChatroomsToShow.map(room => (
            <ChatroomRow
              key={room.id}
              id={room.id}
              name={room.name}
              memberNum={room.participates.length}
              memberLimit={room.limitOfMember}
              onClick={onChatroomClick}
            />
          ))}
        </CollapsePanel>
      </Collapse>

      <FooterButton onClick={onCreateChatroomBtnClick}>新增聊天室</FooterButton>
    </SlideInSidebarWrapper>
  );
};

SlideInSidebar.propTypes = {
  active: PropTypes.bool,
  chatrooms: PropTypes.array,
  chatroomsHistory: PropTypes.array,
  onHideBtnClick: PropTypes.func.isRequired,
  onRandomChatroomBtnClick: PropTypes.func,
  onCreateChatroomBtnClick: PropTypes.func,
  onChatroomClick: PropTypes.func
};


const SlideInSidebarContainer = ({ active, onHideBtnClick }) => {
  const { chatrooms, chatroomsHistory, toShowCreateChatroomModal } = useContext(ChatroomContext)

  return (
    <SlideInSidebar
      active={active}
      chatrooms={chatrooms}
      chatroomsHistory={chatroomsHistory}
      onHideBtnClick={onHideBtnClick}
      onRandomChatroomBtnClick={() => {}}
      onCreateChatroomBtnClick={() => toShowCreateChatroomModal(true)}
      onChatroomClick={(id) => console.warn(id)}
    />
  )
}


export default SlideInSidebarContainer;
