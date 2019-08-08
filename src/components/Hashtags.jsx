import React from "react";
import styled from "styled-components";

import { hashtags } from "./data";

const StyledHashtags = styled.div`
  margin: 1.5rem 0rem;
  display: flex;
  max-width: 100%;
  overflow: auto;
  white-space: nowrap;
  justify-content: space-between;
  span:not(:last-child) {
    border-right: #ececec 2px dotted;
  }
  span:first-child {
    padding-right: 1rem;
  }
  span:not(:first-child) {
    padding: 0rem 1rem;
  }
  color: #4e4e4e;
`;
const Hashtags = () => {
  return (
    <StyledHashtags>
      {hashtags.map(hashtag => {
        return <span key={hashtag}>{hashtag}</span>;
      })}
    </StyledHashtags>
  );
};

export default Hashtags;
