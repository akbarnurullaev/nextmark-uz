import BaseLayout from '../../components/layouts/BaseLayout';
import Image from 'next/image';
import {useRouter} from 'next/router';
import {Project, Projects} from '../../components/ProjectsGrid';
import TeamMemberCard from '../../components/TeamMemberCard';
import {projects, projectsList} from '../../components/constants';

export default function ProjectDetail() {
  const router = useRouter();
  const project = projects[router.query.slug as Projects]

  const getMultipleRandom = (arr: (Project & { slug: string })[], num: number) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  }

  return (
    <BaseLayout>
      <div className="md:h-5/6 h-96 md:pt-128 md:pt-56 pt-40 md:container md:mx-auto md:px-0 px-4 flex md:flex-nowrap flex-wrap items-start justify-between">
        <div className="md:w-3/6 w-full">
          <h2 className="md:text-5xl text-2xl uppercase text-white font-bold">
            {project?.title}
          </h2>
          <p className="italic md:mt-4 md:text-base text-xs mt-2 text-white">
            {project?.services}
          </p>
        </div>

        <div className="md:w-3/6 md:mt-0 mt-10 w-full">
          {project?.longDescription.map((p) => (
            <p className="text-white md:text-base text-xs md:mb-12 mb-4">{p}</p>
          ))}
        </div>
      </div>

      <div className="flex md:mt-0 md:mt-40 mt-20 flex-wrap justify-between md:container md:mx-auto md:px-0 px-4 md:mb-48 mb-24">
        {project?.imgList.map((img, index) => (
          <Image className={`md:mb-8 mb-4 object-cover ${[2, 3, 5, 6].includes(index) ? 'md:w-[calc(50%_-_1rem)] w-full' : 'w-full'}`} src={img} alt={img.src}/>
        ))}
      </div>

      <h3 className="md:container md:mx-auto md:px-0 px-4 text-white uppercase font-semibold text-2xl">Другие проекты</h3>

      <div className="md:container md:mx-auto md:px-0 px-4 justify-between flex flex-wrap pt-12">
        {getMultipleRandom(projectsList.filter((p) => p.slug !== router.query.slug), 3).map((project) => (
          <TeamMemberCard link={project.slug} img={project.img} title={project.title} jobTitle={project.services} />
        ))}
      </div>
    </BaseLayout>
  )
}
