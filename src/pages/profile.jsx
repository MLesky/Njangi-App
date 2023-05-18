import { Box, Typography } from "@mui/material";

const UserProfile = () => {
    return ( 
        <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          height: "100%",
          width: "100%",
          backgroundColor: 'red'
        }}
      >
          <Typography>User Account</Typography>
      </Box>
     );
}
 
export default UserProfile;