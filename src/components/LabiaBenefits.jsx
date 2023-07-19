import React from 'react'
import { oshot_image5, } from '../assets'
import { NavLink } from 'react-router-dom'

const OshotBenefits
 = () => {
  return (
    <div className={`flex w-full flex-row  md:min-h-[55vh]   `}>
        <div className={`hidden md:flex w-[45%]  flex  `}>
            {/* <video src={breastliftvideo} autoPlay loop muted className={` object-cover h-[100%] w-[100%]`}></video> */}
            <img src={oshot_image5} className={`w-full h-full object-cover`}></img>
        </div>
        <div className={`hidden md:flex flex flex-col w-[55%] p-[2vh]  items-center`}>
            <h1 className={`text-gold1 text-[5vh] text-center font-header`}>Labia Fillers Benefits</h1>
            <p className={`text-white font-poppins text-[2.1vh] text-justify mt-[3vh] mb-[2vh] font-main`}>Our labia fillers treatment offers an exceptional solution for women seeking lasting improvements in their intimate well-being. This innovative procedure utilizes non-animal, hyaluronic acid-based dermal filler products, providing an array of benefits, including:</p>
            <ul className={`text-white text-[2.1vh] font-poppins w-full items-left`}>
                <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>Achieve a more aesthetically pleasing appearance of the labia majora, leading to increased self-confidence and comfort.</li>
                <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Experience heightened sensitivity and pleasure during intimate activities, enhancing overall sexual satisfaction.</li>
                <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>Address issues of volume loss and sagging in the labial area, restoring a youthful and rejuvenated look.</li>
                <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>Tailored treatment plans designed to meet your unique desires and individual anatomy, ensuring personalized outcomes.</li>
                {/* <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>Fill implant ‘rippling’</li> */}
                <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Enjoy a comfortable and straightforward procedure with minimal downtime, allowing you to resume your regular activities promptly.</li>
            </ul>
            <NavLink to={`/book-now`}><button className={` text-[3vh] px-[2vh] py-[0.5vh] bg-black border-gold1 border-2 text-gold1 hover:bg-white mt-[5vh]  md:mt-[2vh]`}>Book Consultation</button></NavLink>
        </div>
        

      <div className={`md:hidden flex flex-col items-center`}>
      <h1 className={`text-gold1 text-[5vh] text-center font-header`}>Labia Fillers Benefits</h1>
      {/* <video src={boobs10} autoPlay loop muted className={` object-cover h-[100%] w-[100%]`}></video> */}
      <img src={oshot_image5} className={`w-full h-full object-cover`}></img>
      <p className={`text-white font-poppins text-[2.1vh] text-left pl-[1vh] mt-[3vh] mb-[2vh] font-main`}>Our labia fillers treatment offers an exceptional solution for women seeking lasting improvements in their intimate well-being. This innovative procedure utilizes non-animal, hyaluronic acid-based dermal filler products, providing an array of benefits, including:</p>
            <ul className={`text-white text-[2.1vh] font-poppins pl-[1vh]`}>
                <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>Achieve a more aesthetically pleasing appearance of the labia majora, leading to increased self-confidence and comfort.</li>
                <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>Experience heightened sensitivity and pleasure during intimate activities, enhancing overall sexual satisfaction.</li>
                <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>Address issues of volume loss and sagging in the labial area, restoring a youthful and rejuvenated look.</li>
                <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>Tailored treatment plans designed to meet your unique desires and individual anatomy, ensuring personalized outcomes.</li>
                {/* <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>Fill implant ‘rippling’</li> */}
                <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>Enjoy a comfortable and straightforward procedure with minimal downtime, allowing you to resume your regular activities promptly.</li>
            </ul>
            <NavLink to={`/book-now`}><button className={` text-[3vh] px-[2vh] py-[0.5vh] bg-black border-gold1 border-2 text-gold1 hover:bg-white mt-[5vh]  md:mt-[2vh]`}>Book Consultation</button></NavLink>
      </div>
    
    </div>
  )
}

export default OshotBenefits
