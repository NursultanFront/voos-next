'use client';
import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Buttons';
import { Popup } from '../ui/customModal/Popup';

const AgeCheckPopup = () => {
    useEffect(() => {
        const handleWindowLoad = () => {
            // Code to execute when the window has finished loading
            console.log('Window has finished loading - AgeCheckPopup')
        }   ;

        if (document.readyState === 'complete') {
            handleWindowLoad()
        } else {
            window.addEventListener('load', handleWindowLoad)
        }

            // Clean up the event listener when the component unmounts
            return () => {
             window.removeEventListener('load', handleWindowLoad);
      };
    },[]); // Empty dependency array to ensure the effect runs only once

    return ( 
        <div className="age-container  w-full h-full fixed flex items-center justify-center top-0 left-0 red bg-black/50 backdrop-blur">
            <div className="age-content w-[420px] h-[451px] p-[30px] fixed items-center justify-center bg-white rounded-lg">
                <div className="w-[360px] h-[113px] flex justify-evenly items-center bg-white mb-10 rounded-lg border border-black">
                    <img src="../../assets/popup/voos-logo.svg" alt="logo" />
                    <img src="../../assets/popup/18.svg" alt="18+ age restriction" />
                </div>
                <p className='text-black text-[15px] font-normal leading-7 text-center mb-[30px] font-'>You must accept our Terms of Use, Privacy Policy, and be 18+ years of age to visit this site.</p>
                <Button className='bg-black text-white rounded-lg w-[360px] h-[45px] mb-[10px]'>I’m at least 18 years old</Button>
                <Button className='text-black bg-white w-[360px] h-[45px] rounded-lg mb-[30px]'>Exit this site</Button>
                <label className='text-[13px] flex' >
                    <input type="checkbox"/>
                    <p className='ml-[9px]'>I agree to VOOS’s <a className='text-[#0073C7]' href='/'>Terms of Use</a> and <a className='text-[#0073C7]' href='/'>Privacy Policy</a>.</p>
                </label>
            </div>
        </div>
     );
}
 
export default AgeCheckPopup;