import Head from './base/Head';
import ContactUsButton from './base/ContactUsButton';
import {ChangeEvent, FormEvent, useState} from 'react';
import axios from 'axios';
import toast, {Toaster} from 'react-hot-toast';

const CREATE_CUSTOMER = 'https://akbarnurullaev24.pythonanywhere.com/create_customer'

export function useCreateClient() {
  const [response, setResponse] = useState()
  const [loading, setLoading] = useState(false)
  const [formData, setForm] = useState({
    name: '',
    phone: '',
    message: ''
  })

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setForm({
      ...formData,
      [name]: value
    });
  }

  const request = async () => {
    setLoading(true)
    const { data } = await axios.post(CREATE_CUSTOMER, formData, {headers: {'Content-Type': 'application/json'}})
    setResponse(data)
    setLoading(false)
    toast.success('Ваша заявка успешно отправлена!')
  }


  return { request, loading, response, handleInputChange }
}
export default function ContactForm() {
  const { response, handleInputChange, loading, request } = useCreateClient()
  console.log(loading, response)
  return (
    <div className="sm:container flex sm:flex-nowrap flex-wrap sm:mx-auto sm:px-0 px-4 py-32">
      <Toaster />
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
        <input name="name" onChange={handleInputChange} className="text-lightGrey placeholder-lightGrey border-lightGrey w-full border-b-2 pb-2 bg-dark border-0 outline-0" placeholder="Имя" type="text"/>
        <input name="phone" onChange={handleInputChange} className="sm:mt-16 mt-12 text-lightGrey placeholder-lightGrey border-lightGrey w-full border-b-2 pb-2 bg-dark border-0 outline-0" placeholder="Телефон" type="text"/>
        <textarea name="message" onChange={handleInputChange} className="sm:mt-14 mt-4 sm:h-32 h-24 placeholder:translate-y-16 sm:placeholder:translate-y-24 text-lightGrey placeholder-lightGrey border-lightGrey w-full border-b-2 bg-dark border-0 outline-0" placeholder="Напишите сообщение" />
        <ContactUsButton loading={loading} onSubmit={request} className="mt-10" />
      </div>
    </div>
  );
}
