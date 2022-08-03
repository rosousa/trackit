import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Credentials from "../../contexts/Credentials";
import { Content, Form, Input, Button, Signup } from "../../styles/LoginStyle";
import { register } from "../../services/trackit";
import logo from "../../assets/img/Logo.png";

export default function Register() {
  const { credentials, setCredentials } = useContext(Credentials);
  const navigate = useNavigate();
  function handleForm(e) {
    e.preventDefault();
    const body = { ...credentials };
    register(body)
      .catch((error) => {
        alert("Ops.. Algo deu errado!");
        console.log(error);
      })
      .then((res) => {
        if (res) {
          navigate("/");
          console.log(res);
        }
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
          <Input
            type="text"
            name="name"
            placeholder="nome"
            onChange={(e) =>
              setCredentials({
                ...credentials,
                [e.target.name]: e.target.value,
              })
            }
            required
          />
          <Input
            type="text"
            name="image"
            placeholder="foto"
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
      <Signup onClick={() => navigate("/")}>
        Já tem uma conta? Faça login!
      </Signup>
    </Content>
  );
}
