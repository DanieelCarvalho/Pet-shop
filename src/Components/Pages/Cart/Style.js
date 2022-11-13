import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

`
export const BoxTitle = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

` 
export const Title= styled.h1`
    width: 55%;
    @media screen and (max-width: 500px){
       width: 100%;
       text-align: center;
    }
   
`
export const Card = styled.div`
    display: flex;
    width: 80vw;
    justify-content: space-evenly;
    align-items: center;
    height: 30vh;
    border:none; 
    box-shadow: 0 0 10px rgba(0,0,0,0.6);
    -webkit-box-shadow: 0 0 10px rgba(0,0,0,0.6);
    border-radius: 10px;
    margin-bottom: 8vh;
    @media screen and (max-width: 500px){
     width:100%;  
    }
 
`
export const CardTitle= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    h2{
    font-weight: 400;
    width: 50vw;
    @media screen and (max-width: 500px){
        font-size: 3vw;
    }
}
    p{
    font-weight: bold;
}
`
export const Image =styled.img`
    width: 12vw;
    object-fit: cover;
    @media screen and (max-width: 500px){
       width: 25vw;
       
    }

`
export const BoxButton= styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 15vw;
    @media screen and (max-width: 500px){
        width: 22vw;
        justify-content: space-around;
    }
  
  
`
export const Button =styled.button`
    border-radius: 60%;
    width: 2vw;
    height: 4vh;
    border: none;
    color: white;
    background-color: #f8a836;
    cursor: pointer;
    @media screen and (max-width: 500px){
       width: 5vw;
    }
`

export const Lixeira = styled.img`
     width: 2vw;
    cursor: pointer;
    @media screen and (max-width: 500px){
      width: 3vh;
      
}
`

export const BoxCard =styled.div`
       display: flex;
       flex-direction: column;
       justify-content: space-evenly;
       @media screen and (max-width: 500px){
       width:96vw;
    }
        
`
export const Total= styled.div`
    width: 100%;
    height: 15vh;
    box-shadow: 0 0 10px rgba(0,0,0,0.6);
    -webkit-box-shadow: 0 0 10px rgba(0,0,0,0.6);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    h2{
        margin-right: 2vw;
        @media screen and (max-width: 500px){
       font-size: 4vw;
    }
    }
`
export const Links = styled(Link)`
    text-decoration: none;
    color: black;
    border:none;
    width: 10vw;
    height: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background-color: #f8a836;
    color:#fff;
    margin-top: 3vh;
    margin-bottom: 5vh;
    
`
export const SetaImg = styled.img`
    width: 5vw;
    height: 8vh;
    cursor: pointer;
    @media screen and (max-width: 500px){
       width: 9vw;
       height: 5vh;
    }
`
