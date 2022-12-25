import {ReactNode} from 'react';
import Navbar from '../base/Navbar';
import Footer from '../base/Footer';

export default function BaseLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <Navbar/>

      {children}

      <Footer/>
    </main>
  )
}
