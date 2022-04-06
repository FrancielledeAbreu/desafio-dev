import { Input, Inputcontent, LabelInput } from "./FileInput.style";

const FileInput = ({ onChange, placeholder }) => {
  return (
    <Inputcontent>
      <LabelInput>
        <Input type="file" onChange={onChange} />
        {placeholder}
      </LabelInput>
    </Inputcontent>
  );
};

export default FileInput;
