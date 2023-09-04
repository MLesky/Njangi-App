import React, { useState, useEffect } from "react";
import { Typography, Avatar, Card, Stack, Box } from "@mui/material";
import { FileOpen } from "@mui/icons-material";

const FilePicker = ({
  event,
  selectedFile,
  setSelectedFile,
  fileError,
  setFileError,
}) => {
  const [file, setFile] = useState(null);
  useEffect(() => {
    if (event.target.files.length > 0) {
      setFile(event.target.files[0]);
      if (event.target.files[0] && event.target.files[0].size >= 10000000) {
        setFileError("File must be less than 10mb");
        setSelectedFile(null);
      } else if (event.target.files[0]) {
        setFileError("");
        setSelectedFile(URL.createObjectURL(event.target.files[0]));
      }
    } else {
      setFileError("");
      setSelectedFile(selectedFile);
      setFile(file);
    }
   
  }, [event]);

  return (
    <Box>
      {fileError !== '' && <Typography color='error'>
          {fileError}
        </Typography>}
      {selectedFile && (
        <div>
          {file.type.startsWith("image") && (
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundImage: `url(${selectedFile})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                padding: "150px",
              }}
            ></div>
          )}
          {file.type.startsWith("video") && (
            <video src={selectedFile} controls width="80%" />
          )}
          {file.type.startsWith("audio") && (
            <audio src={selectedFile} controls width="80%" />
          )}
          {!file.type.startsWith("audio") &&
            !file.type.startsWith("image") &&
            !file.type.startsWith("video") && (
              <Stack>
                <FileOpen sx={{ fontSize: "30px" }} />
                <p>{file.type.split()}</p>
              </Stack>
            )}
        </div>
      )}
    </Box>
  );
};

export default FilePicker;
