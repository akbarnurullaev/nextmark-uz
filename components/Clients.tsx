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

      <div className="bg-darkGrey mt-14">
        <div className="flex flex-wrap container mx-auto py-14 px-12">
          {images.map((image) => (
            <div className="w-1/5 p-14 opacity-50">
              <Image src={image} alt="wef"/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const images = [abb, dolcitta, city, favorite, gosht, hamkor, imzo, kango, lekar, mandarin, oqz, sos, styx, team, uzbic]
