import Head from './base/Head';
import ServiceCard from './ServiceCard';
import Button from './base/Button';
import ContactUsButton from './base/ContactUsButton';

export default function Services() {
  return (
    <div className="min-[768px]:container min-[768px]:mx-auto max-[768px]:px-4 md:mt-64 mt-24">
      <Head title="наши" subtitle="услуги"/>

      <div className="mt-12 cursor-pointer">
        {services.map((service) => (
          <ServiceCard {...service}/>
        ))}
      </div>

      <div className="w-full flex justify-center mt-20 md:hidden">
        <ContactUsButton />
      </div>
    </div>
  )
}

const services = [
  {
    title: 'Нейминг',
    description: 'Локальная, Индустриальная, Глобальная'
  },
  {
    title: 'Логотип',
    description: 'Руководство по логотипу, Мини-Презентация, Фирменные цвета, Логобук'
  },
  {
    title: 'Брендинг',
    description: 'Айдентика, Руководство по логотипу, Полиграфическая продукция, Типографика, Брендбук, Каталог'
  },
  {
    title: 'Маркетинг',
    description: 'Контекстная реклама, Cтратегия, Таргет, SMM, PR'
  },
  {
    title: 'Видео',
    description: 'Реклама, Блогинг, Монтаж, Анимация'
  },
  {
    title: 'Веб-сайт',
    description: 'Корпоративный, Сайт-визитка, Лендинг, Веб-дизайн, Адаптация',
    isLast: true
  }
]
