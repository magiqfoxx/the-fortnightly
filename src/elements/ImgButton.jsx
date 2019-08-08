import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-image: url(${props => props.imgSrc});
  background-size: cover;
  height: 1.5rem;
  width: 1.5rem;
  border: none;
  cursor: pointer;
`;

const ImgButton = ({ imgSrc, role, onClick }) => {
  return <Button role={role} imgSrc={imgSrc} onClick={() => onClick()} />;
};

export default ImgButton;
