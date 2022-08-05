import { useState, useContext } from "react";
import styled from "styled-components";
import Days from "./Days";
import { createHabit } from "../../services/trackit";
import Refresh from "../../contexts/Refresh";

export default function NewHabit({ setCreateHabit }) {
  const [habitTitle, setHabitTitle] = useState("");
  const [habitDays, setHabitDays] = useState([]);
  const { refresh, setRefresh } = useContext(Refresh);
  const WEEK_DAYS = [
    { day: "domingo", char: "D", selected: false, number: 7 },
    { day: "segunda", char: "S", selected: false, number: 1 },
    { day: "terça", char: "T", selected: false, number: 2 },
    { day: "quarta", char: "Q", selected: false, number: 3 },
    { day: "quinta", char: "Q", selected: false, number: 4 },
    { day: "sexta", char: "S", selected: false, number: 5 },
    { day: "sábado", char: "S", selected: false, number: 6 },
  ];

  function handleInput() {
    const body = { name: habitTitle, days: habitDays };
    if (body.name.length === 0 || body.days.length === 0) {
      alert("Preencha o título e escolha os dias corretamente!");
      return;
    }
    createHabit(body)
      .then((res) => {
        console.log(res);
        setCreateHabit(false);
        setRefresh(!refresh);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <CreateHabit>
        <div>
          <input
            type="text"
            placeholder="nome do hábito"
            onChange={(e) => setHabitTitle(e.target.value)}
          />
          <AlignItems>
            {WEEK_DAYS.map((value, index) => (
              <Days
                key={index}
                day={value}
                habitDays={habitDays}
                setHabitDays={setHabitDays}
              />
            ))}
          </AlignItems>
        </div>
        <Buttons>
          <Cancel onClick={() => setCreateHabit(false)}>Cancelar</Cancel>
          <Save
            onClick={() => {
              handleInput();
            }}
          >
            Salvar
          </Save>
        </Buttons>
      </CreateHabit>
    </>
  );
}

const CreateHabit = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 180px;
  padding: 18px;
  border-radius: 5px;

  & > div > div {
    display: flex;
  }

  & input {
    font-size: 20px;
    width: 100%;
    height: 45px;
    margin-bottom: 8px;
    padding: 0 11px;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
  }

  & input::placeholder {
    color: #dbdbdb;
  }
`;

const AlignItems = styled.div`
  display: flex;
  column-gap: 4px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 10px;
`;

const Save = styled.button`
  background: #52b6ff;
  color: #ffffff;
  width: 84px;
  height: 35px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Cancel = styled(Save)`
  background-color: #ffffff;
  color: #52b6ff;
`;
