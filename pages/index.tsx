import Navbar from '../components/Navbar';
import Header from '../components/Header';
import ProjectsGrid from '../components/ProjectsGrid';
import NextmarkStatistics from '../components/NextmarkStatistics';
import Services from '../components/Services';
import DomainsScrollable from '../components/DomainsScrollable';
import Clients from '../components/Clients';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar/>

      <Header/>

      <ProjectsGrid/>

      <NextmarkStatistics/>

      <Services/>

      <DomainsScrollable/>

      <Clients/>

      <ContactForm/>

      <Footer/>
    </main>
  )
}
