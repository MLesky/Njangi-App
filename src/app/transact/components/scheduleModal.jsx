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
  InputLabel,
  Select,
  MenuItem,
  CircularProgress,
} from "@mui/material";
import { useEffect, useState } from "react";
import { AlertPopper, AutoCompleteInput } from "../../../components";
import { mtnLogo, orangeLogo } from "../../../assets";

const ScheduleModal = ({
  isOpen,
  handleClose,
  title,
  scheduleObject = null,
}) => {
  const [loading, setLoading] = useState(true);
  const [schedule, setSchedule] = useState(null);

  useEffect(() => {
    if (scheduleObject) {
      setSchedule(scheduleObject);
    } else {
      setSchedule({
        accNumber: "",
        recNumber: "",
        amount: "",
        date: new Date().toISOString().split("T")[0],
        time: new Date().toISOString().split("T")[1].slice(0, 8),
        frequency: "",
        reminder: "",
      });
    }
    setLoading(false);
  }, [scheduleObject, title]);

  const [canSelectDate, setCanSelectDate] = useState(
    schedule && ["daily", "firstOfMonth", "lastOfMonth"].includes(schedule.date)
      ? false
      : true
  );

  const [accountNumberError, setAccountNumberError] = useState("");
  const [receiversNumberError, setReceiversNumberError] = useState("");
  const [dateError, setDateError] = useState("");
  const [timeError, setTimeError] = useState("");
  const [amountError, setAmountError] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const accounts = [
    { name: "Main Account", number: "237679682626", type: "mtn" },
    { name: "Second Account", number: "237672074638", type: "orange" },
  ];

  const handleFrequencyChange = (e) => {
    switch (e.target.value) {
      case "daily":
      case "firstOfMonth":
      case "lastOfMonth":
        setCanSelectDate(false);
        break;
      default:
        setCanSelectDate(true);
    }
    setSchedule({ ...schedule, frequency: e.target.value });
    console.log("frequency => ", schedule.frequency);
  };
  const handleSubmit = (e) => {
    var isOk = true;

    if (isOk) {
      if (schedule.accNumber === "") {
        setAccountNumberError("Please enter or select an account");
        isOk = false;
      } else {
        setAccountNumberError("");
      }

      if (schedule.amount === "") {
        setAmountError("Please enter amount");
        isOk = false;
      } else {
        setAmountError("");
      }

      if (schedule.recNumber === "") {
        setReceiversNumberError("Please enter receivers number");
        isOk = false;
      } else {
        setReceiversNumberError("");
      }

      if (schedule.date === "") {
        setDateError("Please select receivers network");
        isOk = false;
      } else {
        setDateError("");
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
          {!loading ? (
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
                    onClick={() =>
                      setSchedule({ ...schedule, accNumber: account.number })
                    }
                    color={
                      schedule.accNumber === account.number
                        ? "primary"
                        : "default"
                    }
                    variant={
                      schedule.accNumber === account.number
                        ? "filled"
                        : "outlined"
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
                value={schedule.accNumber}
                onChange={(e) =>
                  setSchedule({ ...schedule, accNumber: e.target.value })
                }
                placeholder="Enter account number"
                error={accountNumberError !== ""}
                helperText={accountNumberError}
              />
              <TextField
                required
                id="receivers-number"
                label="Receivers Number"
                variant="filled"
                value={schedule.recNumber}
                onChange={(e) =>
                  setSchedule({ ...schedule, recNumber: e.target.value })
                }
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
                value={schedule.amount}
                onChange={(e) =>
                  setSchedule({ ...schedule, amount: e.target.value })
                }
                placeholder="Enter Amount"
                error={amountError !== ""}
                helperText={amountError}
              />

              <FormControl error={dateError !== ""}>
                <InputLabel id="frequency-label">Select Frequency</InputLabel>
                <Select
                  labelId="frequency-label"
                  id="frequency"
                  label="How often..."
                  variant="filled"
                  value={schedule.frequency}
                  onChange={handleFrequencyChange}
                >
                  <MenuItem value="firstOfMonth">
                    First day of every month
                  </MenuItem>
                  <MenuItem value="lastOfMonth">
                    Last day of every month
                  </MenuItem>
                  <MenuItem value="monthly">Monthly</MenuItem>
                  <MenuItem value="weekly">Weekly</MenuItem>
                  <MenuItem value="daily">Daily</MenuItem>
                </Select>
              </FormControl>

              <Stack direction="row" spacing={1}>
                <TextField
                  required
                  id="date"
                  label="Date"
                  variant="filled"
                  type="date"
                  value={schedule.date}
                  onChange={(e) =>
                    setSchedule({ ...schedule, date: e.target.value })
                  }
                  placeholder="Enter Amount"
                  error={dateError !== ""}
                  helperText={dateError}
                  sx={{ flexGrow: 1 }}
                  disabled={canSelectDate ? false : true}
                />
                <TextField
                  required
                  id="time"
                  label="Time"
                  variant="filled"
                  type="time"
                  value={schedule.time}
                  onChange={(e) =>
                    setSchedule({ ...schedule, time: e.target.value })
                  }
                  placeholder="Time"
                  error={timeError !== ""}
                  helperText={timeError}
                  sx={{ flexGrow: 1 }}
                />
              </Stack>

              <AutoCompleteInput
                options={[
                  "Don't remind me",
                  "1 minute",
                  "3 minutes",
                  "5 minutes",
                  "10 minutes",
                  "30 minutes",
                  "1 hours",
                  "1 day",
                ]}
                value={schedule.reminder}
                onChange={(val) => setSchedule({ ...schedule, reminder: val })}
                variant="filled"
                placeholder="Set a reminder"
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
                  sx={{ flexGrow: 2 }}
                >
                  Set
                </Button>
              </Stack>
            </Stack>
          ) : (
            <CircularProgress />
          )}
        </Box>
      </Modal>

      <AlertPopper
        alertType="success"
        showAlert={showAlert}
        handleClose={() => setShowAlert(false)}
      >
        Schedule Set
      </AlertPopper>
    </>
  );
};

export default ScheduleModal;
