import {
  Add,
  Close,
  Delete,
  Edit,
  Send,
  SimCardDownload,
  TitleRounded,
} from "@mui/icons-material";
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
  Stack,
} from "@mui/material";
import { useState } from "react";
import { mtnLogo, orangeLogo } from "../../../assets";
import TransferMoneyModal from "../components/transferMoneyModal";
import BuyAirTimeModal from "../components/buyAirTimeModal";

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

const HistoryPage = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [openAirtimeModal, setOpenAirtimeModal] = useState(false);
  const [openTransferModal, setOpenTransferModal] = useState(false);
  const [transactions, setTransactions] = useState([
    {
      sender: "237679682626",
      receiver: "237672074638",
      amount: "50000",
      fee: "10",
      reason: "Fuel",
      date: new Date(),
    },
    {
      receiver: "237679682626",
      sender: "237672074638",
      amount: "2000",
      fee: "10",
      reason: "",
      date: new Date(),
    },
    {
      sender: "679682626",
      receiver: "237672074638",
      amount: "15000",
      fee: "10",
      reason: "Gift",
      date: new Date(),
    },
    {
      sender: "237679682626",
      receiver: "672074638",
      amount: "5000",
      fee: "10",
      reason: "",
      date: new Date(),
    },
  ]);

//   document.querySelectorAll('.fab-btn').forEach(btn => {
//     btn.addEventListener('hover', () => {
//         console.log('btn => ', btn);
//         btn.setAttribute('variant', 'extended');
//         btn.setAttribute('color', 'secondary');
//     });
//   });

  return (
    <div>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent={{ xs: "start", sm: "center", md: "start" }}
        padding={2}
      >
        {transactions.map((transaction) => (
          <Grid item xs={12} sm={9} md={6}>
            <TableContainer component={Card} backgroundColor="primary">
              <Table
                size="small"
                sx={{ backgroundColor: (theme) => theme.palette.primary.light }}
              >
                <TableBody>
                  <TableRow>
                    <TableCell sx={style}>Sender (From)</TableCell>
                    <TableCell sx={normalStyles}>
                      {(() => {
                        const acc = accounts.find(
                          (account) => account.number === transaction.sender
                        );
                        if (acc) {
                          return (
                            <Stack direction="row" alignItems="center">
                              <Avatar
                                src={acc.type === "mtn" ? mtnLogo : orangeLogo}
                                alt={acc.type}
                                sx={{ width: "20px", height: "20px" }}
                              />
                              {acc.name} ({transaction.sender})
                            </Stack>
                          );
                        } else {
                          return transaction.sender;
                        }
                      })()}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={style}>Receiver (To)</TableCell>
                    <TableCell sx={normalStyles}>
                      {(() => {
                        const acc = accounts.find(
                          (account) => account.number === transaction.receiver
                        );
                        if (acc) {
                          return (
                            <Stack direction="row" alignItems="center">
                              <Avatar
                                src={acc.type === "mtn" ? mtnLogo : orangeLogo}
                                alt={acc.type}
                                sx={{ width: "20px", height: "20px" }}
                              />
                              {acc.name} ({transaction.receiver})
                            </Stack>
                          );
                        } else {
                          return transaction.receiver;
                        }
                      })()}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={style}>Amount</TableCell>
                    <TableCell sx={normalStyles}>
                      {transaction.amount} FCFA
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={style}>Fee</TableCell>
                    <TableCell sx={normalStyles}>
                      {transaction.fee} FCFA
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={style}>Date & time</TableCell>
                    <TableCell sx={normalStyles}>
                      {transaction.date.toString().slice(0, 24)}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={style}>Reason</TableCell>
                    <TableCell sx={normalStyles}>
                      {transaction.reason}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        ))}
      </Grid>

      <div
        className='fab-btn'
        style={{
          transition: "0.2s",
          position: "fixed",
          bottom: isToggled ? "190px" : "50px",
          right: "50px",
        }}
      >
        <Fab
          color="primary"
          aria-label="add"
          onClick={() => setOpenTransferModal(true)}
        >
          <Send />
        </Fab>
      </div>

      <div
        className='fab-btn'
        style={{
          transition: "0.2s",
          position: "fixed",
          bottom: isToggled ? "120px" : "50px",
          right: "50px",
        }}
      >
        <Fab
          color="primary"
          aria-label="add"
          onClick={() => setOpenAirtimeModal(true)}
        >
          <SimCardDownload />
        </Fab>
      </div>

      <div
        id="add-fab"
        style={{ position: "fixed", bottom: "50px", right: "50px", zIndex: 1 }}
      >
        <Fab
          color="primary"
          aria-label="add"
          onClick={() => setIsToggled(!isToggled)}
          transition="0.5s"
        >
          {isToggled ? <Close /> : <Add />}
        </Fab>
      </div>

      <TransferMoneyModal
        isOpen={openTransferModal}
        handleClose={() => setOpenTransferModal(false)}
        title="Transfer Money"
      />
      <BuyAirTimeModal
        isOpen={openAirtimeModal}
        handleClose={() => setOpenAirtimeModal(false)}
        title="Buy Airtime"
      />
    </div>
  );
};

export default HistoryPage;