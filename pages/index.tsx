import Navbar from '../components/base/Navbar';
import Header from '../components/base/Header';
import ProjectsGrid from '../components/ProjectsGrid';
import NextmarkStatistics from '../components/NextmarkStatistics';
import Services from '../components/Services';
import DomainsScrollable from '../components/DomainsScrollable';
import Clients from '../components/Clients';
import ContactForm from '../components/ContactForm';
import BaseLayout from '../components/layouts/BaseLayout';

export default function Home() {
  return (
    <BaseLayout>
      <Header/>

      <ProjectsGrid/>

      <NextmarkStatistics/>

      <Services/>

      <DomainsScrollable/>

      <Clients/>

      <ContactForm/>
    </BaseLayout>
  )
}
