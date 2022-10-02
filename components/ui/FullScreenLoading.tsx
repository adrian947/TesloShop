import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ShopLayout } from './../layout/ShopLayout';
import CircularProgress from '@mui/material/CircularProgress';

const FullScreenLoading = () => {
    return (
        <ShopLayout title='page not found' pageDescription='page not found'>
            <Box display='flex' justifyContent='center' alignItems='center' height='calc(100vh - 200px)'>
                <Typography variant='h1' component="h1" fontSize={150} fontWeight={200}>| LOADING... |</Typography>
                <CircularProgress color="success" />
            </Box>
        </ShopLayout>
    )
}

export default FullScreenLoading