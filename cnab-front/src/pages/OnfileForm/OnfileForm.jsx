import axios from "axios";
import { useState } from "react";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import FileInput from "../../components/FileInput/FileInput";
import Warning from "../../components/Warning/Warning";
import {
  ButtonContent,
  CardContent,
  Errors,
  InputForm,
  Main,
} from "./OnfileForm.style";

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

    const formData = new FormData();

    formData.append("cnabFile", selectedFile, selectedFile.name);

    axios.post("http://localhost:3001/cnabs", formData);
  };

  return (
    <Main>
      <InputForm>
        <FileInput onChange={onFileChange} placeholder={"Escolher arquivo"} />
        <Errors>{erros && erros}</Errors>
      </InputForm>
      <ButtonContent>
        <Button onClick={onFileUpload} description={"Upload!"} />
      </ButtonContent>

      {selectedFile ? (
        <CardContent>
          <Card
            title={`Name: ${selectedFile.name}`}
            subtitle={`Type file: ${selectedFile.type}`}
            description={`Last modified: ${selectedFile.lastModifiedDate.toDateString()}`}
          />
        </CardContent>
      ) : (
        <Warning text={"Escolha um arquivo para enviar!"} />
      )}
    </Main>
  );
};

export default OnFileForm;
