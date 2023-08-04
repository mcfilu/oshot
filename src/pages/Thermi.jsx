import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import BookNow from '../components/BookNow'

import YoutubeTestimonials from '../components/YoutubeTestimonials'
import WakilSummary from '../components/WakilSummary'
import TrustPilotSlider from '../components/TrustPilotSlider'
import Awards from '../components/Awards'
import Media from '../components/Media'

import ThermiBenefits from '../components/ThermiBenefits'
import ThermiCompare from '../components/ThermiCompare'
import ThermiDetails from '../components/ThermiDetails'
import ThermiFaqs from '../components/ThermiFaqs'
import ThermiImage from '../components/ThermiImage'
import ThermiOpening from '../components/ThermiOpening'
import ThermiServices from '../components/ThermiServices'
import ThermiSummary from '../components/ThermiSummary'
import ThermiTreated from '../components/ThermiTreated'
import ThermiVideo from '../components/ThermiVideo'
import FooterBook from '../components/FooterBook'
import OconceptInfo from '../components/OconceptInfo'
// import { Thermi_vid } from '../assets'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'

const Thermi = () => {
    // const [videoEnded, setVideoEnded] = useState(false);
    // // var Speed = 50;
    // const handleVideoEnd = () => {
    //     setVideoEnded(true);
    // };

  return (
    <div className={`bg- w-full`}>
        <Helmet>
            <title>Thermiva Feminine Wellness in London | O-Shot</title>
            <meta name='description' content="Experience the best O concept treatment for feminine wellness in London with Dr. Sherif Wakil's Thermiva. Call +44 (0)20 3006 8459 for appointments." />
        </Helmet>
        {/* <div className={`hidden md:flex fixed z-20 `}>
            <video src={Thermi_vid} className={`${videoEnded ? 'hidden' : ''} w-screen`} onEnded={handleVideoEnd} onClick={handleVideoEnd} id="vid_player" autoPlay muted></video>
        </div> */}

        <div className={`fixed z-10 `}>
            <Navbar/>
        </div>
        <div className={`fixed w-full bottom-0 left-0 z-20 `}>
            <FooterBook/>
        </div>
        <div className={`relative z-0 ` }>

                <ThermiImage/>

        </div>
        <div className="flex flex-col bg-black" >
        <div className={`flex flex-col justify-center mx-auto w-full`}>
              <div id="thermi_opening" className={`flex  w-full  justify-center mt-20`}>
                <ThermiOpening/>
              </div>
              <div className={`flex  w-full  items-center justify-center mt-[7vh]`}>
                  <WakilSummary/>
              </div>
              <div className={`flex  w-full  justify-center  mt-[7vh]`}>
                <ThermiDetails/>
              </div>
              <div className={`flex  w-full  items-center mt-[7vh]`}>
                  <ThermiBenefits/>
              </div>
              <div className={`flex  w-full  items-center mt-[7vh] `}>
                  <ThermiTreated/>
              </div>
              
              <div className={`flex  w-full  items-center  justify-center mt-[7vh]`}>
                  <ThermiVideo/>
              </div>
              
              <div className={`flex  w-full items-center mt-[7vh]`}>
                  <ThermiSummary/>
              </div>
              
              <div className={`flex  w-full md:hidden items-center mt-[7vh]`}>
                  <ThermiCompare/>
              </div>
              <div className={`flex  w-full  md:hidden items-center mt-[7vh]`}>
                  <ThermiFaqs/>
              </div>
             
              <div className={`hidden md:flex flex-row w-full h-auto    mt-[7vh] `}>
                <div className={`flex w-1/2 border-r-gold1 border-r-2`}>
                  <ThermiFaqs/>
                </div>
                <div className={`flex w-1/2`}>
                    <ThermiCompare/>
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
                  <ThermiServices/>
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

export default Thermi