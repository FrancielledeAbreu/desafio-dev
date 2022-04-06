import * as Style from "./Button.style";
import { ButtonProps } from "./Button.type";

const Button = ({ onClick, description, disabled }: ButtonProps) => (
  <Style.Main data-testid="button" onClick={onClick} disabled={disabled}>
    {description}
  </Style.Main>
);

export default Button;
