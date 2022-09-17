import React from 'react'
import { ShopLayout } from '../../components/layout'
import { Box, Button, Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import  {CartList} from '../../components/cart';

const CartPage = () => {
    return (
        <ShopLayout tiyle='cart' pageDescription='Cart shopping'>
            <Typography variant='h1' component='h1'>
                Cart
            </Typography>

            <Grid container spacing={15} sx={{mt:1}}>
                <Grid item xs={12} sm={7}>
                    <CartList />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Card className="summary-card">
                        <CardContent>
                            <Typography variant='h2' >
                                Order
                                <Divider sx={{ my: 1 }}>

                                </Divider>
                                <Box sx={{ mt: 3 }}>
                                    <Button color='secondary' sx={{ textTransform: 'uppercase' }} fullWidth>
                                        CkeckOut
                                    </Button>
                                </Box>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

        </ShopLayout>
    )
}

export default CartPage
