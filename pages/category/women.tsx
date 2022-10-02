import React from 'react'
import { Typography } from '@mui/material';
import { useProducts } from '../../hooks';
import FullScreenLoading from '../../components/ui/FullScreenLoading';
import { ShopLayout } from '../../components/layout';
import { ProductList } from '../../components/products';

const Women = () => {

    const { products, isLoading } = useProducts('/products?gender=women')


    return (
        <ShopLayout
            title='Teslo-shop - Women'
            pageDescription='Encuentra los mejores productos en la seccion de Mujeres!'
        >
            <Typography variant='h1' component='h1'>
                Tienda
            </Typography>
            <Typography variant='h2' sx={{ mb: 1 }}>
                Todos los productos
            </Typography>
            {
                isLoading
                    ? <FullScreenLoading />
                    : <ProductList products={products} />
            }
        </ShopLayout>
    )
}

export default Women