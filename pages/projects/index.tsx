import BaseLayout from '../../components/layouts/BaseLayout';
import Image from 'next/image';
import nextItem from '../../public/next-item.svg';
import ProjectCard from '../../components/ProjectCard';
import Link from 'next/link';
import ContactUsButton from '../../components/base/ContactUsButton';
import {projectsList} from '../../components/constants';

export default function Projects() {
  return (
    <BaseLayout>
      <div className="h-5/6 pt-96 pb-64 container uppercase flex flex-wrap items-center justify-between mx-auto">
        <h1 className="z-10 -mt-14 text-8xl text-white font-extrabold">
            проекты <Image className="inline rotate-45 w-24 ml-8 mt-8" src={nextItem} alt="next" />
        </h1>

        <h1 className="absolute text-transparent-lightGrey-outlined ml-8 z-0 text-8xl text-white font-extrabold">
            проекты
        </h1>
      </div>

      <article className="container flex flex-wrap justify-between mx-auto">
        {projectsList.map((project, index) => (
          <Link className="contents" href={`/projects/${project.slug}`}>
            <ProjectCard containerClass={`w-3/6 ${[4, 5, 6].includes(index) ? 'w-[calc(33%_-_1rem)]' : index === 7 ? 'w-full' : 'w-[calc(50%_-_1rem)]'} mb-8`} imgClass="h-144 w-full object-cover" src={project.img} alt={project.title} {...project} />
          </Link>
        ))}
      </article>

      <div className="flex justify-center mb-44 mt-18">
        <ContactUsButton className="mt-8"/>
      </div>
    </BaseLayout>
  )
}
