import React, { useState } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

import device from "../config/device-size";
import BackDrop from "./backDrop";

// import Icon
import IconUser from "../../public/icon/user";
import IconShoppingCart from "../../public/icon/shopping-cart";
import IconSearch from "../../public/icon/search";
import IconMenuBar from "../../public/icon/open-menu";

const NavMenuMobile = () => {
  const [divSearchDisplay, setDivSearchDisplay] = useState(false);
  const [divMenuDisplay, setDivMenuDisplay] = useState(false);

  function handleBackDropClick() {
    setDivSearchDisplay(false);
    setDivMenuDisplay(false);
  }

  return (
    <MenuContainer>
      <Router>
        <Nav>
          <NavLink to={location => location.pathname}>
            <BtnMenuBar
              src={IconMenuBar}
              onClick={() => {
                setDivMenuDisplay(!divMenuDisplay);
                setDivSearchDisplay(false);
              }}
            />
          </NavLink>
          <NavLink to={location => location.pathname}>
            <BtnSearch
              src={IconSearch}
              onClick={() => {
                setDivSearchDisplay(!divSearchDisplay);
                setDivMenuDisplay(false);
              }}
            />
          </NavLink>
          <Home onClick={handleBackDropClick}>
            <NavLink exact to="/">
              KUSHINE
            </NavLink>
          </Home>
          <NavLink to="/User">
            <BtnUser src={IconUser} />
          </NavLink>
          <NavLink to="/shoppingCart">
            <BtnShoppingCart src={IconShoppingCart} />
          </NavLink>
        </Nav>
        <DivSearch style={{ display: divSearchDisplay ? "flex" : "none" }}>
          <FormSearch>
            <SubmitSearch src={IconSearch} />
            <InputSearch type="text" placeholder="找商品" />
          </FormSearch>
        </DivSearch>
        <DivMenu style={{ display: divMenuDisplay ? "block" : "none" }}>
          <section>
            <HeaderMenu>目錄</HeaderMenu>
            <MenuList>
              <MenuItem onClick={handleBackDropClick}>
                <NavLink to="/hot">HOT</NavLink>
              </MenuItem>
              <MenuItem onClick={handleBackDropClick}>
                <NavLink to="/newarrivals">NEW ARRIVALS</NavLink>
              </MenuItem>
              <MenuItem onClick={handleBackDropClick}>
                <NavLink to="/allproducts">ALL PRODUCTS</NavLink>
              </MenuItem>
              <MenuItem onClick={handleBackDropClick}>
                <NavLink to="/mensstyle">MEN'S STYLE</NavLink>
              </MenuItem>
              <MenuItem onClick={handleBackDropClick}>
                <NavLink to="/madamsstyle">MADAM'S STYLE</NavLink>
              </MenuItem>
              <MenuItem onClick={handleBackDropClick}>
                <NavLink to="/couple">COUPLE</NavLink>
              </MenuItem>
              <MenuItem onClick={handleBackDropClick}>
                <NavLink to="/accessories">ACCESSORIES</NavLink>
              </MenuItem>
              <MenuItem onClick={handleBackDropClick}>
                <NavLink to="/newdiscount">NEW DISCOUNT</NavLink>
              </MenuItem>
              <MenuItem onClick={handleBackDropClick}>
                <NavLink to="/oddsizes">ODD SIZES</NavLink>
              </MenuItem>
            </MenuList>
          </section>
          <section>
            <HeaderMenu>帳戶</HeaderMenu>
            <MenuList>
              <MenuItem>
                <NavLink to={location => location.pathname}>Login</NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink to={location => location.pathname}>Register</NavLink>
              </MenuItem>
            </MenuList>
          </section>
          <section>
            <HeaderMenu>其他</HeaderMenu>
            <MenuList>
              <MenuItem>
                <NavLink to={location => location.pathname}>contact us</NavLink>
              </MenuItem>
            </MenuList>
          </section>
        </DivMenu>
      </Router>

      <BackDrop
        show={divSearchDisplay || divMenuDisplay}
        clicked={handleBackDropClick}
      />
    </MenuContainer>
  );
};

export default NavMenuMobile;

const MenuContainer = styled.div`
  width: 100%;
`;

const Nav = styled.nav`
  display: none;

  @media ${device.tablet} {
    display: flex;
    position: fixed;
    width: 100%;
    height: 50px;
    z-index: 1000;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    box-sizing: border-box;
  }
`;

const Home = styled.h1`
  display: flex;
  position: absolute;
  left: calc(50% - 55px);
  margin: 0;
  padding: 12px;

  cursor: default;
  a {
    text-decoration: none;
    color: black;
  }
`;

const DivMenu = styled.div`
  position: absolute;
  z-index: 999;
  width: 87.5%;
  height: 100%;
  padding-top: 50px;
  background-color: #323536;
  box-sizing: border-box;
  overflow-y: auto;
`;

const HeaderMenu = styled.div`
  color: #fff;
  font-size: 15px;
  background-color: #121416;
  padding: 15px 0px 13px 32px;
`;

const MenuList = styled.ul`
  margin: 0;
  padding: 0;
`;

const MenuItem = styled.li`
  border-bottom: 1px solid #1f2429;
  background-color: #323536;

  a {
    line-height: 48px;
    display: block;
    padding: 0 32px;
    font-weight: normal;
    color: #ababab;
    text-decoration: none;
    cursor: pointer;
  }
`;

const Icon = styled.img`
  padding: 12px;
  position: absolute;
`;

const BtnMenuBar = styled(Icon)`
  left: 0px;
`;

const BtnSearch = styled(Icon)`
  left: 50px;
`;
const BtnUser = styled(Icon)`
  right: 55px;
`;
const BtnShoppingCart = styled(Icon)`
  right: 10px;
`;

const DivSearch = styled.div`
  padding: 15px;
  position: absolute;
  z-index: 999;
  width: 100%;
  top: 50px;
  background-color: white;
  box-sizing: border-box;
`;

const FormSearch = styled.form`
  width: 100%;
  padding-bottom: 5px;
  display: flex;
  top: 50px;
  box-sizing: border-box;
  border-bottom: 1px solid #aaa;
`;

const InputSearch = styled.input`
  width: 100%;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  border-bottom: 0px;
  font-size: 16px;
  outline: none;
`;

const SubmitSearch = styled.img`
  padding: 5px;
`;
