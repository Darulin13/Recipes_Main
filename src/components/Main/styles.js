import styled from "styled-components";

export const Container = styled.section`
  background: #f2f4f1 0% 0% no-repeat padding-box;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: 320vh;
  h1 {
    display: flex;
    flex-direction: row;
    justify-content: center;

    font-size: 2vw;
  }
`;
export const Foods = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  div {
    width: 20vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
  nav {
    width: 20vw;
  }
  img {
    width: 20vw;
  }
  aside {
    border-top: none;
    border-bottom: inset;
    border-right: inset;
    border-left: inset;
    width: 20vw;
    height: 25vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
export const Spoon = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  img {
    width: 50%;
  }
  div {
    width: 50%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  picture {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  p {
    font-size: 20px;
    width: 30vw;
  }
`;
export const Subscribe = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
   
  h1 {
    
    font-size: 2vw;
  }
  h2{
    text-align:center;
     width: 20vw;
     
      
  }
  picture{
    width: 100%;
     display: flex;
     flex-direction: row;
     justify-content: center;


  }
  input{
    width: 30vw;
    height: 4vw;
     margin-bottom: 2vw;
   
  }
  button {
     border:none;
    width: 10vw;
    padding-left: 1.5vw;
    padding-right: 1.5vw;
    padding-top: 1vw;
    padding-bottom: 1vw;
   

  }
  button:hover{
    border:solid;
  }
`;
