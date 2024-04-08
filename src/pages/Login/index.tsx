import { useState } from "react";
import Footer from "../../components/Footer";
import {
	Container,
	Wrapper,
	TitleLogin,
	FormInputs,
	ButtonAccess,
	LineWrapper,
	Line,
	ButtonGoogleAuth,
	InputText,
} from "./styles";

import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { loginUser } from "../../services/api";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	console.log(email, password);
	let user: any;
	async function handlerLogin() {
		// if(!email || !password)
		try {
			user = await loginUser(email, password);
		} catch (error) {
			console.log(error);
		}
		console.log(user);
	}

	return (
		<Container>
			<Wrapper>
				<TitleLogin>Login</TitleLogin>
				<FormInputs>
					<InputText>
						<span>E-mail</span>
						<input
							type="email"
							required
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</InputText>
					<InputText>
						<span>Senha</span>
						<input
							type="password"
							required
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</InputText>
				</FormInputs>
				<ButtonAccess onClick={handlerLogin}>Acessar</ButtonAccess>
				<LineWrapper>
					<Line></Line>
					Ou
					<Line></Line>
				</LineWrapper>
				<ButtonGoogleAuth>
					<FcGoogle />
				</ButtonGoogleAuth>
			</Wrapper>
			<Footer></Footer>
		</Container>
	);
};

export default Login;
