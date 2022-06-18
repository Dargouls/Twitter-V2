import { Container } from "./PagesStyles";

import { Navbar } from "../components/Navbar/Navbar";
import { News } from "../components/News/News";

export function Explorer() {
	return (
		<Container>
			{/* <div className="navbar">
				<Navbar />
			</div> */}
			<div className="content">
				<h1>Exploar</h1>
				<h2>Notícias em alta</h2>
			</div>
			<div className="aside-content">
				<News />
			</div>
		</Container>
	);
}
