'use client';
import React, { useState } from 'react';
import { Button } from '../ui/Buttons';
import LocationSelect from './LocationSelect';
import { Popup } from '../ui/customModal/Popup';
import { LocationPopupIcon } from '@/assets/header/LocationPopupIcon';
import { CrossCloseIcon } from '@/assets/popup/CrossCloseIcon';
import { poppins } from '@/app/layout';
import cn from 'clsx';

type Props = {};

const LocationPopup = (props: Props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const selectCountry = (value: string | null) => {
    if (value) {
      localStorage.setItem('location', JSON.stringify(value));
      setModalOpen(false);
    }
  };

  return (
    <div className={poppins.className}>
      <Popup isOpen={modalOpen} onClose={handleCloseModal}>
        <div
          className={cn('flex', 'flex-col', 'items-center', poppins.className)}
        >
          <Button onClick={handleCloseModal} className="self-end">
            <CrossCloseIcon />
          </Button>
          <div className="mb-6">
            <LocationPopupIcon />
          </div>
          <h2 className="mb-3 text-[28px] leading-[120%] font-semibold">
            Set location
          </h2>
          <p className="mb-6 text-center">
            Choose you country of region to view content for your location and
            get delivery price
          </p>
          <div className="mb-6 w-full">
            <LocationSelect selectCountry={selectCountry} />
          </div>

          <Button
            className="py-[9px] text-center text-black"
            onClick={handleCloseModal}
          >
            Set Later
          </Button>
        </div>
      </Popup>
    </div>
  );
};

export default LocationPopup;
