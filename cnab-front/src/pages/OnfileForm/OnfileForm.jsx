import { useState } from "react";

//local
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import FileInput from "../../components/FileInput/FileInput";
import Warning from "../../components/Warning/Warning";
import { postFormData } from "../../api/api";

//style
import * as Style from "./OnfileForm.style";

const OnFileForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [erros, setErros] = useState(undefined);

  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setErros(undefined);
  };

  const onFileUpload = () => {
    if (!selectedFile) {
      setErros("Por favor, selecione um documento!");
      return;
    }

    postFormData("cnabFile", selectedFile, selectedFile.name);
  };

  return (
    <Style.Main>
      <Style.InputForm>
        <FileInput onChange={onFileChange} placeholder={"Escolher arquivo"} />
        <Style.Errors>{erros && erros}</Style.Errors>
      </Style.InputForm>
      <Style.ButtonContent>
        <Button onClick={onFileUpload} description={"Upload!"} />
      </Style.ButtonContent>

      {selectedFile ? (
        <Style.CardContent>
          <Card
            title={`Name: ${selectedFile.name}`}
            subtitle={`Type file: ${selectedFile.type}`}
            description={`Last modified: ${selectedFile.lastModifiedDate.toDateString()}`}
          />
        </Style.CardContent>
      ) : (
        <Warning text={"Escolha um arquivo para enviar!"} />
      )}
    </Style.Main>
  );
};

export default OnFileForm;
