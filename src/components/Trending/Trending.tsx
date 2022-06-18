import { Container } from "./styles";

import { Link } from "react-router-dom";

type TrendingProps = {
	//Algumas coisas do trending topics são uma notícia q carregam uma imagem
	noticia: boolean; //Então é necessário saber se é ou n uma notícia
	categoria: string;
	titulo: string;
	imagem?: string;
};

export function Trending(props: TrendingProps) {
	const newsImage = props.imagem;

	return (
		<Link to={"/explorer"}>
			<Container>
				<div className="text-content">
					<span>{props.categoria}</span>
					<h4 className="title">{props.titulo}</h4>
				</div>
				{/* Condicional pra mostrar imagem caso a trending seja uma notícia */}
				{props.noticia && <img className="image" src={props.imagem} alt="" />}
			</Container>
		</Link>
	);
}
