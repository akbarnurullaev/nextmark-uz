import Image, {StaticImageData} from 'next/image'
import ProjectCard, {ProjectCardMobile} from './ProjectCard';
import arrowRight from '../public/arrorRight.svg'
import Link from 'next/link';
import {projects, projectsList} from './constants';
import ScrollCircle from './ScrollCircle';

export type Project = {
  title: string
  description: string
  longDescription: string[]
  services: string
  img: StaticImageData
  imgList: StaticImageData[]
}

export type Projects =  'taxi' | 'oqz' | 'mandarin' | 'cityLife' | 'trinity' | 'styx' | 'kango' | 'hamkor'

function Blurry({ className }: { className?: string }) {
  return (
    <svg className={className} width="473" height="967" viewBox="0 0 473 967" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_f_28_11)">
        <path d="M410.074 332.005C322.074 378.805 331.741 438.505 347.574 462.505C245.574 531.005 327.074 641.005 410.074 662.005C493.074 683.005 520.074 630.505 586.574 545.505C653.074 460.505 669.574 392.005 607.074 348.505C544.574 305.005 520.074 273.505 410.074 332.005Z" fill="#E9562A"/>
      </g>
      <defs>
        <filter id="filter0_f_28_11" x="0" y="0" width="946.184" height="966.633" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_28_11"/>
        </filter>
      </defs>
    </svg>
  )
}

export default function ProjectsGrid() {
  return (
    <div className="mb:mt-0 -mt-20">
      <Blurry className="absolute right-0 hidden md:block" />
      <ProjectsGridDesktop/>
      <ProjectsGridMobile/>
    </div>
  )
}

function ProjectsGridDesktop() {
  return (
    <div className="max-[768px]:hidden">
      <div className="container flex mx-auto -mt-80">
        <div className="w-8/12 mr-6">
          <Link href="/projects/taxi">
            <ProjectCard
              imgClass="w-full h-full"
              title={projects['taxi'].title}
              description={projects['taxi'].description}
              src={projects['taxi'].img}
              alt={projects['taxi'].title}
            />
          </Link>

          <div className="flex mt-6">
            <Link className="mr-6" href="/projects/oqz">
              <ProjectCard
                imgClass="w-full"
                title={projects['oqz'].title}
                description={projects['oqz'].description}
                src={projects['oqz'].img}
                alt={projects['oqz'].title}
              />
            </Link>


            <Link href="/projects/mandarin">
              <ProjectCard
                imgClass="w-full"
                title={projects['mandarin'].title}
                description={projects['mandarin'].description}
                src={projects['mandarin'].img}
                alt={projects['mandarin'].title}
              />
            </Link>
          </div>
        </div>

        <div className="flex flex-col justify-between w-4/12">
          <div>
            <h1 className="xl:text-2xl lg:text-xl font-semibold text-white w-full mb-2">
              ПРОЕКТЫ
            </h1>
            <p className="xl:text-base lg:text-sm text-white w-full">
              Мы создаем айдентику, графику и <br/>
              занимаемся маркетингом. Nextmark это следующая точка вашего бизнеса и мы<br/>
              поможем подняться на следующий <br/>
              уровень.
            </p>
          </div>

          <Link href="/projects/cityLife">
            <ProjectCard
              imgClass="w-full"
              title={projects['cityLife'].title}
              description={projects['cityLife'].description}
              src={projects['cityLife'].img}
              alt={projects['cityLife'].title}
            />
          </Link>
        </div>
      </div>

      <Link href="/projects">
        <h1 className="container hover:text-orange duration-200 mt-8 text-2xl text-white mx-auto text-right uppercase">Все проекты <Image className="inline" src={arrowRight} alt="arrow right"/></h1>
      </Link>
    </div>
  )
}

function ProjectsGridMobile() {
  return (
    <div className="hidden container mx-auto max-[768px]:inline">
      <div className="px-4 container">
        <h1 className="xl:text-2xl lg:text-xl text-lg font-bold text-white w-full mb-2">
          ПРОЕКТЫ
        </h1>
        <p className="xl:text-base lg:text-sm text-sm text-white w-full">
          Мы создаем айдентику, графику и
          занимаемся маркетингом. Nextmark это следующая точка вашего бизнеса и мы
          поможем подняться на следующий
          уровень.
        </p>
      </div>

      <div className="">
        <ScrollCircle motionClassName="w-fit z-30 relative absolute top-12" imageClassName="inline w-28"/>
      </div>

      <div className="px-4">
        {projectsList.slice(0, 3).map((project) => (
          <Link href={`/projects/${project.slug}`}>
            <ProjectCardMobile src={project.img} alt={''} {...project}/>
          </Link>
        ))}
      </div>

      <Link href="/projects">
        <h1 className="px-4 hover:text-orange duration-200 mt-8 text-white uppercase">Все проекты <Image className="inline" src={arrowRight} alt="arrow right"/></h1>
      </Link>
    </div>
  )
}

