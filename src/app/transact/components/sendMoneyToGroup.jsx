import {
    Modal,
    TextField,
    Box,
    Stack,
    Avatar,
    Typography,
    Chip,
    Button,
  } from "@mui/material";
  import { useState } from "react";
  import { AlertPopper, AutoCompleteInput } from "../../../components";
  import { mtnLogo, orangeLogo } from "../../../assets";
  import PropTypes from 'prop-types';
  
  const SendMoneyToGroup = ({ group, transactionInfo, setTransactionInfo, errors, setTextMessage }) => {

    const accounts = [
      { name: "Main Account", number: "237679682626", type: "mtn" },
      { name: "Second Account", number: "237672074638", type: "orange" },
    ];
  
    return (
        <Box variant="form" noValidate className="modal-body">
          <Stack spacing={2}>
            <Typography
              color="primary"
              variant="h6"
              fontWeight="bold"
              textAlign="center"
            > Sending to {group.name}
            </Typography>
            <Stack direction="row" flexWrap="wrap">
              {accounts.map((account) => (
                <Chip
                  key={account.number}
                  label={account.name}
                  onClick={() => setTransactionInfo({...transactionInfo, account: account.number})}
                  color={transactionInfo.account === account.number ? "primary" : "default"}
                  variant={
                    transactionInfo.account === account.number ? "filled" : "outlined"
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
              value={transactionInfo.account}
              onChange={(e) => setTransactionInfo({...transactionInfo, account: e.target.value})}
              placeholder="Enter account number"
              error={errors.account !== ""}
              helperText={errors.account}
            />
            <TextField
              required
              id="amount"
              label="Amount"
              variant="filled"
              type='number'
              value={transactionInfo.amount}
              onChange={(e) => setTransactionInfo({...transactionInfo, amount: e.target.value})}
              placeholder="Enter Amount"
              error={errors.amount !== ""}
              helperText={errors.amount}
            />
            <AutoCompleteInput 
              canInsert
              options={['Gift', 'Allowance', 'Debt', 'Njangi', 'Fund', 'Fuel', 'Other']}
              onChange={(val) => {
                setTransactionInfo({...transactionInfo, reason: val});
                setTextMessage(val);
              }}
              value={transactionInfo.reason}
              placeholder='Enter reason for transfer'
              variant='filled'
            />
          </Stack>
        </Box>
    );
  };

  SendMoneyToGroup.propTypes = {
    group: PropTypes.object.isRequired,
    transactionInfo: PropTypes.object.isRequired,
    setTransactionInfo: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    setTextMessage: PropTypes.func.isRequired,
  };
  
  export default SendMoneyToGroup;
  