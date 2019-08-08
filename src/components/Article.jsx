import React, { useState } from "react";
import styled from "styled-components";
import { articlesFull as articles } from "./data.js";
import Header from "../elements/Header.jsx";

const grey = "#8c8c8c";
const serifFont = '"Merriweather", serif';
const sansSerifFont = '"Lato", sans-serif';

const StyledArticle = styled.article`
  font-family: ${serifFont};
  * {
    opacity: ${props => (props.active ? 0.2 : 1)};
  }
`;

const ArticleImg = styled.img`
  width: 100vw;
  margin: 0 -1rem;
  height: ${props => (props.active ? 20 : 19)}rem;
  object-fit: ${props => (props.active ? "contain" : "cover")};
  position: ${props => (props.active ? "relative" : "initial")};
  transform: ${props => (props.active ? "translateY(7rem)" : "initial")};
  transition: 0.2s ease-out;
  opacity: 1;
  z-index: 2;
`;
const ArticleSections = styled.p`
  margin: 0.6rem 0rem;
  font-family: ${sansSerifFont};
  font-weight: 900;
  font-size: 0.8rem;
  text-transform: uppercase;

  span {
    margin: 0 0.5rem;
    color: #d2d2d2;
  }
`;
const ArticleTitle = styled.h1`
  font-size: 2rem;
  font-weight: 900;
  font-style: italic;
`;

const ArticleDescription = styled.p`
  color: ${grey};
  margin: 1rem 0rem;
  font-size: 1rem;
`;
const AuthorImg = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 2rem;
  vertical-align: middle;
  margin-right: 0.5rem;
`;
const By = styled.span`
  vertical-align: sub;
  font-family: ${sansSerifFont};
  font-weight: 600;
  font-size: 1.2rem;
  color: ${grey};
`;
const AuthorName = styled.span`
  vertical-align: sub;

  border-bottom: 2px solid ${grey};
  font-family: ${serifFont};
  margin-left: 0.5rem;
  color: black;
`;

const Article = ({ match }) => {
  const id = match.params.id;
  const [active, setActive] = useState(false);
  return (
    <React.Fragment>
      <Header />
      <StyledArticle active={active} onClick={() => setActive(!active)}>
        <ArticleImg
          src={articles[id].imgSrc}
          alt={articles[id].alt}
          onClick={() => setActive(!active)}
          active={active}
        />
        <ArticleSections>
          {articles[id].section}
          <span>¬</span>
          {articles[id].subSection}
        </ArticleSections>
        <ArticleTitle>{articles[id].title}</ArticleTitle>
        <ArticleDescription>{articles[id].description}</ArticleDescription>
        <AuthorImg src={articles[id].authorImg} />
        <By> by</By>
        <AuthorName>{articles[id].authorName}</AuthorName>
      </StyledArticle>
    </React.Fragment>
  );
};

export default Article;
