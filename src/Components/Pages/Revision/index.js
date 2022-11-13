import { useContext, useEffect, useState } from "react"
import dayjs from "dayjs" 
import CartContext from "../../../Context"
import { useNavigate } from "react-router-dom";
import Seta from "../../../img/seta.png"
import DadosContext from "../../../Context/Dados";
import * as S from "./Style";
export default function Revision() {


    const { cart, setCart } = useContext(CartContext)
    const {dados} = useContext(DadosContext)
    const [total, setTotal] = useState(null)
    const navigate = useNavigate();
    
    function handleBack() {
        navigate("/cart");
    }

    useEffect(() => {
        const total = cart.reduce((acc, curr) => {
            return (acc += curr.quantidade * curr.price)
        }, 0)
        setTotal(total)
        console.log(total, "preco")

    }, []);
    console.log(dados, "form")
    return (
        <S.Container>
             <S.Figure>
            <S.SetaImg src={Seta} alt="seta indicando volta" onClick={handleBack} /> 
            </S.Figure>
            <S.Title>Revise seus dados e pedidos </S.Title>
            <S.Dados>
                <h2>Dados cadastrado</h2>
               <p><b>Nome:</b>  {dados.name}</p> 
               <p><b>Email:</b>{dados.email}</p> 
               <p><b>Nascimento:</b> {dayjs(dados.data).format('DD/MM/YYYY')}</p>
               <p><b>Rua:</b> {dados.endereco.rua}</p> 
               <p><b>Bairro:</b>{dados.endereco.bairro}</p>
               <p><b>Cidade:</b> {dados.endereco.cidade}</p> 
               <p><b>Estado: </b>{dados.endereco.uf}</p> 
            </S.Dados>
    
            {cart.map((p) => {
                    return (
                          
                            <S.Card>
                            <S.Image src={p.img} alt="imagem do produto" />
                            <div>
                            <h2>{p.title}</h2>
                            <S.Paragraph>
                               Total:<span> R$  {parseInt(p.price * p.quantidade).toFixed(2).replace(".", ",")}</span> 
                            </S.Paragraph>
                            <S.Paragraph>Quantidade: <span> {p.quantidade} </span></S.Paragraph>
                            </div>
                            </S.Card>
                    )
                })}
                
                <S.Total>
                    <h2>Total da compra: R$ {total} </h2>
                </S.Total>
            <S.Button onClick={(() =>{
                alert("Compra Finalizada")
            })}> Finalizar compra </S.Button>
            
            
        </S.Container>
    )
}
    