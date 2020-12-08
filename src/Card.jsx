import React, { useState } from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  background-color: ${(props) => (!props.toggle ? "#2ecc71" : "#e74c3c")};
  color: white;
  padding: 30px;
  font-size: 24px;
  margin-top: 4px;
  margin-bottom: 4px;
  cursor: pointer;
`;

const Card = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <StyledCard
      onClick={(e) => {
        setToggle(!toggle);
      }}
      toggle={toggle}
    >
      {children}
    </StyledCard>
  );
};

export default Card;
