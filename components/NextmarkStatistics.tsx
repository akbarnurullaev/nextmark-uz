import StatisticsTab from './StatisticsTab';
import Head from './base/Head';
import ContactUsButton from './base/ContactUsButton';

function Blurry({ className }: { className?: string }) {
  return (
    <svg className={className} width="459" height="1349" viewBox="0 0 459 1349" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_f_45_8)">
        <path d="M564.706 447.925C433.03 518.004 447.494 607.399 471.186 643.337C318.562 745.91 440.511 910.625 564.706 942.071C688.9 973.517 729.3 894.903 828.805 767.623C928.31 640.343 953 537.77 859.48 472.632C765.96 407.495 729.3 360.326 564.706 447.925Z" fill="#E9562A"/>
      </g>
      <defs>
        <filter id="filter0_f_45_8" x="0" y="0" width="1318" height="1349" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_45_8"/>
        </filter>
      </defs>
    </svg>

  )
}

export default function NextmarkStatistics() {
  return (
    <div className="relative">
      <Blurry className="absolute right-0 md:top-56 top-384"/>

      <div className="min-[768px]:container min-[768px]:mx-auto min-[768px]:mt-64 max-[768px]:px-4 max-[768px]:mt-24">
        <Head title="Nextmark" subtitle="в цифрах"/>


        <div className="flex justify-between max-[768px]:flex-wrap mt-10">
          <StatisticsTab isMobile number={3} title="3 года на рынке маркетинга" className=""/>
          <StatisticsTab isMobile number={40} title="более 40 реализованных проектов" className="min-[768px]:mx-10"/>
          <StatisticsTab isMobile number={15} title="более 15 специалистов в команде" className=""/>
        </div>

        <div className="w-full md:flex justify-center mt-24 hidden">
          <ContactUsButton />
        </div>
      </div>
    </div>
  )
}
