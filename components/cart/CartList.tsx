import React from 'react'
import { initialData } from '../../database/products'
import { Grid, Typography, Link, CardActionArea, CardMedia, Box, Button } from '@mui/material'
import NextLink from 'next/link'
import { ItemCounter } from '../ui'

const productsInCart = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2]
]

export const CartList = () => {
    return (
        productsInCart.map(product => (
            <Grid sx={{ mb: 1 }} container spacing={2} key={product.slug}>
                <Grid item xs={3}>
                    {/* TODO: llevar a la pagina del producto */}
                    <NextLink href='/product/slug' passHref>
                        <Link>
                            <CardActionArea>
                                <CardMedia
                                    image={`products/${product.images[0]}`}
                                    component='img'
                                    sx={{ borderRadius: '10px' }}
                                />
                            </CardActionArea>
                        </Link>
                    </NextLink>
                </Grid>
                <Grid item xs={7}>
                    <Box display='flex' flexDirection='column'>
                        <Typography variant='body1'>
                            {product.title}
                        </Typography>

                        <Typography variant='body1'>
                            Size: <strong>M</strong>
                        </Typography>
                        <ItemCounter />
                    </Box>


                </Grid>
                <Grid item xs={2} display='flex' alignItems='center' flexDirection='column'>
                    <Typography variant='subtitle1'>
                        ${product.price}
                    </Typography>
                    <Button color='secondary'>
                        Remove item
                    </Button>
                </Grid>
            </Grid>
        ))
    )
}

