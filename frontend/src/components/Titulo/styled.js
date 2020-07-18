import styled from "styled-components";

export const Nav = styled.div`
  height: 64px;
  width: 100%;
  background-color: rgb(0, 175, 162);
  color: white;
  display: flex;
  align-items: center;
  box-shadow: 0px 2px 2px #ccc;
  margin-bottom: 20px;
  > span {
    font-size: 24px;
    font-weight: bold;
    margin-left: 20px;
  }
`;

export const Img = styled.img`
  height: 48px;
  width: auto;
`;
