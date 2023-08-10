import { Modal, TextField, Stack, Typography, Button, Box } from "@mui/material";
import { useState } from "react";
import AlertPopper from "../../../components/alertPopper";

const RequestToJoinModal = ({ isOpen, handleClose, title }) => {

    const [link, setLink] = useState('');
    const [linkError, setLinkError] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const handleSubmit = e => {
        var isOk = true;

        if (link === '') {
            setLinkError('Please enter link');
            isOk = false;
        } else {
            setLinkError('');
        }

        if (isOk) {
            handleClose();
            setShowAlert(true);
        }
    }

    return (
        <>
            <Modal
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className='fs-modal'
            >
                <Box variant='form' noValidate className='modal-body'>
                    <Stack spacing={2}>
                        <Typography color='primary' variant='h6' fontWeight='bold' textAlign='center'>{title}</Typography>

                        <TextField
                            required
                            id='group-link'
                            label='Enter Group Link'
                            variant="filled"
                            value={link}
                            onChange={(e) => setLink(e.target.value)}
                            placeholder='fundsavy/groups/group-link'
                            error={linkError !== ''}
                            helperText={linkError}
                        />

                        <Stack direction='row' spacing={2} justifyContent='space-between'>
                            <Button variant='contained' color='error' sx={{ flexGrow: 1 }} onClick={() => handleClose()}>Cancel</Button>
                            <Button type='submit' onClick={handleSubmit} variant='contained' color='primary' sx={{ flexGrow: 1 }}>Request to join</Button>
                        </Stack>
                    </Stack>
                </Box>
            </Modal>

            <AlertPopper alertType='success' showAlert={showAlert} handleClose={() => setShowAlert(false)}>Group admin will respond to your invite</AlertPopper>
        </>
    );
}

export default RequestToJoinModal;