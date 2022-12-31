import BaseLayout from '../../components/layouts/BaseLayout';
import Image from 'next/image';
import {useRouter} from 'next/router';
import {Project, Projects} from '../../components/ProjectsGrid';
import TeamMemberCard from '../../components/TeamMemberCard';
import {projects, projectsList} from '../../components/constants';

function Blurry({ className }: { className?: string }) {
  return (
    <svg className={className} width="473" height="808" viewBox="0 0 473 808" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_f_153_132)">
        <path d="M410.074 173.005C322.074 219.805 331.741 279.505 347.574 303.505C245.574 372.005 327.074 482.005 410.074 503.005C493.074 524.005 520.074 471.505 586.574 386.505C653.074 301.505 669.574 233.005 607.074 189.505C544.574 146.005 520.074 114.505 410.074 173.005Z" fill="#E9562A"/>
      </g>
      <defs>
        <filter id="filter0_f_153_132" x="0" y="-159" width="946.184" height="966.633" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_153_132"/>
        </filter>
      </defs>
    </svg>
  )
}

export default function ProjectDetail() {
  const router = useRouter();
  const project = projects[router.query.slug as Projects]

  const getMultipleRandom = (arr: (Project & { slug: string })[], num: number) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  }

  return (
    <BaseLayout>
      <Blurry className="absolute right-0 top-4 md:opacity-100 opacity-50"/>

      <div className="md:h-5/6 h-auto md:pt-128 pt-40 md:container md:mx-auto md:px-0 px-4 flex md:flex-nowrap flex-wrap items-start justify-between">
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

      <div className="flex md:mt-0 md:mt-40 mt-16 flex-wrap justify-between md:container md:mx-auto md:px-0 px-4 md:mb-48 mb-24">
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
