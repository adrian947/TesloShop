import React, { useState, useContext } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Link,
  Chip,
} from "@mui/material";
import { useForm } from "react-hook-form";
import AuthLayout from "./../../components/layout/AuthLayout";
import NextLink from "next/link";
import { onLogin } from "../../api";
import { AuthContext } from "../../context";
import { useRouter } from "next/router";

type FormData = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const { handleStateUser } = useContext(AuthContext);
  const router = useRouter();
  const query = router.query.p?.toString() || "/";
  
  const [error, setError] = useState(null);

  const handleLogin = async (data: FormData) => {
    const user = await onLogin(data);
    if (user.error) {
      setError(user.error);
      return setTimeout(() => {
        setError(null);
      }, 3000);
    }
    handleStateUser(user);

    router.replace(query);
  };

  return (
    <AuthLayout title='login'>
      <form onSubmit={handleSubmit(handleLogin)}>
        <Box sx={{ width: "350px", padding: "10px 20px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant='h1' component='h1'>
                Sing In
              </Typography>
              {error && <Chip label={error} color='error' className='fadeIn' />}
            </Grid>

            <Grid item xs={12}>
              <TextField
                type='email'
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
                login
              </Button>
            </Grid>
            <Grid item xs={12}>
              <NextLink href={`/auth/register?p=${query}`} passHref>
                <Link underline='always'>Register now!</Link>
              </NextLink>
            </Grid>
          </Grid>
        </Box>
      </form>
    </AuthLayout>
  );
};

export default Login;
