import { useState } from "react";
import styled from "styled-components";
import { checkHabit, uncheckHabit } from "../../services/trackit";

export default function TodayHabit({ value, refresh, setRefresh }) {
  const [isDone, setIsDone] = useState(value.done);
  function handleClick() {
    setIsDone(!isDone);
    if (isDone) {
      uncheckHabit(value.id).then((res) => {
        setRefresh(!refresh);
      });
    } else {
      checkHabit(value.id).then((res) => {
        setRefresh(!refresh);
      });
    }
  }
  function checkSequence() {
    if (value.currentSequence === 0) {
      return "#666666";
    }
    if (value.currentSequence === value.highestSequence || isDone) {
      return "#8FC549";
    }
    return "#666666";
  }
  return (
    <Content isDone={isDone}>
      <HabitInfo checkSequence={checkSequence}>
        <h1>{value.name}</h1>
        <div>
          <p>
            Sequência atual: <span>{value.currentSequence} dias</span>
          </p>
          <p>Seu recorde: {value.highestSequence} dias</p>
        </div>
      </HabitInfo>
      {isDone ? (
        <ion-icon name="checkbox" onClick={handleClick}></ion-icon>
      ) : (
        <ion-icon name="checkbox" onClick={handleClick}></ion-icon>
      )}
    </Content>
  );
}

const Content = styled.div`
  font-family: "Lexend Deca";
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 94px;
  padding: 13px;
  border-radius: 5px;
  & ion-icon {
    color: ${(props) => (props.isDone ? "#8FC549;" : "#EBEBEB;")};
    width: 70px;
    height: 70px;
    cursor: pointer;
  }
`;

const HabitInfo = styled.div`
  color: #666666;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  padding-left: 5px;
  & h1 {
    font-size: 20px;
    line-height: 25px;
  }
  & p {
    font-size: 14px;
  }
  & span {
    color: ${(props) => props.checkSequence()};
  }
`;
