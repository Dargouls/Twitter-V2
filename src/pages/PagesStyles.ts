import styled from "styled-components";

export const Container = styled.div`
	//Flex em todas as páginas pra centralizar todos os conteúdos no centro
	display: flex;
	flex-direction: row;

	gap: 2em;

	justify-content: center;

	.content {
		min-width: 34.375em;

		border-right: 1px solid #5a5a6a67;
		border-left: 1px solid #5a5a6a67;
		border-bottom: 1px solid #5a5a6a67;
	}

	#novo-tweet {
		display: block;

		border-radius: 12px;
		outline: none;
		border: none;

		width: 200px;
	}

	.aside-content {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
	@media (max-width: 1024px) {
		//Adaptar a tela para tirar o conteúdo lateral
		.aside-content {
			display: none;
		}
	}
`;
