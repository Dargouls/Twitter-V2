import { useState } from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

import { Trending } from "../Trending/Trending";
import { Explorer } from "../../pages/Explorer";

import ucraniaImg from "../../images/ucrania.jpg";

export function News() {
	const [news, setNews] = useState([]);
	const newsImage = ucraniaImg.toString();
	console.log(newsImage);
	return (
		<Container>
			<h1>O que está acontecendo</h1>
			<Trending
				noticia={false}
				categoria="Entretenimento"
				titulo="Ministro da economia sai do governo e ressalta: queria que eu desviasse em NFT vsfkkk"
			/>
			<Trending
				noticia={true}
				categoria="Guerra na Ucrânia"
				titulo="Líderes da Otan se reúnem em Bruxelas e devem abordar envio de armas à Ucrânia"
				imagem={newsImage}
			/>
			{/* <div className="ver-mais"> */}
			<Link className="link" to={"/explorer"}>
				Ver mais
			</Link>
			{/* </div> */}
		</Container>
	);
}
