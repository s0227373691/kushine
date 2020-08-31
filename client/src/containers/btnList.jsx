import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link } from "react-router-dom";

import device from "../config/device-size";

// import Icon
import IconUser from "../../public/icon/user";
import IconShoppingCart from "../../public/icon/shopping-cart";
import IconContact from "../../public/icon/contact";
import IconSearch from "../../public/icon/search";

const btnList = () => {
  return (
    <BtnListContainer>
      <BtnList>
        <Router>
          <BtnItem>
            <Icon src={IconUser} />
            <Link to="">註冊/登入會員</Link>
          </BtnItem>
          <BtnItem>
            <Icon src={IconShoppingCart} />
            <Link to="/shoppingCart">購物車</Link>
          </BtnItem>
          <BtnItem>
            <Icon src={IconContact} />
            <Link to="/contactUs">聯絡我們</Link>
          </BtnItem>
          <BtnItemSearch>
            <Icon src={IconSearch} />
            <input type="text" placeholder="找商品" />
            <Link to="">搜尋</Link>
          </BtnItemSearch>
        </Router>
      </BtnList>
    </BtnListContainer>
  );
};

export default btnList;

const BtnListContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  @media ${device.tablet} {
    display: none;
  }
`;

const BtnList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
  list-style: none;
`;

const BtnItem = styled.li`
  height: min-content;
  margin: 0 5px;
  padding: 5px 8px;
  display: flex;
  flex-direction: row;
  border-width: 1px;
  border-style: solid;
  border-color: #aaa;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    background-color: #f9f9f9;
  }
  a {
    text-decoration: none;
    color: rgb(97, 96, 96);
    display: flex;
    align-items: center;
  }
`;

const BtnItemSearch = styled(BtnItem)`
  &:hover {
    input {
      width: 100px;
      padding: 5px;
      transition: 0.5s;
    }
  }
  input {
    width: 0px;
    border: 0px;
    transition: 0.5s;
    outline: none;
  }
`;

const Icon = styled.img`
  margin-right: 5px;
`;
