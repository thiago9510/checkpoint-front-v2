import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, Drawer, List, ListItem, ListItemText, CssBaseline, ButtonBase } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';

const drawerWidth = 240;

interface AppLayoutProps {
    children: React.ReactNode; // Define que 'children' pode ser qualquer nó React
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(true);    
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
                    boxShadow: 5,
                    background: '#f0f0f0',
                    borderRadius: 4
                },
            }}
        >
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
                <List>
                    {/* Botão 1 */}
                    <ButtonBase
                        onClick={() => handleClick(0)}  // Passa o índice 0 para o primeiro botão
                        component="button"
                        sx={{
                            transition: 'background-color 0.3s, color 0.3s',
                            backgroundColor: selectedIndex === 0 ? 'rgba(0, 123, 255, 0.2)' : 'transparent', // Verifica se o item foi selecionado
                            display: 'flex',
                            width: '100%',
                            padding: '8px 16px',
                            '&:hover': {
                                color: 'rgba(9, 140, 230, 1)',
                                backgroundColor: 'rgba(9, 140, 230, 0.39)',
                                borderRadius: 0.5,
                            },
                            color: selectedIndex === 0 ? 'primary.main' : 'rgba(0, 0, 0, 0.7)', // Altera a cor do texto com base na seleção
                            border: 'none',
                        }}
                    >
                        <HomeIcon sx={{ color: selectedIndex === 0 ? 'primary.main' : 'rgba(0, 0, 0, 0.7)' }} />
                        <ListItemText primary="Teste" sx={{ ml: 1, textAlign: 'left', display: isDrawerOpen ? 'block' : 'none' }} />
                    </ButtonBase>

                    {/* Botão 2 */}
                    <ButtonBase
                        onClick={() => handleClick(1)}  // Passa o índice 1 para o segundo botão
                        component="button"
                        sx={{
                            transition: 'background-color 0.3s, color 0.3s',
                            backgroundColor: selectedIndex === 1 ? 'rgba(0, 123, 255, 0.2)' : 'transparent', // Verifica se o item foi selecionado
                            display: 'flex',
                            width: '100%',
                            padding: '8px 16px',
                            '&:hover': {
                                color: 'rgba(9, 140, 230, 1)',
                                backgroundColor: 'rgba(9, 140, 230, 0.39)',
                                borderRadius: 0.5,
                            },
                            color: selectedIndex === 1 ? 'primary.main' : 'rgba(0, 0, 0, 0.7)', // Altera a cor do texto com base na seleção
                            border: 'none',
                        }}
                    >
                        <HomeIcon sx={{ color: selectedIndex === 1 ? 'primary.main' : 'rgba(0, 0, 0, 0.7)' }} />
                        <ListItemText primary="Teste2" sx={{ ml: 1, textAlign: 'left', display: isDrawerOpen ? 'block' : 'none' }} />
                    </ButtonBase>

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
