import React from "react";
import styled from "styled-components";
import { decoder, mergeCode } from "./decoder";

import { templateFormatter } from "input-format";
const TEMPLATE = "xxx-xxx-xx";

const format = templateFormatter(TEMPLATE);

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
const StyledInput = styled.input`
  padding: 6px;
  font-size: 24px;
  width: 100%;
`;

const Flex = styled.div`
  display: flex;
  width: 100%;
  button {
    width: 100%;
    padding: 10px;
  }
`;

const Search = ({ code, setCode, code2, setCode2, setOptions }) => {
  return (
    <Container>
      <StyledInput
        value={code}
        type="text"
        onChange={(e) => {
          setCode(e.target.value);
          localStorage.setItem("code", e.target.value);
        }}
        placeholder="Enter code #1"
      />
      <StyledInput
        value={code2}
        type="text"
        onChange={(e) => {
          setCode2(e.target.value);
          localStorage.setItem("code2", e.target.value);
        }}
        placeholder="Enter code #2"
      />
      <Flex>
        <button
          onClick={(e) => {
            e.preventDefault();
            const mergedCode = mergeCode(code, code2) || code;
            const decodedValues = decoder(mergedCode).map(
              (el) => format(el).text
            );
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
      </Flex>
    </Container>
  );
};

export default Search;
