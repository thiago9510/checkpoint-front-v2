// ResetStyles.tsx
import { SxProps, Theme } from "@mui/material";

// Estilos de reset básicos
export const resetStyles: SxProps<Theme> = {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    color: "inherit",
    textDecoration: "none",
    listStyle: "none",
    outline: "none",
    "& *": {
        margin: 0,
        padding: 0,
        boxSizing: "inherit",
    },
};


