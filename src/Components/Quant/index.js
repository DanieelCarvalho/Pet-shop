import { useContext,  useState, useEffect } from "react"
import {  Link } from "react-router-dom";
import CartContext from "../../Context"

export default function Quant(){
    const { cart, setCart } = useContext(CartContext)
    const [quant, setQuant] = useState(null)
    const [total, setTotal] = useState(null)
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
    
    return(
    <div>
         {cart.map((p) => {
          return (
            <div>
              <p>Total: R$ {parseInt(p.price * p.quantidade).toFixed(2).replace(".", ",")} </p>
              <div>
                <button onClick={() => addProduct(p.id)}> + </button>
                <p>{p.quantidade}</p>
                <button onClick={() => subProduct(p.id)} > - </button>

              </div>
            </div>
          )
        })}
    </div>

    )
}