import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../styles/GlobalStyle";
import Login from "./login/Login";
import Register from "./register/Register";
import Credentials from "../contexts/Credentials";

export default function App() {
  const [credentials, setCredentials] = useState({});
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Credentials.Provider value={{ credentials, setCredentials }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Register />} />
          </Routes>
        </Credentials.Provider>
      </BrowserRouter>
    </>
  );
}
