import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Refresh from "../../contexts/Refresh";
import { getTodayHabits } from "../../services/trackit";

export default function Footer() {
  const [todayHabits, setTodayHabits] = useState([]);
  const { refresh } = useContext(Refresh);
  const navigate = useNavigate();

  useEffect(() => {
    getTodayHabits().then((res) => {
      setTodayHabits(res.data);
    });
  }, [refresh]);

  let RESULT = "0";

  if (todayHabits.length > 0) {
    const habitsLength = todayHabits.length;
    const habitsDone = todayHabits.filter((value) => value.done).length;
    const percentage = ((habitsDone / habitsLength) * 1000).toFixed(0);
    RESULT =
      percentage.length > 1 ? percentage.slice(0, percentage.length - 1) : "0";
  }

  return (
    <Bottom>
      <Habits onClick={() => navigate("/habitos")}>Hábitos</Habits>
      <Align onClick={() => navigate("/hoje")}>
        <CircularProgressbar
          value={RESULT}
          text="hoje"
          background
          backgroundPadding={6}
          styles={buildStyles({
            backgroundColor: "#3e98c7",
            textColor: "#fff",
            pathColor: "#fff",
            trailColor: "transparent",
          })}
        />
      </Align>
      <History onClick={() => navigate("/historico")}>Histórico</History>
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
