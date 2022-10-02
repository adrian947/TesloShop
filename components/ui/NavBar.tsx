import React, { useContext, useState } from "react";
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
import { useRouter } from "next/router";
import { UiContext } from "../../context";
import { Input, InputAdornment } from "@mui/material";


export const NavBar = () => {
  const [isOpenInput, setIsOpenInput] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const { pathname } = useRouter();
  const category = pathname.split('/')[2]
  const router = useRouter();
  const { toogleSideMenu } = useContext(UiContext)

  const onSearchTerm = (e: string) => {
    if (searchTerm.trim().length === 0) return;
    if (e === 'Enter') {
      router.push(`/search/${searchTerm}`)     
      setSearchTerm('');
    }
  }

  return (
    <AppBar>
      <Toolbar>
        <NextLink href='/' passHref>
          <Link display='flex' alignItems='center' gap={4}>
            <Typography variant='h6'>Teslo</Typography>
            <Typography variant='h6' sx={{ ml: 0.5 }}>
              Shop
            </Typography>
          </Link>
        </NextLink>
        <Box flex={1} />
        <Box sx={{ display: { xs: 'none', sm: 'flex' } }} style={{ gap: '1rem' }}>
          <NextLink href='/category/men' passHref>
            <Link>
              <Button color={category === 'men' ? 'primary' : 'info'}>Men</Button>
            </Link>
          </NextLink>
          <NextLink href='/category/women' passHref>
            <Link>
              <Button color={category === 'women' ? 'primary' : 'info'}>Women</Button>
            </Link>
          </NextLink>
          <NextLink href='/category/kids' passHref>
            <Link>
              <Button color={category === 'kids' ? 'primary' : 'info'}>Kids</Button>
            </Link>
          </NextLink>
        </Box>
        <Box flex={1} />
        <IconButton sx={{ display: { xs: 'none', sm: 'block' } }}>
          {isOpenInput &&
            <Input
              type='text'
              placeholder="Buscar..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              onKeyPress={e => onSearchTerm(e.key)}
            />
          }
          <FontAwesomeIcon
            icon={faSearch}
            onClick={() => {
              setIsOpenInput(!isOpenInput)
              onSearchTerm('Enter')
            }}
           />
        </IconButton>

        {/* PANTALLA CHICA */}
        <IconButton sx={{ display: { sm: 'none' } }} onClick={() => toogleSideMenu()}>
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
        <Button sx={{ marginLeft: '30px' }} onClick={() => toogleSideMenu()}>
          Menu
        </Button>
      </Toolbar>
    </AppBar >
  );
};