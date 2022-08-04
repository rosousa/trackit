import styled from "styled-components";
import NewHabit from "./NewHabit";
import { getHabits } from "../../services/trackit";
import { useEffect, useState } from "react";

export default function Habits() {
  const [habits, setHabits] = useState([]);
  const [createHabit, setCreateHabit] = useState(false);
  useEffect(() => {
    getHabits().then((res) => {
      setHabits([...res.data]);
      console.log(res);
    });
  }, []);
  return (
    <>
      <MyHabits>
        <p>Meus hábitos</p>
        <div onClick={() => setCreateHabit(!createHabit)}>+</div>
      </MyHabits>
      {createHabit ? <NewHabit setCreateHabit={setCreateHabit} /> : ""}
      {habits.length === 0 ? "" : <p>Melhor tentar carregar os hábitos</p>}
      {habits.length === 0 ? (
        <NoHabits>
          <p>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </p>
        </NoHabits>
      ) : (
        ""
      )}
    </>
  );
}

const MyHabits = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  & p {
    font-family: "Lexend Deca";
    font-size: 24px;
    color: #126ba5;
  }

  & div {
    background: #52b6ff;
    font-family: "Lexend Deca";
    color: #ffffff;
    font-size: 27px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 35px;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const NoHabits = styled.div`
  margin-top: 30px;

  & p {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
  }
`;
