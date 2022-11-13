import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 40vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    @media screen and (max-width: 500px){
       
}
   
    
` 
export const Links = styled(Link)`
    border: none; 
    box-shadow: 0 0 10px rgba(0,0,0,0.6);
    -webkit-box-shadow: 0 0 10px rgba(0,0,0,0.6);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 10px;
    margin-top: 3vh;
    margin-bottom: 3vh;
    color: #728b98;
    text-decoration: none;
    font-weight: 400;
    @media screen and (max-width: 500px){
       width: 70vw ;
       
     
}
    
`

export const Title = styled.h1`
    width: 25vw;
    font-size: 1rem;
    @media screen and (max-width: 500px){
    width: 60vw;
}

   
`
export const Paragraph = styled.p`
    text-align: center;
    width: 30vw ;
    display: flex;
    align-items: center;
    @media screen and (max-width: 500px){
    width: 60vw;
}
  
  
`
export const ParagraphPrice =styled.p`
    width: 25vw;
    height: 10vh;
    display: flex;
    align-items: center;
    @media screen and (max-width: 500px){
    width: 60vw;
}
  
`
export const Figure = styled.figure`
    height:100%;
    width: 17vw;
    display: flex;
    align-items: center;
    @media screen and (max-width: 500px){
        width: 50vw;
        height: 45vh;
}
 
`

export const Image=styled.img`
    width: 100%;
    height: 100%;
  

    @media screen and (max-width: 500px){

}

`
export const BoxButton= styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 15vw;
    @media screen and (max-width: 500px){
        width: 100%;
        height: 8vh;
}
`
export const Button = styled.button`
    border-radius: 60%;
    width: 2vw;
    height: 4vh;
    border: none;
    color: white;
    background-color: #f8a836;
    cursor: pointer;
    @media screen and (max-width: 500px){
        width: 4vw;
}
`