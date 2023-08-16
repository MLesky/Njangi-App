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
  CircularProgress,
} from "@mui/material";
import { useState, useEffect } from "react";
import { mtnLogo, orangeLogo } from "../../../assets";

const AddAccountModal = ({
  isOpen,
  handleClose,
  title,
  accountObject = null,
}) => {
  const [account, setAccount] = useState({ number: "", name: "", type: "" });
  const [accountNumberError, setAccountNumberError] = useState("");
  const [accountNameError, setAccountNameError] = useState("");
  const [accountNetworkError, setAccountNetworkError] = useState("");

  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (accountObject) {
      setAccount(accountObject);
    } else {
      setAccount({ number: "", name: "", type: "" });
    }
  }, [accountObject, title]);

  const handleSubmit = (e) => {
    var isOk = true;

    console.log('account', account);
    if (account.number === "") {
      setAccountNumberError("Please enter or select an account");
      isOk = false;
    } else {
      setAccountNumberError("");
    }

    if (account.name === "") {
      setAccountNameError("Please enter a name");
      isOk = false;
    } else {
      setAccountNameError("");
    }

    if (account.type === "") {
      setAccountNetworkError("Please select network");
      isOk = false;
    } else {
      setAccountNetworkError("");
    }

    if (isOk) {
      handleClose();
      setShowAlert(true);
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
        {/* {!account && <CircularProgress />} */}
        {account && <Box variant="form" noValidate className="modal-body">
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
              id="name"
              label="Account Name"
              variant="filled"
              value={account.name}
              onChange={(e) => setAccount({ ...account, name: e.target.value })}
              placeholder="Enter account name"
              error={accountNameError !== ""}
              helperText={accountNameError}
            />

            <FormControl error={accountNetworkError !== ""}>
              <InputLabel id="group-account-label">Select Network</InputLabel>
              <Select
                labelId="group-account-label"
                id="group-account"
                label="Select an account"
                variant="filled"
                value={account.type}
                onChange={(e) =>
                  setAccount({ ...account, type: e.target.value })
                }
              >
                <MenuItem value="mtn" selected>
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
                <MenuItem value="orange" selected={account.type === 'orange'}>
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
              value={account.number}
              onChange={(e) =>
                setAccount({ ...account, number: e.target.value })
              }
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
                Save
              </Button>
            </Stack>
          </Stack>
        </Box>}
      </Modal>

      {/* <AlertPopper alertType='success' showAlert={showAlert} handleClose={() => setShowAlert(false)}>Dial #126 to Confirm</AlertPopper> */}
    </>
  );
};

export default AddAccountModal;
