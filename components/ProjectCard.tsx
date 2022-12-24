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

      <div>
        <div className="px-8 pb-8">
          <h1 className="text-2xl text-white w-full">{title}</h1>
          <p className="mt-2 text-cream w-full">{description}</p>
        </div>
      </div>
    </div>
  )
}
