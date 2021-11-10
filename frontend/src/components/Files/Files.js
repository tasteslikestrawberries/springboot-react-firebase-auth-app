import React, { useState, useEffect } from "react";
import FileUploadService from "./FileUploadService";

//styles
import { Icon } from "@iconify/react";

const Files = () => {
  const [selectedFiles, setSelectedFiles] = useState(undefined);
  const [currentFile, setCurrentFile] = useState(undefined);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");
  const [filesInfo, setFilesInfo] = useState([]);

  useEffect(() => {
    FileUploadService.getFiles().then((response) => {
      setFilesInfo(response.data);
    });
  }, []);

  const selectFile = (event) => {
    setSelectedFiles(event.target.files);
  };

  const upload = () => {
    let currentFile = selectedFiles[0];

    setProgress(0);
    setCurrentFile(currentFile);

    FileUploadService.upload(currentFile, (event) => {
      setProgress(Math.round((100 * event.loaded) / event.total));
    })
      .then((response) => {
        setMessage(response.data.message);
        return FileUploadService.getFiles();
      })
      .then((files) => {
        setFilesInfo(files.data);
      })
      .catch(() => {
        setProgress(0);
        setMessage("File can't be uploaded. Size limit is 30MB.");
        setCurrentFile(undefined);
      });

    setSelectedFiles(undefined);
  };

  return (
    <>
      <div className="containerPaper">
        <div className="cardsHeader">
          <Icon icon="fa-solid:sticky-note" color="#0d6efd" height="40" />
          <h1>My Files</h1>
        </div>
        {currentFile && (
          <div className="progress">
            <div
              className="progress-bar bg-info"
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: progress + "%" }}
            >
              {progress}%
            </div>
          </div>
        )}

        <div className="buttonsFiles">
          <button className="btn btn-default">
            <input type="file" onChange={selectFile} />
          </button>

          <button disabled={!selectedFiles} onClick={upload}>
            Upload
          </button>
        </div>

        <div className="alert alert-light" role="alert">
          {message}
        </div>

        <div className="card">
          <div className="card-header">My Files</div>
          <ul className="list-group list-group-flush">
            {filesInfo &&
              filesInfo.map((file, index) => (
                <li className="list-group-item" key={index}>
                  <a href={file.url}>{file.name}</a>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Files;
