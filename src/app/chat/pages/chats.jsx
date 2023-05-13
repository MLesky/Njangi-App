import { Groups, Person } from "@mui/icons-material";
import {
  Box,
} from "@mui/material";
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
        <SideListMenu isLoading={isPending} error={error} listItems={chats} title='All Chats' titleIcon={<Person sx={{ color: "white", fontSize: 33 }} />} isGroup={false}/>

        <Outlet />
    </Box>
     );
}
 
export default ChatsPage;