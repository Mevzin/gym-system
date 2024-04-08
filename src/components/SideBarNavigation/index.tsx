import { Container, Header, ProfileIcon } from "./styles";

//@ts-expect-error
import profileIcon from "../../assets/userProfileIcon.png";

const SideBarNavigation = () => {
	let userName: string = "teste";

	return (
		<Container>
			<Header>
				<ProfileIcon src={profileIcon} />
				<span>Olá {userName}</span>
				<span>Você esta logado como aluno!</span>
			</Header>
		</Container>
	);
};

export default SideBarNavigation;
