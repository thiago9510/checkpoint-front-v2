import { ButtonBase, ListItemText } from "@mui/material";
import { NavItemProps } from "./NavBarType";
import { navItemStyles } from "./NavBarStyle";
import { Link } from "react-router-dom";

//RETORNA BOTÃO COM BASE NA PROPRIEDADE
export const NavItem: React.FC<NavItemProps> = ({ icon, name, selected, onClick, to }) => {
    return (
        <Link to={to} style={{ textDecoration: 'none'}}>
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
        </Link>
    );
};
