import Image, {StaticImageData} from 'next/image';

type ProjectCardProps = {
    title: string
    description: string
    src: StaticImageData
    alt: string
    containerClass?: string
    imgClass?: string
}

export default function ProjectCard({ src, alt, title, description, containerClass, imgClass }: ProjectCardProps) {
  return (
    <div className={`${containerClass} relative project-card cursor-pointer`}>
      <Image className={`${imgClass} project-card-image`} src={src} alt={alt}/>

      <div className="info-block">
        <div className="px-8 pb-8">
          <h1 className="xl:text-2xl lg:text-xl font-bold uppercase text-white w-full">{title}</h1>
          {/*<p className="mt-2 xl:text-base lg:text-sm text-white w-full">{description}</p>*/}
        </div>
      </div>
    </div>
  )
}

export function ProjectCardMobile({ src, alt, title, description, containerClass, imgClass }: ProjectCardProps) {
  return (
    <div className={`${containerClass} mb-8 w-full relative project-card cursor-pointer`}>
      <Image className={`${imgClass} h-80 object-cover project-card-image`} src={src} alt={alt}/>

      <h1 className="mt-2 font-bold uppercase text-white w-full">{title}</h1>
      {/*<p className="mt-1 text-xs text-lightCream w-full">{description}</p>*/}
    </div>
  )
}
