import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 2px solid rgb(255, 255, 255, 0.5);
  border-right: 2px solid rgb(255, 255, 255, 0.5);
  border-bottom: 2px solid rgb(255, 255, 255, 0.5);
  border-left: 4px solid rgb(0, 175, 162);
  background: transparent;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export const Container = styled.div`
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
