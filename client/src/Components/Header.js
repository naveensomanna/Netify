import React from "react";
import styled from "styled-components";
import logo from "../images/logo.png";
import user from "../images/user.svg";
import {
  MdSearch,
  MdFavorite,
  MdNotifications,
  MdArrowDropDown
} from "react-icons/md";

const HeaderWrapper = styled.header`
  height: 80px;
`;
const HeaderContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;
const LeftHeader = styled.div`
  display: flex;
  align-items: center;
  flex: 2;
  height: 100%;
`;

const LogoWrapper = styled.div`
  position: relative;
  width: 60px;
  height: 30px;
`;
const AppLogo = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
const List = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
  align-items: center;
`;
const ListItem = styled.li`
  list-style-type: none;
  text-transform: uppercase;
  padding: 0 20px;
  color: ${props => props.theme.light};
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  letter-spacing: 0.8px;
  &:hover {
    color: ${props => props.theme.white};
  }
`;

const RightHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  & svg {
    fill: white;
  }
`;
const WatchListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & span {
    color: ${props => props.theme.white};
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.8px;
  }
`;
const ProfileWrapper = styled.div`
  position: relative;
  width: 48px;
  height: 48px;
  background-color: ${props => props.theme.white};
  border-radius: 50%;
  overflow: hidden;
  & img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <LeftHeader>
          <LogoWrapper>
            <AppLogo src={logo} alt="logo" />
          </LogoWrapper>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Movies</ListItem>
            <ListItem>Series</ListItem>
            <ListItem>Kids</ListItem>
          </List>
        </LeftHeader>
        <RightHeader>
          <MdSearch />
          <WatchListWrapper>
            <MdFavorite />
            <span>watchlist</span>
          </WatchListWrapper>
          <MdNotifications />
          <ProfileWrapper>
            <img src={user} alt="user profile" />
          </ProfileWrapper>
          <MdArrowDropDown />
        </RightHeader>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
