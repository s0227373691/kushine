import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import device from "../config/device-size";

const NavMenu = () => {
  return (
    <MenuContainer>
      <Home>
        <Link to="/">KUSHINE</Link>
      </Home>
      <MenuList>
        <MenuItem>
          <Link to="/hot">HOT</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/newarrivals">NEW ARRIVALS</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/allproducts">ALL PRODUCTS</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/mensstyle">MEN'S STYLE</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/madamsstyle">MADAM'S STYLE</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/couple">COUPLE</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/accessories">ACCESSORIES</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/newdiscount">NEW DISCOUNT</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/oddsizes">ODD SIZES</Link>
        </MenuItem>
      </MenuList>
    </MenuContainer>
  );
};

export default NavMenu;

const MenuContainer = styled.nav`
  width: 300px;
  padding: 10px 10px 10px 50px;
  box-sizing: border-box;

  @media ${device.tablet} {
    display: none;
  }
`;

const Home = styled.h1`
  font-size: 40px;
  font-family: "Exo 2", sans-serif;
  text-align: center;
  cursor: default;
  a {
    text-decoration: none;
    color: black;
  }
`;

const MenuList = styled.ul`
  padding: 0;
  list-style: none;
  box-sizing: border-box;
`;

const MenuItem = styled.li`
  width: 100%;
  border-top: 2px solid #aaa;
  &:hover {
    cursor: pointer;
    a {
      color: #aaa;
      transition: 0.3s;
    }
  }
  a {
    padding: 10px 10px 20px 10px;
    display: block;
    font-weight: bold;
    text-decoration: none;
    color: #333;
  }
`;
