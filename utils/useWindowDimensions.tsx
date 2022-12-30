import {useEffect, useState} from 'react';

export default function useWindowDimensions() {
  const [isMobile, setIsMobile] = useState(false)
  const [windowSize, setWindowSize] = useState<{ width?: number, height?: number}>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setIsMobile(false)
      }
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return { isMobile, ...windowSize };
}
