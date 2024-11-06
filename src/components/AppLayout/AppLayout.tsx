import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, Drawer, List, ListItem, ListItemText, CssBaseline, ButtonBase } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import { NavBar } from './NavBar/NavBar';

const drawerWidth = 240;

interface AppLayoutProps {
    children: React.ReactNode; // Define que 'children' pode ser qualquer nó React
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);    
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const handleClick = (index: number) => {
        setSelectedIndex(index);  // Atualiza o índice do item selecionado
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
                    <Typography variant="h6" noWrap component="div" fontStyle={'initial'}>
                        check-point
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* Barra Lateral*/} 
            <Box component="nav">
            <NavBar 
             isDrawerOpen={isDrawerOpen} // Passando o estado
             toggleDrawer={toggleDrawer} // Passando a função de toggle
            
            />
                {/* Você pode colocar aqui o seu Drawer ou qualquer outro componente de navegação */}
            </Box>

            {/* Conteúdo Principal */}
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    marginLeft: isDrawerOpen ? `${drawerWidth}px` : '60px',
                    transition: 'margin-left 0.3s'
                }}
            >
                <Toolbar />
                {children} {/* Aqui é onde o conteúdo da página será renderizado */}
            </Box>
        </Box>
    );
};

export default AppLayout;
