import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section({
  title,
  description,
  backgroundImg,
  BtnTextLeft,
  BtnTextRight,
}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Bottom>
        <Fade bottom>
          <ButtonGroup>
            <ButtonOne>{BtnTextLeft}</ButtonOne>
            {BtnTextRight && <ButtonTwo>{BtnTextRight}</ButtonTwo>}
          </ButtonGroup>
        </Fade>
        <ChangePageArrow src="/images/down-arrow.svg" />
      </Bottom>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  height: 100vh;
  height: 100vh;
  background-size: cover;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ButtonOne = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;
const ButtonTwo = styled(ButtonOne)`
  background: white;
  opacity: 0.65;
  color: black;
`;

const ChangePageArrow = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: DownSmooth infinite 1.5s;
`;

const Bottom = styled.div``;
