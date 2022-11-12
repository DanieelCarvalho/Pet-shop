import { Link } from "react-router-dom";
import * as S from "./Style";
import Carrinho from "../../img/carrinho.png"
import { Figure } from "../Cards/Style";


function Navbar() {
  return (
    <S.Menu>
      <S.Ul>
        <li><S.Links to="/">Home</S.Links></li>
        <li><S.Links to="/produtos">Produtos</S.Links></li>
      </S.Ul>
      <S.Figure>
        <S.Links to="/cart">
          <S.Image src={Carrinho} alt="carrinho de compra" />
        </S.Links>
      </S.Figure>
    </S.Menu>

  )
}

export default Navbar;