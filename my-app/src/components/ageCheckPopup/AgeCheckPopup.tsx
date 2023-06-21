'use client';
import React, { useState } from 'react';
import { Button } from '../ui/Buttons';
import Image from 'next/image';
import { Popup } from '../ui/customModal/Popup';

const getLocalInfo = () => {
  const isAdult = localStorage.getItem('isAdult');
  if (isAdult) {
    return false;
  }
  return true;
};

const AgeCheckPopup = () => {
  const [modalOpen, setModalOpen] = useState(getLocalInfo);
  const [check, setCheck] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleChange = () => {
    setCheck(!check);
  };

  const handleCloseModal = () => {
    localStorage.setItem('isAdult', 'true');
    setModalOpen(false);
  };

  const handleExit = () => {
    window.location.href = 'https://google.com';
  };

  return (
    <Popup isOpen={modalOpen} onClose={closeModal}>
      <section>
        <div className="mb-10 py-5 px-5 grid grid-cols-3 border rounded items-center justify-items-center">
          <div className="">
            <Image
              src="/popup/voos-logo.svg"
              alt="logo"
              width={123}
              height={72}
            />
          </div>
          <span className="w-[1px] h-[66px] bg-black opacity-10"></span>
          <div className="flex grow justify-center">
            <Image src="/popup/18.svg" alt="age" width={66} height={66} />
          </div>
        </div>
        <p className="mb-[30px] text-black text-[15px] font-normal leading-[27px] text-center  font-">
          You must accept our Terms of Use, Privacy Policy, and be 18+ years of
          age to visit this site.
        </p>
        <div className="flex flex-col justify-center gap-3 mb-7 ">
          <Button
            onClick={handleCloseModal}
            className="p-2 bg-black text-white text-[15px] leading-[27px] font-medium rounded-lg "
            disabled={!check}
          >
            I’m at least 18 years old
          </Button>
          <Button
            onClick={handleExit}
            className="p-2 text-black leading-[27px] text-[15px] rounded-lg "
          >
            Exit this site
          </Button>
        </div>
        <label className="text-[13px] flex">
          <input
            type="checkbox"
            className='relative appearance-none peer w-[18px] h-[18px] border-2 border-black rounded focus:outline-none checked:bg-black checked:bg-[url("/popup/accept.svg")] checked:bg-no-repeat checked:bg-center hover:ring-[3px] hover:ring-black/[0.2] cursor-pointer'
            checked={check}
            onChange={handleChange}
          />
          <p className="ml-[9px]">
            I agree to VOOS’s{' '}
            <a className="text-[#0073C7]" href="#">
              Terms of Use
            </a>{' '}
            and{' '}
            <a className="text-[#0073C7]" href="#">
              Privacy Policy
            </a>
            .
          </p>
        </label>
      </section>
    </Popup>
  );
};

export default AgeCheckPopup;
