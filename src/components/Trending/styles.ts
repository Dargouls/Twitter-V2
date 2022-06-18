import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: row;

	align-items: center;

	/* margin-bottom: 20px; */
	padding: 12px 12px;
	transition: background-color 0.15s ease-out;

	:hover {
		background-color: #353342;
	}
	.title {
		margin: 4px 0;
	}

	.image-div {
		height: 70px;
		width: 70px;

		border-radius: 12px;
		background-size: cover;
	}
	.inter {
		width: 70px;
	}

	.image {
		height: 70px;
		width: 70px;
		border-radius: 12px;

		object-fit: cover;
	}

	span {
		font-size: 0.8em;

		color: #7c798d;
	}
`;
