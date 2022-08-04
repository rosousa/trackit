import styled from "styled-components";

export default function Header() {
  const img = JSON.parse(localStorage.getItem("trackit")).image;

  return (
    <Top>
      <Name>Trackit</Name>
      <Image src={img} />
    </Top>
  );
}

const Top = styled.div`
  background: #126ba5;
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  left: 0px;
  top: 0px;
  padding: 0 20px;
  margin-bottom: 40px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;

const Name = styled.p`
  font-family: "Playball";
  font-size: 38px;
  color: #ffffff;
`;

const Image = styled.img`
  width: 51px;
  height: 51px;
  border-radius: 50%;
`;
