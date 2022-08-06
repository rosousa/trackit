import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Content, Form, Input, Button, Signup } from "../../styles/LoginStyle";
import Credentials from "../../contexts/Credentials";
import { login } from "../../services/trackit";
import logo from "../../assets/img/Logo.png";
import { ThreeDots } from "react-loader-spinner";

export default function Login() {
  const { credentials, setCredentials } = useContext(Credentials);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const TOKEN = localStorage.getItem("trackit")
    ? JSON.parse(localStorage.getItem("trackit")).token
    : false;
  useEffect(() => {
    if (TOKEN) {
      navigate("/hoje");
    }
  }, []);
  function handleForm(e) {
    e.preventDefault();
    const body = { email: credentials.email, password: credentials.password };
    setSubmitted(true);
    login(body)
      .then((res) => {
        const AUTH = { ...res.data };
        setCredentials(AUTH);
        localStorage.setItem("trackit", JSON.stringify(AUTH));
        navigate("/hoje");
      })
      .catch((error) => {
        setSubmitted(false);
        alert("Ops.. Algo deu errado!");
        console.log(error);
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
        </>
        <Button>
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
            "Entrar"
          )}
        </Button>
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
