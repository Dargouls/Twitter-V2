import { useState } from "react";

import { Container } from "./styles";
import ProfileImage from "/src/images/Astro.jpg";

import { GrEmoji, GrImage } from "react-icons/gr";
import { AiOutlineGif, AiFillSignal } from "react-icons/ai";
import { TbCalendarTime, TbMapPin } from "react-icons/tb";
import { CgImage } from "react-icons/cg";
import { BiWorld } from "react-icons/bi";

import { Tweet } from "../Tweet/Tweet";
import { Button } from "../Button/Button";
import { ButtonLine } from "../ButtonLine/ButtonLine";

export function Tweetar() {
	const [counterTweets, setCounterTweets] = useState(0);
	const [tweets, setTweets] = useState<string[]>([]);
	const [text, setText] = useState("");

	function onChange(evento: any) {
		const { name, value } = evento.target;
		console.log(value);
		setText(value);
	}
	function CreateTweet() {
		if (text == "") {
			console.log("Não pode adicionar texto vazio");
		} else {
			setTweets([...tweets, text]);
		}
	}

	function selecionarAudiencia() {
		console.log("selecionar quantas pessoas vão visualizar os tweets");
	}
	return (
		<Container>
			<div className="row-1">
				<img className="profile-image" src={ProfileImage} alt="perfil" />
				<div className="col-2">
					<ButtonLine
						text="Qualquer pessoa"
						backgroundColor="var(--dark-primary)"
						color="var(--links-color)"
						borderColor="var(--links-color)"
						onClick={selecionarAudiencia}
					/>
					<textarea
						name="novo-tweet"
						id="novo-tweet"
						onChange={onChange}
						placeholder="O que está acontecendo"
						//onInput={() => {if(this.scrollHeight > this.offsetHeight) this.row += 1}}
					></textarea>
					<button className="answer-button">
						<BiWorld />
						Qualquer pessoa pode responder
					</button>
				</div>
			</div>

			{/* <input
				type="text"
				id="novo-tweet"
				name="novo-tweet"
				onChange={onChange}
			/> */}
			<div className="row-2">
				<div className="tweet-icons">
					<CgImage className="tweet-icon" />
					<AiOutlineGif className="tweet-icon" />
					<AiFillSignal className="tweet-icon" />
					<GrEmoji className="tweet-icon" />
					<TbCalendarTime className="tweet-icon" />
					<TbMapPin className="tweet-icon" />
				</div>
				<Button
					text="Tweetar"
					color="var(--button-affirmative"
					onClick={CreateTweet}
				></Button>
			</div>

			{tweets.map((tweet) => {
				return <Tweet userName="carlos" text={tweet} />;
			})}
		</Container>
	);
}
