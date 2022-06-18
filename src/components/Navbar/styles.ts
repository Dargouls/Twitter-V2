import styled from "styled-components";

export const Container = styled.header`
	min-width: 50px;
	width: 16em;

	overflow: hidden;

	margin-top: 1em;
	nav {
		width: 100%;
	}
	.logo {
		width: 40px;
		height: 30.44px;

		padding-left: 1em;
	}

	.navlink {
		border: none;
		outline: none;
		text-decoration: none;

		padding: 0.5em 0;
		font-size: larger;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
			Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
			sans-serif;
		color: aliceblue;

		> span {
			white-space: nowrap;

			padding: 0.7em 1.2em;
			:hover {
				background-color: #98989812;
				border-radius: 50px;

				transition: background-color 0.1s ease-in;
			}
		}

		img {
			margin-right: 1em;
		}
	}

	.navbar-icon {
		filter: invert(1);

		height: 1.5em;
	}
	.nav-buttons {
		display: flex;
		flex-direction: column;
	}

	.profile {
		display: inline-flex;
		gap: 0.8em;

		width: 100%;

		position: absolute;

		bottom: 1em;
		.nick {
			display: flex;
			flex-direction: column;

			> .nome {
				font-weight: bold;
			}
		}
	}

	.profile-img {
		object-fit: cover;

		border-radius: 50px;
		width: 40px;
	}
	.ellipsis {
		width: 1.5em;
		height: 1.5em;

		color: white;
	}

	.tweet-button-mini {
		display: none;

		width: 5em;
		height: 5em;

		border-radius: 50px;
	}

	@media (max-width: 1224px) {
		width: 5vw;

		.navlink-mediaQueries {
			display: none !important;
		}

		.navlink > span > span {
			display: none;
		}

		.tweet-button {
			display: none;
		}
		.tweet-button-mini {
			display: block;
		}
	}
`;
