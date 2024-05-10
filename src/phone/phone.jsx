import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import appstoreUz from './images/app-store-uz.svg'
import googleplayUZ from './images/google-play-uz.svg'
import appstoreRu from './images/app-store-ru.svg'
import googleplayRU from './images/google-play-ru.svg'
import { Context } from '../context'


const Phone = () => {
  const {state , dispatch} = useContext(Context)
  console.log(state.lang);
  return (
    <div className="mt-[170px] relative">
    <div className="flex justify-start gap-20 items-center as">
        <Link to={'/'}>
        <img className="w-[250px] duration-75 hover:scale-[110%]" src={require('../logos/bookworm_logo_www_black.png')} alt="logo" />
        </Link>
      <button onClick={()=> {
         dispatch({ type: 'LANG' })
        }} >{state.lang ? 'RU':'UZ'}</button>
    </div>
    <div className='px-[5%] sm:px-[1%]'>
    <div className="flex flex-col justify-center pb-5 items-center mt-5 mb-5 rounded-[20px] shad_ui  ">
      <div className="  select-none w-[400px]    h-[500px]  flex justify-center  items-center rounded-[20px]">{/* <img className="  select-none w-[600px]"  src={require('./images  11/phone.png')} alt="logo"/> */}
        <div className="">
            <img className="h-[440px]  select-none" src={require('./images/photo_2024-05-10_12-18-03-portrait.png')} alt="" />
          </div>
      </div>

      <h1 className='px-4 sm:text-[14px]  text-[14px]'>{state.lang ? `Ilovalar do'koningizdan Bookworm-ni yuklab oling`:'Скачайте Bookworm из вашего магазина приложений:'} </h1>
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