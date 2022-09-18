import React from 'react'
import { ShopLayout } from '../../components/layout'
import { Box, Button, Card, CardContent, Divider, Grid, Link, Typography } from '@mui/material';
import { CartList, OrderSummary } from '../../components/cart';
import NextLink from 'next/link';


const summary = () => {
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
                    <Card className="summary-card">
                        <CardContent>
                            <Typography variant='h2' >
                                Order (3 items)
                                <Divider sx={{ my: 1 }}>
                                </Divider>
                                <Box display='flex' justifyContent='space-between'>
                                    <Typography variant='subtitle1'>Address</Typography>
                                    <NextLink href='checkout/address' passHref>
                                        <Link underline='always'>
                                            Edit
                                        </Link>
                                    </NextLink>
                                </Box>
                                <Box>
                                    <Typography>John Doe</Typography>
                                    <Typography>323 some place</Typography>
                                    <Typography>Londres</Typography>
                                    <Typography>England, BB555</Typography>
                                    <Typography>+99 999999999999 </Typography>
                                </Box>
                                <Divider sx={{ my: 1 }} />
                                <Box display='flex' justifyContent='end'>
                                    <NextLink href='checkout/cart' passHref>
                                        <Link underline='always'>
                                            Edit
                                        </Link>
                                    </NextLink>
                                </Box>
                                <OrderSummary />
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

export default summary