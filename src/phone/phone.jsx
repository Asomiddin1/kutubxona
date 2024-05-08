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
        <img className="w-[120px] duration-75 hover:scale-[130%]" src="https://nowapp.me/now-logo.svg?7.1.2" alt="logo" />
        </Link>
    </div>
    <div className='px-[5%] sm:px-[1%]'>
    <div className="flex flex-col justify-center pb-5 items-center mt-10 mb-5 rounded-[20px] shad_ui  ">
      <div className="  select-none w-[400px]    h-[500px]  flex justify-center  items-center rounded-[20px]">
        <img className="  select-none w-[600px]"  src={require('./phone.png')} alt="logo"/>
        <LazyLoad />
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