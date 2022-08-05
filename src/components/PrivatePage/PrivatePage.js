import styled from "styled-components";
import Header from "../header/Header";
import Footer from "../footer/Footer";

export default function PrivatePage({ children }) {
  const AUTH = JSON.parse(localStorage.getItem("trackit"));
  if (!AUTH) {
    return <p>"You don't have permission!"</p>;
  }
  return (
    <Background>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Background>
  );
}

const Content = styled.div`
  width: 100%;
  padding: 0 20px;
`;

const Background = styled.div`
  z-index: -1;
  background-color: #f2f2f2;
  padding-bottom: 100px;
`;
