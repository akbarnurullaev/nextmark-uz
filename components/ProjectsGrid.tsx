import Image from 'next/image'
import ProjectCard from './ProjectCard';
import taxi from '../public/taxi.jpg'
import oqz from '../public/oqz.jpg'
import mandarin from '../public/mandarin.jpg'
import cityLife from '../public/city-life.png'
import arrowRight from '../public/arrorRight.svg'

export default function ProjectsGrid() {
  return (
    <>
      <div className="container flex mx-auto -mt-80">
        <div className="w-8/12 mr-6">
          <ProjectCard
            imgClass="w-full h-full"
            title={projects['taxi'].title}
            description={projects['taxi'].description}
            src={projects['taxi'].img}
            alt={projects['taxi'].title}
          />

          <div className="flex mt-6">
            <ProjectCard
              containerClass="mr-6"
              imgClass="w-full"
              title={projects['oqz'].title}
              description={projects['oqz'].description}
              src={projects['oqz'].img}
              alt={projects['oqz'].title}
            />


            <ProjectCard
              imgClass="w-full"
              title={projects['mandarin'].title}
              description={projects['mandarin'].description}
              src={projects['mandarin'].img}
              alt={projects['mandarin'].title}
            />
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

          <ProjectCard
            imgClass="w-full"
            title={projects['cityLife'].title}
            description={projects['cityLife'].description}
            src={projects['cityLife'].img}
            alt={projects['cityLife'].title}
          />
        </div>
      </div>

      <a href="">
        <h1 className="container mt-8 text-2xl text-white mx-auto text-right uppercase">Все проекты <Image className="inline" src={arrowRight} alt="arrow right"/></h1>
      </a>
    </>
  )
}

const projects = {
  taxi: {
    title: 'OQZ Metall',
    description: 'OQZ Metall',
    img: taxi
  },
  oqz: {
    title: 'OQZ Metall',
    description: 'OQZ Metall',
    img: oqz
  },
  mandarin: {
    title: 'OQZ Metall',
    description: 'OQZ Metall',
    img: mandarin
  },
  cityLife: {
    title: 'CITYLIFE',
    description: 'Жилой комплекс премиум класса. Один из единичных в городе с трехуровневыми квартирами с мансардой.',
    img: cityLife
  }
}
