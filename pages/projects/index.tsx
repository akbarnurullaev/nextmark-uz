import BaseLayout from '../../components/layouts/BaseLayout';
import Image from 'next/image';
import nextItem from '../../public/next-item.svg';
import ProjectCard, {ProjectCardMobile} from '../../components/ProjectCard';
import Link from 'next/link';
import ContactUsButton from '../../components/base/ContactUsButton';
import {projectsList} from '../../components/constants';

function Blurry({ className }: { className?: string }) {
  return (
    <svg className={className} width="318" height="967" viewBox="0 0 318 967" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_f_268_410)">
        <path d="M-218.926 332.005C-306.926 378.805 -297.259 438.505 -281.426 462.505C-383.426 531.005 -301.926 641.005 -218.926 662.005C-135.926 683.005 -108.926 630.505 -42.4259 545.505C24.0741 460.505 40.5741 392.005 -21.9259 348.505C-84.4259 305.005 -108.926 273.505 -218.926 332.005Z" fill="#E9562A"/>
      </g>
      <defs>
        <filter id="filter0_f_268_410" x="-629" y="0" width="946.184" height="966.633" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_268_410"/>
        </filter>
      </defs>
    </svg>

  )
}

export default function Projects() {
  return (
    <BaseLayout>
      <Blurry className="absolute top-24"/>
      <div className="md:h-5/6 h-96 w-full md:pt-96 md:pb-64 md:container md:mx-auto px-4 uppercase flex flex-wrap items-center justify-between">
        <h1 className="z-10 md:-mt-14 -mt-2 xl:text-8xl lg:text-7xl text-4xl text-white font-extrabold">
            проекты <Image className="inline rotate-45 xl:w-24 xl:-mt-4 lg:w-14 w-12 ml-2" src={nextItem} alt="next" />
        </h1>

        <h1 className="absolute text-transparent-lightGrey-outlined md:ml-8 ml-2 z-0 xl:text-8xl lg:text-7xl text-4xl text-white font-extrabold">
            проекты
        </h1>
      </div>

      <div className="md:flex hidden container flex-wrap justify-between mx-auto">
        {projectsList.map((project, index) => (
          <Link className="contents" href={`/projects/${project.slug}`}>
            <ProjectCard containerClass={`w-3/6 ${[4, 5, 6].includes(index) ? 'w-[calc(33%_-_1rem)]' : index === 7 ? 'w-full' : 'w-[calc(50%_-_1rem)]'} mb-8`} imgClass="h-144 w-full object-cover" src={project.img} alt={project.title} {...project} />
          </Link>
        ))}
      </div>

      <div className="md:hidden block px-4 -mt-20">
        {projectsList.map((project) => (
          <Link href={`/projects/${project.slug}`}>
            <ProjectCardMobile src={project.img} alt={''} {...project}/>
          </Link>
        ))}
      </div>

      <div className="flex justify-center mb-44 mt-18">
        <ContactUsButton className="mt-8"/>
      </div>
    </BaseLayout>
  )
}
