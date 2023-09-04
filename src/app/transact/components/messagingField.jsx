import { Stack, IconButton, Card, Fab, Paper, TextField } from "@mui/material";
import {
    Mic,
    Send,
    AttachFile,
    Photo,
    FileUpload,
    Close,
    MoneyOff,
  } from "@mui/icons-material";
  import { useState } from "react";
import SendMoneyToGroup from "./sendMoneyToGroup";
import { FilePicker } from "../../../components";
import PropTypes from 'prop-types';

const MessagingInputField = ({group}) => {
  const [textMessage, setTextMessage] = useState("");
  const [message, setMessage] = useState(null);
  const [isAttachmentToggled, setIsAttachmentToggled] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileError, setSelectedFileError] = useState("");
  const [shouldSendMoney, setShouldSendMoney] = useState(false);
  const [pickerEvent, setPickerEvent] = useState(null);
  const [transaction, setTransaction] = useState({
    amount: "",
    account: "",
    reason: "",
  });
  const [transactionErrors, setTransactionErrors] = useState({
    account: "",
    amount: "",
  });

  const handleFilePicker = (event) => {
    setShouldSendMoney(false);
    setPickerEvent(event);
  };

  const handleShouldSend = () => {
    setIsAttachmentToggled(false);
    setSelectedFile(null);
    setSelectedFileError("");
    setShouldSendMoney(true);
    setTextMessage("For Njangi");
  };

  const handleSend = (e) => {
    var isOk = true;

    if(shouldSendMoney){
        if (transaction.account === "") {
      setTransactionErrors({
        ...transactionErrors,
        account: "Please enter or select an account",
      });
      isOk = false;
    } else {
      setTransactionErrors({ ...transactionErrors, account: "" });
    }

    if (transaction.amount === "") {
      setTransactionErrors({
        ...transactionErrors,
        amount: "Please enter amount",
      });
      isOk = false;
    } else {
      setTransactionErrors({ ...transactionErrors, amount: "" });
      isOk=true;
    }
    }

    if(isOk){
        if(selectedFile){
            // upload file
            console.log('File uploaded')
        }

        setMessage({
            textMessage: textMessage,
            voiceMessage: 'voiceMessage',
            timeSent: new Date(),
            from: 'user.uid',
            to : 'group.id',
            attachment: {
                fileType: 'fileType',
                filePath: 'path',
                file: selectedFile,
            },
            transaction: {
                amount: transaction.amount,
                reason: transaction.reason,
                senderAccount: transaction.account,
                receiverAccount: 'group.account'
            }
        })
    } else {
        console.log('nothing')
    }
    console.log('message: ', message);
  };
  return (
    <>
      <Stack direction="column" sx={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            transition: "0.3s",
            bottom: "80px",
            width: "100%",
            boxSizing: "border-box",
            padding: '20px',
            display: `${
              selectedFile !== null ||
              selectedFileError !== "" ||
              shouldSendMoney
                ? "block"
                : "none"
            }`,
            backgroundColor: "rgba(0, 0, 0, 0.3)",
          }}
        >
          {(pickerEvent || shouldSendMoney) && (
            <>
              <div
                style={{
                  position: "absolute",
                  zIndex: 1,
                  top: 0,
                  right: 0,
                }}
              >
                <IconButton
                  onClick={(e) => {
                    setSelectedFile(null);
                    setSelectedFileError("");
                    setPickerEvent(null);
                    setShouldSendMoney(false);
                  }}
                >
                  <Close sx={{ color: "red" }} />
                </IconButton>
              </div>
              <Card
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 3,
                }}
              >
                {pickerEvent && (
                  <FilePicker
                    event={pickerEvent}
                    selectedFile={selectedFile}
                    setSelectedFile={setSelectedFile}
                    fileError={selectedFileError}
                    setFileError={setSelectedFileError}
                  />
                )}
                {shouldSendMoney && (
                  <SendMoneyToGroup
                    group={group}
                    transactionInfo={transaction}
                    setTransactionInfo={setTransaction}
                    errors={transactionErrors}
                    setTextMessage={setTextMessage}
                  />
                )}
              </Card>
            </>
          )}
        </div>
        <Paper
          sx={{
            height: "fit-content",
            backgroundColor: "primary.light",
            margin: 3,
            borderRadius: 2,
            paddingY: 1,
            zIndex: "1",
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={{ xs: 1, sm: 2 }}
            paddingX={{ xs: 2, md: 3 }}
            flexGrow={1}
          >
            <TextField
              variant="standard"
              placeholder="textMessage...."
              value={textMessage}
              onChange={(e) => setTextMessage(e.target.value)}
              multiline
              maxRows={4}
              sx={{ flexGrow: 1, border: "none", outline: "none" }}
            />
            <IconButton
              onClick={() => setIsAttachmentToggled(!isAttachmentToggled)}
            >
              <AttachFile />
            </IconButton>
            <IconButton onClick={() => handleSend()}>
              {textMessage === "" && selectedFile === null ? (
                <Mic sx={{ fontSize: 35 }} />
              ) : (
                <Send sx={{ fontSize: 35 }} />
              )}
            </IconButton>
          </Stack>
        </Paper>
      </Stack>

      <div
        style={{
          position: "absolute",
          transition: "0.25s",
          bottom: "300px",
          right: isAttachmentToggled ? "40px" : "-150px",
          width: isAttachmentToggled ? "fit-content" : "0",
          overflow: isAttachmentToggled ? "visible" : "hidden",
        }}
      >
        <Fab variant="extended">
          <label for="pickFromGallery">
            <IconButton>
              <Photo />
            </IconButton>
            Gallery
          </label>
        </Fab>
        <input
          type="file"
          accept="image/*, video/*"
          id="pickFromGallery"
          hidden
          onClick={(e) => {
            setIsAttachmentToggled(false);
            setShouldSendMoney(false);
          }}
          onChange={(e) => handleFilePicker(e)}
        />
      </div>

      <div
        style={{
          position: "absolute",
          transition: "0.20s",
          bottom: "240px",
          right: isAttachmentToggled ? "40px" : "-150px",
          width: isAttachmentToggled ? "fit-content" : "0",
          overflow: isAttachmentToggled ? "visible" : "hidden",
        }}
      >
        <Fab variant="extended">
          <label for="pickFromAudio">
            <IconButton>
              <Mic />
            </IconButton>
            Audio
          </label>
        </Fab>
        <input
          type="file"
          accept="audio/*"
          id="pickFromAudio"
          hidden
          onClick={(e) => {
            setIsAttachmentToggled(false);
            setShouldSendMoney(false);
          }}
          onChange={(e) => handleFilePicker(e)}
        />
      </div>

      <div
        style={{
          position: "absolute",
          transition: "0.15s",
          bottom: "180px",
          right: isAttachmentToggled ? "40px" : "-150px",
          width: isAttachmentToggled ? "fit-content" : "0",
          overflow: isAttachmentToggled ? "visible" : "hidden",
        }}
      >
        <Fab variant="extended">
          <label for="pickFromFile">
            <IconButton>
              <FileUpload />
            </IconButton>
            Document
          </label>
        </Fab>
        <input
          type="file"
          accept=""
          id="pickFromFile"
          hidden
          onClick={(e) => {
            setIsAttachmentToggled(false);
            setShouldSendMoney(false);
          }}
          onChange={(e) => handleFilePicker(e)}
        />
      </div>

      <div
        style={{
          position: "absolute",
          transition: "0.10s",
          bottom: "120px",
          right: isAttachmentToggled ? "40px" : "-150px",
          width: isAttachmentToggled ? "fit-content" : "0",
          overflow: isAttachmentToggled ? "visible" : "hidden",
        }}
      >
        <Fab variant="extended" onClick={(e) => handleShouldSend()}>
          <IconButton>
            <MoneyOff />
          </IconButton>
          Send Money
        </Fab>
      </div>
    </>
  );
};

MessagingInputField.propTypes = {
    group: PropTypes.object.isRequired,
}

export default MessagingInputField;