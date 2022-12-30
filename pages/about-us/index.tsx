import BaseLayout from '../../components/layouts/BaseLayout';

import Image from 'next/image';
import fancyElement from '../../public/fancy-element.svg';
import staff from '../../public/staff/staff.jpg';
import RotateElement from '../../components/RotateElement';
import GradientText from '../../components/base/GradientText';
import TeamMemberCard, {TeamMember} from '../../components/TeamMemberCard';
import ContactUsButton from '../../components/base/ContactUsButton';

export default function Header() {
  return (
    <BaseLayout>
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
        <RotateElement className="relative absolute bottom-56"/>
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

      <GradientText text="Наша команда" />

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

