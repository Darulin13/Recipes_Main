import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;

  ul {
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }
  nav {
    background-color: #446061;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  p {
    color: white;
  }
  div {
    height: 35vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  img {
    width: 2.5vw;
  }
  li {
    list-style: none;
    padding-left: 1.5vw;
    padding-right: 1.5vw;
    padding-top: 1vw;
    padding-bottom: 1vw;
  }
`;
