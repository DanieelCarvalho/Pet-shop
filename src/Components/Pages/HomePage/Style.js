import styled from "styled-components";

export const Container = styled.div`
`
export const Title = styled.h1`
    color: #f8a836;
    margin-left:2vw;
`
export const Figure = styled.figure`
    width: 100%;
    height: 70vh;
    display: flex;
    justify-content: flex-end;
    @media screen and (max-width: 500px){
        justify-content: center;
        align-items: center;
}

   
`
export const Image = styled.img`
    width: 50vw;
    @media screen and (max-width: 500px){
        width: 100vw;
}
   
 
` 