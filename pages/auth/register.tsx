import { Box, Grid, Typography, TextField, Button, Link } from '@mui/material';
import React from 'react'
import AuthLayout from './../../components/layout/AuthLayout';
import NextLink from 'next/link';

const Register = () => {
    return (
        <AuthLayout title='register'>
            <Box sx={{ width: '350px', padding: '10px 20px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant='h1' component='h1'>
                            Register
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField label='Name' variant='filled' fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label='Email' variant='filled' fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label='Password' type='password' variant='filled' fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <Button className='circular-btn' size='large' fullWidth color='secondary'>
                            Register
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <NextLink href='/auth/login' passHref>
                            <Link underline='always'>
                                Sign In now!
                            </Link>
                        </NextLink>
                    </Grid>
                </Grid>
            </Box>
        </AuthLayout>
    )
}

export default Register