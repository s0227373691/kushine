import React from "react";
import styled from "styled-components";

import BtnList from "./containers/btnList";
import NavMenu from "./components/navMenu";
import NavMenuMobile from "./components/navMenuMobile";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Test1 from "./components/Test1";
import Test2 from "./components/Test2";

const App = () => (
  <div>
    <BtnList />
    <Center>
      <Router>
        <NavMenu />
        <NavMenuMobile />
        <Switch>
          <Route path="/shoppingCart" component={Test1} />
          <Route path="/newarrivals" component={Test2} />
          <Route path="/allproducts" component={Test1} />
        </Switch>
      </Router>
    </Center>
  </div>
);

export default App;

const Center = styled.section`
  display: flex;
  flex-direction: row;
`;
