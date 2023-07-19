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
            <h1 className={`text-gold1 text-[5vh] text-center font-header`}>Thermiva Feminine Wellness Benefits</h1>
            <p className={`text-white font-poppins text-[2.1vh] text-justify mt-[3vh] mb-[2vh] font-main`}>ThermiVa presents a remarkable solution for women seeking long-term improvements in feminine wellness and intimate well-being. This innovative treatment is designed to address various concerns, offering a multitude of benefits, such as:</p>
            <ul className={`text-white text-[2.1vh] font-poppins w-full items-left`}>
                <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>Experience heightened sensitivity, promoting a more fulfilling and enjoyable intimate experience.</li>
                <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>ThermiVa utilizes advanced technology to tighten the vaginal tissues, restoring elasticity and tone for improved comfort.</li>
                <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>This non-invasive procedure uniquely targets enlarged or unsightly labia, enhancing external aesthetics without surgery.</li>
                <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>Alleviate symptoms such as dryness, irritation, and discomfort, enhancing overall well-being and confidence.</li>
                {/* <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>Fill implant ‘rippling’</li> */}
                {/* <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Alleviate symptoms such as white itchy patches on the genitals for improved comfort and well-being.</li> */}
            </ul>
            <NavLink to={`/book-now`}><button className={` text-[3vh] px-[2vh] py-[0.5vh] bg-black border-gold1 border-2 text-gold1 hover:bg-white mt-[5vh]  md:mt-[2vh]`}>Book Consultation</button></NavLink>
        </div>
        

      <div className={`md:hidden flex flex-col items-center`}>
      <h1 className={`text-gold1 text-[5vh] text-center font-header`}>Thermiva Feminine Wellness Benefits</h1>
      {/* <video src={boobs10} autoPlay loop muted className={` object-cover h-[100%] w-[100%]`}></video> */}
      <img src={oshot_image5} className={`w-full h-full object-cover`}></img>
      <p className={`text-white font-poppins text-[2.1vh] text-left pl-[1vh] mt-[3vh] mb-[2vh] font-main`}>ThermiVa presents a remarkable solution for women seeking long-term improvements in feminine wellness and intimate well-being. This innovative treatment is designed to address various concerns, offering a multitude of benefits, such as:</p>
            <ul className={`text-white text-[2.1vh] font-poppins pl-[1vh]`}>
                <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>Experience heightened sensitivity, promoting a more fulfilling and enjoyable intimate experience.</li>
                <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>ThermiVa utilizes advanced technology to tighten the vaginal tissues, restoring elasticity and tone for improved comfort.</li>
                <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>This non-invasive procedure uniquely targets enlarged or unsightly labia, enhancing external aesthetics without surgery.</li>
                <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>Alleviate symptoms such as dryness, irritation, and discomfort, enhancing overall well-being and confidence.</li>
                {/* <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>Fill implant ‘rippling’</li> */}
                {/* <li className={`flex items-center mt-[1vh] font-main`}><i  className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh] `}></i>Alleviate symptoms such as white itchy patches on the genitals for improved comfort and well-being.</li> */}
            </ul>
            <NavLink to={`/book-now`}><button className={` text-[3vh] px-[2vh] py-[0.5vh] bg-black border-gold1 border-2 text-gold1 hover:bg-white mt-[5vh]  md:mt-[2vh]`}>Book Consultation</button></NavLink>
      </div>
    
    </div>
  )
}

export default OshotBenefits
