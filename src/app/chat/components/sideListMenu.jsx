import {
  Stack,
  Typography,
  List,
  ListItemButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  Badge,
  ListItem,
  CircularProgress,
  Divider,
  useTheme,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery';
import { routeNames } from "../../../utils";

const SideListMenu = ({
  listItems,
  isLoading,
  error,
  title,
  titleIcon,
  isGroup,
}) => {
  const theme = useTheme();
    const isExtraSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const partLink = isExtraSmallScreen ? isGroup ? `../${routeNames.ngGroups}/` : `../${routeNames.fundGroups}/` : '';
    console.log('link:', partLink);

  return (
    <Stack sx={{ backgroundColor: "primary.light" }}>
      <Stack sx={{ height: "100%" }}>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{
            backgroundColor: "primary.main",
            height: 60,
          }}
        >
          {titleIcon}
          <Typography
            variant="h6"
            className="title-text"
            sx={{ color: "white" }}
          >
            {title}
          </Typography>
        </Stack>

        {(error || isLoading) && (
          <Stack
            sx={{ flexGrow: 1, justifyContent: "center", alignItems: "center" }}
          >
            {error ? (
              <Typography color={"error"}>{error}</Typography>
            ) : (
              <CircularProgress />
            )}
          </Stack>
        )}
        {listItems && (
          <List
            className="side-nav"
            sx={{
              flexGrow: "1",
              overflow: "auto",
            }}
          >
            {listItems.length == 0 ? (
              <Typography
                variant="h5"
                className="dark-grey-text"
                align="center"
              >
                Empty
              </Typography>
            ) : (
              listItems.map((item) => (
                <NavLink
                  to={`${partLink + item.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <ListItem id={item.id}>
          <ListItemButton>
            <ListItemAvatar>
              <Avatar alt="image" sx={{ height: 50, width: 50 }} />
            </ListItemAvatar>
            <ListItemText
              id=""
              secondary={
                isGroup
                  ? `${item.numberOfMembers} member${
                      item.numberOfMembers == 1 ? "" : "s"
                    }`
                  : item.messages.length > 0
                  ? item.messages[item.messages.length - 1].body.message
                  : ""
              }
            >
              <Typography
                className="title-text"
                color="primary"
                sx={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >
                {item.name}
              </Typography>
            </ListItemText>
            <ListItemSecondaryAction>
              <Badge badgeContent={3} color="primary"></Badge>
            </ListItemSecondaryAction>
          </ListItemButton>
        </ListItem>
        <Divider component="li" />
                </NavLink>
              ))
            )}
          </List>
        )}
      </Stack>
    </Stack>
  );
};

export default SideListMenu;
