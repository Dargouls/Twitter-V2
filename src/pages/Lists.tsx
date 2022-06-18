import { Container } from "./PagesStyles";

import { News } from "../components/News/News";

export function Lists() {
	return (
		<Container>
			<main className="content">
				<h1>Notificações</h1>
			</main>
			<aside className="aside-content">
				<News />
			</aside>
		</Container>
	);
}
