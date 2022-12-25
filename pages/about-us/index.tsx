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
      <div className="h-screen container flex flex-wrap items-center justify-between mx-auto">
        <h1 className="z-10 uppercase -mt-24 text-8xl text-white font-extrabold">
            о нас
        </h1>

        <h1 className="absolute uppercase text-transparent-white-outlined z-40 -mt-24 text-8xl text-white font-extrabold">
            о нас
        </h1>

        <p className="absolute z-30 mt-32 text-white">
          Nextmark - это молодая, амбициозная,<br/>
          креативная команда специалистов любящие <br/>
          свою работу и готовые реализовать ваши мечты <br/>
          в реальность.
        </p>

        <Image className="absolute z-20 right-10 w-8/12" src={fancyElement} alt="marketing cube" />
      </div>

      <div className="container mx-auto flex justify-end">
        <RotateElement className="relative absolute bottom-56"/>
      </div>

      <div className="container -mt-44 mb-44 flex justify-end mx-auto">
        <div>
          <h1 className="z-10 uppercase text-8xl text-white font-extrabold">
            наша
          </h1>
          <h1 className="z-10 uppercase text-8xl text-orange font-extrabold">
            миссия
          </h1>

          <p className="z-30 mt-4 text-white">
            Nextmark - это молодая, амбициозная,<br/>
            креативная команда специалистов любящие <br/>
            свою работу и готовые реализовать ваши мечты <br/>
            в реальность.
          </p>
        </div>
      </div>

      <GradientText text="Наша команда" />

      <div className="container mx-auto justify-between flex flex-wrap pt-12">
        {members.map((member) => (
          <TeamMemberCard {...member} />
        ))}
      </div>

      <div className="container text-5xl mx-auto my-36">
        <h1 className="text-orange">Мы готовы обсудить</h1>
        <h1 className="text-white mt-2 mb-36">ваш проект, а вы?</h1>
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

