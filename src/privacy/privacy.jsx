import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../context';

const Privacy = () => {
  const {state ,dispatch} = useContext(Context)
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
    const footerlinks = [
      {
        nameRU: 'Обратная связь',
        nameUZ:'Qayta aloqa',
        link:''
      },
      {
        nameRU: 'Политика конфиденциальности',
        nameUZ:'Maxfiylik siyosati',
        link:'/privacy'
      },
      {
        nameRU: ' Условия использования',
        nameUZ:'Foydalanish shartlari',
        link:'/tos'
      },
    ] 
  return (
    <div className='px-4'>
        <Link to={'/'} className='flex justify-center items-center pt-10  '>
            <img id='logo' className='w-[50px] duration-75 hover:scale-[120%]' src={require('../logos/bookworm_emblem_black.png')} alt="logo" />
        </Link>
        <div className='flex flex-col justify-center items-center '>
            <h1 className='text-[30px] font-bold text-center'>Политика в отношении обработки <br /> персональных данных</h1>
            <div className=' shad_ui py-6 px-2 mt-[50px]  rounded-[20px]'>
              <h1 className='font-semibold'>1. Общие положения</h1>
              <p className='max-w-[600px] px-4'>Настоящая политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006. №152-ФЗ «О персональных данных» (далее - Закон о персональных данных) и определяет порядок обработки персональных данных и меры по обеспечению безопасности персональных данных, предпринимаемые Марининым Дмитрием Алексеевичем (далее – Оператор).</p>
              <p className='max-w-[600px] px-4 mt-5 '><span className='font-semibold'>1.1</span> Оператор ставит своей важнейшей целью и условием осуществления своей деятельности соблюдение прав и свобод человека и гражданина при обработке его персональных данных, в том числе защиты прав на неприкосновенность частной жизни, личную и семейную тайну.</p>
              <p className='max-w-[600px] px-4 mt-5 '><span className='font-semibold'>1.2</span> Настоящая политика Оператора в отношении обработки персональных данных (далее – Политика) применяется ко всей информации, которую Оператор может получить о посетителях веб-сайта https://nowapp.me, а также его субдоменов и пользователях мобильного приложения Now.</p>
            </div>
        </div>


        <div className="">
            <div className="flex flex-col justify-center text-center mt-8 mb-8 ">
            {footerlinks.map(c => (
              <div className=" ">
                <Link to={`${c.link ? `${c.link}`:'' }`} key={c.name} className=" button cursor-pointer underline-offset-4 duration-100  hover:underline  ">{state.lang ? c.nameUZ:c.nameRU}</Link>
              </div>
            ))}
            <p className='text-center mt-2'>© 2024 Made with ❤️ by Bookworm Group</p>
          </div>
        </div>
    </div>
  )
}

export default Privacy