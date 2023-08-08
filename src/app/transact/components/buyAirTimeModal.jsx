import {
  Modal,
  TextField,
  Box,
  Stack,
  Avatar,
  Typography,
  Chip,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  Select,
  List,
  ListItem,
  MenuItem,
  ListItemAvatar,
  ListItemText,
  Divider,
} from "@mui/material";
import { useState } from "react";
import { AlertPopper, AutoCompleteInput } from "../../../components";
import { mtnLogo, orangeLogo } from "../../../assets";

const BuyAirTimeModal = ({ isOpen, handleClose, title }) => {
  const [accountNumber, setAccountNumber] = useState("");
  const [receiversNumber, setReceiversNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [receiversNetwork, setReceiversNetwork] = useState("");

  const [accountNumberError, setAccountNumberError] = useState("");
  const [receiversNumberError, setReceiversNumberError] = useState("");
  const [receiversNetworkError, setReceiversNetworkError] = useState("");
  const [amountError, setAmountError] = useState("");

  const [showAlert, setShowAlert] = useState(false);

  const accounts = [
    { name: "Main Account", number: "237679682626", type: "mtn" },
    { name: "Second Account", number: "237672074638", type: "orange" },
  ];
  const handleSubmit = (e) => {
    var isOk = true;

    if (isOk) {
      if (accountNumber === "") {
        setAccountNumberError("Please enter or select an account");
        isOk = false;
      } else {
        setAccountNumberError("");
      }

      if (amount === "") {
        setAmountError("Please enter amount");
        isOk = false;
      } else {
        setAmountError("");
      }

      if (receiversNumber === "") {
        setReceiversNumberError("Please enter receivers number");
        isOk = false;
      } else {
        setReceiversNumberError("");
      }

      if (receiversNetwork === "") {
        setReceiversNetworkError("Please select receivers network");
        isOk = false;
      } else {
        setReceiversNetworkError("");
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
            <Stack direction="row" flexWrap="wrap">
              {accounts.map((account) => (
                <Chip
                  key={account.number}
                  label={account.name}
                  onClick={() => setAccountNumber(account.number)}
                  color={
                    accountNumber === account.number ? "primary" : "default"
                  }
                  variant={
                    accountNumber === account.number ? "filled" : "outlined"
                  }
                  avatar={
                    <Avatar
                      alt={account.type}
                      src={account.type === "mtn" ? mtnLogo : orangeLogo}
                    />
                  }
                  clickable
                />
              ))}
            </Stack>
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
            <FormControl error={receiversNetworkError !== ""}>
              <InputLabel id="group-account-label">
                Select Receiver's Network
              </InputLabel>
              <Select
                labelId="group-account-label"
                id="group-account"
                label="Select an account"
                variant="filled"
                value={receiversNetwork}
                helperText={receiversNetworkError}
                onChange={(e) => setReceiversNetwork(e.target.value)}
              >
                <MenuItem value="main mtn momo">
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
              <FormHelperText>{receiversNetworkError}</FormHelperText>
            </FormControl>
            <TextField
              required
              id="receivers-number"
              label="Receivers Number"
              variant="filled"
              value={receiversNumber}
              onChange={(e) => setReceiversNumber(e.target.value)}
              placeholder="Enter receivers number"
              error={receiversNumberError !== ""}
              helperText={receiversNumberError}
            />
            <TextField
              required
              id="amount"
              label="Amount"
              variant="filled"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter Amount"
              error={amountError !== ""}
              helperText={amountError}
            />
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

export default BuyAirTimeModal;
