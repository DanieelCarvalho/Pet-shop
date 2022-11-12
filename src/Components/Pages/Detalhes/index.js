import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Cards from "../../Cards";
import CartContext from "../../../Context"
import * as S from "./Style";
import Loading from "../../../Asset/carregar.svg"
import Seta from "../../../img/seta.png"


export default function Detalhes() {
  const { id } = useParams()
  const navigate = useNavigate();
  const [quant, setQuant] = useState(0)
  const { cart, setCart } = useContext(CartContext)
  const [product, setProduct] = useState(null);
  function handleBack() {
    navigate("/produtos");
  }

  useEffect(() => {
    const productFromCart = cart.find(p => p.id == id)
    if(productFromCart) return setProduct(productFromCart)

    const url = process.env.REACT_APP_BACKEND_URL;
    const promise = axios.get(`${url}/products`);
    promise.then(response => {
      const productFromServer = response.data.filter(el => el.id == id)[0]
      setProduct(productFromServer)
    })
    promise.catch(e => console.log("deu ruim! 😢", e));
  }, [id]);

  function comoFazer() {
    if (product === null) return <img src={Loading} alt="loading" />
    return (
      <div>
        <Cards
          key={product.title}
          title={product.title}
          description={product.description1}
          description2={product.description3}
          description3={product.description2}
          price={"R$" + product.price.toFixed(2)}
          quantidade={product.quantidade ? product.quantidade : 0}
          total={parseInt(product.price * product.quantidade).toFixed(2).replace(".", ",")}
          img={product.img}
          showButton={true}
          addProduct={addProduct}
          removeProduct={removeProduct}
        />
      </div>
    )
  }

  function addProduct() {
    if(!product.quantidade){
      setProduct({...product, quantidade: 1})
      setCart([...cart, {...product, quantidade: 1}])
      return
    }

    product.quantidade++
    const newCart = cart.filter(p => p.id != product.id)
    setCart([...newCart, product])
    
  }
  console.log('ProdutoCovid: ', product)
  function removeProduct() {
    if(!product.quantidade) return setProduct({...product, quantidade: 0})

    if(product.quantidade === 0)return


    product.quantidade--
    const newCart = cart.filter(p => p.id != product.id)
    if(product.quantidade === 0) return setCart(newCart)

    setCart([...newCart, product])
  }

  const recipesComponent = comoFazer()
  return (
    <S.Container >
        
      <S.Figure>
        <S.SetaImg src={Seta} alt="seta indicando retorno" onClick={handleBack} />
      </S.Figure>

      {recipesComponent}

    </S.Container>
  )
}