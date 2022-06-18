import { Container } from "./styles";
import { AiOutlineSearch } from "react-icons/ai";
export function Search() {
	return (
		<Container>
			<AiOutlineSearch className="icon-search" />
			<input type="text" placeholder="Buscar no Twitter" />;
		</Container>
	);
}
