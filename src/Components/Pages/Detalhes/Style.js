import styled from "styled-components";  

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    

`
export const Figure =styled.figure`
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: flex-end;
     
    @media screen and (max-width: 500px){
      
}
    
` 
export const SetaImg =styled.img`
     width: 5vw;
    height: 8vh;
    cursor: pointer;
    @media screen and (max-width: 500px){
        width: 9vw;
       height: 5vh;
}

`
export const BoxButton= styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 50%;
    height: 10vh;
`
export const Button = styled.button`
    width: 10vw;
    &:hover{
    @media screen and (max-width: 500px){
      width: 150px;
      color: #FEE251;
    }
    }
`