import React from 'react'
import { Link } from 'react-router-dom'

const Book = () => {
    return (
        <div className='px-4'>
            <Link to={'/'} className='flex justify-center items-center pt-10  '>
                <img id='logo' className='w-[50px] duration-75 hover:scale-[120%]' src={require('../logos/bookworm_emblem_black.png')} alt="logo" />
            </Link>
            <div className='w-full'>
            <div className='shad_ui max-w-[500px] rounded-[20px] mx-auto mt-10  py-10 px-6'>
               <div className='flex justify-center'>
                 <img className='w-[200px]' src="https://assets.asaxiy.uz/product/items/desktop/df763d665084612d719bfaf359cc6bb32021040216281526613clrASkcKsR.jpg.webp" alt="book" />
               </div>
               <div className=''>
                  <h1 className='text-[20px] font-semibold pt-1'>Лев Толстой: Уруш ва тинчлик (3-4 китоблар)</h1>
                  <p className='py-4'>Характеристики</p>
                  <section className='flex justify-between py-2 px-4 border-b-2 text-[#443f3f] border-[#535050]'>
                    <p>ISBN</p>
                    <p>978-9943-5367-8-4</p>
                  </section>
                  <section className='flex justify-between py-2 px-4 border-b-2 text-[#443f3f] border-[#535050]'>
                    <p>Автор</p>
                    <p>Лев Николаевич Толстой</p>
                  </section>
                  <section className='flex justify-between py-2 px-4 border-b-2 text-[#443f3f] border-[#535050]'>
                    <p>Язык</p>
                    <p>На узбекском</p>
                  </section>
                  <section className='flex justify-between py-2 px-4 border-b-2 text-[#443f3f] border-[#535050]'>
                    <p>Надпись</p>
                    <p>Кириллица</p>
                  </section>
                  <section className='flex justify-between py-2 px-4 border-b-2 text-[#443f3f] border-[#535050]'>
                    <p>Количество страниц</p>
                    <p>928</p>
                  </section>
                  <section className='flex justify-between py-2 px-4 border-b-2 text-[#443f3f] border-[#535050]'>
                    <p>Год издания</p>
                    <p>2019</p>
                  </section>
                  <p className='text-[#646060] pt-2'>Лев Толстой. "Уруш ва тинчлик" / роман / 3-4-китоблар / русчадан Абдулла Қаҳҳор ва Кибриё Қаҳҳорава таржимаси. "Жаҳон адабиёти дурдоналари" туркими.</p>
               </div>

               <div className='flex justify-center items-center py-2 mt-10'>
                <button className='bg-[black] w-full !text-white py-2 px-4 rounded-[20px] text-[19x]'>Купить</button>
               </div>
            </div>
            </div>
        </div>
    )
}

export default Book