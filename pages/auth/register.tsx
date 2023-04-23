import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Link,
  Chip,
} from "@mui/material";
import AuthLayout from "./../../components/layout/AuthLayout";
import NextLink from "next/link";
import { onRegister } from "../../api";
import { AuthContext } from "../../context";
import { useRouter } from "next/router";

type FormData = {
  email: string;
  password: string;
  name: string;
};

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [error, setError] = useState(null);
  const router = useRouter();
  const query = router.query.p?.toString() || "/";

  const { handleStateUser }= useContext(AuthContext)

  const handleRegister = async (data: FormData) => {
    const user = await onRegister(data);
    if (user.error) {
      setError(user.error);
      return setTimeout(() => {
        setError(null);
      }, 3000);
    }
    handleStateUser(user)
  };

  return (
    <AuthLayout title='register'>
      <form onSubmit={handleSubmit(handleRegister)}>
        <Box sx={{ width: "350px", padding: "10px 20px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant='h1' component='h1'>
                Register
              </Typography>
              {error && <Chip label={error} color='error' className='fadeIn' />}
            </Grid>

            <Grid item xs={12}>
              <TextField
                label='Name'
                variant='filled'
                fullWidth
                error={!!errors.password}
                helperText={errors.password && errors.password.message}
                {...register("name", {
                  required: "name required",
                })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label='Email'
                variant='filled'
                fullWidth
                error={!!errors.email}
                helperText={errors.email && errors.email.message}
                {...register("email", {
                  required: "email required",
                })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label='Password'
                type='password'
                variant='filled'
                fullWidth
                error={!!errors.password}
                helperText={errors.password && errors.password.message}
                {...register("password", {
                  required: "password required",
                  minLength: { value: 6, message: "min 6 characters" },
                })}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                className='circular-btn'
                size='large'
                fullWidth
                color='secondary'
                type='submit'
              >                
                Register
              </Button>
            </Grid>
            <Grid item xs={12}>
              <NextLink  href={`/auth/login?p=${query}`} passHref>
                <Link underline='always'>Sign In now!</Link>
              </NextLink>
            </Grid>
          </Grid>
        </Box>
      </form>
    </AuthLayout>
  );
};

export default Register;
