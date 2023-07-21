import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import BookNow from '../components/BookNow'

import YoutubeTestimonials from '../components/YoutubeTestimonials'
import WakilSummary from '../components/WakilSummary'
import TrustPilotSlider from '../components/TrustPilotSlider'
import Awards from '../components/Awards'
import Media from '../components/Media'

import ChairBenefits from '../components/ChairBenefits'
import ChairCompare from '../components/ChairCompare'
import ChairDetails from '../components/ChairDetails'
import ChairFaqs from '../components/ChairFaqs'
import ChairImage from '../components/ChairImage'
import ChairOpening from '../components/ChairOpening'
import ChairServices from '../components/ChairServices'
import ChairSummary from '../components/ChairSummary'
import ChairTreated from '../components/ChairTreated'
import ChairVideo from '../components/ChairVideo'
import FooterBook from '../components/FooterBook'
import OconceptInfo from '../components/OconceptInfo'
// import { Chair_vid } from '../assets'
import { useState } from 'react'

const Chair = () => {
    // const [videoEnded, setVideoEnded] = useState(false);
    // // var Speed = 50;
    // const handleVideoEnd = () => {
    //     setVideoEnded(true);
    // };

  return (
    <div className={`bg- w-full`}>
        {/* <div className={`hidden md:flex fixed z-20 `}>
            <video src={Chair_vid} className={`${videoEnded ? 'hidden' : ''} w-screen`} onEnded={handleVideoEnd} onClick={handleVideoEnd} id="vid_player" autoPlay muted></video>
        </div> */}

        <div className={`fixed z-10 `}>
            <Navbar/>
        </div>
        <div className={`fixed w-full bottom-0 left-0 z-20 `}>
            <FooterBook/>
        </div>
        <div className={`relative z-0 ` }>

                <ChairImage/>

        </div>
        <div className="flex flex-col bg-black" >
        <div className={`flex flex-col justify-center mx-auto w-full`}>
              <div id="chair_opening" className={`flex  w-full  justify-center mt-20`}>
                <ChairOpening/>
              </div>
              <div className={`flex  w-full  items-center justify-center mt-[7vh]`}>
                  <WakilSummary/>
              </div>
              <div className={`flex  w-full  justify-center  mt-[7vh]`}>
                <ChairDetails/>
              </div>
              <div className={`flex  w-full  items-center mt-[7vh]`}>
                  <ChairBenefits/>
              </div>
              <div className={`flex  w-full  items-center mt-[7vh] `}>
                  <ChairTreated/>
              </div>
              
              <div className={`flex  w-full  items-center  justify-center mt-[7vh]`}>
                  <ChairVideo/>
              </div>
              
              <div className={`flex  w-full items-center mt-[7vh]`}>
                  <ChairSummary/>
              </div>
              <div className={`flex  w-full items-center mt-[7vh]`}>
                  <OconceptInfo/>
              </div>
              <div className={`flex  w-full md:w-[70%] md:mx-auto items-center mt-[7vh]`}>
                  <ChairFaqs/>
              </div>
              {/* <div className={`flex  w-full h-auto  justify-center items-center  mt-[7vh] `}>
                  
              </div> */}
              <div className={`flex  w-full  justify-center items-center  mt-[7vh]`}>
                <YoutubeTestimonials/>
              </div>
              <div className={`flex  w-full  justify-center items-center `}>
                  <BookNow/>
              </div>
              
              
              
             
              
              
              <div className={`flex flex-col w-full  mt-[7vh]`}>
                  <TrustPilotSlider/>
              </div>
              
              <div className={`flex  w-full  items-center mt-[7vh]`}>
                  <ChairServices/>
              </div>
              <div className={`flex flex-col  justify-center  my-[7vh]`}>
                    <div>
                        <Media/>
                    </div>
                    
                    <div className={`mt-[2vh]`}>
                        <Awards/>
                    </div>
                </div>
              

          </div>
        </div>
        <div className={`relative z-0 ` }>
          <Footer/>
        </div>
    </div>
  )
}

export default Chair