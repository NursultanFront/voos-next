'use client';
import 'typeface-poppins'
import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Buttons';
import Image from "next/image"
import { useRouter } from 'next/router'

const AgeCheckPopup = () => {
    const [modalOpen, setModalOpen] = useState(true);

    const handleCloseModal = () => {
      localStorage.setItem('isAdult', 'true');
      setModalOpen(false);
    };
  
    const handleExit = () => {
      localStorage.setItem('isAdult', 'false');
      window.location.href = 'https://google.com';
    };
  
    useEffect(() => {
      const isAdult = localStorage.getItem('isAdult');
  
      if (isAdult === 'true') {
        setModalOpen(false);
      } else {
        setModalOpen(true);
      }
    }, []);
  
    if (!modalOpen) {
      return null;
    }
    
    return ( 
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full age-container red bg-black/50 backdrop-blur">
            <div className="age-content w-[420px] h-[451px] p-[30px] fixed items-center justify-center bg-white rounded-lg font-[Poppins]">
                <div className="w-[360px] h-[113px] flex  items-center bg-white mb-10 rounded-lg border border-black/[.10] relative ">
                    <div className='ageCheck-popup-logo w-[123px] h-[72px] flex items-center ml-5' >
                    <Image
                        src="/popup/voos-logo.svg"
                        alt='logo'
                        width={123}
                        height={72}
                    />
                    </div>
                    <span className='w-[1px] h-[66px] bg-black opacity-10 ml-[39px] mr-10'></span>
                    <div className='ml-5 ageCheck-popup-age'>
                    <Image
                        src="/popup/18.svg"
                        alt='age'
                        width={66}
                        height={66}
                    />
                    </div>
                </div>
                <p className='text-black text-[15px] font-normal leading-[27px] text-center mb-[30px] font-'>You must accept our Terms of Use, Privacy Policy, and be 18+ years of age to visit this site.</p>
                <Button onClick={handleCloseModal} className='bg-black text-white text-[15px] leading-[27px] font-medium rounded-lg w-[360px] h-[45px] mb-[10px]'>I’m at least 18 years old</Button>
                <Button onClick={handleExit} className='text-black leading-[27px] text-[15px] bg-white w-[360px] h-[45px] rounded-lg mb-[30px]'>Exit this site</Button>
                <label className='text-[13px] flex' >
                    <input type="checkbox" required className='relative appearance-none peer w-[18px] h-[18px] border-2 border-black rounded focus:outline-none checked:bg-black checked:bg-[url("/popup/accept.svg")] checked:bg-no-repeat checked:bg-center hover:ring-[3px] hover:ring-black/[0.2] hover:ring-[1px] cursor-pointer'/>
                    <p className='ml-[9px]'>I agree to VOOS’s <a className='text-[#0073C7]' href='/'>Terms of Use</a> and <a className='text-[#0073C7]' href='/'>Privacy Policy</a>.</p>
                </label>
            </div>
        </div>
    );
}

export default AgeCheckPopup;