import styled from "styled-components";

const Content = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 45px;
  font-size: 18px;
  color: #ffffff;
  cursor: pointer;
  border: none;
  border-radius: 5px;
`;

const Signup = styled.button`
  background-color: #ffffff;
  color: #52b6ff;
  font-size: 13.976px;
  text-decoration-line: underline;
  cursor: pointer;
  border: none;
`;

export { Content, Form, Button, Signup, Input };
