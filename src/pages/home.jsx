import { AccountBalanceWallet, AccountCircle, Add, AddCard, Diversity2, ForwardToInbox, GroupAdd, Groups2, History, Mail,  ScheduleSend, ScheduleSharp, Send, Settings, SimCardDownload, TransitEnterexit, } from "@mui/icons-material";
import { Badge, Typography, Stack, Grid, Card, Box, Divider } from "@mui/material";
import { useState } from "react";
import { CreateGroupModal, RequestToJoinModal } from "../components";
import { routeNames } from "../utils";
import { Link } from "react-router-dom";

const HomePage = () => {
    const [createNewNjangi, setCreateNewNjangi] = useState(false);
    const [createNewFund, setCreateNewFund] = useState(false);

    const [requestToJoinNjangi, setRequestToJoinNjangi] = useState(false);
    const [requestToJoinFund, setRequestToJoinFund] = useState(false);

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
                            <Typography px={2}>Njangi Groups</Typography>
                            <Divider variant='horizontal' sx={{ flexGrow: 1 }} />
                        </Stack>
                        <Stack direction='row' flexWrap='wrap' justifyContent='center' alignItems='center' width='100%' useFlexGap spacing={{ xs: 2, md: 3 }}>
                            <Link to={routeNames.groups}>
                                <Card className='button-card'>
                                    <Stack width='100%' direction='column' justifyContent='center' alignItems='center'>
                                        <Badge badgeContent={4} color="primary">
                                            <Groups2 className='button-card-icon' /> </Badge>
                                        <Typography className='button-card-text'>All Njangi Groups</Typography>
                                    </Stack>
                                </Card>
                            </Link>
                            <Card className='button-card' onClick={() => setCreateNewNjangi(true)}>
                                <Stack width='100%' direction='column' justifyContent='center' alignItems='center'>
                                    <GroupAdd className='button-card-icon' />
                                    <Typography className='button-card-text'>Create New Njangi Group</Typography>
                                </Stack>
                            </Card>
                            <Card className='button-card' onClick={() => setRequestToJoinNjangi(true)}>
                                <Stack width='100%' direction='column' justifyContent='center' alignItems='center'>
                                    <TransitEnterexit className='button-card-icon' />
                                    <Typography className='button-card-text'>Join A Njangi Group</Typography>
                                </Stack>
                            </Card>
                            <Card className='button-card'>
                                <Stack width='100%' direction='column' justifyContent='center' alignItems='center'>
                                    <Badge badgeContent={2} color="warning">
                                        <Mail className='button-card-icon' /> </Badge>
                                    <Typography className='button-card-text'>Njangi Group Invites</Typography>
                                </Stack>
                            </Card>
                        </Stack>
                    </Box>
                </Grid>

                <Grid item xs={12} md={10} lg={8}>
                    <Box>
                        <Stack direction='row' mb={2} alignItems='center'>
                            <Divider variant='horizontal' sx={{ flexGrow: 1 }} />
                            <Typography px={2}>Fund Groups</Typography>
                            <Divider variant='horizontal' sx={{ flexGrow: 1 }} />
                        </Stack>
                        <Stack direction='row' flexWrap='wrap' justifyContent='center' alignItems='center' width='100%' useFlexGap spacing={{ xs: 2, md: 3 }}>
                            <Link to={routeNames.groups}>
                                <Card className='button-card'>
                                    <Stack width='100%' direction='column' justifyContent='center' alignItems='center'>
                                        <Badge badgeContent={2} color="primary">
                                            <Diversity2 className='button-card-icon' /> </Badge>
                                        <Typography className='button-card-text'>Fund Groups</Typography>
                                    </Stack>
                                </Card>
                            </Link>
                            <Card className='button-card' onClick={() => setCreateNewFund(true)}>
                                <Stack width='100%' direction='column' justifyContent='center' alignItems='center'>
                                    <Add className='button-card-icon' />
                                    <Typography className='button-card-text'>Create New Fund Group</Typography>
                                </Stack>
                            </Card>
                            <Card className='button-card' onClick={() => setRequestToJoinFund(true)}>
                                <Stack width='100%' direction='column' justifyContent='center' alignItems='center'>
                                    <TransitEnterexit className='button-card-icon' />
                                    <Typography className='button-card-text'>Join A Fund Group</Typography>
                                </Stack>
                            </Card>
                            <Card className='button-card'>
                                <Stack width='100%' direction='column' justifyContent='center' alignItems='center'>
                                    <Badge badgeContent={2} color="warning">
                                        <ForwardToInbox className='button-card-icon' /> </Badge>
                                    <Typography className='button-card-text'>Fund Group Invites</Typography>
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

            <CreateGroupModal isOpen={createNewNjangi} handleClose={() => setCreateNewNjangi(false)} title='Create New Njangi Group' />
            <CreateGroupModal isOpen={createNewFund} handleClose={() => setCreateNewFund(false)} title='Create New Fund Group' />
            
            <RequestToJoinModal isOpen={requestToJoinNjangi} handleClose={() => setRequestToJoinNjangi(false)} title='Join A Njangi Group'/>
            <RequestToJoinModal isOpen={requestToJoinFund} handleClose={() => setRequestToJoinFund(false)} title='Join A Fund'/>
        </div>
    );
}

export default HomePage;