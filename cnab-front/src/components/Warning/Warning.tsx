import * as Style from "./Warning.style";
import { WarningProps } from "./Warning.type";

const Warning = ({ text }: WarningProps) => {
  return (
    <Style.Main>
      <p>{text}</p>
    </Style.Main>
  );
};

export default Warning;
