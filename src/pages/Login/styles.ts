import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
  height: 100vh;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 400px;
  background-color: gray;
  border-radius: 30px;
`;

export const TitleLogin = styled.h1`
  margin-bottom: 30px;
`;

export const FormInputs = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonAccess = styled.button`
  margin: 20px;
  background-color: #fcfcFc;
  border: none;
  border-radius: 50px;
  width: 90px;
  height: 40px;
  font-weight: bold;
  transition: 0.3s;
  cursor: pointer;

  &:hover{
    background-color: red;
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
  background-color: red;
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
    background-color: red;
  }
`;