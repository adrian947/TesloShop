import { NextPage } from 'next';
import { ShopLayout } from '../../components/layout';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography, Button, Chip } from '@mui/material';
import { ProductSlideShow, Sizes } from '../../components/products';
import { initialData } from './../../database/products';
import { ItemCounter } from '../../components/ui';

const product = initialData.products[0]

const ProductView: NextPage = () => {
    return (
        <ShopLayout title='' pageDescription=''>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={7}>
                    <ProductSlideShow images={product.images} />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Box display={'flex'} flexDirection='column'>
                        <Typography variant='h1' component='h1'>
                            {product.title}
                        </Typography>
                        <Typography variant='h1' component='h1'>
                            ${product.price}
                        </Typography>
                        <Box sx={{ my: 2 }}>
                            <Typography variant='subtitle2'>
                                Quantity
                            </Typography>
                            <ItemCounter />
                            <Sizes sizes={product.sizes} />
                        </Box>
                        <Button color='secondary' className="circular-btn" >
                            Add to cart
                        </Button>
                        <Chip sx={{ mt: 1 }} label='there is not stock' color='error' variant='outlined' />
                        <Box sx={{ mt: 3 }}>
                            <Typography variant='subtitle2'>
                                Description
                            </Typography>
                            <Typography variant='body2'>
                                {product.description}
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ShopLayout>
    )
}
export default ProductView;