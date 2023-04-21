import { Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import { CartContext } from "../../context";

export const OrderSummary = () => {
  const { summary } = useContext(CartContext);
  

  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography>Cantidad de Items:</Typography>
      </Grid>
      <Grid item xs={6} display='flex' justifyContent='end'>
        <Typography>{`${summary.quantityItems} items`}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography>Cantidad de unidades:</Typography>
      </Grid>
      <Grid item xs={6} display='flex' justifyContent='end'>
        <Typography>{`${summary.quantityunit} unidades`}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography>SubTotal</Typography>
      </Grid>
      <Grid item xs={6} display='flex' justifyContent='end'>
        <Typography>{`$${summary.subTotal}`}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography>Impuestos 10%:</Typography>
      </Grid>
      <Grid item xs={6} display='flex' justifyContent='end'>
        <Typography>{`$${summary.tax}`}</Typography>
      </Grid>
      <Grid item xs={6} sx={{ mt: 1 }}>
        <Typography variant='subtitle1'>Total</Typography>
      </Grid>

      <Grid item xs={6} display='flex' justifyContent='end' sx={{ mt: 1 }}>
        <Typography variant='subtitle1'>{`$${summary.total}`}</Typography>
      </Grid>
    </Grid>
  );
};
