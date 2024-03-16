import Head from "./base/Head";
import ServiceCard from "./ServiceCard";
import Button from "./base/Button";
import ContactUsButton from "./base/ContactUsButton";

export default function Services() {
  return (
    <div className="min-[768px]:container min-[768px]:mx-auto max-[768px]:px-4 md:mt-64 mt-24">
      <Head title="наши" subtitle="услуги" />

      <div className="mt-12 cursor-pointer">
        {services.map((service) => (
          <ServiceCard {...service} />
        ))}
      </div>

      <div className="mt-20 text-center">
        <a href="#contact" onClick={() => console.log("salom")}>
          <Button title={"Оставить заявку"} />
        </a>
      </div>
    </div>
  );
}

const services = [
  {
    title: "Маркетинг",
    description:
      "SMM, PR, Контекстная реклама, SEO, Стратегия, Аналитика, Таргет, Billboards, Radio",
  },

  {
    title: "Разработка сайта",
    description:
      "Landing page, Сайт-визитка, Корпоративный сайт, Маркетплейс, Веб-дизайн, Адаптация",
  },

  {
    title: "Брендинг",
    description:
      "Айдентика, Руководство по логотипу, Полиграфическая продукция, Типографика, Брендбук, Каталог",
  },

  {
    title: "Нейминг",
    description: "Локальная, Индустриальная, Глобальная",
  },

  {
    title: "Логотип",
    description:
      "Руководство по логотипу, Мини-Презентация, Фирменные цвета, Логобук",
  },

  {
    title: "Продакшн",
    description:
      "Фотосессия, Видеосъемка, Фудсъемка, Рекламные ролики, Бьюти ролики, Блогинг, Анимация, Монтаж",
    isLast: true,
  },
];
