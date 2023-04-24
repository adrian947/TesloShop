import React, { useContext } from "react";
import { ShopLayout } from "../../components/layout";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { CartList, OrderSummary } from "../../components/cart";
import NextLink from "next/link";
import { AuthContext, CartContext } from "../../context";

const Summary = () => {
  const { cart } = useContext(CartContext);
  const { address } = useContext(AuthContext);

  return (
    <ShopLayout title='summary' pageDescription='checkout summary order'>
      <Typography variant='h1' component='h1'>
        Summary Order
      </Typography>

      <Grid container spacing={15} sx={{ mt: 1 }}>
        <Grid item xs={12} sm={7}>
          <CartList />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className='summary-card'>
            <CardContent>
              <Typography variant='h2'>
                {`Order ${cart.length} items`}
                <Divider sx={{ my: 1 }}></Divider>
                <Box display='flex' justifyContent='space-between'>
                  <Typography variant='subtitle1'>Address</Typography>
                  <NextLink href='/checkout/address' passHref>
                    <Link underline='always'>Edit</Link>
                  </NextLink>
                </Box>
                <Box>
                  <Typography>{address?.address}</Typography>
                  <Typography>{address?.city}</Typography>
                  <Typography>
                    {address?.country} {address?.cp}
                  </Typography>
                  <Typography>{address?.phone} </Typography>
                </Box>
                <Divider sx={{ my: 1 }} />
                <Box display='flex' justifyContent='end'>
                  <NextLink href='/cart' passHref>
                    <Link underline='always'>Edit</Link>
                  </NextLink>
                </Box>
                <OrderSummary />
                <Box sx={{ mt: 3 }}>
                  <Button
                    color='secondary'
                    sx={{ textTransform: "uppercase" }}
                    fullWidth
                  >
                    CkeckOut
                  </Button>
                </Box>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default Summary;
