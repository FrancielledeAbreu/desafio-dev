import { Body, Main, Title } from "./Card.style";

const Card = ({ title, subtitle, description }) => {
  return (
    <Main>
      <Title>{title}</Title>
      <Body>
        <p>{subtitle}</p>
        <p>{description}</p>
      </Body>
    </Main>
  );
};

export default Card;
