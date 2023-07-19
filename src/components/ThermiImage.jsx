import React from 'react'
import {  thermiva } from '../assets'

const OshotImage = () => {
  return (
    <div className={`relative`}>
        <img className={`w-screen h-screen object-cover`} src={thermiva}></img>
        <div className={`absolute left-[1.5vw] top-[28%] md:w-[45%]`}>
        {/* <div className={`flex flex-col justify-center items-left h-screen w-[35%] ml-[3vh]`}> */}
                    {/* <h1 className={`text-gold1 text-[8vh] font-header mb-[3vh] mt-20 text-left`}>Vampire Breast Lift™ </h1> */}
                    <h1 className={`text-gold1 text-[8vh] font-header  mt-[3vh] text-left`}>Thermiva</h1>
                <h1 className={`text-gold1 text-[8vh] font-header mb-[1vh] text-left`}>Feminine Wellness</h1>
                        <h1 className={`text-white text-[2.5vh] font-main mb-[1vh] text-left  w-full md:w-[75%]`}>ThermiVa offers a cutting-edge solution for women seeking to revitalize their intimate well-being. This state-of-the-art procedure harnesses your body's natural regenerative potential to enhance feminine wellness and confidence. </h1>
                        <a className={`text-gold1 hover-underline-animation2 text-left text-[2vh] font-main `}>READ MORE</a>
                       
                    {/* </div> */}
        </div>
        {/* <i className={`pl-6 pr-6 pt-5 pb-5 text-[20px] absolute fa-solid fa-arrow-down bg-white rounded-full left-1/2 transform -translate-x-1/2 bottom-10 animate-bounce`}></i> */}
    </div>
  )
}

export default OshotImage