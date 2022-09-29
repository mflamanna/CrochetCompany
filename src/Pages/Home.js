import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import LoadingHome from '../Components/Loading/LoadingHome'
import LogoSection from '../Components/Main/LogoSection'
import NavBarMobile from '../Components/NavBarMobile/NavBarMobile'

function Home() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading?
        <div className='loadingHome'>
        <LoadingHome/>
        </div>
        :
        <>
        <Header/>
        <LogoSection/>
        <NavBarMobile/>
        <Footer/>
        </> 

      }
    </div>
  )
}

export default Home