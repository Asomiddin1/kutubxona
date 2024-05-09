import React from 'react'
import LazyLoad from './slider'
import { Link } from 'react-router-dom'

const Phone = () => {
    const stors = [
        {
          name: 'App Store'
        },
        {
          name: 'Google Play'
        },
        {
          name: 'App Gallery'
        },
      ]
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
            <img className="h-[440px] w-[230px]" src={require('./images/screenshot.png')} alt="" />
          </div>
      </div>

      <h1 className='px-4 sm:text-[16px]  text-[14px]'>Скачайте Now из вашего магазина приложений:</h1>
          <div className="flex  justify-center gap-4 mt-4">
            {stors.map(c => (
              <div className=" select-none">
                <h1 key={c.name} className=" button  cursor-pointer underline-offset-1">{c.name}</h1>
                <p className="w-[0px] target-element  duration-300  bg-[black] h-[2px]"></p>
              </div>
            ))}
          </div>
    </div>
    </div>
    

  
  </div>
  )
}

export default Phone