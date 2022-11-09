import { Box, Stack, Typography } from "@mui/material";
import { useAuth } from "../../contexts/AuthContext";
import { Cancel } from "@mui/icons-material";

export default function ErrorMessage() {
  const { error, setError } = useAuth();

  return (
    error && (
      <Box sx={{display: 'flex', justifyContent: 'center', position: 'fixed', my: 2,  width: '100%'}}>
        <Box sx={{width: 400, bgcolor: 'error.light', borderRadius: 2}}>
          <Stack direction='row' alignItems='center' justifyContent='center' spacing={2} py='12px'>
            <button onClick={() => setError('')}>
              <Cancel color='error'/>
            </button>
            <Typography color='error' fontWeight={600}>Error: {error}</Typography>
          </Stack>
        </Box>
      </Box>
    )
  );
}