import StatisticsTab from './StatisticsTab';
import Head from './base/Head';
import ContactUsButton from './base/ContactUsButton';

export default function NextmarkStatistics() {
  return (
    <div className="min-[768px]:container min-[768px]:mx-auto min-[768px]:mt-64 max-[768px]:px-4 max-[768px]:mt-24">
      <Head title="Nextmark" subtitle="в цифрах"/>


      <div className="flex justify-between max-[768px]:flex-wrap mt-10">
        <StatisticsTab isMobile number={3} title="3 года на рынке маркетинга" className=""/>
        <StatisticsTab isMobile number={40} title="более 40 реализованных проектов" className="min-[768px]:mx-10"/>
        <StatisticsTab isMobile number={15} title="более 15 специалистов в команде" className=""/>
      </div>

      <div className="w-full flex justify-center mt-24">
        <ContactUsButton />
      </div>
    </div>
  )
}
