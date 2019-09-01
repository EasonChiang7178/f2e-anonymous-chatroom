import styled from "styled-components"
import StyledCollapse, { Panel } from "rc-collapse";

import StyledButton from "../../Common/Button";
import { COLOR } from "../../../constants";
import usersIcon from "../../../images/icons/users.svg";
import usersSmallIcon from "../../../images/icons/users-small.svg";
import rightArrowIcon from "../../../images/icons/right-arrow.svg";
import leftArrowIcon from "../../../images/icons/left-arrow.svg";
import magnifyGlass from "../../../images/icons/magnify-glass.svg";

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

export const UtilityWrapper = styled.div`
  margin: 0 12px 19px 13px;
`

export const Button = styled(StyledButton)`
  margin-bottom: 11px;
  width: 100%;
`

export const SearchInputWrapper = styled.div`
  position: relative;
`

export const SearchInput = styled.input`
  padding: 6px 40px 5px 18px;
  width: 100%;
  background: #1E1E1E;
  border: none;
  border-radius: 13px;
  box-sizing: border-box;
  color: ${COLOR.WHITE};
  font-size: 14px;
  line-height: 17px;

  &:focus {
    outline: none;
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

export const MagnifyGlassIcon = styled.img.attrs({
  src: magnifyGlass
})`
  position: absolute;
  top: 50%;
  right: 14px;
  transform: translateY(-50%);
`

export const RightTriangle = styled.div`
  border: 6px solid #D4D4D4;
  border-right: none;
  border-top-color: transparent;
  border-bottom-color: transparent;
`

export const Collapse = styled(StyledCollapse)`
  border: none !important;
  border-radius: 0 !important;
  background: transparent !important;
;
`

export const CollapsePanel = styled(Panel)`
  border-top: none !important;

  .rc-collapse-header {
    position: relative;
    padding: 7px 7px 6px 29px !important;
    font-size: 14px;
    line-height: 17px !important;
    background: #414141;
    color: #D4D4D4 !important;

    &:focus {
      outline: none;
    }

    > ${RightTriangle} {
      position: absolute;
      top: 50%;
      left: 10px;
      transform: rotate(0deg) translateY(-50%);
      transform-origin: 50% 0%;
    }
  }

  .rc-collapse-content {
    background: transparent;
    color: #D4D4D4;
    padding: 0 37px 0 25px;

    > .rc-collapse-content-box {
      margin: 12px 0 11px;
    }
  }
`
