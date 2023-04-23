import {
  Box,
  Divider,
  Drawer,
  IconButton,
  Input,
  InputAdornment,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faTicket,
  faKey,
  faRightFromBracket,
  faBoxesStacked,
  faUsers,
  faMars,
  faVenus,
  faPersonBreastfeeding,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { AuthContext, UiContext } from "../../context";
import { useRouter } from "next/router";

export const SideMenu = () => {
  const { isMenuOpen, toogleSideMenu } = useContext(UiContext);
  const { user, handleLogOut } = useContext(AuthContext);
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState("");

  const onSearchTerm = (e: string) => {
    if (searchTerm.trim().length === 0) return;
    if (e === "Enter") {
      router.push(`/search/${searchTerm}`);
      toogleSideMenu();
      setSearchTerm("");
    }
  };

  return (
    <Drawer
      open={isMenuOpen}
      anchor='right'
      sx={{ backdropFilter: "blur(4px)", transition: "all 0.5s ease-out" }}
      onClose={toogleSideMenu}
    >
      <Box sx={{ width: 250, paddingTop: 5 }}>
        <List>
          <ListItemButton>
            <Input
              type='text'
              placeholder='Buscar...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={(e) => onSearchTerm(e.key)}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton onClick={() => onSearchTerm("Enter")}>
                    <FontAwesomeIcon icon={faSearch} />
                  </IconButton>
                </InputAdornment>
              }
            />
          </ListItemButton>

          {user ? (
            <>
              <ListItemButton>
                <ListItemIcon>
                  <FontAwesomeIcon icon={faUser} />
                </ListItemIcon>
                <ListItemText primary={"Perfil"} />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <FontAwesomeIcon icon={faTicket} />
                </ListItemIcon>
                <ListItemText primary={"Mis Ordenes"} />
              </ListItemButton>{" "}
              <ListItemButton onClick={() => handleLogOut()}>
                <ListItemIcon>
                  <FontAwesomeIcon icon={faRightFromBracket} />
                </ListItemIcon>
                <ListItemText primary={"Salir"} />
              </ListItemButton>
            </>
          ) : (
            <>
              {" "}
              <ListItemButton sx={{ display: { xs: "", sm: "none" } }}>
                <ListItemIcon>
                  <FontAwesomeIcon icon={faMars} />
                </ListItemIcon>
                <ListItemText primary={"Hombres"} />
              </ListItemButton>
              <ListItemButton sx={{ display: { xs: "", sm: "none" } }}>
                <ListItemIcon>
                  <FontAwesomeIcon icon={faVenus} />
                </ListItemIcon>
                <ListItemText primary={"Mujeres"} />
              </ListItemButton>
              <ListItemButton sx={{ display: { xs: "", sm: "none" } }}>
                <ListItemIcon>
                  <FontAwesomeIcon icon={faPersonBreastfeeding} />
                </ListItemIcon>
                <ListItemText primary={"Niños"} />
              </ListItemButton>
              <ListItemButton
                onClick={() => router.push(`/auth/login?p=${router.asPath}`)}
              >
                <ListItemIcon>
                  <FontAwesomeIcon icon={faKey} />
                </ListItemIcon>
                <ListItemText primary={"Ingresar"} />
              </ListItemButton>
            </>
          )}

          <Divider />
          {user && user.role === "admin" && (
            <>
              <ListSubheader>Admin Panel</ListSubheader>

              <ListItemButton>
                <ListItemIcon>
                  <FontAwesomeIcon icon={faBoxesStacked} />
                </ListItemIcon>
                <ListItemText primary={"Productos"} />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <FontAwesomeIcon icon={faTicket} />
                </ListItemIcon>
                <ListItemText primary={"Ordenes"} />
              </ListItemButton>

              <ListItemButton>
                <ListItemIcon>
                  <FontAwesomeIcon icon={faUsers} />
                </ListItemIcon>
                <ListItemText primary={"Usuarios"} />
              </ListItemButton>
            </>
          )}
        </List>
      </Box>
    </Drawer>
  );
};
