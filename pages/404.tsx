import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ShopLayout } from './../components/layout/ShopLayout';

const Custom404 = () => {
  return (
    <ShopLayout title='page not found' pageDescription='page not found'>
      <Box display='flex' justifyContent='center' alignItems='center' height='calc(100vh - 200px)'>
        <Typography variant='h1' component="h1" fontSize={150} fontWeight={200}>| 404 |</Typography>
        <Typography variant='h4' component="h4" fontSize={40}>page not found</Typography>
      </Box>
    </ShopLayout>
  )
}

export default Custom404;