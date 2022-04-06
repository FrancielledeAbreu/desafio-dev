import axios from "axios";
import baseUrl from "./baseUrl";

export const postFormData = (file, selectedFile, name) => {
  const formData = new FormData();

  formData.append(file, selectedFile, name);

  axios.post(baseUrl, formData);
};
