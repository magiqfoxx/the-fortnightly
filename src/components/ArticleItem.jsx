import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledArticleItem = styled.div`
  font-weight: 800;
  color: #2f2f32;
  margin: 1rem 0rem;
  padding-right: 4rem;
  position: relative;
  min-height: 4rem;
`;
const Section = styled.p`
  text-transform: uppercase;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
`;
const Title = styled.p`
  font-size: ${props => (props.index > 0 ? 1 : 1.3)}rem;
  margin: 0;
`;
const Image = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 4rem;
  height: 4rem;
  object-fit: cover;
  display: ${props => (props.index > 0 ? "block" : "none")};
`;

const ArticleItem = ({ section, title, imgSrc, id, i }) => {
  return (
    <React.Fragment>
      <Link to={`/articles/${id}`}>
        <StyledArticleItem>
          <Section>{section}</Section>
          <Title index={i}>{title}</Title>
          <Image src={imgSrc} index={i} />
        </StyledArticleItem>
      </Link>
    </React.Fragment>
  );
};

export default ArticleItem;
