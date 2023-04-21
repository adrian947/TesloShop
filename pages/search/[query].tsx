import { GetServerSideProps } from 'next';
import type { NextPage } from "next";
import Typography from "@mui/material/Typography";
import { ShopLayout } from "../../components/layout";
import { ProductList } from "../../components/products";
import { getProductsBySearchQuery } from '../../database';
import { IProduct } from '../../interfaces';

interface Props {
    products: IProduct[]
}


const SearchPage: NextPage<Props> = ({ products }) => {
    return (
        <div>
            <ShopLayout
                title='Teslo-shop - Search'
                pageDescription='Encuentra los mejores productos de Teslo aqui!'
            >
                <Typography variant='h1' component='h1'>
                    Search Product
                </Typography>
                {
                    products.length > 0 ?
                        <ProductList products={products} />
                        :
                        <Typography variant='h2' sx={{ mb: 1 }}>
                            Product not found
                        </Typography>
                }
            </ShopLayout>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const { query = '' } = params as { query: string }

    let products = await getProductsBySearchQuery(query);

    if (!products.length) {
        products = await getProductsBySearchQuery('jacket');
    }

    return {
        props: {
            products,
        }
    }
}

export default SearchPage;

