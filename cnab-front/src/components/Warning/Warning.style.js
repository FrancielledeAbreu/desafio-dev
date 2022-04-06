import styled from "styled-components";

export const Main = styled.div`
  border: 1px solid #ffeb3b;
  background-color: #fff9c4;
  color: #546e7a;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 2px;
  width: 70%;

  @media (max-width: 400px) {
    letter-spacing: 0;
    padding: 10px;
    display: block;
    text-align: center;
  }
`;
