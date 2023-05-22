import React from 'react';
import Image from 'next/image';
import FooterForm from './TheFooterForm';
import Link from 'next/link';

import MasterCardIcon from '@/assets/payment/MasterCard.png';
import PaypalIcon from '@/assets/payment/Paypal.png';
import VisaIcon from '@/assets/payment/visa.png';

const store = [
  {
    id: 1,
    text: 'Buds',
    link: '/buds',
  },
  {
    id: 2,
    text: 'Joints',
    link: '/joints',
  },
  {
    id: 3,
    text: 'Vapes',
    link: '/vapes',
  },
  {
    id: 4,
    text: 'Cartridges',
    link: '/cartridges',
  },
];
const company = [
  {
    id: 1,
    text: 'About Us',
    link: '/about',
  },
  {
    id: 2,
    text: 'Blog',
    link: '/blog',
  },
  {
    id: 3,
    text: 'Contracts',
    link: '/contracts',
  },
];
const clients = [
  { id: 1, way: '/payment', text: 'Payments and delivery' },
  { id: 2, way: '/return', text: 'Return' },
  { id: 3, way: '/terms', text: 'Terms of use' },
  { id: 4, way: '/contacts', text: 'Privacy policy' },
];

const paymentMethod = [
  {
    id: 1,
    icon: MasterCardIcon,
  },
  {
    id: 2,
    icon: PaypalIcon,
  },
  {
    id: 3,
    icon: VisaIcon,
  },
];

const Footer = () => {
  return (
    <footer className="pt-[46px] pb-[16px] bg-black text-white">
      <div className="container">
        <section className="pb-[30px] border-b-2 border-[rgba(255,255,255,.1)]">
          <div className="flex gap-x-8">
            <div>
              <h2 className="mt-3 text-[26px] text-bold">
                VOOS Weely subscribe
              </h2>
              <p className="text-[13px] font-normal opacity-70">
                Weekly inspiration + insight,
                <br /> delivered straight to your inbox…
              </p>
            </div>
            <div className="flex-grow">
              <FooterForm></FooterForm>
              <div className="mt-[10px]">
                <span className="opacity-70">
                  By filling this forms you agree with
                </span>{' '}
                <Link href="/" className="underline">
                  <span style={{ opacity: 1 }}> privacy policy</span>
                </Link>{' '}
                <span className="opacity-70">and</span>{' '}
                <Link href="/" className="underline">
                  terms of agreement
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="flex justify-between pt-7 pb-14">
          <div className="flex flex-wrap basis-[50%] gap-x-[100px]">
            <div>
              <h4 className="mb-4 text-base font-medium">Store</h4>
              <ul>
                {store.map((item) => {
                  return (
                    <li key={item.id}>
                      <Link
                        href={item.link}
                        className="text-xs font-normal opacity-75 hover:opacity-100"
                      >
                        {item.text}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-base font-medium">Company</h4>
              <ul>
                {company.map((item) => {
                  return (
                    <li key={item.id}>
                      <Link
                        href={item.link}
                        className="text-xs font-normal opacity-75 hover:opacity-100"
                      >
                        {item.text}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-base font-medium">For clients</h4>
              <ul>
                {clients.map((item) => {
                  return (
                    <li key={item.id}>
                      <Link
                        href={item.way}
                        className="text-xs font-normal opacity-75 hover:opacity-100"
                      >
                        {item.text}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="">
              <h4 className="mb-4 text-base font-medium">We accept payments</h4>
              <ul className="flex gap-x-[18px]">
                {paymentMethod.map((item) => {
                  return (
                    <li key={item.id}>
                      <Image
                        src={item.icon.src}
                        alt="Icon"
                        width={32}
                        height={25}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="flex flex-col basis-[30%] gap-y-[15px]">
            <Image
              src="/logo-full.svg"
              alt="Logo Full"
              width={67}
              height={69}
            ></Image>
            <p className="opacity-70">
              Magni rem ullam veniam animi. Tenetur et pariatur et esse quisquam
              aut. Consequuntur distinctio voluptatibus omnis eius fugiat.
              Recusandae temporibus veniam molestiae.
            </p>
            <Link href="/" className="opacity-70 hover:opacity-100">
              <span>info@voos.com</span>
            </Link>
            <p className="opacity-70">
              Rhodes & Rhodes Corp. 212 Silverback Drive California Springs, CA
              92926
            </p>
          </div>
        </section>
        <div className="flex justify-center opacity-70">
          All righst reserved (С) 2023
        </div>
      </div>
    </footer>
  );
};

export default Footer;
