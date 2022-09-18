import { Box, Button, FormControl, Grid, MenuItem, Select, TextField, Typography } from '@mui/material'
import React from 'react'
import { ShopLayout } from '../../components/layout'

const AddressPage = () => {
    return (
        <ShopLayout title='Address' pageDescription='Confirm address from destination'>
            <Box sx={{maxWidth: '1000px', margin: '0 auto'}}>
                <Typography variant='h1' component='h1'>
                    Address
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField label='Name' variant='filled' fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField label='Surname' variant='filled' fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField label='Address' variant='filled' fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField label='Address 2 (optional)' variant='filled' fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField label='City' variant='filled' fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField label='CP' variant='filled' fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField label='Phone' variant='filled' fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <Select variant='filled' label='country' value={1}>
                                <MenuItem value={1}>USA</MenuItem>
                                <MenuItem value={2}>England</MenuItem>
                                <MenuItem value={3}>Norway</MenuItem>
                                <MenuItem value={4}>Finland</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <Box display='flex' justifyContent='center' sx={{ mt: 5 }}>
                    <Button color='secondary' className='circular-btn' size='large'>
                        Review Order
                    </Button>
                </Box>
            </Box>
        </ShopLayout>
    )
}

export default AddressPage