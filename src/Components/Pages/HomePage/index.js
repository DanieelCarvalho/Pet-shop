import * as S from "./Style";
import DogNot from "../../../img/dognot.png"

export default function HomePage() {

    return (
        <S.Container>
            <S.Title>
                Bem vindo ao Pet Shop Melhor Amigo do Dog
            </S.Title>
            <S.Figure>
                <S.Image src={DogNot} alt="Cachorro olhando um notebook"/>
            </S.Figure>
        </S.Container>
    )
} 