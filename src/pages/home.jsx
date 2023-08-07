import { AccountBalanceWallet, AccountCircle, Add, AddCard, Groups, Groups2, History, Input, JoinFull, Mail, NoTransfer, PlusOne, Schedule, ScheduleSend, ScheduleSharp, Send, Settings, SimCardDownload, TransitEnterexit, Wallet } from "@mui/icons-material";
import { Badge, Typography, Stack, Grid, Card, Box, Divider } from "@mui/material";
import { useState } from "react";
import { CreateGroupModal } from "../components";
import { routeNames } from "../utils";
import { Link } from "react-router-dom";

const HomePage = () => {
    const [createNewGroup, setCreateNewGroup] = useState(true);

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
        }}>
            <Grid container spacing={2} direction='row' justifyContent='center' alignItems='center'>
                <Grid item xs={12} md={10} lg={8}>
                    <Box>
                        <Stack direction='row' mb={2} alignItems='center'>
                            <Divider variant='horizontal' sx={{ flexGrow: 1 }} />
                            <Typography px={2}>Groups</Typography>
                            <Divider variant='horizontal' sx={{ flexGrow: 1 }} />
                        </Stack>
                        <Stack direction='row' flexWrap='wrap' justifyContent='center' alignItems='center' width='100%' useFlexGap spacing={{ xs: 2, md: 3 }}>
                            <Link to={routeNames.groups}>
                            <Card className='button-card'>
                                <Stack width='100%' direction='column' justifyContent='center' alignItems='center'>
                                    <Badge badgeContent={4} color="primary">
                                        <Groups2 className='button-card-icon' /> </Badge>
                                    <Typography className='button-card-text'>All Groups</Typography>
                                </Stack>
                            </Card>
                            </Link>
                            <Card className='button-card' onClick={() => setCreateNewGroup(true)}>
                                <Stack width='100%' direction='column' justifyContent='center' alignItems='center'>
                                    <Add className='button-card-icon' />
                                    <Typography className='button-card-text'>Create New Group</Typography>
                                </Stack>
                            </Card>
                            <Card className='button-card'>
                                <Stack width='100%' direction='column' justifyContent='center' alignItems='center'>
                                    <TransitEnterexit className='button-card-icon' />
                                    <Typography className='button-card-text'>Join A Group</Typography>
                                </Stack>
                            </Card>
                            <Card className='button-card'>
                                <Stack width='100%' direction='column' justifyContent='center' alignItems='center'>
                                    <Badge badgeContent={2} color="warning">
                                        <Mail className='button-card-icon' /> </Badge>
                                    <Typography className='button-card-text'>Group Invites</Typography>
                                </Stack>
                            </Card>
                        </Stack>
                    </Box>
                </Grid>

                <Grid item xs={12} md={10} lg={8}>
                    <Box>
                        <Stack direction='row' mb={2} alignItems='center'>
                            <Divider variant='horizontal' sx={{ flexGrow: 1 }} />
                            <Typography px={2}>Transactions & Schedules</Typography>
                            <Divider variant='horizontal' sx={{ flexGrow: 1 }} />
                        </Stack>
                        <Stack direction='row' flexWrap='wrap' justifyContent='center' alignItems='center' width='100%' useFlexGap spacing={{ xs: 2, md: 3 }}>
                            <Card className='button-card'>
                                <Stack width='100%' direction='column' justifyContent='center' alignItems='center'>
                                        <Send className='button-card-icon' />
                                    <Typography className='button-card-text'>Transfer Money</Typography>
                                </Stack>
                            </Card>
                            <Card className='button-card'>
                                <Stack width='100%' direction='column' justifyContent='center' alignItems='center'>
                                    <ScheduleSend className='button-card-icon' />
                                    <Typography className='button-card-text'>Schedule Transfer</Typography>
                                </Stack>
                            </Card>
                            <Card className='button-card'>
                                <Stack width='100%' direction='column' justifyContent='center' alignItems='center'>
                                        <SimCardDownload className='button-card-icon' />
                                    <Typography className='button-card-text'>Buy Airtime</Typography>
                                </Stack>
                            </Card>
                            <Card className='button-card'>
                                <Stack width='100%' direction='column' justifyContent='center' alignItems='center'>
                                    <Badge badgeContent={9} color="success">
                                        <ScheduleSharp className='button-card-icon' /> </Badge>
                                    <Typography className='button-card-text'>All Schedules</Typography>
                                </Stack>
                            </Card>
                            <Card className='button-card'>
                                <Stack width='100%' direction='column' justifyContent='center' alignItems='center'>
                                        <History className='button-card-icon' />
                                    <Typography className='button-card-text'>Transfer History</Typography>
                                </Stack>
                            </Card>
                        </Stack>
                    </Box>
                </Grid>

                <Grid item xs={12} md={10} lg={8}>
                    <Box>
                        <Stack direction='row' mb={2} alignItems='center'>
                            <Divider variant='horizontal' sx={{ flexGrow: 1 }} />
                            <Typography px={2}>Accounts</Typography>
                            <Divider variant='horizontal' sx={{ flexGrow: 1 }} />
                        </Stack>
                        <Stack direction='row' flexWrap='wrap' justifyContent='center' alignItems='center' width='100%' useFlexGap spacing={{ xs: 2, md: 3 }}>
                            <Card className='button-card'>
                                <Stack width='100%' direction='column' justifyContent='center' alignItems='center'>
                                    <Badge badgeContent={3} color="success">
                                        <AccountBalanceWallet className='button-card-icon' /> </Badge>
                                    <Typography className='button-card-text'>Money Accounts</Typography>
                                </Stack>
                            </Card>
                            <Card className='button-card'>
                                <Stack width='100%' direction='column' justifyContent='center' alignItems='center'>
                                        <AddCard className='button-card-icon' />
                                    <Typography className='button-card-text'>Add Account</Typography>
                                </Stack>
                            </Card>
                            <Card className='button-card'>
                                <Stack width='100%' direction='column' justifyContent='center' alignItems='center'>
                                        <AccountCircle className='button-card-icon' />
                                    <Typography className='button-card-text'>My Profile</Typography>
                                </Stack>
                            </Card>
                            <Card className='button-card'>
                                <Stack width='100%' direction='column' justifyContent='center' alignItems='center'>
                                        <Settings className='button-card-icon' />
                                    <Typography className='button-card-text'>Settings</Typography>
                                </Stack>
                            </Card>
                        </Stack>
                    </Box>
                </Grid>
            </Grid>

            <CreateGroupModal isOpen={createNewGroup} handleClose={() => setCreateNewGroup(false)}/>
        </div>
    );
}

export default HomePage;