import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useContext } from "react";
import { ShopLayout } from "../../components/layout";
import { GetServerSideProps } from "next";
import { validatedToken } from "../../helpers/validationToken";
import { useRouter } from "next/router";
import { IAuth } from "../../interfaces/user";
import FullScreenLoading from "../../components/ui/FullScreenLoading";
import { Controller, useForm } from "react-hook-form";
import { AuthContext, CartContext } from "../../context";

type FormData = {
  name: string;
  surname: string;
  address: string;
  address2?: string;
  city: string;
  cp: string;
  phone: string;
  country: string;
};

const AddressPage = ({ user }: IAuth) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<FormData>();
  const { cart } = useContext(CartContext);
  const { handleStateAddressUser } = useContext(AuthContext);

  useEffect(() => {
    if (!cart.length) {
      router.replace(`/cart/empty`);
    }
  }, [cart.length, router]);

  useEffect(() => {
    if (!user) {
      router.replace(`/auth/login?p=${router.asPath}`);
    }
  }, [user, router]);

  const onSubmitForm = (e: FormData) => {
    handleStateAddressUser(e);

    router.replace("/checkout/summary");
  };

  if (!user) return <FullScreenLoading />;
  return (
    <ShopLayout
      title='Address'
      pageDescription='Confirm address from destination'
    >
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <Box sx={{ maxWidth: "1000px", margin: "0 auto" }}>
          <Typography variant='h1' component='h1'>
            Address
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label='Name'
                variant='filled'
                fullWidth
                error={!!errors.name}
                helperText={errors.name && errors.name.message}
                {...register("name", {
                  required: "name required",
                })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label='Surname'
                variant='filled'
                fullWidth
                error={!!errors.surname}
                helperText={errors.surname && errors.surname.message}
                {...register("surname", {
                  required: "surname required",
                })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label='Address'
                variant='filled'
                fullWidth
                error={!!errors.address}
                helperText={errors.address && errors.address.message}
                {...register("address", {
                  required: "address required",
                })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label='Address 2 (optional)'
                variant='filled'
                fullWidth
                error={!!errors.address2}
                helperText={errors.address2 && errors.address2.message}
                {...register("address2")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label='City'
                variant='filled'
                fullWidth
                error={!!errors.city}
                helperText={errors.city && errors.city.message}
                {...register("city", {
                  required: "city required",
                })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label='CP'
                variant='filled'
                fullWidth
                error={!!errors.cp}
                helperText={errors.cp && errors.cp.message}
                {...register("cp", {
                  required: "cp required",
                })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label='Phone'
                variant='filled'
                fullWidth
                error={!!errors.phone}
                helperText={errors.phone && errors.phone.message}
                {...register("phone", {
                  required: "phone required",
                })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <Select
                  {...register("country", { required: "Country is required" })}
                  displayEmpty
                  variant='filled'
                  label='Country'
                  defaultValue=''
                  error={!!errors.country}
                >
                  <MenuItem value=''>Select a country</MenuItem>
                  <MenuItem value='USA'>USA</MenuItem>
                  <MenuItem value='England'>England</MenuItem>
                  <MenuItem value='Norway'>Norway</MenuItem>
                  <MenuItem value='Finland'>Finland</MenuItem>
                </Select>
                <FormHelperText error>{errors.country?.message}</FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
          <Box display='flex' justifyContent='center' sx={{ mt: 5 }}>
            <Button
              color='secondary'
              type='submit'
              className='circular-btn'
              size='large'
            >
              Review Order
            </Button>
          </Box>
        </Box>
      </form>
    </ShopLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { token = "" } = req.cookies;
  const parsedToken = token ? JSON.parse(token) : null;

  const user = token ? await validatedToken(parsedToken) : null;

  return {
    props: {
      user,
    },
  };
};

export default AddressPage;
