import axios from "axios";
import { useState } from "react";

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

    console.log(selectedFile);

    axios.post("http://localhost:3001/cnabs", formData);
  };

  return (
    <div>
      <div>
        <input type="file" onChange={onFileChange} />
        {erros && erros}
        <button onClick={onFileUpload}>Upload!</button>
      </div>
      {selectedFile ? (
        <div>
          <h2>File Details:</h2>

          <p>File Name: {selectedFile.name}</p>

          <p>File Type: {selectedFile.type}</p>

          <p>Last Modified: {selectedFile.lastModifiedDate.toDateString()}</p>
        </div>
      ) : (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      )}
    </div>
  );
};

export default OnFileForm;
