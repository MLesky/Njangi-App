import { Modal, TextField, Box, Stack, List, Typography, FormControl, InputLabel, Select, MenuItem, ListItemText, Button } from "@mui/material";
import { useState } from "react";
import PicturePicker from "../../../components/picturePicker";

const CreateGroupModal = ({isOpen, handleClose, title}) => {
    
    const [groupPhoto, setGroupPhoto] = useState('');
    const [groupName, setGroupName] = useState('');
    const [groupDescription, setGroupDescription] = useState('');
    const [groupAccount, setGroupAccount] = useState('');

    const [groupPhotoError, setGroupPhotoError] = useState('');
    const [groupNameError, setGroupNameError] = useState('');
    const [groupAccountError, setGroupAccountError] = useState('');

    const handleSubmit = e => {
        var isOk = true;

        if(groupName === ''){
            setGroupNameError('Please enter a name');
            isOk = false;
        } else {
            setGroupNameError('');
        }

        if(groupAccount === ''){
            setGroupAccountError('Please select an account');
            isOk = false;
        } else {
            setGroupAccountError('');
        }

        if(isOk){
            alert('Create Group');
        }
    }

    return ( 
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
    <Box>
    <PicturePicker photoError={groupPhotoError} selectedPhoto={groupPhoto} setPhotoError={setGroupPhotoError} setSelectedPhoto={setGroupPhoto}/>
    <Typography textAlign='center'>Select Group Photo</Typography>
    </Box>
    <TextField 
        required
        id='group-name'
        label='Group Name'
        variant="filled"
        value={groupName}
        onChange={(e) => setGroupName(e.target.value)}
        placeholder='Give your group a name'
        error={groupNameError !== ''}
        helperText={groupNameError}
    />

<TextField 
        id='group-description'
        label='Group Description'
        variant="filled"
        value={groupDescription}
        onChange={(e) => setGroupDescription(e.target.value)}
        placeholder='Group description...'
        multiline
        maxRows={4}
    />

    <FormControl error={groupAccountError !== ''}>
        <InputLabel id='group-account-label'>Select an account for the group</InputLabel>
            <Select 
            labelId='group-account-label'
            id='group-account'
            label='Select an account'
            variant='filled'
            value={groupAccount}
            helperText={groupAccountError}
            onChange={(e) => setGroupAccount(e.target.value)}
            renderValue={(value) => `⚠️  - ${value}`}
            >
                
                    <MenuItem value='main mtn momo'>
                        <List>
                            <ListItemText 
                                primary='Main MTN MOMO'
                                secondary='679682626'
                            />
                        </List>
                    </MenuItem>
                    <MenuItem value='orange money'>
                        <List>
                            <ListItemText 
                                primary='Orange Money'
                                secondary='679682626'
                            />
                        </List>
                    </MenuItem>
                
            </Select>
        
    </FormControl>

    <Stack direction='row' spacing={2} justifyContent='space-between'>
        <Button variant='contained' color='error' sx={{flexGrow: 1}} onClick={() => handleClose()}>Cancel</Button>
        <Button type='submit' onClick={handleSubmit} variant='contained' color='primary' sx={{flexGrow: 1}}>Create</Button>
    </Stack>
  </Stack>
  </Box>
</Modal>
     );
}
 
export default CreateGroupModal;