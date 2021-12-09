import styled from "styled-components";

export const Container = styled.section`
  background-image: url(${(props) => props.back});
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-size: cover;
  height: 100vh;
  width: 100%;
  div {
    display: flex;
    flex-direction: row;
  }
  ul {
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }
  li {
    list-style: none;
    padding-left: 1.5vw;
    padding-right: 1.5vw;
    padding-top: 1vw;
    padding-bottom: 1vw;
  }
  li:hover {
    border: solid;
  }
  picture {
    display: flex;
    width: 50%;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  img {
    width: 5vw;
  }
  h1 {
    display: flex;
    flex-direction: row;
    justify-content: center;

    font-size: 6vw;
  }
`;
