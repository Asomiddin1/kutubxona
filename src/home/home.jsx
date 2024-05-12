import React, { useContext, useEffect, useState } from 'react'
import Phone from '../phone/phone';
import { Link } from 'react-router-dom';
import { Context } from '../context';

const Home = () => {
    const [time, setTime] = useState(true)
    const {state ,dispatch} = useContext(Context)
    const [deviceType, setDeviceType] = useState('');
    function detectDevice() {
      const userAgent = navigator.userAgent;
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
        return 'Mobile';
      } else {
        return 'Desktop';
      }
    }

 

    useEffect(() => {
      window.scrollTo(0, 0);
      setTimeout(() => {
        setTime(false)
      }, 1000);
      const detectedDevice = detectDevice();
      setDeviceType(detectedDevice);
    }, [])
  

  
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
      <div data-aos={`${time ? 'zoom-in' : ''}`} data-aos-dalay='500' data-aos-duration='1000' className={` h-[100vh] relative ${deviceType === 'Mobile' ? 'toMobile':'pt-[100px]'} flex flex-col justify-center items-center   ${time ? 'blur' : ''}`}>
        <Phone />
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
    );
  }

export default Home