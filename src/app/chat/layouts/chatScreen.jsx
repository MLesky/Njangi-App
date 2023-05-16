import { Call, Menu, VideoCall } from "@mui/icons-material";
import {
  Stack,
  Card,
  Avatar,
  IconButton,
  Typography,
  CircularProgress,
  Box,
} from "@mui/material";
import { useParams } from "react-router-dom";
import useFetch from "../../../temp/hooks/useFetch";

const ChatScreenForChat = () => {
  const { ID } = useParams();
  const {
    data: chat,
    error,
    isPending,
  } = useFetch("http://localhost:3000/chats/" + ID);
  console.log("id is", ID);
  console.log("data is", chat);
  return (
    <Stack flexGrow={1}>
      <Stack
        direction="row"
        alignItems="center"
        sx={{ backgroundColor: "primary.main", height: 60 }}
      >
        <Stack ml={3}>
          <Avatar />
        </Stack>
        <Stack
          flexGrow={1}
          sx={{ height: "inherit", cursor: "pointer" }}
          onClick={() => alert("clicked")}
        >
          <Stack alignItems="center" spacing={0}>
            {isPending && (
              <CircularProgress
                color="secondary"
                size={30}
                sx={{ marginTop: 2 }}
              />
            )}

            {chat && (
              <>
                <Typography
                  variant="h6"
                  className="title-text"
                  sx={{ color: "white" }}
                >
                  {chat.name}
                </Typography>
                <Typography mb={2} color="secondary">
                  Fear Me
                </Typography>
              </>
            )}
          </Stack>
        </Stack>
        <Stack direction="row">
          <Stack direction="row" sx={{ width: "fit-content" }} mr={2}>
            <IconButton>
              <Call sx={{ color: "white" }} />
            </IconButton>
            <IconButton>
              <VideoCall sx={{ color: "white" }} />
            </IconButton>
            <IconButton>
              <Menu sx={{ color: "white" }} />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
      {(error || isPending) && (
        <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
          <Typography color={error ? "error" : ""}>
            {error ? error : <CircularProgress />}
          </Typography>
        </Stack>
      )}
      {chat && (
        <Box sx={{ overflow: "auto", height: '100%' }}>
          {chat.messages.length == 0 ? (
            <Stack flexGrow={1} justifyContent='center' sx={{height: '100%'}}>
                <Typography variant='h6' align='center' className="dark-grey-text">No Messages</Typography>
            </Stack>
          ) : (
            <Stack
                justifyContent="end"
              className="messages"
              overflow="auto"
              minHeight='100%'
            >
              {chat.messages.map((message) => (
                <Card
                  sx={{ margin: 1, width: "fit-content", maxWidth: "75%" }}
                  className={
                    message.sender == "Mbah Lesky"
                      ? "sent-message"
                      : "received-message"
                  }
                >
                  <Typography
                    sx={{
                      padding: 2,
                    }}
                  >
                    {message.body.message}
                  </Typography>
                  <Typography
                    variant="body2"
                    align="right"
                    className="time-sent"
                    marginRight={3}
                  >
                    {message.timeSent}
                  </Typography>
                </Card>
              ))}
            </Stack>
          )}
        </Box>
      )}
      <Stack
        sx={{ height: 50, width: "100%", backgroundColor: "primary.main" }}
      ></Stack>
    </Stack>
  );
};

export default ChatScreenForChat;
