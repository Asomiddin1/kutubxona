import React, { useEffect, useState } from 'react'
import Phone from '../phone/phone';
import { Link } from 'react-router-dom';

const Home = () => {
    const [time, setTime] = useState(true)

    useEffect(() => {
      setTimeout(() => {
        setTime(false)
      }, 1000);
    }, [])
  

  
    const footerlinks = [
      {
        name: 'Обратная связь',
        link:''
      },
      {
        name: 'Политика конфиденциальности',
        link:'/privacy'
      },
      {
        name: ' Условия использования',
        link:'/tos'
      },
      {
        name: '© 2024 Made with ❤️ by Bookworm Group'
      },
    ]
    return (
      <div data-aos={`${time ? 'zoom-in' : ''}`} data-aos-dalay='500' data-aos-duration='1000' className={`w-full h-[100vh] pt-10 flex flex-col justify-center items-center  ${time ? 'blur' : ''}`}>
        <Phone />
        <div className="">
            <div className="flex flex-col justify-center text-center mt-8 mb-10 ">
            {footerlinks.map(c => (
              <div className=" ">
                <Link to={`${c.link ? `${c.link}`:'' }`} key={c.name} className=" text-[#b3b3b3] button cursor-pointer underline-offset-1">{c.name}</Link>
              </div>
            ))}
          </div>
        </div>
   
    </div>
    );
  }

export default Home