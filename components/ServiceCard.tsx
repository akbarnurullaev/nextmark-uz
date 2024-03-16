import topRightArrow from "../public/topRightArrow.svg";
import Image from "next/image";

type ServiceCardProps = {
  title: string;
  description: string;
  link?: string;
  isLast?: boolean;
};
export default function ServiceCard({
  title,
  description,
  link,
  isLast,
}: ServiceCardProps) {
  return (
    <div
      className={`group min-[768px]:px-20 max-[768px]:px-4 flex justify-between align-center border-t-2  border-lightGrey duration-100 ${
        isLast && "border-b-2"
      }`}
    >
      <div className="min-[768px]:w-8/12 py-8">
        <h2 className="text-cream  duration-100 font-bold mobile:text-5xl text-4xl">
          {title}
          {/* <span className="text-orange none hidden group-hover:inline duration-100">&#8226;</span> */}
        </h2>
        <h2 className="text-lightGrey mt-2">{description}</h2>
      </div>

      <div className="flex max-[768px]:hidden mobile:text-lg text-sm w-fit h-fit bg-orange ml-12 my-6 h-18 opacity-0 group-hover:opacity-100 duration-100">
        <Image src={topRightArrow} alt="cta" />
      </div>
    </div>
  );
}
