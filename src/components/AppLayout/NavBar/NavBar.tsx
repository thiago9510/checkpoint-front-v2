import React, { useState } from 'react';
import { Toolbar, Box, Drawer, List, ListItemText, ButtonBase } from '@mui/material';

import { navItems } from './NavBarItems';
import { NavBarProps, NavItemProps } from './NavBarType';
import { drawerStyles, navItemStyles } from './NavBarStyle';



//RETORNA BOTÃO COM BASE NA PROPRIEDADE
const NavItem: React.FC<NavItemProps> = ({ icon, name, selected, onClick }) => {
    return (
        <ButtonBase
            onClick={onClick}
            component="button"
            sx={{
                ...navItemStyles.default,
                ...(selected ? navItemStyles.selected : {}),
                '&:hover': navItemStyles.hover,
            }}
        >
            {icon}
            <ListItemText primary={name} sx={{ ml: 1 }} />
        </ButtonBase>
    );
};


export const NavBar: React.FC<NavBarProps> = ({ isDrawerOpen, toggleDrawer }) => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setSelectedIndex(index)        
    };

    return (
        <Drawer
            variant="persistent"
            open={isDrawerOpen}
            sx={drawerStyles.root}

        >
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
                <List>
                    {navItems.map((item, index) => (
                        <NavItem
                            key={item.id}
                            icon={item.icon}
                            name={item.name}
                            selected={selectedIndex === index}
                            onClick={() => handleClick(index)}
                        />
                    ))}
                </List>
            </Box>
        </Drawer>
    );
};
