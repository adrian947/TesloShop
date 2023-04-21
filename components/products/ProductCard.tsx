import { FC, useState, useMemo } from 'react';
import NextLink from 'next/link'
import Grid from "@mui/material/Grid";
import { Box, Card, CardActionArea, CardMedia, Typography, Link, Chip } from "@mui/material";
import { IProduct } from '../../interfaces';

interface Props {
  product: IProduct
}

export const ProductCard: FC<Props> = ({ product }) => {

  const [isHovered, setIsHovered] = useState(false)
  const [isImageLoader, setIsImageLoader] = useState(false)


  const productImage = useMemo(() => {
    return isHovered
      ? `/products/${product.images[0]}`
      : `/products/${product.images[1]}`
  }, [isHovered, product.images])

  return (
    <Grid
      item
      xs={6}
      sm={4}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card>
        <NextLink href={`/product/${product.slug}`} passHref prefetch={false}>
          <Link>
            <CardActionArea>
              {
                product.inStock === 0 &&
                <Chip color='primary'
                  label="there isn't available"
                  sx={{ position: 'absolute', zIndex: 99, top: '10px', left: '10px' }}
                />
              }
              <CardMedia
                className='fadeIn'
                component='img'
                image={productImage}
                alt={product.title}
                onLoad={() => setIsImageLoader(true)}
              >
              </CardMedia>
            </CardActionArea>
          </Link>
        </NextLink>
      </Card>

      {
        isImageLoader &&
        <Box sx={{ mt: 1 }} className='fadeIn'>
          <Typography fontWeight={700}>{product.title}</Typography>
          <Typography fontWeight={500}>${product.price}</Typography>
        </Box>
      }
    </Grid>
  )
}
