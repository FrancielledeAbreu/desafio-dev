import styled from "styled-components";

export const Inputcontent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  display: none;
`;

export const LabelInput = styled.label`
  border: 1px solid #ccc;
  display: inline-block;
  padding: 6px 12px;
  &:hover {
    background-color: #ccc;
    color: white;
    cursor: pointer;
  }
`;
