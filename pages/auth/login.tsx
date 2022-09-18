import { Box, Grid, Typography, TextField, Button, Link } from '@mui/material';
import React from 'react'
import AuthLayout from './../../components/layout/AuthLayout';
import NextLink from 'next/link';

const Login = () => {
    return (
        <AuthLayout title='login'>
            <Box sx={{ width: '350px', padding: '10px 20px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant='h1' component='h1'>
                            Sing In
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField label='Email' variant='filled' fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label='Password' type='password' variant='filled' fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <Button className='circular-btn' size='large' fullWidth color='secondary'>
                            login
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <NextLink href='/auth/register' passHref>
                            <Link underline='always'>
                                Register now!
                            </Link>
                        </NextLink>
                    </Grid>
                </Grid>
            </Box>
        </AuthLayout>
    )
}

export default Login