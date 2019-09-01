import styled from "styled-components"

import { COLOR } from "../../../constants";
import usersIcon from "../../../images/icons/users.svg";
import usersSmallIcon from "../../../images/icons/users-small.svg";
import rightArrowIcon from "../../../images/icons/right-arrow.svg";
import leftArrowIcon from "../../../images/icons/left-arrow.svg";

export const Container = styled.div`
  width: 50px;
  position: relative;
  flex: 0 0 auto;
  transition: width .3s ease;

  ${props => props.active && {
    width: "308px",
    transition: "width .2s ease .05s"
  }}
`

export const SidebarWrapper = styled.aside`
  height: 100%;
  padding: 24px 11px 0 14px;
  background: ${COLOR.LIGHTER_GRAY};
`

export const ToggleButton = styled.button`
  border: none;
  padding: 0;
  background: transparent;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`

export const HeaderIcon = styled.img.attrs({
  src: usersIcon
})``

export const Header = styled.h3`
  margin: 18px auto 8px;
  width: 12px;
  color: ${COLOR.WHITE};
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
`

export const RightArrowIcon = styled.img.attrs({
  src: rightArrowIcon
})``;

export const SlideInSidebarWrapper = styled.aside`
  padding-top: 16px;
  width: 308px;
  height: 100%;
  background: ${COLOR.LIGHTER_GRAY};
  position: absolute;
  top: 0;
  transform: translateX(-308px);
  transition: transform .3s ease;

  ${props => props.active && {
    transform: "translateX(0)"
  }}
`

export const SlideInHeader = styled.h3`
  padding: 0 19px;
  margin: 0;
  margin-bottom: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  color: ${COLOR.WHITE};
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
`

export const HideSidebarButton = styled(ToggleButton)`
`

export const HeaderSmallIcon = styled.img.attrs({
  src: usersSmallIcon
})`
  margin-right: 5px;
`

export const LeftArrowIcon = styled.img.attrs({
  src: leftArrowIcon
})`
  position: absolute;
  right: 19px;
  top: 0;
`;
