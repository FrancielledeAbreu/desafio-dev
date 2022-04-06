import * as Style from "./Button.style";

const Button = ({ onClick, description, disabled }) => (
  <Style.Main data-testid="button" onClick={onClick} disabled={disabled}>
    {description}
  </Style.Main>
);

export default Button;
