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
import { Bounce, ToastContainer, toast } from "react-toastify";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	console.log(email, password);

	function handlerLogin() {
		console.log("foi");
		toast.warn("🦄 Wow so easy!", {
			position: "top-left",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
			transition: Bounce,
		});
		try {
		} catch (error) {}
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
				<ButtonAccess onClick={(e) => handlerLogin()}>Acessar</ButtonAccess>
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
