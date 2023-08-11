import {
  Modal,
  TextField,
  Box,
  Stack,
  Avatar,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  List,
  ListItem,
  MenuItem,
  ListItemAvatar,
  ListItemText,
  Divider,
  FormHelperText,
} from "@mui/material";
import { useState } from "react";
import { AlertPopper, AutoCompleteInput } from "../../../components";
import { mtnLogo, orangeLogo } from "../../../assets";
import { CheckBox } from "@mui/icons-material";

const AddAccountModal = ({ isOpen, handleClose, title }) => {
  const [accountNumber, setAccountNumber] = useState("");
  const [accountName, setAccountName] = useState("");
  // const [toDefault, setToDefault] = useState(false);
  const [accountNetwork, setAccountNetwork] = useState("");

  const [accountNumberError, setAccountNumberError] = useState("");
  const [accountNameError, setAccountNameError] = useState("");
  const [accountNetworkError, setAccountNetworkError] = useState("");

  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    var isOk = true;

    if (isOk) {
      if (accountNumber === "") {
        setAccountNumberError("Please enter or select an account");
        isOk = false;
      } else {
        setAccountNumberError("");
      }

      if (accountName === "") {
        setAccountNameError("Please enter a name");
        isOk = false;
      } else {
        setAccountNameError("");
      }

      if (accountNetwork === "") {
        setAccountNetworkError("Please select network");
        isOk = false;
      } else {
        setAccountNetworkError("");
      }

      if (accountNumber === "") {
        setAccountNumberError("Please select network");
        isOk = false;
      } else {
        setAccountNumberError("");
      }

      if (isOk) {
        handleClose();
        setShowAlert(true);
      }
    }
  };

  return (
    <>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="fs-modal"
      >
        <Box variant="form" noValidate className="modal-body">
          <Stack spacing={2}>
            <Typography
              color="primary"
              variant="h6"
              fontWeight="bold"
              textAlign="center"
            >
              {title}
            </Typography>

            <TextField
              required
              id="number"
              label="Account Number"
              variant="filled"
              value={accountName}
              onChange={(e) => setAccountName(e.target.value)}
              placeholder="Enter number"
              error={accountNameError !== ""}
              helperText={accountNameError}
            />  
        
            <FormControl error={accountNetworkError !== ""}>
              <InputLabel id="group-account-label">
                Select Network
              </InputLabel>
              <Select
                labelId="group-account-label"
                id="group-account"
                label="Select an account"
                variant="filled"
                value={accountNetwork}
                onChange={(e) => setAccountNetwork(e.target.value)}
              >
                <MenuItem value="mtn momo">
                  <List>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar src={mtnLogo} alt="mtn-logo" />
                      </ListItemAvatar>
                      <ListItemText primary="MTN" />
                    </ListItem>
                  </List>
                  <Divider variant="horizontal" />
                </MenuItem>
                <MenuItem value="orange money">
                  <List>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar src={orangeLogo} alt="orange-logo" />
                      </ListItemAvatar>
                      <ListItemText primary="Orange" />
                    </ListItem>
                  </List>
                  <Divider variant="horizontal" />
                </MenuItem>
              </Select>
              <FormHelperText>{accountNetworkError}</FormHelperText>
            </FormControl>
 
            <TextField
              required
              id="account-number"
              label="Account Number"
              variant="filled"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              placeholder="Enter account number"
              error={accountNumberError !== ""}
              helperText={accountNumberError}
            />
            
            {/* <FormControlLabel control={<CheckBox checked={toDefault} onChange={() => setToDefault(!toDefault)}/>} label='Set as default account'/> */}

            <Stack direction="row" spacing={2} justifyContent="space-between">
              <Button
                variant="contained"
                color="error"
                sx={{ flexGrow: 1 }}
                onClick={() => handleClose()}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                onClick={handleSubmit}
                variant="contained"
                color="primary"
                sx={{ flexGrow: 1 }}
              >
                Send
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Modal>

      {/* <AlertPopper alertType='success' showAlert={showAlert} handleClose={() => setShowAlert(false)}>Dial #126 to Confirm</AlertPopper> */}
    </>
  );
};

export default AddAccountModal;
