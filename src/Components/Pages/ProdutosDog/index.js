import axios from "axios";
import { useEffect, useState } from "react";
import Cards from "../../Cards";
import * as S from "./Style";
import Loading from "../../../Asset/carregar.svg"

export default function ProdutosDog() {
  const [item, setItem] = useState([]);
  const [busca, setBusca] = useState("");



  useEffect(() => {
    const promise = axios.get(`${process.env.REACT_APP_BACKEND_URL}/products?categories2:`);
    promise.then((response) => {
      setItem(response.data);
    });
    promise.catch(e => console.log("deu ruim! 😢", e));
  }, []);


  const lowerBusca = busca.toLowerCase();
  const Lista = item.filter((item) => {
    
    if (item.title.toLowerCase().includes(lowerBusca) || item.categories2.toLowerCase().includes(lowerBusca)) {
      return true;

    } else {
      return ""; 
    }
  });


  if (!item.length   ) return <img src={Loading} alt="loading" />
  return (

    <S.Container>
      <S.Search>
        <label htmlFor="search-form">
          <S.Input
            type="search"
            name="search-form"
            id="search-form"
            className="search-input"
            placeholder="Pesquise o produto..."
            onChange={(e) => setBusca(e.target.value)}
          />
        </label>

        <S.Select
          valeu={busca}
          onChange={(e) => {
            setBusca(e.target.value);
          }}
         >
          <option value="">Filtrar</option>
          <option value="ração">Ração</option>
          <option value="guias">Guias</option>
          <option value="medicamento">Medicamento</option>
          <option value="brinquedo">Brinquedos</option>
        </S.Select>
        <p></p>
      </S.Search>
      <S.BoxProduct>

        {Lista.map((item, index) => {
          const url = `/produtos/${item.id}`;
          return (
            <Cards
              key={index}
              title={item.title}
              price={"R$" + item.price.toFixed(2)}
              img={item.img}
              url={url}
            />
          )
        })}

      </S.BoxProduct>
    </S.Container> 
 
  )
}