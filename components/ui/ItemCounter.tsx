import React, { FC } from 'react'
import { IconButton, Box, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'


interface Props {

}

export const ItemCounter: FC<Props> = () => {
    return (
        <Box display='flex' alignItems='center'>
            <IconButton>
                <FontAwesomeIcon icon={faPlus} />
            </IconButton>
            <Typography sx={{ width: 40, textAlign: 'center' }}>
                1
            </Typography>
            <IconButton>
                <FontAwesomeIcon icon={faMinus} />
            </IconButton>

        </Box>
    )
}

