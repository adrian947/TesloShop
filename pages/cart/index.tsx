import React, { useContext, useEffect } from "react";
import { ShopLayout } from "../../components/layout";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { CartList, OrderSummary } from "../../components/cart";
import { useRouter } from "next/router";

import { CartContext } from "../../context";
import FullScreenLoading from "../../components/ui/FullScreenLoading";

const CartPage = () => {
  const router = useRouter();

  const { cart } = useContext(CartContext);

  useEffect(() => {
    if (!cart.length) {
      router.replace("/cart/empty");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart.length]);
  if (!cart.length) return <FullScreenLoading />;
  return (
    <ShopLayout title='cart' pageDescription='Cart shopping'>
      <Typography variant='h1' component='h1'>
        Cart
      </Typography>

      <Grid container spacing={15} sx={{ mt: 1 }}>
        <Grid item xs={12} sm={7}>
          <CartList isEdit />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className='summary-card'>
            <CardContent>
              <Typography variant='h2'>
                Order
                <Divider sx={{ my: 1 }}></Divider>
                <OrderSummary />
                <Box sx={{ mt: 3 }}>
                  <Button
                    color='secondary'
                    sx={{ textTransform: "uppercase" }}
                    fullWidth
                    onClick={()=> router.push('/checkout/address')}
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

export default CartPage;
