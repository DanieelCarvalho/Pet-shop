import styled from "styled-components";

export const Form =styled.form`
    width: 30vw;
    height: 60vh;
    align-items: center;
    margin-top: 10vh;
    @media screen and (max-width: 500px){
       width: 100%;
    }
  
`
export const Button= styled.button`
    width: 10vw;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background-color: #f8a836;
    height: 4vh;
    color:#fff;
    cursor: pointer;
    @media screen and (max-width: 500px){
       width: 20vw;
       font-size: 3.5vw;
    }
    
`
export const Fieldset = styled.fieldset`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
    border: solid;
    input{
        width: 100%;
        margin-left: 1px;   
    }
    input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
    
}
input[type=number] { 
   -moz-appearance: textfield;
   appearance: textfield;

}
    label{
       display: flex;
       width: 100%;
    }
`
export const LabelData =styled.label`
    input{
       width: 10vw;
       @media screen and (max-width: 500px){
      width: 31vw;
    }
    }
`
export const Subimit =styled.input`
   padding:5px 15px; 
    background:#f8a836;; 
    border:0 none;
    cursor:pointer;
    -webkit-border-radius: 5px;
    border-radius: 5px; 
    cursor: pointer;
    
`  