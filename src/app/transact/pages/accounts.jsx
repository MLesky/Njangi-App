import {
  Grid,
  Stack,
  TableContainer,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Table,
  Fab,
  Button,
  Card,
} from "@mui/material";
import { useState } from "react";
import AddAccountModal from '../components/addAccountModal'
import { Edit, Delete, Add } from "@mui/icons-material";
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

const AccountsPage = () => {
  const [title, setTitle] = useState("Edit Account");
  const [openAccountModal, setOpenAccountModal] = useState(false);
  const [editAccount, setEditAccount] = useState(null);
  const accounts = [
    { name: "Main Momo Account", number: "237679682626", type: "mtn" },
    { name: "Main Orange Account", number: "237672074638", type: "orange" },
    { name: "Second Momo Account", number: "237672074638", type: "mtn" },
    { name: "Second Orange Account", number: "237672074638", type: "orange" },
  ];

  const handleEdit = (account, title) => {
    setTitle(title);
    setEditAccount(account);
    setOpenAccountModal(true);
  }

  return (
    <div>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent={{ xs: "center", sm: "center", md: "start" }}
        padding={2}
      >
            {accounts.map((account) => (
              <Grid item xs={12} sm={6} md={4}>
              <TableContainer component={Card}>
                <Table
                  size="small"
                  sx={{
                    backgroundColor: (theme) => theme.palette.primary.light,
                  }}
                >
                  <TableBody>
                    <TableRow>
                      <TableCell sx={style}>Name</TableCell>
                      <TableCell sx={normalStyles}>
                        {account.name}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={style}>Network</TableCell>
                      <TableCell sx={normalStyles}>
                        <Stack direction="row" spacing={2} alignItems="center">
                          <img
                            src={account.type === "mtn" ? mtnLogo : orangeLogo}
                            alt={account.type}
                            width="25px"
                            height="25px"
                          />
                          <Typography>{account.type.toUpperCase()}</Typography>
                        </Stack>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={style}>Number</TableCell>
                      <TableCell sx={normalStyles}>
                        <Typography>{account.number}</Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Button
                          type="button"
                          variant="contained"
                          size="small"
                          startIcon={<Edit />}
                            onClick={() => handleEdit(account, "Edit Account")}
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
          onClick={() => handleEdit(null, "Add Account")}
        >
          <Add />
        </Fab>
      </div>

      <AddAccountModal 
        isOpen={openAccountModal}
        handleClose={() => setOpenAccountModal(false)}
        title={title}
        accountObject={editAccount}
      />
    </div>
  );
};

export default AccountsPage;
