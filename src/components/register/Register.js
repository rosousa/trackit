import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Credentials from "../../contexts/Credentials";
import { Content, Form, Input, Button, Signup } from "../../styles/LoginStyle";
import { register } from "../../services/trackit";
import logo from "../../assets/img/Logo.png";
import { ThreeDots } from "react-loader-spinner";

export default function Register() {
  const { credentials, setCredentials } = useContext(Credentials);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  localStorage.clear("trackit");
  function handleForm(e) {
    e.preventDefault();
    const body = { ...credentials };
    setSubmitted(true);
    register(body)
      .then((res) => {
        navigate("/");
        console.log(res);
      })
      .catch((error) => {
        alert("Ops.. Algo deu errado!");
        console.log(error);
        setSubmitted(false);
      });
  }
  return (
    <Content>
      <img src={logo} alt="logo" />
      <Form onSubmit={handleForm}>
        <>
          {submitted ? (
            <Input placeholder="email" disabled />
          ) : (
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
          )}
          {submitted ? (
            <Input placeholder="senha" disabled />
          ) : (
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
          )}
          {submitted ? (
            <Input placeholder="nome" disabled />
          ) : (
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
          )}
          {submitted ? (
            <Input placeholder="foto" disabled />
          ) : (
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
          )}
        </>
        <Button submitted={submitted}>
          {submitted ? (
            <ThreeDots
              height="60"
              width="60"
              radius="9"
              color="#fff"
              ariaLabel="three-dots-loading"
              wrapperStyle
              wrapperClass
            />
          ) : (
            "Cadastrar"
          )}
        </Button>
      </Form>
      <Signup onClick={() => navigate("/")}>
        Já tem uma conta? Faça login!
      </Signup>
    </Content>
  );
}
