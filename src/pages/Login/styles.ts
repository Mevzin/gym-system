import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 700px;
  background-color: #D9D9D9;
  border-radius: 30px;
  box-shadow: -7px 7px 20px rgba(0,0,0,0.5);
`;

export const TitleLogin = styled.h1`
  margin-bottom: 48px;
`;

export const FormInputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;


`;

export const InputText = styled.div`

display: flex;
flex-direction: column;
width: 388px;
align-items: center;

span {
  align-self: flex-start;
}

input {
  background: transparent;
  border: none;
  border-bottom: 1px solid #000000;
  height: 30px;
  width: 100%;
}

:first-child{
  margin-bottom: 12px;
}
`;

export const ButtonAccess = styled.button`
  margin: 20px;
  background-color: #0BD21F;
  border: none;
  border-radius: 50px;
  width: 90px;
  height: 40px;
  color: #fcfcfc;
  font-weight: bold;
  transition: 0.3s;
  cursor: pointer;

  &:hover{
    background-color: #fcfcFc;

    color: #000000;
  }
`;

export const LineWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const Line = styled.div`
  height: 1px;
  width: 40%;
  background-color: #000000;
`;

export const ButtonGoogleAuth = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border: none;
  margin-top: 15px;
  transition: 0.3s;
  cursor: pointer;

  svg {
    font-size: 30px;
  }

  &:hover{
    background-color: gray;
  }
`;