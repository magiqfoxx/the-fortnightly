import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { articleSnippets as articles } from "./data";
import ArticleItem from "./ArticleItem";

const Hr = styled.hr`
  border: none;
  border-bottom: #ececec 2px dotted;
`;

const ArticleList = () => {
  const renderContent = () => {
    return articles.map((article, i) => {
      return (
        <React.Fragment>
          {i > 0 ? <Hr key={i} /> : null}
          <ArticleItem
            section={article.section}
            title={article.title}
            imgSrc={article.imgSrc}
            id={article.id}
            key={article.id}
            i={i}
          />
        </React.Fragment>
      );
    });
  };
  return renderContent();
};

export default ArticleList;
