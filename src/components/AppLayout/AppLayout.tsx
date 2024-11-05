import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, Drawer, List, ListItem, ListItemText, CssBaseline } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';

const drawerWidth = 240;

interface AppLayoutProps {
    children: React.ReactNode; // Define que 'children' pode ser qualquer nó React
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(true);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            {/* Barra Superior */}
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={toggleDrawer}
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Meu App
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* Barra Lateral */}
            <Drawer
                variant="permanent"
                open={isDrawerOpen}
                sx={{
                    width: isDrawerOpen ? drawerWidth : '60px',
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: isDrawerOpen ? drawerWidth : '60px',
                        boxSizing: 'border-box',
                        transition: 'width 0.3s',
                    },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        <ListItem component="button">
                            <HomeIcon />
                            <ListItemText primary="Home" sx={{ ml: 1, display: isDrawerOpen ? 'block' : 'none' }} />
                        </ListItem>
                        {/* Adicione mais itens de navegação aqui */}
                    </List>
                </Box>
            </Drawer>

            {/* Conteúdo Principal */}
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    marginLeft: isDrawerOpen ? `${drawerWidth}px` : '60px',
                    transition: 'margin-left 0.3s',
                }}
            >
                <Toolbar />
                {children} {/* Aqui é onde o conteúdo da página será renderizado */}
            </Box>
        </Box>
    );
};

export default AppLayout;
