import React, { useState } from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

import MenuIcon from '@mui/icons-material/Menu';
import { TopBarProps } from "./TopBarType";

export const TopBar: React.FC<TopBarProps> = ({ toggleDrawer }) => {    

    return (
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
                <Typography variant="h6" noWrap component="div" fontStyle={'initial'} fontWeight={'bold'}>
                    check-point
                </Typography>
            </Toolbar>
        </AppBar>
    )
}