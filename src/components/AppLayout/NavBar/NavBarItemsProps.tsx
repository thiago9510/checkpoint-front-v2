import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import SettingsIcon from '@mui/icons-material/Settings';

export const navItems = [
    { id: 1, name: 'Inicio', icon: <HomeIcon />, path: '/' },
    { id: 2, name: 'Ponto Eletrônico', icon: <AccessTimeRoundedIcon />, path: '/ponto/eletronico' },
    { id: 3, name: 'Bater Ponto', icon: <CheckCircleOutlineRoundedIcon />, path: '/settings' },
    { id: 4, name: 'Colaboradores', icon: <PermIdentityRoundedIcon />, path: '/settings' },
    { id: 5, name: 'Adicionar Pessoa', icon: <PersonAddAltIcon />, path: '/teste' },
    { id: 6, name: 'Configurações', icon: <SettingsIcon />, path: '/settings' }
    // Adicione mais itens conforme necessário
];