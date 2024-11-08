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

const PointModal1: React.FC<PointModalProps> = ({ open, onClose, onPeriodChange, selectedPeriod, registrationTime }) => {
    const [timestamp, setTimestamp] = useState<Timestamp | null>(null);

    const handleClose = () => onClose();

    const handleRegisterPoint = () => {
        if (selectedPeriod) {
            const now = new Date();
            setTimestamp({
                time: now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
                date: now.toLocaleDateString('pt-BR'),
            });
            handleClose(); // Fecha o modal após registrar o ponto
        } else {
            alert("Por favor, selecione um período.");
        }
    };

    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ p: 2 }}>
                <CheckCircleIcon sx={{ color: 'green', fontSize: 40 }} />
                <IconButton onClick={handleClose}>
                    <CloseIcon />
                </IconButton>
            </Box>
            <DialogTitle>Registrar Ponto!</DialogTitle>
            <DialogContent
                sx={{
                    minWidth: 400, // Define uma largura mínima para o modal
                    minHeight: 300, // Define uma altura mínima para o modal
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
                {registrationTime && (
                    <p>Seu ponto foi registrado às <strong>{registrationTime}</strong></p>
                )}

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

export default PointModal1;
