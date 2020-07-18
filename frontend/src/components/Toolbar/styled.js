import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  min-width: 1000px;
  margin: 20px auto;
  display: flex;
`;

export const Button = styled.button`
  border: 1px solid #f8f8f8;
  border-radius: 5px;
  line-height: 1.5em;
  padding: 10px;
  background-color: rgb(0, 175, 162);
  color: white;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  &:disabled {
    background-color: #ccc;
  }
  margin-right: 20px;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid #ccc;
  outline: none;
  min-width: 150px;
  padding: 10px;
  line-height: 1.5em;
  transition: border 0.2s ease-in-out;
  width: 100%;
  margin-right: 20px;
  &:focus {
    border-bottom: 1px solid rgb(0, 175, 162);
  }
`;

export const Shrink = styled.div`
  flex-grow: 0;
`;

export const Grow = styled.div`
  flex-grow: 1;
`;
