import React from 'react'
import { Link } from 'react-router-dom'

const Tos = () => {
  return (
    <div>
        <Link to={'/'} className='flex justify-center items-center pt-10  '>
            <img className='w-[50px]' src={require('../logos/bookworm_emblem_black.png')} alt="logo" />
        </Link>
        <div className='flex flex-col justify-center items-center '>
            <h1 className='text-[30px] font-bold text-center'>Политика в отношении обработки <br /> персональных данных</h1>
            <div className=' shad_ui py-6 px-8 mt-[50px]  rounded-[20px]'>
              <h1 className='font-semibold'>1. Общие положения</h1>
              <p className='max-w-[600px] px-4'>Настоящая политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006. №152-ФЗ «О персональных данных» (далее - Закон о персональных данных) и определяет порядок обработки персональных данных и меры по обеспечению безопасности персональных данных, предпринимаемые Марининым Дмитрием Алексеевичем (далее – Оператор).</p>
              <p className='max-w-[600px] px-4 mt-5 '><span className='font-semibold'>1.1</span> Оператор ставит своей важнейшей целью и условием осуществления своей деятельности соблюдение прав и свобод человека и гражданина при обработке его персональных данных, в том числе защиты прав на неприкосновенность частной жизни, личную и семейную тайну.</p>
              <p className='max-w-[600px] px-4 mt-5 '><span className='font-semibold'>1.2</span> Настоящая политика Оператора в отношении обработки персональных данных (далее – Политика) применяется ко всей информации, которую Оператор может получить о посетителях веб-сайта https://nowapp.me, а также его субдоменов и пользователях мобильного приложения Now.</p>
            </div>
        </div>
    </div>
  )
}

export default Tos