import { 
  Container,
  Wrapper, 
  TitleLogin, 
  FormInputs,
  ButtonAccess,
  LineWrapper,
  Line,
  ButtonGoogleAuth,
} from "./styles";

import { FcGoogle } from "react-icons/fc"

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <TitleLogin>Login</TitleLogin>
        <FormInputs>
          Email
          <input type="email" required/>
          Senha
          <input type="password" required/>
        </FormInputs>
        <ButtonAccess>Acessar</ButtonAccess>
        <LineWrapper>
          <Line></Line>
          Ou
          <Line></Line>
        </LineWrapper>
        <ButtonGoogleAuth>
          <FcGoogle />
        </ButtonGoogleAuth>
      </Wrapper>
    </Container>
  );
};

export default Login;
