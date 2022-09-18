import { Grid, Typography } from '@mui/material'
import React from 'react'

export const OrderSummary = () => {
    return (
        <Grid container>
            <Grid item xs={6}>
                <Typography>
                    There is not products
                </Typography>
            </Grid >
            <Grid item xs={6} display='flex' justifyContent='end'>
                <Typography>
                    3 items
                </Typography>
            </Grid >
            <Grid item xs={6}>
                <Typography>
                    SubTotal
                </Typography>
            </Grid >
            <Grid item xs={6} display='flex' justifyContent='end'>
                <Typography>
                    $105.36
                </Typography>
            </Grid >
            <Grid item xs={6}>
                <Typography>
                    Descuentos
                </Typography>
            </Grid >
            <Grid item xs={6} display='flex' justifyContent='end'>
                <Typography>
                    10%
                </Typography>
            </Grid >
            <Grid item xs={6} sx={{ mt: 1 }}>
                <Typography variant='subtitle1'>
                    Total
                </Typography>
            </Grid >

            <Grid item xs={6} display='flex' justifyContent='end' sx={{ mt: 1 }}>
                <Typography variant='subtitle1'>
                    $95
                </Typography>
            </Grid >
        </Grid>
    )
}

