import React from 'react'
import { Typography } from '@mui/material';
import { ProductList } from './../../components/products/ProductList';
import { useProducts } from '../../hooks';
import FullScreenLoading from '../../components/ui/FullScreenLoading';
import { ShopLayout } from './../../components/layout/ShopLayout';

const Men = () => {

    const { products, error, isLoading } = useProducts('/products?gender=men')
    if (isLoading) return <FullScreenLoading />;

    return (
        <ShopLayout
            title='Teslo-shop - Men'
            pageDescription='Encuentra los mejores productos en la seccion de hombres!'
        >
            <Typography variant='h1' component='h1'>
                Tienda
            </Typography>
            <Typography variant='h2' sx={{ mb: 1 }}>
                Todos los productos
            </Typography>
            <ProductList products={products} />
        </ShopLayout>
    )
}

export default Men