import React from 'react'
import { Link } from 'react-router-dom'

const Book = () => {
  return (
    <div className='px-4'>
      <Link to={'/'} className='flex justify-center items-center pt-10  '>
        <img id='logo' className='w-[50px] duration-75 hover:scale-[120%]' src={require('../logos/bookworm_emblem_black.png')} alt="logo" />
      </Link>

      <div className='w-full pt-5'>
        <div className='shad_ui max-w-[500px]  rounded-[20px] mx-auto my-10 py-6 sm:py-10 px-1 sm:px-6'>
          <div className='flex gap-2 px-1'>
            <div className='flex justify-start w-[49%]'>
              <img className='w-[200px] h-[270px] rounded-[15px]' src="https://assets.asaxiy.uz/product/items/desktop/df763d665084612d719bfaf359cc6bb32021040216281526613clrASkcKsR.jpg.webp" alt="book" />
            </div>

            <div className='w-[49%] '>
              <h1 className='text-[16px] sm:text-[18px] font-semibold pt-1 '>Лев Толстой: Уруш ва тинчлик (3-4 китоблар)</h1>
              <p className='py-2  text-[13px] sm:text-[14px]'>Характеристики</p>
              <section className='flex justify-between pt-1 px-1 text-[12px]  sm:text-[14px] border-b-2 text-[#443f3f] border-[#535050]  border-dotted'>
                <p>ISBN</p>
                <p>978-9943-5367-8-4</p>
              </section>
              <section className='flex justify-between pt-1 px-1 text-[12px]  sm:text-[14px] border-b-2 text-[#443f3f] border-[#535050]  border-dotted'>
                <p>Автор</p>
                <p>Л. Н.Толстой</p>
              </section>
              <section className='flex justify-between pt-1 px-1 text-[12px]  sm:text-[14px] border-b-2 text-[#443f3f] border-[#535050]  border-dotted'>
                <p>Язык</p>
                <p>На узбекском</p>
              </section>
              <section className='flex justify-between pt-1 px-1 text-[12px]  sm:text-[14px] border-b-2 text-[#443f3f] border-[#535050]  border-dotted'>
                <p>Надпись</p>
                <p>Кириллица</p>
              </section>
              <section className='flex justify-between pt-1 px-1 text-[12px]  sm:text-[14px] border-b-2 text-[#443f3f] border-[#535050]  border-dotted'>
               <p>Количество страниц</p>
                <p>928</p>
              </section>
             <section className='flex justify-between pt-1 px-1 text-[12px]  sm:text-[14px] border-b-2 text-[#443f3f] border-[#535050]  border-dotted'>
              <p>Год издания</p>
                <p>2019</p>
              </section>
             
            </div>

          </div>
          <p className='text-[#646060] px-2 pt-2'>Лев Толстой. "Уруш ва тинчлик" / роман / 3-4-китоблар / русчадан Абдулла Қаҳҳор ва Кибриё Қаҳҳорава таржимаси. "Жаҳон адабиёти дурдоналари" туркими.</p>
          <div className='flex justify-center items-center py-2 mt-10'>
            <button className='bg-[black] w-full !text-white py-4 px-4 rounded-[20px] text-[19x]'>Купить</button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Book