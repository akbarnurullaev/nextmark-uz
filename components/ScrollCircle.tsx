import {motion, useScroll, useSpring} from 'framer-motion';
import Image from 'next/image';
import scrollDown from '../public/scroll-down.svg';

type ScrollCircleProps = {
  motionClassName?: string,
  imageClassName?: string
}

export default function ScrollCircle({ motionClassName, imageClassName }: ScrollCircleProps) {
  const { scrollY } = useScroll();
  const rotateY = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div style={{ rotate: rotateY }} className={motionClassName}>
      <Image src={scrollDown} className={imageClassName} alt="down scroller" />
    </motion.div>
  );
}
