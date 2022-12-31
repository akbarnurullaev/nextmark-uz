import Image from 'next/image';
import nextItem from '../../public/next-item.svg';
import marketingCube from '../../public/3D-cube.png';
import ScrollCircle from '../ScrollCircle';

function Blurry({ className }: { className?: string }) {
  return (
    <svg className={`${className} sm:w-auto w-full`} width="523" height="1045" viewBox="0 0 523 1045" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_f_28_12)">
        <path d="M-100.026 421.387C-183.149 452.661 -174.018 492.555 -159.062 508.593C-255.41 554.368 -178.426 627.875 -100.026 641.908C-21.6249 655.941 3.87883 620.858 66.6938 564.057C129.509 507.257 145.094 461.482 86.0578 432.413C27.0212 403.345 3.87885 382.295 -100.026 421.387Z" fill="#E9562A"/>
      </g>
      <defs>
        <filter id="filter0_f_28_12" x="-604" y="0" width="1127" height="1045" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_28_12"/>
        </filter>
      </defs>
    </svg>
  )
}

export default function Header() {
  return (
    <>
      <Blurry className="absolute top-48"/>
      <div className="sm:h-screen px-4 h-128 md:container md:mx-auto flex flex-wrap items-center justify-between">
        <div className="max-tablet:hidden">
          <h1 className="absolute p-4 z-10 -mt-44 xl:text-8xl lg:text-7xl text-5xl text-white font-extrabold">
            МАРКЕТИНГОВОЕ АГЕНСТВО <Image className="hidden sm:inline w-10 xl:w-24 xl:-mt-4 lg:w-14 lg:-mt-2" src={nextItem} alt="next" /> ПОЛНОГО
            <br/>ЦИКЛА
          </h1>

          <h1 className="absolute p-4 xl:text-8xl lg:text-7xl text-5xl text-transparent-white-outlined z-40 -mt-44 text-white font-extrabold">
            МАРКЕТИНГОВОЕ АГЕНСТВО <Image className="hidden sm:inline w-10 xl:w-24 xl:-mt-4 lg:w-14 lg:-mt-2" src={nextItem} alt="next" /> ПОЛНОГО
            <br/>ЦИКЛА
          </h1>
        </div>

        <div className="min-[640px]:hidden">
          <h1 className="absolute z-10 -mt-24 xl:text-8xl lg:text-7xl mobile:text-5xl sm-mobile:text-4xl text-3xl text-white font-extrabold">
            МАРКЕТИНГО-<br/> ВОЕ АГЕНСТВО <Image className="hidden sm:inline w-10 xl:w-24 xl:-mt-4 lg:w-14 lg:-mt-2" src={nextItem} alt="next" /> ПОЛНОГО
            <br/>ЦИКЛА
          </h1>

          <h1 className="absolute xl:text-8xl lg:text-7xl mobile:text-5xl sm-mobile:text-4xl text-3xl text-transparent-white-outlined z-40 -mt-24 text-white font-extrabold">
            МАРКЕТИНГО-<br/> ВОЕ АГЕНСТВО <Image className="hidden sm:inline w-10 xl:w-24 xl:-mt-4 lg:w-14 lg:-mt-2" src={nextItem} alt="next" /> ПОЛНОГО
            <br/>ЦИКЛА
          </h1>
        </div>

        <Image className="absolute z-20 mobile:right-10 right-4 sm:w-3/12 w-5/12" src={marketingCube} alt="marketing cube" />
      </div>

      <div className="container mx-auto hidden min-[768px]:block">
        <ScrollCircle motionClassName="w-fit z-30 relative absolute xl:bottom-56 lg:bottom-64" imageClassName="inline xl:w-52 lg:w-36" />
      </div>

      <Blurry className="absolute top-288 md:hidden block"/>
    </>
  )
}
