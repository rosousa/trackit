import { useEffect, useState, useContext } from "react";
import dayjs from "dayjs";
import styled from "styled-components";
import { getTodayHabits } from "../../services/trackit";
import TodayHabit from "./TodayHabit";
import Refresh from "../../contexts/Refresh";

export default function Today() {
  const [todayHabits, setTodayHabits] = useState([]);
  const { refresh, setRefresh } = useContext(Refresh);
  useEffect(() => {
    getTodayHabits().then((res) => {
      setTodayHabits(res.data);
    });
  }, [refresh]);

  const dayWords = [
    { pt: "Segunda", en: "Monday" },
    { pt: "Terça", en: "Tuesday" },
    { pt: "Quarta", en: "Wednesday" },
    { pt: "Quinta", en: "Thursday" },
    { pt: "Sexta", en: "Friday" },
    { pt: "Sábado", en: "Saturday" },
    { pt: "Domingo", en: "Sunday" },
  ];

  const DAY = dayWords.filter((value) => {
    const EN_DAY = dayjs().format("dddd");
    return value.en === EN_DAY;
  });

  let RESULT = "0";

  if (todayHabits.length > 0) {
    const habitsLength = todayHabits.length;
    const habitsDone = todayHabits.filter((value) => value.done).length;
    const percentage = ((habitsDone / habitsLength) * 1000).toFixed(0);
    RESULT =
      percentage.length > 1 ? percentage.slice(0, percentage.length - 1) : "0";
  }

  return (
    <Background>
      <DayInfo>
        <h1>{`${DAY[0].pt}, ${dayjs().format("DD")}/${dayjs().format(
          "MM"
        )}`}</h1>
        {RESULT !== "0" ? (
          <Concluded>{RESULT}% dos hábitos concluídos</Concluded>
        ) : (
          <NotConcluded>Nenhum hábito concluído ainda</NotConcluded>
        )}
      </DayInfo>
      <AlignHabits>
        {todayHabits.length > 0
          ? todayHabits.map((value, index) => {
              return (
                <TodayHabit
                  key={index}
                  value={value}
                  refresh={refresh}
                  setRefresh={setRefresh}
                />
              );
            })
          : ""}
      </AlignHabits>
    </Background>
  );
}

const Background = styled.div`
  background-color: #f2f2f2;
`;

const DayInfo = styled.div`
  font-family: "Lexend Deca";
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  & h1 {
    font-size: 24px;
    color: #126ba5;
  }
`;

const NotConcluded = styled.p`
  font-family: "Lexend Deca";
  font-size: 18px;
  color: #bababa;
  line-height: 22px;
  margin-bottom: 30px;
`;

const Concluded = styled(NotConcluded)`
  color: #8fc549;
`;

const AlignHabits = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;
