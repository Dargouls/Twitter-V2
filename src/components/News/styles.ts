import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;

	max-width: 400px;

	border-radius: 12px;
	background-color: var(--dark-secondary);

	h1 {
		padding: 0px 12px;
	}
	.link {
		padding: 20px 0px;
		border: none;
		text-decoration: none;

		width: 100%;

		border-radius: 0px 0px 12px 12px;

		color: var(--links-color);
		text-align: center;

		transition: background-color 0.15s ease-out;
		:hover {
			background-color: #353342;
		}
	}
`;
