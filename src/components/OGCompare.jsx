import React, {useState} from 'react'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { oshot_before8, oshot_after8, oshot_before9, oshot_after9, oshot_before10, oshot_after10, oshot_before11, oshot_after11 } from '../assets';

const OshotCompare
 = () => {
    const [hov1, setHov1] = useState(false);
    const [hov2, setHov2] = useState(false);
    const [hov3, setHov3] = useState(false);
    const [hov4, setHov4] = useState(false);
    const [hov5, setHov5] = useState(false);
    const [hov6, setHov6] = useState(false);
    const [hov7, setHov7] = useState(false);
    const [hov8, setHov8] = useState(false);
    const [hov9, setHov9] = useState(false);
    const [hov10, setHov10] = useState(false);
    
    const [vis3, set3] = useState(false);
    const [vis4, set4] = useState(false);
    const [vis5, set5] = useState(false);
    const [vis6, set6] = useState(false);
    const [vis7, set7] = useState(false);
    const [vis8, set8] = useState(false);
    const [vis9, set9] = useState(false);
    const [vis10, set10] = useState(false);
    const [buttonVis, setButton] = useState(true);
    
    const handleImages = () => {
        if (vis3 == false ){
            set3(true);
        }
        else if (vis4 == false){
            set4(true);
            setButton(false);
        }
       
         
    
    }
  return (
    <div className={` py-[2vh] w-full `}>
        <div className={`w-full flex flex-col justify-center items-center `}>
            <h1 className={`text-gold1  text-center text-[5vh] mb-[1vh] font-header`}>Treatment Effects</h1>
            <div className={`flex flex-row justify-between w-[50%] mx-auto`}>
                <h1 className={`text-[3.5vh] text-white font-main`}>Before</h1>
                <h1 className={`text-[3.5vh] text-white font-main`}>After</h1>
            </div>
            <div onMouseEnter={() => setHov1(true)} onMouseLeave={() => {setHov1(false)}} className={`flex flex-row justify-between w-full h-[40vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov1 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full md:w-[50%] mx-auto h-full justify-center`}>
                        <ReactCompareSlider
                            itemOne={<ReactCompareSliderImage src="sjfksldfj" srcSet={oshot_before8} alt="Image one"/>}
                            itemTwo={<ReactCompareSliderImage src={oshot_after8} srcSet={oshot_after8} alt="Image two" />}
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov1 ? 'hidden' : ''} ease-in-out duration-500`}>
                    <img className={`md:mr-[3vh] w-[47%] md:w-[43%] object-cover`} src={oshot_before8}></img>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <img className={`md:ml-[3vh] w-[47%] md:w-[43%] object-cover`} src={oshot_after8}></img>
                </div>
            </div>

            <div onMouseEnter={() => setHov2(true)} onMouseLeave={() => {setHov2(false)}} className={`flex flex-row justify-between w-full h-[40vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov2 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full md:w-[50%] mx-auto h-full justify-center`}>
                        <ReactCompareSlider
                            itemOne={<ReactCompareSliderImage src="sjfksldfj" srcSet={oshot_before9} alt="Image one"/>}
                            itemTwo={<ReactCompareSliderImage src={oshot_after9} srcSet={oshot_after9} alt="Image two" />}
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov2 ? 'hidden' : ''} ease-in-out duration-500`}>
                    <img className={`md:mr-[3vh] w-[47%] md:w-[43%] object-cover`} src={oshot_before9}></img>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <img className={`md:ml-[3vh] w-[47%] md:w-[43%] object-cover`} src={oshot_after9}></img>
                </div>
            </div>

            <div onMouseEnter={() => setHov3(true)} onMouseLeave={() => {setHov3(false)}} className={`${vis3 ? '' : 'hidden'} flex flex-row justify-between w-full h-[40vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov3 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full md:w-[50%] mx-auto h-full justify-center`}>
                        <ReactCompareSlider
                            itemOne={<ReactCompareSliderImage src="sjfksldfj" srcSet={oshot_before10} alt="Image one"/>}
                            itemTwo={<ReactCompareSliderImage src={oshot_after10} srcSet={oshot_after10} alt="Image two" />}
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov3 ? 'hidden' : ''} ease-in-out duration-500`}>
                    <img className={`md:mr-[3vh] w-[47%] md:w-[43%] object-cover`} src={oshot_before10}></img>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <img className={`md:ml-[3vh] w-[47%] md:w-[43%] object-cover`} src={oshot_after10}></img>
                </div>
            </div>

            <div onMouseEnter={() => setHov4(true)} onMouseLeave={() => {setHov4(false)}} className={`${vis4 ? "" : 'hidden'} flex flex-row justify-between w-full h-[40vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov4 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full md:w-[50%] mx-auto h-full justify-center`}>
                        <ReactCompareSlider
                            itemOne={<ReactCompareSliderImage src="sjfksldfj" srcSet={oshot_before11} alt="Image one"/>}
                            itemTwo={<ReactCompareSliderImage src={oshot_after11} srcSet={oshot_after11} alt="Image two" />}
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov4 ? 'hidden' : ''} ease-in-out duration-500`}>
                    <img className={`md:mr-[3vh] w-[47%] md:w-[43%] object-cover`} src={oshot_before11}></img>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <img className={`md:ml-[3vh] w-[47%] md:w-[43%] object-cover`} src={oshot_after11}></img>
                </div>
            </div>

            
            <button onClick={() => handleImages()} className={`flex mx-auto px-[1vh] py-[0.5vh] bg-black border-gold1 border-2 text-gold1 text-[2.5vh]  ${buttonVis ? "":"hidden"} mt-[1vh] font-main`}>Load More</button>
        </div>
    </div>
    
  )
}

export default OshotCompare
