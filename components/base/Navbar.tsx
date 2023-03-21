import Image from 'next/image';
import logo from '../../public/nextmark-logo.svg';
import Button from './Button';
import Link from 'next/link';
import {useState} from 'react';
import { Transition } from '@headlessui/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const NavbarContent = () => (
    <div className="text-cream duration-100 items-center justify-between w-full md:flex md:w-auto md:order-1" id="navbar-cta">
      <ul className="flex text-center flex-col p-4 mt-4 md:flex-row md:space-x-12 md:mt-0 md:text-sm md:font-medium md:border-0">
        <li className="hover:text-orange duration-200 md:mt-0 mt-10">
          <Link href="/">
            О нас
          </Link>
        </li>
        <li className="hover:text-orange duration-200">
          <Link href="/projects">
              Проекты
          </Link>
        </li>
        {/*<li className="hover:text-orange duration-200 md:mt-0 mt-10">*/}
        {/*  <Link href="components#">*/}
        {/*      Услуги*/}
        {/*  </Link>*/}
        {/*</li>*/}
        {/*<li className="hover:text-orange duration-200 md:mt-0 mt-10">*/}
        {/*  <Link href="/about-us">*/}
        {/*      О нас*/}
        {/*  </Link>*/}
        {/*</li>*/}
        {/*<li className="hover:text-orange duration-200 md:mt-0 mt-10">*/}
        {/*  <Link href="components#">*/}
        {/*      Блог*/}
        {/*  </Link>*/}
        {/*</li>*/}
      </ul>
    </div>
  )

  return (
    <nav className="fixed w-full z-50 px-4 py-3 bg-blurry-dark border-gray-200">
      <div className="md:container md:mx-auto md:p-0 px-4 flex flex-wrap items-center justify-between">
        <Link href="/" className="flex mobile:w-auto w-32 items-center">
          <Image src={logo} alt="Logo" />
        </Link>
        <div className="flex md:order-2">
          <a className="hidden z-50 md:block" href="tel:+998 90 009 09 59">
            <Button title="+998 90 009 09 59"/>
          </a>
          <span
            onClick={() => setIsOpen(p => !p)}
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden"
            aria-controls="navbar-cta" aria-expanded="false">

            <svg className="w-8 h-8" aria-hidden="true" fill="white" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"></path>
            </svg>
          </span>
        </div>
        <Transition
          show={isOpen}
          className="w-full md:w-auto md:hidden relative"
          enter="transition-opacity duration-150"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <NavbarContent/>
          <p className="text-white -mx-4 -mb-5 mt-3 text-center bg-orange py-3 uppercase duration-200 md:mt-0 mt-10">
            <a href="tel:+998 90 009 09 59">
              Контакты
            </a>
          </p>
        </Transition>

        <div className="md:block hidden">
          <NavbarContent/>
        </div>
      </div>
    </nav>
  )
}
