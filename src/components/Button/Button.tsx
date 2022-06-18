import { MouseEventHandler } from "react";
import { Container } from "./styles";

type ButtonProps = {
	text: string;
	color: string;
	onClick: MouseEventHandler;
};

export function Button(props: ButtonProps) {
	return (
		<Container>
			<button style={{ backgroundColor: props.color }} onClick={props.onClick}>
				{props.text}
			</button>
		</Container>
	);
}
