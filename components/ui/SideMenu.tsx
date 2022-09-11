import { Box, Divider, Drawer, IconButton, Input, InputAdornment, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from "@mui/material"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser, faTicket, faKey, faRightFromBracket, faBoxesStacked, faUsers, faMars, faVenus, faPersonBreastfeeding } from '@fortawesome/free-solid-svg-icons'

export const SideMenu = () => {
    return (
        <Drawer
            open={false}
            anchor='right'
            sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out' }}
        >
            <Box sx={{ width: 250, paddingTop: 5 }}>

                <List>

                    <ListItem>
                        <Input
                            type='text'
                            placeholder="Buscar..."
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
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