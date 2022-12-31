import BaseLayout from '../../components/layouts/BaseLayout';

import Image from 'next/image';
import fancyElement from '../../public/fancy-element.svg';
import staff from '../../public/staff/staff.jpg';
import GradientText from '../../components/base/GradientText';
import TeamMemberCard, {TeamMember} from '../../components/TeamMemberCard';
import ContactUsButton from '../../components/base/ContactUsButton';
import ScrollCircle from '../../components/ScrollCircle';


function Blurry({ className }: { className?: string }) {
  return (
    <svg className={`${className} sm:w-auto w-full`} width="448" height="967" viewBox="0 0 448 967" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_f_157_364)">
        <path d="M-88.9258 332.005C-176.926 378.805 -167.259 438.505 -151.426 462.505C-253.426 531.005 -171.926 641.005 -88.9258 662.005C-5.92584 683.005 21.0741 630.505 87.5741 545.505C154.074 460.505 170.574 392.005 108.074 348.505C45.5741 305.005 21.0742 273.505 -88.9258 332.005Z" fill="#E9562A"/>
      </g>
      <defs>
        <filter id="filter0_f_157_364" x="-499" y="0" width="946.184" height="966.633" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_157_364"/>
        </filter>
      </defs>
    </svg>
  )
}

export default function AboutUs() {
  return (
    <BaseLayout>
      <Blurry className="absolute md:top-144 top-48 md:opacity-100 opacity-25"/>
      <div className="md:h-screen h-96 md:container md:mx-auto md:px-0 px-4 items-center pt-44 flex flex-wrap justify-between">
        <div>
          <h1 className="z-10 uppercase absolute md:text-8xl text-2xl text-white font-extrabold">
            о нас
          </h1>

          <h1 className="absolute uppercase text-transparent-white-outlined z-40 md:text-8xl text-2xl text-white font-extrabold">
            о нас
          </h1>

          <p className="z-20 md:w-2/6 w-7/12 relative md:mt-32 mt-14 md:text-base text-xs text-white">
            Nextmark - это молодая, амбициозная,
            креативная команда специалистов любящие
            свою работу и готовые реализовать ваши мечты
            в реальность.
          </p>
        </div>

        <Image className="absolute z-10 right-10 w-8/12" src={fancyElement} alt="marketing cube" />
      </div>

      <div className="md:flex hidden container mx-auto justify-end">
        <ScrollCircle motionClassName="w-fit z-30 relative absolute bottom-56" imageClassName="inline w-52"/>
      </div>

      <div className="md:container md:-mt-44 mt-12 md:mb-44 mb-16 flex justify-end md:mx-auto md:px-0 px-4">
        <div className="md:w-auto w-7/12">
          <h1 className="z-10 uppercase md:text-8xl text-2xl text-white font-extrabold">
            наша
          </h1>
          <h1 className="z-10 uppercase md:text-8xl text-2xl text-orange font-extrabold">
            миссия
          </h1>

          <p className="z-30 md:mt-4 mt-6 md:text-base text-xs text-white">
            Nextmark - это молодая, амбициозная,<br/>
            креативная команда специалистов любящие <br/>
            свою работу и готовые реализовать ваши мечты <br/>
            в реальность.
          </p>
        </div>
      </div>

      <GradientText className="hidden md:block" text="Наша команда" />

      <div className="md:container md:mx-auto md:px-0 p-4 justify-between flex flex-wrap pt-12">
        {members.map((member) => (
          <TeamMemberCard {...member} />
        ))}
      </div>

      <div className="md:block hidden container text-5xl mx-auto my-36">
        <h1 className="text-orange">Мы готовы обсудить</h1>
        <h1 className="text-white mt-2 mb-36">ваш проект, а вы?</h1>
        <ContactUsButton />
      </div>

      <div className="flex justify-center md:hidden mb-20 mt-4">
        <ContactUsButton />
      </div>
    </BaseLayout>
  )
}

const members: TeamMember[] = [
  {
    title: 'Мадина Мавлонова',
    jobTitle: 'Арт Директор',
    img: staff
  },
  {
    title: 'Жавохир Касимов',
    jobTitle: 'Арт Директор',
    img: staff
  },
  {
    title: 'Мадина Мавлонова',
    jobTitle: 'Арт Директор',
    img: staff
  },
  {
    title: 'Мадина Мавлонова',
    jobTitle: 'Арт Директор',
    img: staff
  },
  {
    title: 'Жавохир Касимов',
    jobTitle: 'Программист',
    img: staff
  },
  {
    title: 'Жавохир Касимов',
    jobTitle: 'wefwef',
    img: staff
  },
]

