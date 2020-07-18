import styled from "styled-components";

export const Ul = styled.div`
  width: 80%;
  min-width: 1000px;
  margin: 20px auto;
  display: flex;
  list-style: none;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 10px;
`;

export const Li = styled.div`
  flex: 1;
  text-align: center;
`;

export const Valor = styled.span`
  margin-left: 20px;
  color: ${(props) => {
    return !props.value ? "black" : props.value === "+" ? "#00afa2" : "red";
  }};
  &::before {
    content: ${(props) => (props.value === "+" || !props.value ? "''" : "'-'")};
  }
`;
