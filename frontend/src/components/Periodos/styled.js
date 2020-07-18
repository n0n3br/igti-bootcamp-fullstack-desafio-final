import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Select = styled.select`
  border: none;
  border-bottom: 1px solid #ccc;
  outline: none;
  min-width: 150px;
  padding: 10px;
  line-height: 1.5em;
  transition: border 0.2s ease-in-out;
  margin-right: 20px;
  &:focus {
    border-bottom: 1px solid rgb(0, 175, 162);
  }
`;
export const Label = styled.span`
  display: inline-block;
  margin: 0 20px;
  line-height: 1.5em;
`;
export const Button = styled.button`
  border: 1px solid #f8f8f8;
  border-radius: 5px;
  line-height: 1.5em;
  padding: 5px;
  background-color: rgb(0, 175, 162);
  color: white;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  &:disabled {
    background-color: #ccc;
  }
`;
