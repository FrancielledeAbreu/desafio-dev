import * as Style from "./Card.style";
import { CardProps } from "./Card.type";

const Card = ({ title, subtitle, description }: CardProps) => {
  return (
    <Style.Main data-testid="card">
      <Style.Title>{title}</Style.Title>
      <Style.Body>
        <p>{subtitle}</p>
        <p>{description}</p>
      </Style.Body>
    </Style.Main>
  );
};

export default Card;
