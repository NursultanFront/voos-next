import Link from 'next/link';
import Image from 'next/image';
import { Button, ButtonLink } from '../ui/Buttons';
import BasketIcon from '@/assets/header/BasketIcon';
import LocationIcon from '@/assets/header/LocationIcon';
import LanguageIcon from '@/assets/header/LanguageIcon';

const Header = () => {
  const pageLinks = [
    { id: 1, way: '/about', text: 'About us' },
    { id: 2, way: '/contacts', text: 'Contacts' },
    { id: 3, way: '/payment', text: 'Payments and delivery' },
    { id: 4, way: '/return', text: 'Return' },
  ];

  const productLinks = [
    { id: 1, way: '/buds', text: 'Buds' },
    { id: 2, way: '/joints', text: 'Joints' },
    { id: 3, way: '/vapes', text: 'Vapes' },
    { id: 4, way: '/cartridges', text: 'Cartridges' },
    { id: 5, way: '/catalog', text: 'Catalog' },
  ];

  return (
    <header className="border-b-[1px]">
      <div className="p-2 bg-black">
        <div className="container">
          <section className="flex justify-between text-white">
            <nav>
              <ul className="flex gap-x-10">
                {pageLinks.map((item) => {
                  return (
                    <li key={item.id}>
                      <Link
                        href={item.way}
                        className="opacity-70 hover:opacity-100"
                      >
                        {item.text}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="flex gap-x-7">
              <Button className="flex gap-1 items-center">
                <LocationIcon></LocationIcon>
                <div>Set location</div>
              </Button>
              <Button className="flex gap-1 items-center">
                <LanguageIcon></LanguageIcon>
                <div>ENG</div>
              </Button>
              <div className="flex gap-1.5">
                <Link href="login">Sign in</Link>
                {'/'}
                <Link href="signup">Sign up</Link>
              </div>
            </div>
          </section>
        </div>
      </div>
      <section>
        <div className="container">
          <div className="flex justify-between items-center py-3">
            <nav>
              <ul className="flex items-center gap-x-10">
                <li>
                  <Link href="/">
                    <Image
                      src="/header/logo.svg"
                      alt="Logo"
                      width={80}
                      height={21}
                    />
                  </Link>
                </li>
                {productLinks.map((item) => {
                  return (
                    <li key={item.id}>
                      <Link
                        href={item.way}
                        className="py-[21px] hover:border-b-[3px] hover:border-black"
                      >
                        {item.text}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="flex items-center gap-x-4 relative ">
              <ButtonLink
                bgColor="#000000"
                href="/order"
                color="#ffffff"
                className="py-[9px] px-[15px] "
              >
                Order Now
              </ButtonLink>
              <span className="after:absolute after:content-[''] after:top-[-12px] after:h-[66px] after:w-[1px] after:bg-[#F2F2F2]"></span>
              <div className="flex gap-3 items-center">
                <BasketIcon></BasketIcon>
                <Link href="/basket">Basket</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
