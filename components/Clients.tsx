import Image from 'next/image'
import abb from '../public/brands/abb.png'
import dolcitta from '../public/brands/dolcitta.png'
import city from '../public/brands/city.png'
import favorite from '../public/brands/favorite.png'
import gosht from '../public/brands/gosht.png'
import hamkor from '../public/brands/hamkor.png'
import imzo from '../public/brands/imzo.png'
import kango from '../public/brands/kango.png'
import lekar from '../public/brands/lekar.png'
import mandarin from '../public/brands/mandarin.png'
import oqz from '../public/brands/oqz.png'
import sos from '../public/brands/sos.png'
import styx from '../public/brands/styx.png'
import team from '../public/brands/team.png'
import uzbic from '../public/brands/uzbic.png'
import GradientText from './base/GradientText';

export default function Clients() {
  return (
    <div>
      <GradientText text="наши клиенты"/>

      <div className="lg:bg-darkGrey mt-14">
        <div className="flex flex-wrap min-[768px]:container min-[768px]:mx-auto lg:py-14 xl:px-12 lg:px-0 px-4">
          {images.map((image) => (
            <div className="lg:w-1/5 w-2/6 xl:p-14 lg:p-8 p-4 opacity-50 flex items-center justify-center">
              <Image src={image} alt="wef"/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const images = [imzo, hamkor, favorite, uzbic, lekar, abb, sos, team, styx, oqz, gosht, city, mandarin, kango, dolcitta]
