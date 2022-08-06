import styled from "styled-components";

export default function History() {
  return (
    <Content>
      <h2>Histórico</h2>
      <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
    </Content>
  );
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 28px;
  & h2 {
    font-family: "Lexend Deca";
    font-size: 25px;
    color: #126ba5;
  }
  & p {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
  }
`;
