import { useContext } from "react";
import styled from "styled-components";
import Trash from "../../assets/img/Trash.png";
import Refresh from "../../contexts/Refresh";
import { deleteHabit } from "../../services/trackit";

export default function Habit({ info }) {
  const { refresh, setRefresh } = useContext(Refresh);
  const WEEK_DAYS = [
    { day: "domingo", char: "D", number: 0 },
    { day: "segunda", char: "S", number: 1 },
    { day: "terça", char: "T", number: 2 },
    { day: "quarta", char: "Q", number: 3 },
    { day: "quinta", char: "Q", number: 4 },
    { day: "sexta", char: "S", number: 5 },
    { day: "sábado", char: "S", number: 6 },
  ];

  function handleClick() {
    const del = window.confirm("Quer mesmo parar de trackear o hábito?");
    if (del) {
      deleteHabit(info.id).then(() => {
        setRefresh(!refresh);
      });
    }
  }

  return (
    <Content>
      <Title>{info.name}</Title>
      <div>
        {WEEK_DAYS.map((value, index) => {
          if (info.days.includes(value.number)) {
            return <SelectedDay key={index}>{value.char}</SelectedDay>;
          }
          return <Day key={index}>{value.char}</Day>;
        })}
      </div>
      <Delete src={Trash} onClick={handleClick} />
    </Content>
  );
}

const Content = styled.div`
  background-color: #ffffff;
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  height: 91px;
  margin: 10px 0;
  padding: 15px;
  border-radius: 5px;

  & > div {
    display: flex;
    column-gap: 5px;
  }
`;

const Title = styled.p`
  font-family: "Lexend Deca";
  font-size: 20px;
  color: #666666;
`;

const Day = styled.div`
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Lexend Deca";
  font-size: 19.976px;
  color: #dbdbdb;
  width: 30px;
  height: 30px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
`;

const SelectedDay = styled(Day)`
  background: #cfcfcf;
  color: #ffffff;
  border: 1px solid #cfcfcf;
`;

const Delete = styled.img`
  position: absolute;
  width: 13px;
  right: 0;
  top: 0;
  margin: 10px;
  cursor: pointer;
`;
