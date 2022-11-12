import { useContext, useState, useEffect } from "react"
import { Link } from "react-router-dom";
import CartContext from "../../../Context"
import DadosContext from "../../../Context/Dados";
import { useNavigate } from "react-router-dom";
import * as S from "./Style";
import Seta from "../../../img/seta.png"
import Form from "../../Form";



export default function Cart() {
    const { cart, setCart } = useContext(CartContext)
    const{dados,setDados} = useContext(DadosContext)
    const [quant, setQuant] = useState(null)
    const [total, setTotal] = useState(null)
    const navigate = useNavigate();
    const [endereco, setEndereco] = useState("")

    function handleBack() {
        navigate("/produtos");
    }
 
    useEffect(() => {
        const total = cart.reduce((acc, curr) => {
            return (acc += curr.quantidade * curr.price)
        }, 0)
        setTotal(total.toFixed(2).replace(".", ","))
        console.log(total, "preco")

    });

    function addProduct(id) {
        cart.forEach((p) => {
            if (p.id === id) {
                p.quantidade += 1
                setQuant(p.quantidade)
            }
        })

    }
    function subProduct(id) {
        cart.forEach((p) => {
            if (p.id === id) {
                p.quantidade -= 1
                setQuant(p.quantidade)
            }
        })
    }

    return (
        <S.Container>
            <S.BoxTitle>
                <S.SetaImg src={Seta} alt="seta indicando retorno" onClick={handleBack} />
                <S.Title>Meu Carrinho</S.Title>
            </S.BoxTitle>
            <S.BoxCard>
                {cart.map((p) => {
                    return (
                        <S.Card>
                            <S.Image src={p.img} alt="imagem do produto" />
                            <S.CardTitle>
                                <h2>{p.title}</h2>
                                <p>Total: R$ {parseInt(p.price * p.quantidade).toFixed(2).replace(".", ",")} </p>
                            </S.CardTitle>
                            <div>
                                <S.BoxButton>
                                    <S.Button onClick={() => subProduct(p.id)} > - </S.Button>
                                    <p>{p.quantidade}</p>
                                    <S.Button onClick={() => addProduct(p.id)}> + </S.Button>
                                </S.BoxButton>
                            </div>
                        </S.Card>
                    )
                })}
                <S.Total>
                    <h2>Total da compra: R$ {total} </h2>
                </S.Total>
            </S.BoxCard>
            <Form
             />

        </S.Container>
    )

 

}