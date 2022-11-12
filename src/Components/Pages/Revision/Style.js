import styled from "styled-components";

export const Container =styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
 
`
export const Title = styled.h1`
      width: 55%;
    @media screen and (max-width: 500px){
       width: 100%;
       text-align: center;
    }
`
export const Dados= styled.div`
    margin-top: 2vh;
    width: 40vw;
    height: 40vh;
`

export const Figure = styled.figure`
    width: 100%;
    height: 12vh;
    display: flex;
    align-items: center;
`
export const SetaImg = styled.img`
      width: 5vw;
    height: 8vh;
    cursor: pointer;
    @media screen and (max-width: 500px){
        width: 9vw;
    }
`
export const Button =styled.button`
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
    cursor: pointer;
    @media screen and (max-width: 500px){
        width: 30vw;
        height: 7vh;
        font-size: 3vw;
    }
` 
export const Card = styled.div`
      display: flex;
    width: 80vw;
    justify-content: space-evenly;
    align-items: center;
    height: 30vh;
    border:none;
    margin-top: 3vh ;
    margin-bottom: 3vh;
    box-shadow: 0 0 10px rgba(0,0,0,0.6);
    -webkit-box-shadow: 0 0 10px rgba(0,0,0,0.6);
    border-radius: 10px;
    @media screen and (max-width: 500px){
     width:96vw;  
    }
    h2{
        width: 60vw;
        font-weight: 400;
        @media screen and (max-width: 500px){
        font-size: 3vw;
    }
    }
 
`
export const Paragraph = styled.p`
        margin-top: 1vh;
       
        span{
            font-weight: bold;
        }
`
export const Image = styled.img `
     width: 12vw;
    object-fit: cover;
    @media screen and (max-width: 500px){
       width: 25vw;
  
    }
`
export const Total= styled.div`
     width: 80vw;
    height: 15vh;
    box-shadow: 0 0 10px rgba(0,0,0,0.6);
    -webkit-box-shadow: 0 0 10px rgba(0,0,0,0.6);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    @media screen and (max-width: 500px){
        justify-content: center;
    }
    h2{
        margin-right: 2vw;
        @media screen and (max-width: 500px){
        font-size: 3vw;
        
    }
    }
`