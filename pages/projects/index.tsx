import BaseLayout from '../../components/layouts/BaseLayout';
import Image from 'next/image';
import nextItem from '../../public/next-item.svg';
import ProjectCard, {ProjectCardMobile} from '../../components/ProjectCard';
import Link from 'next/link';
import ContactUsButton from '../../components/base/ContactUsButton';
import {projectsList} from '../../components/constants';

export default function Projects() {
  return (
    <BaseLayout>
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

      {/*<article className="md:hidden flex container flex-wrap justify-between mx-auto">*/}
      {/*  {projectsList.map((project, index) => (*/}
      {/*    <Link className="contents" href={`/projects/${project.slug}`}>*/}
      {/*      <ProjectCardMobile containerClass={`w-3/6 ${[4, 5, 6].includes(index) ? 'w-[calc(33%_-_1rem)]' : index === 7 ? 'w-full' : 'w-[calc(50%_-_1rem)]'} mb-8`} imgClass="h-144 w-full object-cover" src={project.img} alt={project.title} {...project} />*/}
      {/*    </Link>*/}
      {/*  ))}*/}
      {/*</article>*/}

      <div className="flex justify-center mb-44 mt-18">
        <ContactUsButton className="mt-8"/>
      </div>
    </BaseLayout>
  )
}
