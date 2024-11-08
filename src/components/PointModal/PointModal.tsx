import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, MenuItem, Select, SelectChangeEvent, Button, Typography, Box, IconButton } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';

interface PointModalProps {
    open: boolean;
    onClose: () => void;
    onPeriodChange: (event: SelectChangeEvent<string>) => void;
    selectedPeriod: string;
    registrationTime: string | null;
}

interface Timestamp {
    time: string;
    date: string;
}

const PointModal: React.FC<PointModalProps> = ({ open, onClose, onPeriodChange, selectedPeriod, registrationTime }) => {
    const [timestamp, setTimestamp] = useState<Timestamp | null>(null);

    const handleClose = () => onClose();

    const handleRegisterPoint = () => {
        if (selectedPeriod) {
            const now = new Date();
            setTimestamp({
                time: now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
                date: now.toLocaleDateString('pt-BR'),
            });
        } else {
            alert("Por favor, selecione um período.");
        }
    };

    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            <Box display="flex" flexDirection="column" alignItems="center" sx={{ p: 2 }}>
                <CheckCircleIcon sx={{ color: 'green', fontSize: 55 }} />
                <DialogTitle>Registrar Ponto!</DialogTitle>
                <IconButton onClick={handleClose} sx={{ position: 'absolute', right: 16, top: 16 }}>
                    <CloseIcon />
                </IconButton>
            </Box>
            <DialogContent
                sx={{
                    minWidth: 400,
                    minHeight: 300,
                }}
            >
                <Select
                    fullWidth
                    value={selectedPeriod}
                    onChange={onPeriodChange}
                    displayEmpty
                    sx={{ mt: 3 }}
                >
                    <MenuItem value="">
                        <em>Selecione o período</em>
                    </MenuItem>
                    <MenuItem value="Entrada">Entrada</MenuItem>
                    <MenuItem value="Início intervalo">Início intervalo</MenuItem>
                    <MenuItem value="Retorno intervalo">Retorno intervalo</MenuItem>
                    <MenuItem value="Saída">Saída</MenuItem>
                </Select>

                <Button
                    variant="contained"
                    color="success"
                    fullWidth
                    onClick={handleRegisterPoint}
                    sx={{ mt: 3 }}
                >
                    Confirmar Ponto
                </Button>
                {timestamp && (
                    <Typography align="center" mt={2}>
                        Seu ponto foi registrado às <strong>{timestamp.time}</strong> no dia{' '}
                        <strong>{timestamp.date}</strong>
                    </Typography>
                )}
            </DialogContent>
        </Dialog>
    );
};

export default PointModal;
