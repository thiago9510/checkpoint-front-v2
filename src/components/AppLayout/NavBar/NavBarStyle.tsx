// Estilos separados para o botão de navegação
export const navItemStyles = {
    default: {
        display: 'flex',
        width: '100%',
        padding: '8px 16px',
        backgroundColor: 'transparent',
        color: 'rgba(0, 0, 0, 0.7)',
        border: 'none',
        transition: 'background-color 0.3s, color 0.3s',
    },
    selected: {
        backgroundColor: 'rgba(0, 123, 255, 0.2)',
        color: 'primary.main',
    },
    hover: {
        color: 'rgba(9, 140, 230, 1)',
        backgroundColor: 'rgba(9, 140, 230, 0.39)',
        borderRadius: 0.5,
    },
};

// Estilos para o Drawer
export const drawerStyles = {
    root: {
      width: 240,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: 240,
        boxSizing: 'border-box',
        boxShadow: 5,
        background: '#f0f0f0',
        borderRadius: 4,
      },
    },
  };