import taxi from "../public/taxi.jpg";
import mandarin from "../public/mandarin.jpg";
import oqz from "../public/oqz.jpg";
import cityLife from "../public/city-life.jpg";

import kango1 from "../public/kango/1.jpg";
import kango2 from "../public/kango/2.jpg";
import kango3 from "../public/kango/3.jpg";
import kango4 from "../public/kango/4.jpg";
import kango5 from "../public/kango/5.jpg";
import kango6 from "../public/kango/6.jpg";
import kango7 from "../public/kango/7.jpg";

import taxi1 from "../public/taxi/1.jpg";
import taxi2 from "../public/taxi/2.jpg";
import taxi3 from "../public/taxi/3.jpg";
import taxi4 from "../public/taxi/4.jpg";
import taxi5 from "../public/taxi/5.jpg";
import taxi6 from "../public/taxi/6.jpg";
import taxi7 from "../public/taxi/7.jpg";

import mandarin1 from "../public/mandarin/1.jpg";
import mandarin2 from "../public/mandarin/2.jpg";
import mandarin3 from "../public/mandarin/3.jpg";
import mandarin4 from "../public/mandarin/4.jpg";
import mandarin5 from "../public/mandarin/5.jpg";
import mandarin6 from "../public/mandarin/6.jpg";
import mandarin7 from "../public/mandarin/7.jpg";

import cityLife1 from "../public/cityLife/1.png";
import cityLife2 from "../public/cityLife/2.png";
import cityLife3 from "../public/cityLife/3.png";
import cityLife4 from "../public/cityLife/4.png";
import cityLife5 from "../public/cityLife/5.png";
import cityLife6 from "../public/cityLife/6.png";
import cityLife7 from "../public/cityLife/7.png";

import trinity1 from "../public/trinity/1.jpg";
import trinity2 from "../public/trinity/2.jpg";
import trinity3 from "../public/trinity/3.jpg";
import trinity4 from "../public/trinity/4.jpg";
import trinity5 from "../public/trinity/5.jpg";
import trinity6 from "../public/trinity/6.jpg";
import trinity7 from "../public/trinity/7.jpg";

import dilux0 from "../public/dilux/0.png";
import dilux1 from "../public/dilux/1.png";
import dilux2 from "../public/dilux/2.png";
import dilux3 from "../public/dilux/3.png";
import dilux4 from "../public/dilux/4.png";
import dilux5 from "../public/dilux/5.png";
import dilux6 from "../public/dilux/6.png";
import dilux7 from "../public/dilux/7.png";

import sitylord1 from "../public/sitylord/1.png";
import sitylord2 from "../public/sitylord/2.png";
import sitylord3 from "../public/sitylord/3.png";
import sitylord4 from "../public/sitylord/4.png";
import sitylord5 from "../public/sitylord/5.png";
import sitylord6 from "../public/sitylord/6.png";
import sitylord7 from "../public/sitylord/7.png";

import { Project, Projects } from "./ProjectsGrid";

export const projects: Record<Projects, Project> = {
  sitylord: {
    title: "STYLORD",
    description:
      "Oson Taxi — сервис заказа такси по Ташкентской области. С помощью приложения Oson Taxi вы можете очень легко и быстро найти такси для благополучной поездки.",
    longDescription: [
      "Мы создали логотип, показывающий идею данного сервиса. Если присмотреться к логотипу вы увидите заглавную букву O от названия приложения, колесо машины, навигатор, а также дорогу. Все эти символы собраны в единый логотип. Мы также разработали фирменный стиль для данного проекта.",
    ],
    services: "Logo, Guidebook, Identity",
    img: sitylord1,
    imgList: [
      sitylord1,
      sitylord2,
      sitylord3,
      sitylord4,
      sitylord5,
      sitylord6,
      sitylord7,
    ],
  },
  dilux: {
    title: "DILUX",
    description:
      "Hamkor Savdo - сеть магазинов бытовой техники, с более чем 7000 наименований товаров в городах Андижанской области.",
    longDescription: [
      "О проекте: Hamkor Savdo - сеть магазинов бытовой техники, с более чем 7000 наименований товаров в городах Андижанской области.",
      "Что мы сделали: Мы разработали инструкцию по использованию фирменного стиля, выбрали шрифт для оформления постов. Разработали дизайн для фирменных носителей.",
    ],
    services: "Logo, Guidebook, Identity",
    img: dilux0,
    imgList: [dilux1, dilux2, dilux3, dilux4, dilux5, dilux6, dilux7],
  },
  oqz: {
    title: "OQZ METALL",
    description: "OQZ Metall",
    longDescription: [
      "Проект: City Lyfe — жилой комплекс премиум класса. Один из единичных в городе с трехуровневыми квартирами с мансардой. Задачей было создать айдентику для логотипа City Lyfe и разработать гайдбук по использованию фирменного стиля.",
      "Решение: бренд-дизайнерами был разработан фирменный стиль, строгий и современный паттерн, а также разработали полноценный гайдбук для носителей фирменного стиля.",
    ],
    services: "Logo, Guidebook, Identity",
    img: oqz,
    imgList: [
      mandarin,
      mandarin,
      mandarin,
      mandarin,
      mandarin,
      mandarin,
      mandarin,
      mandarin,
    ],
  },
  taxi: {
    title: "OSON Taxi",
    description:
      "Oson Taxi — сервис заказа такси по Ташкентской области. С помощью приложения Oson Taxi вы можете очень легко и быстро найти такси для благополучной поездки.",
    longDescription: [
      "Проект: Oson Taxi — сервис заказа такси по Ташкентской области. С помощью приложения Oson Taxi вы можете очень легко и быстро найти такси для благополучной поездки.",
      'Решение: Мы создали логотип, показывающий идею данного сервиса. Если присмотреться к логотипу вы увидите заглавную букву "O" от названия приложения, колесо машины, навигатор, а также дорогу. Все эти символы собраны в единый логотип. Мы также разработали фирменный стиль для данного проекта.',
    ],
    services: "Logo, Guidebook, Identity",
    img: taxi,
    imgList: [taxi1, taxi2, taxi3, taxi4, taxi5, taxi6, taxi7],
  },
  mandarin: {
    title: "MANDARIN TOUR",
    description:
      "Mandarin Tour - крупная туристическая компания, завоевавшая доверие на рынке Узбекистана и предлагающая туры в более чем 10 стран для путешествий, а с недавнего времени и паломничество в священную Мекку.",
    longDescription: [
      "Проект: Mandarin Tour - крупная туристическая компания, завоевавшая доверие на рынке Узбекистана и предлагающая туры в более чем 10 стран для путешествий, а с недавнего времени и паломничество в священную Мекку.",
      "Решение: Для Mandarin Tour мы разработали дизайн систему для публикаций, стилистику публикаций для ведения соц. сетей. Также выбрали шрифт для оформления печатных и диджитал материалов.",
    ],
    services: "Design system, Identity, SMM",
    img: mandarin,
    imgList: [
      mandarin1,
      mandarin2,
      mandarin3,
      mandarin4,
      mandarin5,
      mandarin6,
      mandarin7,
    ],
  },
  cityLife: {
    title: "CITY LIFE",
    description:
      "Жилой комплекс премиум класса. Один из единичных в городе с трехуровневыми квартирами с мансардой.",
    longDescription: [
      "Проект: City Lyfe — жилой комплекс премиум класса. Один из единичных в городе с трехуровневыми квартирами с мансардой. Задачей было создать айдентику для логотипа City Lyfe и разработать гайдбук по использованию фирменного стиля.",
      "Решение: бренд-дизайнерами был разработан фирменный стиль, строгий и современный паттерн, а также разработали полноценный гайдбук для носителей фирменного стиля.",
    ],
    services: "Logo, Guidebook, Identity",
    img: cityLife,
    imgList: [
      cityLife1,
      cityLife2,
      cityLife3,
      cityLife4,
      cityLife5,
      cityLife6,
      cityLife7,
    ],
  },
  trinity: {
    title: "TRINITY",
    description:
      "Жилой комплекс премиум класса. Один из единичных в городе с трехуровневыми квартирами с мансардой.",
    longDescription: [
      "Проект: Trinity — жилой комплекс премиум класса. Один из единичных в городе с трехуровневыми квартирами с мансардой. Задачей было создать айдентику для логотипа City Lyfe и разработать гайдбук по использованию фирменного стиля.",
      "Решение: бренд-дизайнерами был разработан фирменный стиль, строгий и современный паттерн, а также разработали полноценный гайдбук для носителей фирменного стиля.",
    ],
    services: "Logo, Guidebook, Identity",
    img: trinity1,
    imgList: [
      trinity1,
      trinity2,
      trinity3,
      trinity4,
      trinity5,
      trinity6,
      trinity7,
    ],
  },
  styx: {
    title: "STYX",
    description:
      "Жилой комплекс премиум класса. Один из единичных в городе с трехуровневыми квартирами с мансардой.",
    longDescription: [
      "Проект: STYX — жилой комплекс премиум класса. Один из единичных в городе с трехуровневыми квартирами с мансардой. Задачей было создать айдентику для логотипа City Lyfe и разработать гайдбук по использованию фирменного стиля.",
      "Решение: бренд-дизайнерами был разработан фирменный стиль, строгий и современный паттерн, а также разработали полноценный гайдбук для носителей фирменного стиля.",
    ],
    services: "Logo, Guidebook, Identity",
    img: cityLife,
    imgList: [
      mandarin,
      mandarin,
      mandarin,
      mandarin,
      mandarin,
      mandarin,
      mandarin,
      mandarin,
    ],
  },
  kango: {
    title: "KANGO",
    description:
      "Жилой комплекс премиум класса. Один из единичных в городе с трехуровневыми квартирами с мансардой.",
    longDescription: [
      "Проект: KANGO — жилой комплекс премиум класса. Один из единичных в городе с трехуровневыми квартирами с мансардой. Задачей было создать айдентику для логотипа City Lyfe и разработать гайдбук по использованию фирменного стиля.",
      "Решение: бренд-дизайнерами был разработан фирменный стиль, строгий и современный паттерн, а также разработали полноценный гайдбук для носителей фирменного стиля.",
    ],
    services: "Logo, Guidebook, Identity",
    img: kango1,
    imgList: [kango1, kango2, kango3, kango4, kango5, kango6, kango7],
  },
  hamkor: {
    title: "HAMKOR",
    description:
      "Hamkor Savdo - сеть магазинов бытовой техники, с более чем 7000 наименований товаров в городах Андижанской области.",
    longDescription: [
      "О проекте: Hamkor Savdo - сеть магазинов бытовой техники, с более чем 7000 наименований товаров в городах Андижанской области.",
      "Что мы сделали: Мы разработали инструкцию по использованию фирменного стиля, выбрали шрифт для оформления постов. Разработали дизайн для фирменных носителей.",
    ],
    services: "Logo, Guidebook, Identity",
    img: cityLife,
    imgList: [
      mandarin,
      mandarin,
      mandarin,
      mandarin,
      mandarin,
      mandarin,
      mandarin,
      mandarin,
    ],
  },
};
export const projectsList: Array<Project & { slug: string }> = Object.entries(
  projects
).map(([key, value]) => ({ slug: key, ...value }));
