import topRightArrow from '../public/topRightArrow.svg'
import Image from'next/image'

type ServiceCardProps = {
    title: string
    description: string
    link?: string
    isLast?: boolean
}
export default function ServiceCard({ title, description, link, isLast }: ServiceCardProps) {
  return (
    <div className={`group px-20 flex justify-between align-center border-t-2 hover:bg-grey border-lightGrey duration-100 ${isLast && 'border-b-2'}`}>
      <div className="w-8/12 py-8">
        <h2 className="text-cream group-hover:text-white duration-100 font-bold text-5xl">
          {title} <span className="text-orange none hidden group-hover:inline duration-100">&#8226;</span>
        </h2>
        <h2 className="text-lightGrey mt-2">{description}</h2>
      </div>

      <div className="flex w-fit h-fit bg-orange ml-12 my-6 h-18 opacity-0 group-hover:opacity-100 duration-100">
        <Image src={topRightArrow} alt="cta"/>
      </div>
    </div>
  )
}
