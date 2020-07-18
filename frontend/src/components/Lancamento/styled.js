import styled from "styled-components";

export const Modal = styled.div`
  width: 100%px;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  background-color: rgb(0, 0, 0, 0.4);
`;

export const Card = styled.div`
  width: 600px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.div`
  display: flex;
  padding: 16px;
  border-bottom: 1px solid #ccc;
  > span {
    font-size: 20px;
    font-weight: bold;
    display: inline-blox;
    flex-grow: 1;
  }
  > button {
    background-color: transparent;
    border: none;
    outline: none;
    color: #ccc;
    &:hover {
      color: red;
    }
  }
`;

export const CardContent = styled.div`
  padding: 0 16px;
`;

export const CardActions = styled.div`
  padding: 16px;
  display: flex;
  justify-content: flex-end;
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
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid #ccc;
  outline: none;
  min-width: 150px;
  padding: 5px;
  padding-top: 30px;
  line-height: 1.5em;
  transition: border 0.2s ease-in-out;
  width: 100%;

  &:focus {
    border-bottom: 1px solid rgb(0, 175, 162);
  }
`;
export const Radio = styled.label`
  padding: 15px;
  padding-left: 0;
  display: inline-block;
  font-size: 14px;
  > input {
    margin-right: 10px;
    margin-top: 6px;
  }
`;
export const InputContainer = styled.div`
  position: relative;
  > label {
    position: absolute;
    font-size: 12px;
    color: darkgrey;
    top: 8px;
    left: 4px;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;
export const Col = styled.div`
  flex-grow: ${(props) => props.grow};
  margin: 5px;
`;
