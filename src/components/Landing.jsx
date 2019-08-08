import React from "react";
import styled from "styled-components";

import Header from "../elements/Header";
import Hashtags from "./Hashtags";
import ArticleList from "./ArticleList";

const Image = styled.img`
  width: 100%;
  height: 16rem;
  object-fit: cover;
`;

const Landing = () => {
  return (
    <React.Fragment>
      <Header landing={true} />
      <Hashtags />
      <main>
        <Image
          src="./img/photo-1557199582-14cd70bc6d39.jpeg"
          alt="A man and a dog standing together by a river"
        />
        <ArticleList />
      </main>
    </React.Fragment>
  );
};

export default Landing;
