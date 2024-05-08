import React from 'react'
import { Link } from 'react-router-dom'

const User = () => {
  return (
    <div className='w-full h-[100vh]'>
        <Link to={'/'} className='flex justify-center items-center pt-10  '>
            <img className='w-[50px]' src="https://nowapp.me/now-logo-icon.svg?7.1.2" alt="logo" />
        </Link>
        <div className='flex justify-center items-center mt-[60px] '>
            <div className='shad_ui w-[400px] h-[400px] py-5 rounded-[20px]'>
                <div className='flex justify-center items-center'>
                    <img className='w-[150px] rounded-full cursor-pointer' src="https://cdn.nowapp.me/users/avatars/cBkGdreQXpdmvKfs3gvhPY17pvg2/thumbs/cBkGdreQXpdmvKfs3gvhPY17pvg2_400x400" alt="" />
                </div>
                <div className='pt-5'>
                    <h1 className='text-[30px] text-center font-semibold'>Abbos Turdaliev</h1>
                    <p className='text-center text-[18px] text-[#d7d0d0]'>6  подписчиков</p>
                </div>
                <div className='pt-10 text-center '>
                    <button className='py-2 px-2 rounded bg-[#e8e6e6] text-[gray] hover:text-white  duration-75 hover:bg-[gray]'>Открыть в приложении</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default User