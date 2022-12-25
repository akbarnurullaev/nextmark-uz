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
      <div className="h-5/6 pt-128 container flex items-start justify-between mx-auto">
        <div className="w-3/6">
          <h2 className="text-5xl uppercase text-white font-bold">
            {project?.title}
          </h2>
          <p className="italic mt-4 text-white">
            {project?.services}
          </p>
        </div>

        <div className="w-3/6">
          {project?.longDescription.map((p) => (
            <p className="text-white mb-12">{p}</p>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-between container mx-auto mb-48">
        {project?.imgList.map((img, index) => (
          <Image className={`mb-8 object-cover ${[2, 3, 5, 6].includes(index) ? 'w-[calc(50%_-_1rem)]' : 'w-full'}`} src={img} alt={img.src}/>
        ))}
      </div>

      <h3 className="container mx-auto text-white uppercase font-semibold text-2xl">Другие проекты</h3>

      <div className="container mx-auto justify-between flex flex-wrap pt-12">
        {getMultipleRandom(projectsList.filter((p) => p.slug !== router.query.slug), 3).map((project) => (
          <TeamMemberCard link={project.slug} img={project.img} title={project.title} jobTitle={project.services} />
        ))}
      </div>
    </BaseLayout>
  )
}
