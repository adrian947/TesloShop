import { Box, Divider, Drawer, IconButton, Input, InputAdornment, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from "@mui/material"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser, faTicket, faKey, faRightFromBracket, faBoxesStacked, faUsers, faMars, faVenus, faPersonBreastfeeding } from '@fortawesome/free-solid-svg-icons'
import { useContext, useState } from 'react';
import { UiContext } from "../../context";
import { useRouter } from 'next/router';


export const SideMenu = () => {
    const { isMenuOpen, toogleSideMenu } = useContext(UiContext)
    const [searchTerm, setSearchTerm] = useState('')
    const router = useRouter();

    const onSearchTerm = (e: string) => {
        if (searchTerm.trim().length === 0) return;
        if (e === 'Enter') {
            router.push(`/search/${searchTerm}`)
            toogleSideMenu();
            setSearchTerm('');
        }
    }

    return (
        <Drawer
            open={isMenuOpen}
            anchor='right'
            sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out' }}
            onClose={toogleSideMenu}
        >
            <Box sx={{ width: 250, paddingTop: 5 }}>
                <List>
                    <ListItem>
                        <Input
                            type='text'
                            placeholder="Buscar..."
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                            onKeyPress={e => onSearchTerm(e.key)}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={() => onSearchTerm('Enter')}
                                    >
                                        <FontAwesomeIcon icon={faSearch} />
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </ListItem>

                    <ListItem button>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faUser} />
                        </ListItemIcon>
                        <ListItemText primary={'Perfil'} />
                    </ListItem>

                    <ListItem button>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faTicket} />
                        </ListItemIcon>
                        <ListItemText primary={'Mis Ordenes'} />
                    </ListItem>


                    <ListItem button sx={{ display: { xs: '', sm: 'none' } }}>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faMars} />
                        </ListItemIcon>
                        <ListItemText primary={'Hombres'} />
                    </ListItem>

                    <ListItem button sx={{ display: { xs: '', sm: 'none' } }}>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faVenus} />
                        </ListItemIcon>
                        <ListItemText primary={'Mujeres'} />
                    </ListItem>

                    <ListItem button sx={{ display: { xs: '', sm: 'none' } }}>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faPersonBreastfeeding} />
                        </ListItemIcon>
                        <ListItemText primary={'Niños'} />
                    </ListItem>


                    <ListItem button>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faKey} />
                        </ListItemIcon>
                        <ListItemText primary={'Ingresar'} />
                    </ListItem>

                    <ListItem button>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faRightFromBracket} />
                        </ListItemIcon>
                        <ListItemText primary={'Salir'} />
                    </ListItem>


                    {/* Admin */}
                    <Divider />
                    <ListSubheader>Admin Panel</ListSubheader>

                    <ListItem button>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faBoxesStacked} />
                        </ListItemIcon>
                        <ListItemText primary={'Productos'} />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faTicket} />
                        </ListItemIcon>
                        <ListItemText primary={'Ordenes'} />
                    </ListItem>

                    <ListItem button>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faUsers} />
                        </ListItemIcon>
                        <ListItemText primary={'Usuarios'} />
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    )

};