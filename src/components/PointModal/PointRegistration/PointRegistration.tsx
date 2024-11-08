import React, { useState } from 'react';
import OpenPointModalButton from '../OpenPointModalButton/OpenPointModalButton';
import PointModal from '../PointModal';
import { SelectChangeEvent } from '@mui/material';

const PointRegistration: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState('');
  const [registrationTime, setRegistrationTime] = useState<string | null>(null);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handlePeriodChange = (event: SelectChangeEvent<string>) => {
    const period = event.target.value;
    setSelectedPeriod(period);

    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setRegistrationTime(currentTime);
  };

  return (
    <div>
      <OpenPointModalButton onClick={handleOpenModal} />
      <PointModal
        open={isModalOpen}
        onClose={handleCloseModal}
        onPeriodChange={handlePeriodChange}
        selectedPeriod={selectedPeriod}
        registrationTime={registrationTime}
      />
    </div>
  );
};

export default PointRegistration;
