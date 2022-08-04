import { useState } from "react";
import styled from "styled-components";

export default function Days({ day, habitDays, setHabitDays }) {
  const [weekday, setWeekDay] = useState({ ...day });
  function handleEvent() {
    setWeekDay({ ...weekday, selected: !weekday.selected });
    let arr = habitDays;
    if (habitDays.includes(day.number)) {
      arr[habitDays.indexOf(day.number)] = undefined;
      arr = arr.filter((value) => value !== undefined);
      setHabitDays([...arr]);
    } else {
      setHabitDays([...habitDays, day.number]);
    }
  }

  return (
    <Day onClick={handleEvent} selected={weekday.selected}>
      <p>{day.char}</p>
    </Day>
  );
}

const Day = styled.div`
  background-color: ${(props) => (props.selected ? "#CFCFCF" : "#ffffff")};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  cursor: pointer;

  & p {
    font-family: "Lexend Deca";
    font-size: 20px;
    color: ${(props) => (props.selected ? "#ffffff" : "#dbdbdb")};
  }
`;
