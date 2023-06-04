'use client';
import React, { useEffect, useState } from 'react';
import { Button } from '../ui/Buttons';
import LanguageIcon from '@/assets/header/LanguageIcon';
import cn from 'clsx';

import { LangOptions, Lang } from './types';

const langs: LangOptions[] = [
  { name: 'Russian', short: Lang.RU },
  { name: 'English', short: Lang.ENG },
  { name: 'Chainees', short: Lang.CN },
  { name: 'Francias', short: Lang.FRA },
];

const initialLang = () => {
  const storedLang = localStorage.getItem('lang');
  if (storedLang) {
    const langIndex = Number(JSON.parse(storedLang));

    if (langIndex >= 0 && langIndex < langs.length) {
      return langs[langIndex].short;
    }
  }
  return Lang.RU;
};

const LangChoice = () => {
  const [langChoose, setLangChoose] = useState<boolean>(true);
  const [lang, setLang] = useState<Lang>(initialLang);

  const changeLang = (num: number) => {
    setLang(langs[num].short);
    setLangChoose(true);
    localStorage.setItem('lang', JSON.stringify(num));
  };

  useEffect(() => {
    const num = Number(localStorage.getItem('lang'));
    if (num) {
      setLang(langs[num].short);
    }
  }, []);

  return (
    <div className="relative">
      <Button
        className="flex gap-1 items-center"
        onClick={() => {
          setLangChoose(!langChoose);
        }}
      >
        <LanguageIcon></LanguageIcon>
        <div>{lang}</div>
      </Button>

      <div
        className={cn(
          'absolute',
          'z-10',
          'rounded-lg',
          'border-[1px]',
          'bg-white',
          'overflow-hidden',
          {
            hidden: langChoose,
          }
        )}
      >
        <ul className="flex flex-col">
          {langs.map((item, i) => (
            <li
              className="py-3 px-5 text-black cursor-pointer hover:bg-[#F2F2F2]"
              key={item.short}
              onClick={() => {
                changeLang(i);
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LangChoice;
