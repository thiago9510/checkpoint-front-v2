import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';


export const navItems = [
    { id: 1, name: 'Inicio', icon: <HomeIcon />, path: '/home' },
    { id: 2, name: 'Ponto Eletrônico', icon: <AccessTimeRoundedIcon />, path: '/about' },
    { id: 3, name: 'Bater Ponto', icon: <CheckCircleOutlineRoundedIcon />, path: '/settings' },
    { id: 4, name: 'Colaboradores', icon: <PermIdentityRoundedIcon />, path: '/settings' }
    // Adicione mais itens conforme necessário
];