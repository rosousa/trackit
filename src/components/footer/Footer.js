import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Footer() {
  const percentage = 28;
  const navigate = useNavigate();

  return (
    <Bottom>
      <Habits onClick={() => navigate("/habitos")}>Hábitos</Habits>
      <Align onClick={() => navigate("/hoje")}>
        <CircularProgressbar value={percentage} text="Hoje" />
      </Align>
      <History>Histórico</History>
    </Bottom>
  );
}

const Bottom = styled.div`
  background: #ffffff;
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  bottom: 0;
  left: 0;
  padding: 0 20px;
`;

const Habits = styled.div`
  font-family: "Lexend Deca";
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 70px;
  font-size: 18px;
  text-align: center;
  color: #52b6ff;
  cursor: pointer;
`;

const Align = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -45px;
  width: 90px;
  height: 90px;
  cursor: pointer;
`;

const History = styled.div`
  font-family: "Lexend Deca";
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 70px;
  font-size: 18px;
  text-align: center;
  color: #52b6ff;
  cursor: pointer;
`;
