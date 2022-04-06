import * as Style from "./FileInput.style";
import { FileInputProps } from "./FileInput.type";

const FileInput = ({ onChange, placeholder }: FileInputProps) => {
  return (
    <Style.Inputcontent data-testid="fileInputed">
      <Style.LabelInput>
        <Style.Input type="file" onChange={onChange} />
        {placeholder}
      </Style.LabelInput>
    </Style.Inputcontent>
  );
};

export default FileInput;
