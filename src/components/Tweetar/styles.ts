import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;

	margin-left: 1em;
	.row-1,
	.row-2 {
		display: flex;
		flex-direction: row;
	}

	.col-2 {
		margin-left: 1em;
	}

	.tweet-icons {
		display: flex;
		gap: 12px;

		color: var(--links-color);

		.tweet-icon {
			height: 1.5em;
			width: 1.5em;
		}
	}

	.profile-image {
		width: 40px;
		height: 40px;

		object-fit: cover;

		border-radius: 50px;
	}

	.answer-button {
		color: var(--links-color);
		background-color: var(--dark-primary);

		cursor: pointer;
	}
`;
