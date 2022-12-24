import StatisticsTab from './StatisticsTab';
import Button from './Button';
import Head from './Head';

export default function NextmarkStatistics() {
  return (
    <div className="container mx-auto mt-64">
      <Head title="Nextmark" subtitle="в цифрах"/>


      <div className="flex justify-between mt-10">
        <StatisticsTab number={3} title="3 года на рынке маркетинга"/>
        <StatisticsTab number={40} title="более 40 реализованных проектов" className="mx-10"/>
        <StatisticsTab number={15} title="более 15 специалистов в команде"/>
      </div>

      <div className="w-full flex justify-center mt-24">
        <Button title="СВЯЗАТЬСЯ С НАМИ" className=""/>
      </div>
    </div>
  )
}
