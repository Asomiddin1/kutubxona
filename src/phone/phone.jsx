import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import appstoreUz from './images/app-store-uz.svg'
import googleplayUZ from './images/google-play-uz.svg'
import appstoreRu from './images/app-store-ru.svg'
import googleplayRU from './images/google-play-ru.svg'
import { Context } from '../context'
import flagRU from './images/flagRu.svg'
import flagUZ from './images/flagUz.svg'


const Phone = () => {
  const {state , dispatch} = useContext(Context)
  console.log(state.lang);
  return (
    <div className=" mx-auto max-w-[450px]">
    <div className="flex justify-center sm:gap-20 gap-10 items-center sm:px-4 px-6  overflow-y-hidden">
        <Link to={'/'}>
        <img className="w-[220px]  duration-200 ease-linear hover:scale-[110%]" src={require('../logos/bookworm_logo_www_black.png')} alt="logo" />
        </Link>
        
      <button onClick={()=> {
         dispatch({ type: 'LANG' })
        }} >{state.lang ? <img className='w-[27px]' src={flagRU} alt="" />:<img className='w-[27px]'  src={flagUZ} alt="" />}</button>
    </div>
    <div className=''>
    <div className="flex flex-col justify-center pb-5 items-center mt-5 mb-5 rounded-[20px] shad_ui  ">
      <div className="  select-none w-[400px]    h-[500px]  flex justify-center  items-center rounded-[20px]">
        <div className="">
            <img className="h-[440px]  select-none" src={require('./images/photo_2024-05-10_12-18-03-portrait.png')} alt="" />
          </div>
      </div>

      <h1 className='px-4 sm:text-[18px] text-center  text-[16px]'>{state.lang ? `Bookworm ilovasini yuklab oling`:'Установите приложение Bookworm'} </h1>
          <div className="flex  justify-center gap-4 mt-4">
           <img className='w-[140px] cursor-pointer' src={state.lang ?  appstoreUz : appstoreRu} alt="lo" />
           <img className='w-[140px] cursor-pointer' src={state.lang ?  googleplayUZ : googleplayRU} alt="lo" />
          </div>
    </div>
    </div>
    

  
  </div>
  )
}

export default Phone