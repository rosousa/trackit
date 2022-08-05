import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../styles/GlobalStyle";
import Login from "./login/Login";
import Register from "./register/Register";
import Credentials from "../contexts/Credentials";
import Refresh from "../contexts/Refresh";
import PrivatePage from "./PrivatePage/PrivatePage";
import Today from "./today/Today";
import Habits from "./habits/Habits";
import Percentage from "../contexts/Percentage";

export default function App() {
  const [credentials, setCredentials] = useState({});
  const [refresh, setRefresh] = useState(false);
  const [percentage, setPercentage] = useState("0");
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Credentials.Provider value={{ credentials, setCredentials }}>
          <Refresh.Provider value={{ refresh, setRefresh }}>
            <Percentage.Provider value={{ percentage, setPercentage }}>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<Register />} />
                <Route
                  path="/hoje"
                  element={
                    <PrivatePage>
                      <Today />
                    </PrivatePage>
                  }
                />
                <Route
                  path="/habitos"
                  element={
                    <PrivatePage>
                      <Habits />
                    </PrivatePage>
                  }
                />
              </Routes>
            </Percentage.Provider>
          </Refresh.Provider>
        </Credentials.Provider>
      </BrowserRouter>
    </>
  );
}
