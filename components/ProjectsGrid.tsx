import Image, {StaticImageData} from 'next/image'
import ProjectCard from './ProjectCard';
import arrowRight from '../public/arrorRight.svg'
import Link from 'next/link';
import {projects} from './constants';

export type Project = {
  title: string
  description: string
  longDescription: string[]
  services: string
  img: StaticImageData
  imgList: StaticImageData[]
}

export type Projects =  'taxi' | 'oqz' | 'mandarin' | 'cityLife' | 'trinity' | 'styx' | 'kango' | 'hamkor'

export default function ProjectsGrid() {
  return (
    <>
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
            <h1 className="text-2xl font-semibold text-white w-full mb-2">
              ПРОЕКТЫ
            </h1>
            <p className="text-white w-full">
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
    </>
  )
}
