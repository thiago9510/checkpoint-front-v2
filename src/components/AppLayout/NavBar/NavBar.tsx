import React, { useState } from 'react';
import { Toolbar, Box, Drawer, List } from '@mui/material';

import { navItems } from './NavBarItemsProps';
import { NavBarProps } from './NavBarType';
import { drawerStyles } from './NavBarStyle';
import { NavItem } from './NavBarItems';

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
            <Box sx={{ overflow: 'auto'}}>
                <List>
                    {navItems.map((item, index) => (
                        <NavItem
                            key={item.id}
                            icon={item.icon}
                            name={item.name}
                            selected={selectedIndex === index}
                            onClick={() => handleClick(index)}
                            to={item.path}
                        />
                    ))}
                </List>
            </Box>
        </Drawer>
    );
};
