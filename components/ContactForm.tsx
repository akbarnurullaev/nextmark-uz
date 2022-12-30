import Head from './base/Head';
import Button from './base/Button';
import ContactUsButton from './base/ContactUsButton';

export default function ContactForm() {
  return (
    <div className="sm:container flex sm:flex-nowrap flex-wrap sm:mx-auto sm:px-0 px-4 py-32">
      <div className="sm:w-3/6 w-full">
        <Head title="Контакты"/>
        <h4 className="text-white xl:mt-8 lg:mt-6 sm:mt-4 mt-4 xl:text-2xl lg:text-lg text-xl">
          <span className="text-orange">Мы готовы обсудить</span> ваш<br/>
                проект, а вы?
        </h4>

        <h4 className="text-white hover:text-orange duration-200 sm:mt-4 mt-8 xl:mt-24 lg:mt-16 xl:text-2xl lg:text-lg text-xl">
          <a href="tel:+998 90 009 09 59">
                +998 90 009 09 59
          </a>
        </h4>

        <h4 className="text-white hover:text-orange duration-200 xl:mt-8 lg:mt-4 xl:text-2xl lg:text-lg text-xl">
          <a href="mailto:nextmarketing@gmail.com">
            nextmarketing@gmail.com
          </a>
        </h4>

        <p className="text-lightGrey xl:text-base text-sm lg:text-sm xl:mt-10 lg:mt-6 mt-2">
                г. Ташкент, Шайхонтахурский р-н,<br/>
                ул. Лабзак, 64A
        </p>
      </div>

      <div className="sm:w-3/6 w-full xl:text-base lg:text-xs sm:mt-0 mt-20">
        <input className="text-lightGrey placeholder-lightGrey border-lightGrey w-full border-b-2 pb-2 bg-dark border-0 outline-0" placeholder="Имя" type="text"/>
        <input className="sm:mt-16 mt-12 text-lightGrey placeholder-lightGrey border-lightGrey w-full border-b-2 pb-2 bg-dark border-0 outline-0" placeholder="Телефон" type="text"/>
        <input className="sm:mt-0 mt-20 text-lightGrey placeholder-lightGrey border-lightGrey w-full border-b-2 xl:pt-48 lg:pt-28 pb-2 bg-dark border-0 outline-0" placeholder="Напишите сообщение" type="text"/>
        <ContactUsButton className="mt-8" />
      </div>
    </div>
  );
}
