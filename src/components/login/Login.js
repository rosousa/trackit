import styled from "styled-components";
import logo from "../../assets/img/Logo.png";

export default function Login() {
  function handleForm(e) {
    e.preventDefault();
  }

  return (
    <Content>
      <img src={logo} alt="logo" />
      <Form onSubmit={handleForm}>
        <Input name="email" placeholder="email" />
        <Input name="password" placeholder="senha" />
        <Button>Entrar</Button>
      </Form>
      <Signup>Não tem uma conta? Cadastre-se!</Signup>
    </Content>
  );
}

const Content = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 32px;
`;

const Form = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  row-gap: 6px;
`;

const Input = styled.input`
  background: #ffffff;
  width: 100%;
  height: 45px;
  font-size: 18px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  padding-left: 10px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    opacity: 0.4;
  }
`;

const Button = styled.button`
  background: #52b6ff;
  width: 100%;
  height: 45px;
  font-size: 18px;
  color: #ffffff;
  border: none;
  border-radius: 5px;
`;

const Signup = styled.button`
  background-color: #ffffff;
  color: #52b6ff;
  font-size: 13.976px;
  text-decoration-line: underline;
  border: none;
`;
