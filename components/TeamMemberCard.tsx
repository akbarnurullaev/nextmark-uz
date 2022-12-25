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
      <div className="w-[calc(33%_-_1rem)] mb-16">
        <Image className="h-128 object-cover" src={img} alt={title}/>

        <h1 className="text-white text-2xl mt-4">{title}</h1>
        <p className="text-orange">{jobTitle}</p>
      </div>
    )
  }

  return (
    <Link className="contents" href={link}>
      <div className="w-[calc(33%_-_1rem)] mb-16">
        <Image className="h-128 object-cover" src={img} alt={title}/>

        <h1 className="text-white text-2xl mt-4">{title}</h1>
        <p className="text-orange">{jobTitle}</p>
      </div>
    </Link>
  );
}
