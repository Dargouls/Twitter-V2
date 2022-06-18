import { NavLink } from "react-router-dom";
import { Initial } from "../../pages/Initial";

import { Button } from "../Button/Button";

import { Container } from "./styles";

import Logo from "../../images/Twitter_logo_2012.svg.png";
import { AiOutlineEllipsis } from "react-icons/ai";

export function Navbar() {
	function tweetar() {
		console.log("tweetou algo");
	}
	return (
		<Container>
			<nav>
				<img className="logo" src={Logo} alt="logo twitter" />
				<div className="nav-buttons">
					{/* Componente de Link para navbar*/}
					<NavLink to="/" className={"navlink"}>
						<span>
							<img
								className="navbar-icon"
								src="/src/icons/bxs_home-circle-1.svg"
								alt=""
							/>
							<span>Página inicial</span>
						</span>
					</NavLink>
					<NavLink to="/explorer" className={"navlink"}>
						<span>
							<img
								className="navbar-icon"
								src="/src/icons/akar-icons_hashtag.svg"
								alt=""
							/>
							<span>Explorar</span>
						</span>
					</NavLink>
					<NavLink to="/notifications" className={"navlink"}>
						<span>
							<img
								className="navbar-icon"
								src="/src/icons/akar-icons_bell.svg"
								alt=""
							/>
							<span>Notificações</span>
						</span>
					</NavLink>
					<NavLink to="/profile" className={"navlink"}>
						<span>
							<img
								className="navbar-icon"
								src="/src/icons/fluent_mail-20-regular.svg"
								alt=""
							/>
							<span>Mensagens</span>
						</span>
					</NavLink>
					<NavLink to="/profile" className={"navlink navlink-mediaQueries"}>
						<span>
							<img
								className="navbar-icon"
								src="/src/icons/save-items-1.svg"
								alt=""
							/>
							<span>Itens salvos</span>
						</span>
					</NavLink>
					<NavLink to="/profile" className={"navlink navlink-mediaQueries"}>
						<span>
							<img
								className="navbar-icon"
								src="/src/icons/save-lists.svg"
								alt=""
							/>
							<span>Listas</span>
						</span>
					</NavLink>
					<NavLink to="/profile" className={"navlink"}>
						<span>
							<img
								className="navbar-icon"
								src="/src/icons/bi_person.svg"
								alt=""
							/>
							<span>Perfil</span>
						</span>
					</NavLink>
					<NavLink to="/profile" className={"navlink"}>
						<span>
							<img
								className="navbar-icon"
								src="/src/icons/Group 466.svg"
								alt=""
							/>
							<span>Mais</span>
						</span>
					</NavLink>
					<div className="tweet-button">
						<Button
							text="Tweetar"
							color="var(--button-affirmative)"
							onClick={tweetar}
						></Button>
					</div>

					<button className="tweet-button-mini">
						<img src="/src/icons/feather.svg" alt="" />
					</button>

					<div className="profile">
						<img className="profile-img" src="/src/images/Astro.jpg" alt="" />
						<div className="nick navlink-mediaQueries">
							<span className="nome">Gabriel</span>
							<span className="tag">@Dargouls</span>
						</div>
						<AiOutlineEllipsis className="ellipsis navlink-mediaQueries" />
					</div>
				</div>
			</nav>
		</Container>
	);
}
