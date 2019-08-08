import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import ImgButton from "../elements/ImgButton";
import SideMenu from "./SideMenu";

const Nav = styled.nav`
  a {
    vertical-align: super;
  }
`;

const Logo = styled.span`
  margin: 0rem 1rem;
  font-family: "UnifrakturCook", cursive;
  font-size: 1.5rem;
`;

const Navigation = ({ landing }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Nav>
      {showMenu ? <SideMenu hideMenu={() => setShowMenu(false)} /> : null}
      {landing ? (
        <ImgButton
          imgSrc="./img/icons8-menu-52.png"
          role="menu"
          onClick={() => setShowMenu(true)}
          setShowMenu={setShowMenu}
        />
      ) : (
        <Link to="/">
          <ImgButton
            imgSrc="./img/icons8-back-50.png"
            role="back"
            onClick={() => null}
          />
        </Link>
      )}
      <Link to="/">
        <Logo>The Fortnightly</Logo>
      </Link>
    </Nav>
  );
};

export default Navigation;
