import Image from 'next/image';
import logo from '../../public/nextmark-logo.svg';
import Button from './Button';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 py-5 bg-blurry-dark border-gray-200 px-2 sm:px-4">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="Logo" />
        </Link>
        <div className="flex md:order-2">
          <a href="tel:+998 90 009 09 59">
            <Button title="КОНТАКТЫ"/>
          </a>
          <button data-collapse-toggle="navbar-cta" type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-cta" aria-expanded="false">

            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
        <div className="text-cream items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
          <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-12 md:mt-0 md:text-sm md:font-medium md:border-0">
            <li className="hover:text-orange duration-200">
              <Link href="/projects">
                Проекты
              </Link>
            </li>
            <li className="hover:text-orange duration-200">
              <Link href="components#">
                Услуги
              </Link>
            </li>
            <li className="hover:text-orange duration-200">
              <Link href="/about-us">
                О нас
              </Link>
            </li>
            <li className="hover:text-orange duration-200">
              <Link href="components#">
                Блог
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
