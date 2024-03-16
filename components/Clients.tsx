import Image from "next/image";
// import abb from "../public/brands/abb.png";
// import dolcitta from "../public/brands/dolcitta.png";
// import favorite from "../public/brands/favorite.png";
// import gosht from "../public/brands/gosht.png";
// import hamkor from "../public/brands/hamkor.png";
import city from "../public/brands/city.png";
import imzo from "../public/brands/imzo.png";
import kango from "../public/brands/kango.png";
import lekar from "../public/brands/lekar.png";
import mandarin from "../public/brands/mandarin.png";
import oqz from "../public/brands/oqz.png";
import sos from "../public/brands/sos.png";
import styx from "../public/brands/styx.png";
import team from "../public/brands/team.png";
import uzbic from "../public/brands/uzbic.png";
import arton from "../public/brands/arton.png";
import qand from "../public/brands/qand.png";
import artikul from "../public/brands/artikul.png";
import simma from "../public/brands/simma.png";
import shafran from "../public/brands/shafran.png";
import maxproduct from "../public/brands/maxproduct.png";
import modera from "../public/brands/modera.png";
import barbican from "../public/brands/barbican.svg";
import ais from "../public/brands/ais.png";
import mechta from "../public/brands/mechta.svg";

import GradientText from "./base/GradientText";

export default function Clients() {
  return (
    <div>
      <GradientText text="наши клиенты" />

      <div className="lg:bg-darkGrey mt-14">
        <div className="flex flex-wrap min-[768px]:container min-[768px]:mx-auto lg:py-14 xl:px-12 lg:px-0 px-4">
          {images.map((image) => (
            <div className="lg:w-1/5 w-2/6 xl:p-14 lg:p-8 p-4 opacity-50 flex items-center justify-center">
              <Image src={image} alt="wef" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const images = [
  imzo,
  arton,
  qand,
  // hamkor,
  // favorite,
  uzbic,
  lekar,
  artikul,
  // abb,
  sos,
  team,
  styx,
  oqz,
  simma,
  // gosht,
  city,
  mandarin,
  kango,
  shafran,
  // dolcitta,
  maxproduct,
  modera,
  barbican,
  ais,
  mechta,
];

// Arton
// Qand
// AAK
// Simma Hotel
// Shafran

// Maxproduct
// Modera Towers
// Barbican
// AIS
// Mechta
