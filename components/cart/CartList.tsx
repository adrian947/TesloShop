import React, { useContext, FC, useEffect } from "react";
import { initialData } from "../../database/products";
import {
  Grid,
  Typography,
  Link,
  CardActionArea,
  CardMedia,
  Box,
  Button,
} from "@mui/material";
import NextLink from "next/link";
import { ItemCounter } from "../ui";
import { CartContext } from "../../context";

interface Props {
  isEdit?: boolean;
}

export const CartList: FC<Props> = ({ isEdit }) => {
  const { cart, updateCartQuantity, removeFromCart } = useContext(CartContext);
  return (
    <>
      {!cart.length ? (
        <Typography variant='body1'>
          {"There isn't product in this cart"}
        </Typography>
      ) : (
        cart.map((product) => (
          <Grid
            sx={{ mb: 1 }}
            container
            spacing={2}
            key={product.slug + product.sizes}
          >
            <Grid item xs={3}>
              {/* TODO: llevar a la pagina del producto */}
              <NextLink href={`/product/${product.slug}`} passHref>
                <Link>
                  <CardActionArea>
                    <CardMedia
                      image={`/products/${product.images}`}
                      component='img'
                      sx={{ borderRadius: "10px" }}
                    />
                  </CardActionArea>
                </Link>
              </NextLink>
            </Grid>
            <Grid item xs={7}>
              <Box display='flex' flexDirection='column'>
                <Typography variant='body1'>{product.title}</Typography>

                <Typography variant='body1'>
                  Size: <strong>{product.sizes}</strong>
                </Typography>

                {isEdit ? (
                  <ItemCounter
                    maxValue={product.inStock}
                    currentValue={product.quantity}
                    quantity={(e) =>
                      updateCartQuantity({ ...product, quantity: e })
                    }
                  />
                ) : (
                  <Typography>{cart.length} items</Typography>
                )}
              </Box>
            </Grid>
            <Grid
              item
              xs={2}
              display='flex'
              alignItems='center'
              flexDirection='column'
            >
              <Typography variant='subtitle1'>${product.price}</Typography>
              {isEdit && (
                <Button
                  color='secondary'
                  onClick={() => removeFromCart(product)}
                >
                  Remove item
                </Button>
              )}
            </Grid>
          </Grid>
        ))
      )}
    </>
  );
};
