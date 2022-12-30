import Image, {StaticImageData} from 'next/image';
import Link from 'next/link';

export type TeamMember = {
    title: string
    jobTitle: string
    img: StaticImageData
    link?: string
}

export default function TeamMemberCard({ img, title, jobTitle, link }: TeamMember) {
  if (!link) {
    return (
      <div className="md:w-[calc(33%_-_1rem)] w-full md:mb-16 mb-8">
        <Image className="md:h-128 h-72 object-cover" src={img} alt={title}/>

        <h1 className="text-white md:text-2xl text-lg mt-4">{title}</h1>
        <p className="text-orange md:text-base text-sm">{jobTitle}</p>
      </div>
    )
  }

  return (
    <Link className="contents" href={link}>
      <div className="md:w-[calc(33%_-_1rem)] w-full md:mb-16 mb-8">
        <Image className="md:h-128 h-80 object-cover" src={img} alt={title}/>

        <h1 className="text-white md:text-2xl text-lg mt-4">{title}</h1>
        <p className="text-orange md:text-base text-sm">{jobTitle}</p>
      </div>
    </Link>
  );
}
