import { Container, CopyText } from "./styles";

const Footer = () => {
	return (
		<Container>
			<CopyText>
				Powered by{" "}
				<a href="https://github.com/Mevzin" target="_blank" rel="noreferrer">
					@Mevzin
				</a>{" "}
				Copyright 2024
			</CopyText>
		</Container>
	);
};

export default Footer;
