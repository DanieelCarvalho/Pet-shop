import * as S from "./Style";
import { Link } from "react-router-dom";
export default function Cards({ title,description , description2, description3, quantidade, price, img, url,showButton,  addProduct, removeProduct }){
    console.log('qnt: ', quantidade)
    const buttons = !showButton ? null : (
        <S.BoxButton >
            <S.Button onClick={() => removeProduct()}> - </S.Button>
            <p>{quantidade}</p>
            <S.Button onClick={() => addProduct()}> + </S.Button>
        </S.BoxButton>
    )
    return(
        <S.Container>
            <S.Links to={url}>
             <S.Title>{title}</S.Title>
            <S.Paragraph>{description}</S.Paragraph>
            <S.Paragraph>{description2}</S.Paragraph>
            <S.Paragraph>{description3}</S.Paragraph>
            <S.ParagraphPrice>{price}</S.ParagraphPrice>
            <S.Figure>
            <S.Image src={img} alt="imagem do produto" />
            </S.Figure>
        
            </S.Links>
            {buttons}
        </S.Container>
    )
} 