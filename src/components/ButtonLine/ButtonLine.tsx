import { CSSProperties, MouseEventHandler } from "react";
import { Container } from "./styles";

type ButtonProps = {
	text: string;
	backgroundColor: string;
	borderColor: string;
	color: string;
	onClick: MouseEventHandler;
};

export function ButtonLine(props: ButtonProps) {
	return (
		<Container>
			<button
				style={{
					color: props.color,
					backgroundColor: props.backgroundColor,
					borderColor: props.borderColor,
				}}
				onClick={props.onClick}
			>
				{props.text}
			</button>
		</Container>
	);
}
