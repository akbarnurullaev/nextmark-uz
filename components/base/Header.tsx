import Image from 'next/image';
import nextItem from '../../public/next-item.svg';
import marketingCube from '../../public/3D-cube.png';
import {motion, useScroll, useSpring} from 'framer-motion';
import scrollDown from '../../public/scroll-down.svg';

export default function Header() {
  const { scrollY } = useScroll();
  const rotateY = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <div className="sm:h-screen px-4 h-128 md:container md:mx-auto flex flex-wrap items-center justify-between">
        <div className="max-tablet:hidden">
          <h1 className="absolute p-4 z-10 -mt-24 xl:text-8xl lg:text-7xl text-5xl text-white font-extrabold">
            МАРКЕТИНГОВОЕ АГЕНСТВО <Image className="hidden sm:inline w-10 xl:w-24 xl:-mt-4 lg:w-14 lg:-mt-2" src={nextItem} alt="next" /> ПОЛНОГО
            <br/>ЦИКЛА
          </h1>

          <h1 className="absolute p-4 xl:text-8xl lg:text-7xl text-5xl text-transparent-white-outlined z-40 -mt-24 text-white font-extrabold">
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
        <motion.div style={{ rotate: rotateY }} className="w-fit z-30 relative absolute xl:bottom-56 lg:bottom-64">
          <Image src={scrollDown} className="inline xl:w-52 lg:w-36" alt="down scroller" />
        </motion.div>
      </div>
    </>
  )
}
