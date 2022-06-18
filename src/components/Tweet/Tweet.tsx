import "./style.css";

type TweetProps = {
	userName: string;
	text: string;
	likes?: number;
};

export function Tweet(props: TweetProps) {
	return (
		<>
			<h4>{props.userName}</h4>
			<h2>{props.text}</h2>
			<h3>{props.likes}</h3>
		</>
	);
}
