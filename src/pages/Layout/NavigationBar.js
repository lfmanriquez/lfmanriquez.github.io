import styled from "@emotion/styled";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import {
  AccountCircle,
  Checklist,
  Home,
  Info,
  ListAlt,
} from "@mui/icons-material";
import MindYourMojoLogo from "./mindyourmojo.png";

const NavButton = styled(Button)`
  height: 50%;
  cursor: pointer;
  color: ${(props) => props.theme.palette.secondary.main};
  &:hover {
    background-color: ${(props) => props.theme.palette.secondary.light};
    color: ${(props) => props.theme.palette.primary.main};
  }
`;

const NavBar = styled(AppBar)`
  height: var(--header-height);
  flex: 1;
  align-self: flex-start;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.palette.primary.main};
  position: sticky;
  top: 0;
  z-index: 1100;
  color: ${(props) => props.theme.palette.secondary.main};

  .MuiToolbar-root {
    padding-left: 0;
    padding-right: 0;
    width: 100%;
  }
`;

const SideNav = styled(Drawer)`
  .MuiDrawer-paper {
    background-color: ${(props) => props.theme.palette.primary.main};
    color: ${(props) => props.theme.palette.secondary.main};
  }
`;

const LogoButton = styled(Button)`
  min-height: 100%;
  height: 100%;
`;

const MenuButton = styled(IconButton)`
  height: 100%;
  width: 30%;
`;

export default function NavigationBar() {
  const navigate = useNavigate();
  const pages = [
    { id: 0, name: "Home", route: "/", icon: <Home /> },
    {
      id: 1,
      name: "QuizHub",
      route: "/test",
      icon: <Checklist />,
    },
    {
      id: 2,
      name: "List of Values",
      route: "/values",
      icon: <ListAlt />,
    },
    {
      id: 3,
      name: "About",
      route: "/about",
      icon: <Info />,
    },
  ];

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleRouteChange = (route) => {
    if (route) {
      navigate(route);
      handleCloseNavMenu();
    }
  };

  return (
    <NavBar>
      <Toolbar>
        <Grid container alignItems="center" sx={{ height: "100%" }}>
          <Grid
            item
            xs={4}
            textAlign="start"
            sx={{ height: "100%" }}
            zeroMinWidth
          >
            <LogoButton
              color="secondary"
              onClick={() => handleRouteChange("/")}
            >
              <img src={MindYourMojoLogo} height={"100%"} width={"100%"} />
            </LogoButton>
          </Grid>
          <Grid item xs={8} textAlign="end" sx={{ height: "100%" }}>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "block", sm: "none" },
                height: "100%",
              }}
            >
              <MenuButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon sx={{ width: "100%", height: "100%" }} />
              </MenuButton>
              <SideNav
                anchor="right"
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", sm: "none" },
                }}
              >
                <List>
                  <ListItem>
                    <Button color="secondary" startIcon={<AccountCircle />}>
                      <Typography textAlign="center">Profile</Typography>
                    </Button>
                  </ListItem>
                  <Divider sx={{ backgroundColor: "white" }} variant="middle" />
                  {pages.map((page) => (
                    <ListItem key={page.id}>
                      <Button
                        style={{ cursor: "pointer" }}
                        startIcon={page.icon}
                        color="secondary"
                        onClick={() => handleRouteChange(page.route)}
                      >
                        <Typography textAlign="center">{page.name}</Typography>
                      </Button>
                    </ListItem>
                  ))}
                </List>
              </SideNav>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "flex" },
                height: "100%",
              }}
            >
              <Stack direction="row" spacing={1} alignItems="center">
                {pages.map((page) => (
                  <NavButton
                    key={page.id}
                    onClick={() => handleRouteChange(page.route)}
                  >
                    <Typography variant="h6">{page.name}</Typography>
                  </NavButton>
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </NavBar>
  );
}
