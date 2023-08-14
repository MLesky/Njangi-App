import { Add, Close, Delete, Edit, TitleRounded } from "@mui/icons-material";
import {
  Card,
  Grid,
  Table,
  TableBody,
  TableContainer,
  TableRow,
  TableCell,
  Button,
  Fab,
  Avatar,
  Stack
} from "@mui/material";
import { useState } from "react";
import ScheduleModal from "../components/scheduleModal";
import { mtnLogo, orangeLogo } from "../../../assets";

const style = {
  fontWeight: "bold",
  fontSize: {
    xs: 14,
    md: 16,
  },
};

const normalStyles = {
  fontSize: {
    xs: 12,
    md: 14,
  },
};

const accounts = [
  { name: "Main Account", number: "237679682626", type: "mtn" },
  { name: "Second Account", number: "237672074638", type: "orange" },
];

const SchedulePage = () => {
  const [title, setTitle] = useState("Edit Schedule");
  const [openScheduleModal, setOpenScheduleModal] = useState(false);
  const [editSchedule, setEditSchedule] = useState(null);
  const [schedules, setSchedules] = useState([
    {
      accNumber: "237679682626",
      recNumber: "689928398",
      amount: 10000,
      date: new Date("2023-03-05").toISOString().split("T")[0],
      time: new Date("2023-03-05T09:00:00Z")
        .toISOString()
        .split("T")[1]
        .slice(0, 5),
      frequency: "monthly",
      reminder: "3 minutes",
    },
    {
      accNumber: "237672074638",
      recNumber: "689928398",
      amount: 5000,
      date: new Date("2023-05-08").toISOString().split("T")[0],
      time: new Date("2023-03-05T11:00:00Z")
        .toISOString()
        .split("T")[1]
        .slice(0, 5),
      frequency: "weekly",
      reminder: "1 minute",
    },
    {
      accNumber: "679682426",
      recNumber: "689928398",
      amount: 15000,
      date: new Date("2023-03-05").toISOString().split("T")[0],
      time: new Date("2023-03-05T05:00:00Z")
        .toISOString()
        .split("T")[1]
        .slice(0, 8),
      frequency: "lastOfMonth",
      reminder: "3 minutes",
    },
  ]);

  const handleEdit = (schedule, title) => {
    setTitle(title);
    setEditSchedule(schedule);
    setOpenScheduleModal(true);
  };

  return (
    <div>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent={{ xs: "start", sm: "center", md: "start" }}
        padding={2}
      >
        {schedules.map((schedule) => (
          <Grid item xs={12} sm={9} md={6}>
            <TableContainer component={Card} backgroundColor="primary">
              <Table
                size="small"
                sx={{ backgroundColor: (theme) => theme.palette.primary.light }}
              >
                <TableBody>
                  <TableRow>
                    <TableCell sx={style}>Account Number</TableCell>
                    <TableCell sx={normalStyles}>
                      {(() => {
                        const acc = accounts.find(
                          (account) => account.number === schedule.accNumber
                        );
                        if (acc) {
                          return (
                            <Stack direction='row' alignItems='center'>
                              <Avatar
                                src={acc.type === "mtn" ? mtnLogo : orangeLogo}
                                alt={acc.type}
                                sx={{width: '20px', height: '20px'}}
                              />
                              {acc.name} ({schedule.accNumber})
                            </Stack>
                          );
                        } else {
                          return schedule.accNumber;
                        }
                      })()}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={style}>Receiver's Number</TableCell>
                    <TableCell sx={normalStyles}>
                      {schedule.recNumber}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={style}>Amount</TableCell>
                    <TableCell sx={normalStyles}>
                      {schedule.amount} FCFA
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={style}>Date & time</TableCell>
                    <TableCell sx={normalStyles}>
                      {schedule.date} - {schedule.time}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={style}>Frequency</TableCell>
                    <TableCell sx={normalStyles}>
                      {schedule.frequency}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={style}>Reminder</TableCell>
                    <TableCell sx={normalStyles}>{schedule.reminder}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Button
                        type="button"
                        variant="contained"
                        size="small"
                        startIcon={<Edit />}
                        onClick={() => handleEdit(schedule, "Edit Schedule")}
                      >
                        Edit
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        type="button"
                        variant="outlined"
                        size="small"
                        color="error"
                        startIcon={<Delete />}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        ))}
      </Grid>

      <div style={{ position: "fixed", bottom: "50px", right: "50px" }}>
        <Fab
          color="primary"
          aria-label="add"
          onClick={() => handleEdit(null, "New Schedule")}
        >
          <Add />
        </Fab>
      </div>

      <ScheduleModal
        isOpen={openScheduleModal}
        handleClose={() => setOpenScheduleModal(false)}
        title={title}
        scheduleObject={editSchedule}
      />
    </div>
  );
};

export default SchedulePage;
