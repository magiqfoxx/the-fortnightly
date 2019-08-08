import React from "react";
import styled from "styled-components";

import ImgButton from "../elements/ImgButton";
import Navigation from "../components/Navigation";

const StyledHeader = styled.header`
  margin: 1rem 0rem;
  display: flex;
  justify-content: space-between;
`;

const Header = ({ landing }) => {
  return (
    <StyledHeader>
      <Navigation landing={landing} />

      {landing ? (
        <ImgButton
          imgSrc="./img/icons8-search-50.png"
          role="search"
          onClick={() => null}
        />
      ) : (
        <ImgButton
          imgSrc="./img/icons8-connect-48.png"
          role="share"
          onClick={() => null}
        />
      )}
    </StyledHeader>
  );
};

export default Header;
