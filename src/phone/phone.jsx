import React from 'react'
import { Link } from 'react-router-dom'
import appstore from './images/app-store-uz.svg'
import googleplay from './images/google-play-uz.svg'

const Phone = () => {
  return (
    <div className="mt-[150px] relative">
    <div className="flex justify-center items-center">
        <Link to={'/'}>
        <img className="w-[250px] duration-75 hover:scale-[110%]" src={require('../logos/bookworm_logo_www_black.png')} alt="logo" />
        </Link>
    </div>
    <div className='px-[5%] sm:px-[1%]'>
    <div className="flex flex-col justify-center pb-5 items-center mt-10 mb-5 rounded-[20px] shad_ui  ">
      <div className="  select-none w-[400px]    h-[500px]  flex justify-center  items-center rounded-[20px]">{/* <img className="  select-none w-[600px]"  src={require('./images  11/phone.png')} alt="logo"/> */}
        <div className="">
            <img className="h-[440px] w-[238px] select-none" src={require('./images/photo_2024-05-10_12-18-03-portrait.png')} alt="" />
          </div>
      </div>

      <h1 className='px-4 sm:text-[14px]  text-[14px]'>Скачайте Bookworm из вашего магазина приложений:</h1>
          <div className="flex  justify-center gap-4 mt-4">
           <img className='w-[140px] cursor-pointer' src={appstore} alt="lo" />
           <img className='w-[140px] cursor-pointer' src={googleplay} alt="lo" />
          </div>
    </div>
    </div>
    

  
  </div>
  )
}

export default Phone