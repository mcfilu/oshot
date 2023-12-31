import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import BookNow from '../components/BookNow'

import YoutubeTestimonials from '../components/YoutubeTestimonials'
import WakilSummary from '../components/WakilSummary'
import TrustPilotSlider from '../components/TrustPilotSlider'
import Awards from '../components/Awards'
import Media from '../components/Media'

import OshotBenefits from '../components/OshotBenefits'
import OshotCompare from '../components/OshotCompare'
import OshotDetails from '../components/OshotDetails'
import OshotFaqs from '../components/OshotFaqs'
import OshotImage from '../components/OshotImage'
import OshotOpening from '../components/OshotOpening'
import OshotServices from '../components/OshotServices'
import OshotSummary from '../components/OshotSummary'
import OshotTreated from '../components/OshotTreated'
import OshotVideo from '../components/OshotVideo'
import FooterBook from '../components/FooterBook'
import OconceptInfo from '../components/OconceptInfo'
// import { Oshot_vid } from '../assets'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'

const Oshot = () => {
    // const [videoEnded, setVideoEnded] = useState(false);
    // // var Speed = 50;
    // const handleVideoEnd = () => {
    //     setVideoEnded(true);
    // };

  return (
    <div className={`bg- w-full`}>
        <Helmet>
            <title>Revitalize and Rejuvenate with the O-Shot in London | O-Shot</title>
            <meta name='description' content="Revitalize your intimate life with O-Shot in London. Dr. Sherif Wakil offers top-notch O Concept treatment. Call +44 (0)20 3006 8459 for a consultation." />
        </Helmet>
        {/* <div className={`hidden md:flex fixed z-20 `}>
            <video src={Oshot_vid} className={`${videoEnded ? 'hidden' : ''} w-screen`} onEnded={handleVideoEnd} onClick={handleVideoEnd} id="vid_player" autoPlay muted></video>
        </div> */}

        <div className={`fixed z-10 `}>
            <Navbar/>
        </div>
        <div className={`fixed w-full bottom-0 left-0 z-20 `}>
            <FooterBook/>
        </div>
        <div className={`relative z-0 ` }>

                <OshotImage/>

        </div>
        <div className="flex flex-col bg-black" >
        <div className={`flex flex-col justify-center mx-auto w-full`}>
              <div id="oshot_opening" className={`flex  w-full  justify-center mt-20`}>
                <OshotOpening/>
              </div>
              <div className={`flex  w-full  items-center justify-center mt-[7vh]`}>
                  <WakilSummary/>
              </div>
              <div className={`flex  w-full  justify-center  mt-[7vh]`}>
                <OshotDetails/>
              </div>
              <div className={`flex  w-full  items-center mt-[7vh]`}>
                  <OshotBenefits/>
              </div>
              <div className={`flex  w-full  items-center mt-[7vh] `}>
                  <OshotTreated/>
              </div>
              
              <div className={`flex  w-full  items-center  justify-center mt-[7vh]`}>
                  <OshotVideo/>
              </div>
              
              <div className={`flex  w-full items-center mt-[7vh]`}>
                  <OshotSummary/>
              </div>
              
              <div className={`flex  w-full md:hidden items-center mt-[7vh]`}>
                  <OshotCompare/>
              </div>
              <div className={`flex  w-full  md:hidden items-center mt-[7vh]`}>
                  <OshotFaqs/>
              </div>
             
              <div className={`hidden md:flex flex-row w-full h-auto    mt-[7vh] `}>
                <div className={`flex w-1/2 border-r-gold1 border-r-2`}>
                  <OshotFaqs/>
                </div>
                <div className={`flex w-1/2`}>
                    <OshotCompare/>
                </div>
              </div>
              <div className={`flex  w-full items-center mt-[7vh]`}>
                  <OconceptInfo/>
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
                  <OshotServices/>
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

export default Oshot