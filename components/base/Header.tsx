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
      <div className="h-screen container flex flex-wrap items-center justify-between mx-auto">
        <h1 className="z-10 -mt-24 text-8xl text-white font-extrabold">
          МАРКЕТИНГОВОЕ АГЕНСТВО <Image className="inline w-24 -mt-4" src={nextItem} alt="next" /> ПОЛНОГО
          <br/>ЦИКЛА
        </h1>

        <h1 className="absolute text-transparent-white-outlined z-40 -mt-24 text-8xl text-white font-extrabold">
          МАРКЕТИНГОВОЕ АГЕНСТВО <Image className="inline w-24 -mt-4" src={nextItem} alt="next" /> ПОЛНОГО
          <br/>ЦИКЛА
        </h1>

        <Image className="absolute z-20 right-10 w-3/12" src={marketingCube} alt="marketing cube" />
      </div>

      <div className="container mx-auto">
        <motion.div style={{ rotate: rotateY }} className="w-fit z-30 relative absolute bottom-56">
          <Image src={scrollDown} className="inline w-52" alt="down scroller" />
        </motion.div>
      </div>
    </>
  )
}
