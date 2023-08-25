import { Groups, Person } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import { SideListMenu } from "../index";
import useFetch from "../../../temp/hooks/useFetch";

const ChatsPage = () => {
  const {
    data: chats,
    isPending,
    error,
  } = useFetch("http://localhost:8000/chats");

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <Grid container direction="row">
        <Grid item xs={12} sm={5} lg={4}>
          <SideListMenu
            isLoading={isPending}
            error={error}
            listItems={chats}
            title="All Chats"
            titleIcon={<Person sx={{ color: "white", fontSize: 33 }} />}
            isGroup={false}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={7}
          lg={8}
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChatsPage;
