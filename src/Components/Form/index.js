import axios from "axios";
import React, { useState, useContext } from "react";
import * as S from "./Style";
import DadosContext from "../../Context/Dados";
import { useNavigate } from "react-router-dom";

export default function Form(rua, bairro, uf, cidade) {
    const navigate = useNavigate();
    const{setDados} = useContext(DadosContext)
    const [input, setInput] = useState("");
    const [endereco, setEndereco] = useState({});
    const [ setFechar] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [data, setData] = useState("");
   

    function getCep(e) {
        setInput(e.target.value);
        console.log('entrei no getCep: ', e.target.value.length)

        if(e.target.value.length < 8) {
            setEndereco({
                rua: "",
                bairro: "",
                uf: "",
                cidade: ""
            });
            return
        }

        const Api = `https://viacep.com.br/ws/${e.target.value}/json/`;
        axios.get(Api).then((res) => {
                setEndereco({
                    rua: res.data.logradouro,
                    bairro: res.data.bairro,
                    uf: res.data.uf,
                    cidade: res.data.localidade
                });

                setFechar(true)
            })
    }
    return (
        <S.Form action="" onSubmit={((e) => {
            e.preventDefault()
            setDados({name, email, data, endereco})
            navigate("/revision")
        })}>

            <S.Fieldset>
                <legend>Cadastro</legend>
                <label for="name">
                    Nome: 
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Digite seu nome" name="name" required />
                </label>

                <label for="email">
                    Email:
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite seu email" name="email" required/>
                </label>
                
                <S.LabelData  for="date">
                Data de nascimento:
                    <input type="date" name="date"  value={data} onChange={(e) => setData(e.target.value)} required/>
                </S.LabelData >

                <label for="cep" >
                    CEP: 
                    <input  type="number" name="cep" placeholder="Digite seu CEP" onChange={(e) => {
                    getCep(e)
                }}    />
                </label>

                <label for="rua">
                    Rua: 
                    {rua !== "" && <input type="text" name="rua" placeholder="Rua" value={endereco.rua} />}
                    </label>
                    <label for="bairro">
                        Bairro:
                    {bairro !== "" && <input type="tex" name="bairro" placeholder="Bairro" value={endereco.bairro} />}
                    </label>
                    <label for="cidade">
                        Cidade:
                    {cidade !== "" && <input type="text" name="cidade" placeholder="Cidade" value={endereco.cidade} />}
                    </label>
                    <label for="uf">
                        Estado:
                    {uf !== "" && <input type="text" name="uf" placeholder="Estado" value={endereco.uf} />}
                    </label>
               
                <S.Subimit type="submit" value="Cadastrar"  disabled={!endereco.rua || !name || !data || !email  }/>

                
            </S.Fieldset>
        </S.Form>
    )
}