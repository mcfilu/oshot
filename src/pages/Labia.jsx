import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import BookNow from '../components/BookNow'

import YoutubeTestimonials from '../components/YoutubeTestimonials'
import WakilSummary from '../components/WakilSummary'
import TrustPilotSlider from '../components/TrustPilotSlider'
import Awards from '../components/Awards'
import Media from '../components/Media'

import LabiaBenefits from '../components/LabiaBenefits'
import LabiaCompare from '../components/LabiaCompare'
import LabiaDetails from '../components/LabiaDetails'
import LabiaFaqs from '../components/LabiaFaqs'
import LabiaImage from '../components/LabiaImage'
import LabiaOpening from '../components/LabiaOpening'
import LabiaServices from '../components/LabiaServices'
import LabiaSummary from '../components/LabiaSummary'
import LabiaTreated from '../components/LabiaTreated'
import LabiaVideo from '../components/LabiaVideo'
import FooterBook from '../components/FooterBook'
import OconceptInfo from '../components/OconceptInfo'
// import { Labia_vid } from '../assets'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'

const Labia = () => {
    // const [videoEnded, setVideoEnded] = useState(false);
    // // var Speed = 50;
    // const handleVideoEnd = () => {
    //     setVideoEnded(true);
    // };

  return (
    <div className={`bg- w-full`}>
        <Helmet>
            <title>Discover Labia Fillers in London | O-Shot</title>
            <meta name='description' content="Enhance your confidence with top-notch labia fillers in London by Dr. Sherif Wakil. Call us today at +44 (0)20 3006 8459 for the best results and care." />
        </Helmet>
        {/* <div className={`hidden md:flex fixed z-20 `}>
            <video src={Labia_vid} className={`${videoEnded ? 'hidden' : ''} w-screen`} onEnded={handleVideoEnd} onClick={handleVideoEnd} id="vid_player" autoPlay muted></video>
        </div> */}

        <div className={`fixed z-10 `}>
            <Navbar/>
        </div>
        <div className={`fixed w-full bottom-0 left-0 z-20 `}>
            <FooterBook/>
        </div>
        <div className={`relative z-0 ` }>

                <LabiaImage/>

        </div>
        <div className="flex flex-col bg-black" >
        <div className={`flex flex-col justify-center mx-auto w-full`}>
              <div id="labia_opening" className={`flex  w-full  justify-center mt-20`}>
                <LabiaOpening/>
              </div>
              <div className={`flex  w-full  items-center justify-center mt-[7vh]`}>
                  <WakilSummary/>
              </div>
              <div className={`flex  w-full  justify-center  mt-[7vh]`}>
                <LabiaDetails/>
              </div>
              <div className={`flex  w-full  items-center mt-[7vh]`}>
                  <LabiaBenefits/>
              </div>
              <div className={`flex  w-full  items-center mt-[7vh] `}>
                  <LabiaTreated/>
              </div>
              
              <div className={`flex  w-full  items-center  justify-center mt-[7vh]`}>
                  <LabiaVideo/>
              </div>
              
              <div className={`flex  w-full items-center mt-[7vh]`}>
                  <LabiaSummary/>
              </div>
              
              <div className={`flex  w-full md:hidden items-center mt-[7vh]`}>
                  <LabiaCompare/>
              </div>
              <div className={`flex  w-full  md:hidden items-center mt-[7vh]`}>
                  <LabiaFaqs/>
              </div>
             
              <div className={`hidden md:flex flex-row w-full h-auto    mt-[7vh] `}>
                <div className={`flex w-1/2 border-r-gold1 border-r-2`}>
                  <LabiaFaqs/>
                </div>
                <div className={`flex w-1/2`}>
                    <LabiaCompare/>
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
                  <LabiaServices/>
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

export default Labia