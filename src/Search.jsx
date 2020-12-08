import React from "react";
import styled from "styled-components";
import { decoder } from "./decoder";

import { templateFormatter } from "input-format";
const TEMPLATE = "xxx-xxx-xx";

const format = templateFormatter(TEMPLATE);

const Container = styled.div`
  display: flex;
  width: 100%;
`;
const StyledInput = styled.input`
  padding: 6px;
  font-size: 24px;
  width: 100%;
`;

const Search = ({ code, setCode, setOptions }) => {
  return (
    <Container>
      <StyledInput
        value={code}
        type="text"
        onChange={(e) => {
          setCode(e.target.value);
          localStorage.setItem("code", e.target.value);
        }}
        placeholder="Enter code"
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          let decodedValues = decoder(code).map((el) => format(el).text);
          setOptions(decodedValues);
          localStorage.setItem("options", JSON.stringify(decodedValues));
        }}
        className="btn"
      >
        DECODE
      </button>
      <button
        onClick={(e) => {
          setCode("");
          setOptions([]);
          localStorage.setItem("options", []);
          localStorage.setItem("code", "");
        }}
        className="btn"
      >
        RESET
      </button>
    </Container>
  );
};

export default Search;
