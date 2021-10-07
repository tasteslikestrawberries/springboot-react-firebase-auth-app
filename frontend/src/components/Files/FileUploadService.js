//import Axios as axios from axios-common.js.
import axios from "../../axiosCommonInstance";

//Inside upload() method, we use FormData to store key-value pairs. 
//It helps to build an object which corresponds to HTML form using append() method.

//We call Axios post() to send an HTTP POST for uploading a File to Rest APIs Server and get() method for HTTP GET request to retrieve all stored files.
const upload = (file, onUploadProgress) => {
  let formData = new FormData();

  formData.append("file", file);

  return axios.post("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });
};

const getFiles = () => {
  return axios.get("/files");
};


//to do export default with multiple objects, we have to assign them to variable
const fileServiceExport = {
  upload,
  getFiles,
};

export default fileServiceExport;



