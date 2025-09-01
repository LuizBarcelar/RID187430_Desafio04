import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Grid,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
  styled,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    background: "#0F1624",
    color: theme.palette.primary.main,
  }));

  const navItems = ['Projects', 'Technologies', 'About me'];

  return (
    <>
      <AppBar position="absolute" elevation={0}>
        <StyledToolbar>
          <Grid container alignItems="center" sx={{ width: '100%' }}>
            {/* Parte 1 - Navegação */}
            <Grid size={{md:9, xs:12}}>
              {/* Mobile: mostrar botão de menu */}
              {isMobile ? (
                <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                  <IconButton
                    color="inherit"
                    onClick={() => setDrawerOpen(true)}
                    edge="start"
                  >
                    <MenuIcon />
                  </IconButton>
                </Box>
              ) : (
                // Desktop: mostrar botões normalmente
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 5 }}>
                  {navItems.map((item) => (
                    <Button key={item} color="inherit">
                      {item}
                    </Button>
                  ))}
                </Box>
              )}
            </Grid>

            {/* Parte 2 - Ícones sociais */}
            <Grid size={{md:3, xs:12}}>
                {!isMobile && (
                    <Box
                        sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        gap: 1,
                        }}
                    >
                        <IconButton
                        color="inherit"
                        component="a"
                        href="https://github.com/LuizBarcelar"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        >
                        <GitHubIcon />
                        </IconButton>
                        <IconButton
                        color="inherit"
                        component="a"
                        href="https://linkedin.com/in/luiz-barcelar-a73a91331"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        >
                        <LinkedInIcon />
                        </IconButton>
                    </Box>
                )}
            </Grid>
          </Grid>
        </StyledToolbar>
      </AppBar>

      {/* Drawer: Menu lateral para mobile */}
        <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
            <Box
                sx={{
                    width: 250,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    p: 2,
                }}
                role="presentation"
                onClick={() => setDrawerOpen(false)}
                onKeyDown={() => setDrawerOpen(false)}
            >
                {/* Menu de navegação */}
                <List>
                    {navItems.map((text) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton
                                component="a"
                                href={`#${text.toLowerCase().replace(/\s+/g, '')}`}
                            >
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>

                {/* Ícones sociais na parte de baixo */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 2,
                        mt: 'auto',
                        pt: 2,
                        borderTop: '1px solid #ccc',
                    }}
                >
                    <IconButton
                        color="inherit"
                        component="a"
                        href="https://github.com/seuusuario"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <GitHubIcon />
                    </IconButton>

                    <IconButton
                        color="inherit"
                        component="a"
                        href="https://linkedin.com/in/seuperfil"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <LinkedInIcon />
                    </IconButton>
                </Box>
            </Box>
        </Drawer>

    </>
  );
};

export default NavBar;
