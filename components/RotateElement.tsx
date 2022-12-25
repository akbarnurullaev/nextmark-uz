import {motion, useScroll, useSpring} from 'framer-motion';
import Image from 'next/image';
import scrollDown from '../public/scroll-down.svg';

type RotateElementProps = {
    className?: string
}
export default function RotateElement({ className = '' }: RotateElementProps) {
  const { scrollY } = useScroll();
  const rotateY = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div style={{ rotate: rotateY }} className={`w-fit z-30 ${className}`}>
      <Image src={scrollDown} className="inline w-52" alt="down scroller" />
    </motion.div>
  );
}
