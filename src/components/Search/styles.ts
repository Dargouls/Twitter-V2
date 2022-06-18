import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: row;

	align-items: center;

	height: 50px;
	width: 100%;

	box-sizing: border-box;

	padding: 0px 8px;
	margin-top: 0.5em;

	border-radius: 50px;
	background-color: var(--dark-secondary);

	input {
		border: none;
		outline: none;

		height: 40px;

		color: aliceblue;
		background-color: var(--dark-secondary);
	}
	.icon-search {
		height: 1.25em;
		width: 2.25em;

		color: #71767b;
	}
	::placeholder {
		font-size: large;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
			Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
		color: #71767b;
	}
`;
