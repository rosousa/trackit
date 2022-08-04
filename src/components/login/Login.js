import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Content, Form, Input, Button, Signup } from "../../styles/LoginStyle";
import Credentials from "../../contexts/Credentials";
import { login } from "../../services/trackit";
import logo from "../../assets/img/Logo.png";

export default function Login() {
  const { credentials, setCredentials } = useContext(Credentials);
  const navigate = useNavigate();
  function handleForm(e) {
    e.preventDefault();
    const body = { email: credentials.email, password: credentials.password };
    login(body)
      .then((res) => {
        const AUTH = { ...res.data };
        setCredentials(AUTH);
        localStorage.setItem("trackit", JSON.stringify(AUTH));
        navigate("/hoje");
        // console.log(res);
      })
      .catch((error) => {
        alert("Ops.. Algo deu errado!");
        console.log(error);
        console.log(body);
      });
  }

  return (
    <Content>
      <img src={logo} alt="logo" />
      <Form onSubmit={handleForm}>
        <>
          <Input
            type="email"
            name="email"
            placeholder="email"
            onChange={(e) =>
              setCredentials({
                ...credentials,
                [e.target.name]: e.target.value,
              })
            }
            required
          />
          <Input
            type="password"
            name="password"
            placeholder="senha"
            onChange={(e) =>
              setCredentials({
                ...credentials,
                [e.target.name]: e.target.value,
              })
            }
            required
          />
        </>
        <Button>Entrar</Button>
      </Form>
      <Signup
        onClick={() => {
          navigate("/cadastro");
        }}
      >
        Não tem uma conta? Cadastre-se!
      </Signup>
    </Content>
  );
}
