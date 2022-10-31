import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const MessageId = ({type, message}) => {
    return (
        <Stack sx={{ width: '40%', paddingTop:'10px' }} spacing={2}>
            <Alert severity={type}>
                {message}
            </Alert>
        </Stack>
    )
}

export default MessageId;