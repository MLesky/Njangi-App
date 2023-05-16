import { Groups } from "@mui/icons-material";
import { Box } from "@mui/material";
import { SideListMenu } from "../index";
import useFetch from "../../../temp/hooks/useFetch";
import { Outlet } from "react-router-dom";

const GroupsPage = () => {
  const {
    data: groups,
    isPending,
    error,
  } = useFetch("http://localhost:3000/groups");

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <SideListMenu
        isLoading={isPending}
        error={error}
        listItems={groups}
        title="All Groups"
        titleIcon={
          <Groups sx={{ color: "white", fontSize: 33 }} />
        }
        isGroup={true}
      />

      <Outlet />
    </Box>
  );
};

export default GroupsPage;
