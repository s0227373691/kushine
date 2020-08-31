import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

import device from "../config/device-size";

const NavMenu = () => {
  return (
    <MenuContainer>
      <Router>
        <Home>
          <NavLink exact to="/">
            KUSHINE
          </NavLink>
        </Home>
        <MenuList>
          <MenuItem>
            <NavLink to="/hot" activeStyle={activeStyled}>
              HOT
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/newarrivals" activeStyle={activeStyled}>
              NEW ARRIVALS
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/allproducts" activeStyle={activeStyled}>
              ALL PRODUCTS
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/mensstyle" activeStyle={activeStyled}>
              MEN'S STYLE
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/madamsstyle" activeStyle={activeStyled}>
              MADAM'S STYLE
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/couple" activeStyle={activeStyled}>
              COUPLE
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/accessories" activeStyle={activeStyled}>
              ACCESSORIES
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/newdiscount" activeStyle={activeStyled}>
              NEW DISCOUNT
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/oddsizes" activeStyle={activeStyled}>
              ODD SIZES
            </NavLink>
          </MenuItem>
        </MenuList>
      </Router>
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

const activeStyled = {
  fontWeight: "bold",
  color: "red",
};
