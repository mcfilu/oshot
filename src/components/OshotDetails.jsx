import React from 'react'
// import { PopupButton } from "react-calendly";
import { blood_cells } from '../assets';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { NavLink } from 'react-router-dom';

const OshotDetails = () => {
  return (
    <div className={` flex w-full flex-row     `}>
         
        <div className={`hidden md:flex w-[55%] h-[100%]   flex flex-col items-left justify-between md:p-[2vh] pt-[0px] `}>
            <div className={`flex flex-col w-[100%]   items-center justify-center my-auto p-[1vh]`}>

                <p className={`flex text-gold1 text-[5vh] text-center font-header`}>How does it work?</p>
                <p className={`flex text-white text-[2.2vh] mt-[5vh] font-main`}>The O-Shot®, a groundbreaking treatment for sexual rejuvenation and enhancement, provides natural stimulation for revitalizing the genital area and activating the orgasmic response in men. This innovative solution addresses a wide range of factors contributing to low libido and sexual dysfunction, including aging, stress, and underlying medical conditions. With a significant number of men experiencing these issues, the O-Shot® has emerged as a popular and effective method to improve overall sexual wellness.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] font-main`}>Sexual dysfunction can arise from various causes, including hormonal imbalances, neurological conditions, vascular issues affecting blood flow to the genitals, and psychological factors. The O-Shot® procedure harnesses the power of Platelet Rich Plasma (PRP), which is obtained by processing a small sample of the patient's blood. The PRP, rich in growth factors, is then injected into the genital area, stimulating natural regenerative processes.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] font-main`}>Similar to the P-Shot®, the O-Shot® takes advantage of the body's innate healing capabilities to promote tissue growth and increase blood flow to the penis. By triggering the activation of stem cells and promoting the regeneration of healthier tissue, the O-Shot® aims to enhance sensation, improve function, and rejuvenate the overall sexual experience.</p>
                {/* <p className={`flex text-white text-[2.2vh] mt-[1.5vh] font-main`}>Named after the Greek god of fertility, the Priapus Shot®, or P-Shot®, is an innovative technique specifically designed to rejuvenate the penis, enhance sensation, and improve function. By utilizing Platelet Rich Plasma (PRP), this pioneering treatment offers a promising solution for individuals seeking to improve their sexual health and well-being.</p> */}
                {/* <p className={`flex text-white text-[2.2vh] mt-[1.5vh] font-main`}>The PRP contains a large concentration of growth factors, crucial cells responsible for revitalization and renewal in our bodies, making it a potent and natural approach to rejuvenation.</p> */}
                <NavLink to={`/book-now`}><button className={` text-[3vh] px-[2vh] py-[0.5vh] bg-black border-gold1 border-2 text-gold1 hover:bg-white mt-[5vh]  md:mt-[2vh] font-main`}>Book Consultation</button></NavLink>
            </div>

            {/* <div className={`flex flex-col w-[100%]  bg-opacity-70 rounded-[9px] my-[1vh]`}>

                <p className={`text-white font-poppins text-[2vh] my-[1vh] text-justify`}>This non-surgical treatment can be used to restore natural health and youthfulness to the skin on the face by harnessing the natural healing powers of the human body to repair damaged skin and stimulate new skin cell growth.</p>
                <p className={`text-white font-poppins text-[2vh] my-[1vh] text-justify`}>This non-surgical treatment can be used to restore natural health and youthfulness to the skin on the face.</p>
            </div>
            <p className=" h-[6vh] w-[12vw] bg-gold1 text-white text-[2.5vh] bg-opacity-80 rounded-[9px] flex items-center justify-center hover:text-gold1 hover:bg-white"><PopupButton
                url="https://calendly.com/nikekarta2/30min"


                rootElement={document.getElementById("root")}
                text="Book Consultation"
                textColor="#ffffff"
                color="#ffffff"
                /></p> */}
        </div>
        <div className={`hidden md:flex w-[45%] h-[100%] flex items-center`}>
            <video src={blood_cells} autoPlay loop muted className={` object-cover w-[100%] h-[100%]`}></video>
            {/* <img className={`w-full h-full object-cover`} src={sherif}></img> */}
        </div>

        <div className={`flex flex-col md:hidden items-center`}>
            <p className={`flex text-gold1 text-[6vh] text-center font-header`}>How does it work?</p>
            <video src={blood_cells} autoPlay loop muted className={` object-cover h-[100%]`}></video>
                <p className={`flex text-white text-[2.2vh] mt-[5vh] ml-[1vh] font-main`}>The O-Shot®, a groundbreaking treatment for sexual rejuvenation and enhancement, provides natural stimulation for revitalizing the genital area and activating the orgasmic response in men. This innovative solution addresses a wide range of factors contributing to low libido and sexual dysfunction, including aging, stress, and underlying medical conditions. With a significant number of men experiencing these issues, the O-Shot® has emerged as a popular and effective method to improve overall sexual wellness.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] ml-[1vh] font-main`}>Sexual dysfunction can arise from various causes, including hormonal imbalances, neurological conditions, vascular issues affecting blood flow to the genitals, and psychological factors. The O-Shot® procedure harnesses the power of Platelet Rich Plasma (PRP), which is obtained by processing a small sample of the patient's blood. The PRP, rich in growth factors, is then injected into the genital area, stimulating natural regenerative processes.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] ml-[1vh] font-main`}>Similar to the P-Shot®, the O-Shot® takes advantage of the body's innate healing capabilities to promote tissue growth and increase blood flow to the penis. By triggering the activation of stem cells and promoting the regeneration of healthier tissue, the O-Shot® aims to enhance sensation, improve function, and rejuvenate the overall sexual experience.</p>
                {/* <p className={`flex text-white text-[2.2vh] mt-[1.5vh] ml-[1vh] font-main`}>Named after the Greek god of fertility, the Priapus Shot®, or P-Shot®, is an innovative technique specifically designed to rejuvenate the penis, enhance sensation, and improve function. By utilizing Platelet Rich Plasma (PRP), this pioneering treatment offers a promising solution for individuals seeking to improve their sexual health and well-being.</p> */}
                {/* <p className={`flex text-white text-[2.2vh] mt-[1.5vh] ml-[1vh] font-main`}>The PRP contains a large concentration of growth factors, crucial cells responsible for revitalization and renewal in our bodies, making it a potent and natural approach to rejuvenation.</p> */}
                <NavLink to={`/book-now`}><button className={` text-[3vh] px-[2vh] py-[0.5vh] bg-black border-gold1 border-2 text-gold1 hover:bg-white mt-[5vh]  md:mt-[1vh] font-main`}>Book Consultation</button></NavLink>

        </div>
       
       
        
    
    </div>
  )
}

export default OshotDetails