import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  height: 100vh;
`;

export const InputForm = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border: 1px solid #ccc;
  width: 100%;
  height: 30vh;
  margin: 2%;
`;

export const ButtonContent = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const CardContent = styled.div`
  width: 100%;
`;

export const Errors = styled.div`
  color: red;

  @media (max-width: 400px) {
    text-align: center;
  }
`;
