import { Box, Typography, Link } from "@mui/material"
import { ShopLayout } from "../../components/layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartArrowDown, faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons'
import NextLink from "next/link"


const EmptyPage = () => {
    return (
        <ShopLayout title="Empty Cart" pageDescription="There not products into de cart">
            <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                height='calc(100vh - 200px)'
                sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
                gap={5}
            >

                <FontAwesomeIcon icon={faCartArrowDown} fontSize='10rem' />
                <Typography variant="h1" component='h1'>
                    Your cart is empty
                </Typography>
                <NextLink href='/' passHref>
                    <Link>
                        <FontAwesomeIcon icon={faArrowRotateLeft} fontSize='2rem' />
                    </Link>
                </NextLink>
            </Box>
        </ShopLayout>
    )
}

export default EmptyPage