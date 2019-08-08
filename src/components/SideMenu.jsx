import React from "react";
import styled, { keyframes } from "styled-components";

import Menu from "../elements/Menu";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2;
`;

const slide = keyframes`
from {
      margin-left: -200px;
    }`;

const StyledMenu = styled.ul`
  position: fixed;
  top: 0;
  left: 0;
  padding: 2rem;
  background-color: white;
  height: 100vh;
  list-style: none;
  display: flex;
  flex-direction: column;
  box-shadow: 1px 0px 5px #9e9e9ead;
  li {
    margin: 1rem 0rem;
  }
  animation: ${slide} 0.5s ease-in 1;
`;

const SideMenu = ({ hideMenu }) => {
  return (
    <Wrapper onClick={hideMenu}>
      <StyledMenu onClick={e => e.stopPropagation()}>
        <Menu />
      </StyledMenu>
    </Wrapper>
  );
};

export default SideMenu;
