import React, { useContext, useState } from "react";
import {
  NextPage,
  GetServerSideProps,
  GetStaticPaths,
  GetStaticProps,
} from "next";
import { ShopLayout } from "../../components/layout";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography, Button, Chip } from "@mui/material";
import { ProductSlideShow, Sizes } from "../../components/products";
import { ItemCounter } from "../../components/ui";
import { useRouter } from "next/router";
import { useProducts } from "../../hooks";
import FullScreenLoading from "../../components/ui/FullScreenLoading";
import { IProduct } from "../../interfaces/products";
import { getAllProductsBySlug, getProductBySlug } from "../../database";
import { ICartProduct } from "./../../interfaces/cart";
import { CartContext } from "../../context";

interface Props {
  product: IProduct;
}

const ProductView: NextPage<Props> = ({ product }) => {
  const [productSelected, setProductSelected] = useState<ICartProduct>({
    _id: product._id,
    images: product.images[0],
    price: product.price,
    sizes: null,
    slug: product.slug,
    title: product.title,
    gender: product.gender,
    inStock: product.inStock,
    quantity: 0,
  });

  const { handleAddProductInCart } = useContext(CartContext);

  // const router = useRouter()
  // const { products: product, isLoading } = UseProducts(`/products/${router.query.product}`)
  // if(isLoading) return <FullScreenLoading />

  return (
    <ShopLayout title={product.title} pageDescription={product.description}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          <ProductSlideShow images={product.images} />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Box display={"flex"} flexDirection='column'>
            <Typography variant='h1' component='h1'>
              {product.title}
            </Typography>
            <Typography variant='h1' component='h1'>
              ${product.price}
            </Typography>
            <Box sx={{ my: 2 }}>
              <Typography variant='subtitle2'>Quantity</Typography>
              <ItemCounter
                maxValue={product.inStock}
                currentValue={productSelected.quantity}
                quantity={(q: number) =>
                  setProductSelected({ ...productSelected, quantity: q })
                }
              />
              <Sizes
                sizes={product.sizes}
                onClick={(e) =>
                  setProductSelected({ ...productSelected, sizes: e })
                }
                selectedSize={productSelected.sizes}
              />
            </Box>
            {product.inStock === 0 ? (
              <Chip
                sx={{ mt: 1 }}
                label='there is not stock'
                color='error'
                variant='outlined'
              />
            ) : (
              <Button
                color='secondary'
                className='circular-btn'
                disabled={!productSelected.sizes}
                onClick={() => handleAddProductInCart(productSelected)}
              >
                {!productSelected.sizes ? "Select size" : "Add to cart"}
              </Button>
            )}
            <Box sx={{ mt: 3 }}>
              <Typography variant='subtitle2'>Description</Typography>
              <Typography variant='body2'>{product.description}</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

//TODO: SSR genera la informacion del lado del servidor cada vez que se hace la peticion
// export const getServerSideProps: GetServerSideProps = async ({ params }) => {

//     const { product: urlProduct } = params as { product: string }
//     const product = await getProductBySlug(urlProduct)

//     if (!product) {
//         return {
//             redirect: { destination: '/', permanent: false }
//         }
//     }

//     return {
//         props: { product },
//     }
// }

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async () => {
  const productSlugs = await getAllProductsBySlug();
  return {
    paths: productSlugs.map(({ slug }) => ({
      params: {
        slug,
      },
    })),
    fallback: "blocking",
  };
};
// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug: urlProduct } = params as { slug: string };
  const product = await getProductBySlug(urlProduct);

  if (!product) {
    return {
      redirect: { destination: "/", permanent: false },
    };
  }
  return {
    props: { product },
    revalidate: 60 * 60 * 24,
  };
};

export default ProductView;
