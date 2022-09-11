import React from "react";
import NextLink from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons'


export const NavBar = () => {
  return (
    <AppBar>
      <Toolbar>
        <NextLink href='/' passHref>
          <Link display='flex' alignItems='center'>
            <Typography variant='h6'>Teslo</Typography>
            <Typography variant='h6' sx={{ ml: 0.5 }}>
              Shop
            </Typography>
          </Link>
        </NextLink>
        <Box flex={1} />
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <NextLink href='/category/men' passHref>
            <Link>
              <Button>Men</Button>
            </Link>
          </NextLink>
          <NextLink href='/category/women' passHref>
            <Link>
              <Button>Women</Button>
            </Link>
          </NextLink>
          <NextLink href='/category/kids' passHref>
            <Link>
              <Button>Kids</Button>
            </Link>
          </NextLink>
        </Box>
        <Box flex={1} />

        <IconButton>
          <FontAwesomeIcon icon={faSearch} />
        </IconButton>

        <NextLink href='/cart' passHref>
          <Link>
            <IconButton>
              <Badge badgeContent={2} color='secondary'>
                <FontAwesomeIcon icon={faCartShopping} />
              </Badge>
            </IconButton>
          </Link>
        </NextLink>
        <Button>
          Menu
        </Button>
      </Toolbar>
    </AppBar>
  );
};