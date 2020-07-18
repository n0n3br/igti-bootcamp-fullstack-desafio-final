import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: calc(100vh - 300px);
  overflow-y: auto;
`;
export const Card = styled.div`
  flex-basis: 100%;
  padding: 5px;
  margin-bottom: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: ${(props) => (props.type === "+" ? "#ebfffc" : "#feecf0")};
  color: ${(props) => (props.type === "+" ? "#00947e" : "#cc0f35")};
`;
export const Row = styled.div`
  display: flex;
  align-items: center;
`;
export const Col = styled.div`
  flex-grow: ${(props) => props.grow};
  margin: 5px;
`;
export const Dia = styled.span`
  font-size: 20px;
`;
export const Titulo = styled.div`
  font-weight: bold;
  font-size: 16px;
`;

export const Subtitulo = styled.div`
  font-size: 12px;
  font-weight: 100;
`;

export const Valor = styled.span`
  font-size: 20px;
  &::before {
    content: ${(props) => (props.value === "+" || !props.value ? "''" : "'-'")};
  }
`;

export const IconButton = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  padding: 10px;
  transition: all 0.2s ease-in-out;
  transform: scale(0.8);
  &:hover {
    color: ${(props) => (props.type === "+" ? "#00947e" : "#cc0f35")};
    transform: scale(1);
  }
`;
