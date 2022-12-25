import Head from './base/Head';
import Button from './base/Button';
import ContactUsButton from './base/ContactUsButton';

export default function ContactForm() {
  return (
    <div className="container flex mx-auto py-32">
      <div className="w-3/6">
        <Head title="Контакты"/>
        <h4 className="text-white mt-8 text-3xl">
          <span className="text-orange">Мы готовы обсудить</span> ваш<br/>
                проект, а вы?
        </h4>

        <h4 className="text-white hover:text-orange duration-200 mt-24 text-3xl">
          <a href="tel:+998 90 009 09 59">
                +998 90 009 09 59
          </a>
        </h4>

        <h4 className="text-white hover:text-orange duration-200 mt-8 text-3xl">
          <a href="mailto:nextmarketing@gmail.com">
            nextmarketing@gmail.com
          </a>
        </h4>

        <p className="text-lightGrey mt-10">
                г. Ташкент, Шайхонтахурский р-н,<br/>
                ул. Лабзак, 64A
        </p>
      </div>

      <div className="w-3/6">
        <input className="text-lightGrey placeholder-lightGrey border-lightGrey w-full border-b-2 pb-2 bg-dark border-0 outline-0" placeholder="Имя" type="text"/>
        <input className="mt-16 text-lightGrey placeholder-lightGrey border-lightGrey w-full border-b-2 pb-2 bg-dark border-0 outline-0" placeholder="Телефон" type="text"/>
        <input className="text-lightGrey placeholder-lightGrey border-lightGrey w-full border-b-2 pt-32 pb-2 bg-dark border-0 outline-0" placeholder="Напишите сообщение" type="text"/>
        <ContactUsButton className="mt-8" />
      </div>
    </div>
  );
}
