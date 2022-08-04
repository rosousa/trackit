import styled from "styled-components";
import Header from "../header/Header";
import Footer from "../footer/Footer";

export default function PrivatePage({ children }) {
  const AUTH = JSON.parse(localStorage.getItem("trackit"));
  if (!AUTH) {
    return <p>"You don't have permission!"</p>;
  }
  return (
    <>
      <Header />
      <Content>{children}</Content>
      <Footer />
      <Background></Background>
    </>
  );
}

const Content = styled.div`
  width: 100%;
  padding: 0 20px;
`;

const Background = styled.div`
  z-index: -1;
  background-color: #f2f2f2;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;
