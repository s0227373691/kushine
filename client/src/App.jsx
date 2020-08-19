import React from "react";
import styled from "styled-components";

import BtnList from "./containers/btnList";
import NavMenu from "./components/navMenu";

const App = () => (
  <div>
    <BtnList />
    <Center>
      <NavMenu />
    </Center>
  </div>
);

export default App;

const Center = styled.section`
  display: flex;
  flex-direction: row;
`;
