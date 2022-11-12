import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ProdutosDog from "../Pages/ProdutosDog"
import Navbar from "../NavBar/NavBar";
import Detalhes from "../Pages/Detalhes";
import Cart from "../Pages/Cart";
import Revision from "../Pages/Revision";
import CartContext from "../../Context";
import DadosContext from "../../Context/Dados"
import { useContext, useState } from "react";
import * as S from "./style";

function App() {
  const [cart, setCart] = useState([])
  const [dados, setDados] = useState({})

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <DadosContext.Provider value={{dados, setDados}}>
        <S.GlobalStyle />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="produtos/" element={<ProdutosDog />} />
            <Route path="produtos/:id" element={<Detalhes />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/revision" element={<Revision />} />
          </Routes>

        </BrowserRouter>
      </DadosContext.Provider>
    </CartContext.Provider>
  );
}

export default App;
