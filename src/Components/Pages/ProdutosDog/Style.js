import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    
` 
export const Search = styled.div`
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const BoxProduct = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 500px){
        flex-direction: column;

}
`
export const Input =styled.input`
    border: solid #768b98;
    border-radius: 9px;
    margin-right: 5vw;
    
`
export const Select = styled.select`
     border: solid #768b98;
    border-radius: 9px;
    option{
        color:#f8a836;
    }
`