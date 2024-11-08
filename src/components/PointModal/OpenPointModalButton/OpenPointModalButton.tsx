import React from 'react';
import Button from '@mui/material/Button';

interface OpenPointModalButtonProps {
  onClick: () => void;
}

const OpenPointModalButton: React.FC<OpenPointModalButtonProps> = ({ onClick }) => (
  <Button variant="contained" color="primary" onClick={onClick}>
    Bater Ponto
  </Button>
);

export default OpenPointModalButton;
