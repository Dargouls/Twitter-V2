import { useState } from "react";
import { Link } from "react-router-dom";

import { Tweet } from "../components/Tweet/Tweet";
import { Tweetar } from "../components/Tweetar/Tweetar";
import { News } from "../components/News/News";
import { Search } from "../components/Search/Search";
import { Navbar } from "../components/Navbar/Navbar";

import "../GlobalStyles.css";
import { Container } from "./PagesStyles";

export function Initial() {
	const title = (document.title = "Página Inicial");

	return (
		<>
			{/* <Tweet text="Alguém entrou nos trandings" />
      <Tweet text="Uau" likes={4} />
      <Tweet text="Lorem Ipsum" /> */}
			<Container>
				<main className="content">
					<h2 className="title">{title}</h2>
					<Tweetar />
				</main>
				<aside className="aside-content">
					<Search />
					<News />
				</aside>
			</Container>
		</>
	);
}
