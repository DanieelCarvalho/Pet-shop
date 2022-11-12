import styled from "styled-components";
import { Link } from "react-router-dom"

export const Menu = styled.nav`
    display: flex;
    text-align: center;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    border-bottom: .9px solid #D8D9D9 ;
    box-shadow: 1px 1px 3px ;
   
`
export const Ul = styled.ul`
    display: flex;
    justify-content: center;
    width: 90vw;
    li{
        width: 20vw;
        list-style: none;
        font-family: 'Roboto';
    }
`

export const Links = styled(Link)`
    text-decoration: none;
    color: #f8a836;
`
export const Figure =styled.figure`
    width: 8vw;
    @media screen and (max-width: 500px){
       
    }
`

export const Image = styled.img`
    width: 2vw;
    height: 4vh;
    @media screen and (max-width: 500px){
    width: 5vw;
    }
`
