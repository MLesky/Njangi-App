import { Groups } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import { SideListMenu } from "../index";
import useFetch from "../../../temp/hooks/useFetch";
import { Outlet } from "react-router-dom";

const GroupsPage = () => {
  const {
    data: groups,
    isPending,
    error,
  } = useFetch("http://localhost:8000/groups");

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <Grid container direction='row'>
        <Grid item xs={12} sm={5} lg={4}>
          <SideListMenu
            isLoading={isPending}
            error={error}
            listItems={groups}
            title="All Groups"
            titleIcon={<Groups sx={{ color: "white", fontSize: 33 }} />}
            isGroup={true}
          />
        </Grid>
        <Grid item xs={12} sm={7} lg={8} sx={{display: {xs: 'none', sm: 'block'}}}>
        <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
};

export default GroupsPage;
