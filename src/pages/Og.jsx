import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import BookNow from '../components/BookNow'

import YoutubeTestimonials from '../components/YoutubeTestimonials'
import WakilSummary from '../components/WakilSummary'
import TrustPilotSlider from '../components/TrustPilotSlider'
import Awards from '../components/Awards'
import Media from '../components/Media'

import OGBenefits from '../components/OGBenefits'
import OGCompare from '../components/OGCompare'
import OGDetails from '../components/OGDetails'
import OGFaqs from '../components/OGFaqs'
import OGImage from '../components/OGImage'
import OGOpening from '../components/OGOpening'
import OGServices from '../components/OGServices'
import OGSummary from '../components/OGSummary'
import OGTreated from '../components/OGTreated'
import OGVideo from '../components/OGVideo'
import FooterBook from '../components/FooterBook'
import OconceptInfo from '../components/OconceptInfo'
// import { OG_vid } from '../assets'
import { useState } from 'react'

const Og = () => {
    // const [videoEnded, setVideoEnded] = useState(false);
    // // var Speed = 50;
    // const handleVideoEnd = () => {
    //     setVideoEnded(true);
    // };

  return (
    <div className={`bg- w-full`}>
        {/* <div className={`hidden md:flex fixed z-20 `}>
            <video src={OG_vid} className={`${videoEnded ? 'hidden' : ''} w-screen`} onEnded={handleVideoEnd} onClick={handleVideoEnd} id="vid_player" autoPlay muted></video>
        </div> */}

        <div className={`fixed z-10 `}>
            <Navbar/>
        </div>
        <div className={`fixed w-full bottom-0 left-0 z-20 `}>
            <FooterBook/>
        </div>
        <div className={`relative z-0 ` }>

                <OGImage/>

        </div>
        <div className="flex flex-col bg-black" >
        <div className={`flex flex-col justify-center mx-auto w-full`}>
              <div className={`flex  w-full  justify-center mt-20`}>
                <OGOpening/>
              </div>
              <div className={`flex  w-full  items-center justify-center mt-[7vh]`}>
                  <WakilSummary/>
              </div>
              <div className={`flex  w-full  justify-center  mt-[7vh]`}>
                <OGDetails/>
              </div>
              <div className={`flex  w-full  items-center mt-[7vh]`}>
                  <OGBenefits/>
              </div>
              <div className={`flex  w-full  items-center mt-[7vh] `}>
                  <OGTreated/>
              </div>
              
              <div className={`flex  w-full  items-center  justify-center mt-[7vh]`}>
                  <OGVideo/>
              </div>
              
              <div className={`flex  w-full items-center mt-[7vh]`}>
                  <OGSummary/>
              </div>
              <div className={`flex  w-full items-center mt-[7vh]`}>
                  <OconceptInfo/>
              </div>
              <div className={`flex  w-full md:hidden items-center mt-[7vh]`}>
                  <OGCompare/>
              </div>
              <div className={`flex  w-full  md:hidden items-center mt-[7vh]`}>
                  <OGFaqs/>
              </div>
             
              <div className={`hidden md:flex flex-row w-full h-auto    mt-[7vh] `}>
                <div className={`flex w-1/2 border-r-gold1 border-r-2`}>
                  <OGFaqs/>
                </div>
                <div className={`flex w-1/2`}>
                    <OGCompare/>
                </div>
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
                  <OGServices/>
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

export default Og