import React from "react";
import logo from '../../public/logo.svg';
//import logo from '../../public/logo.png'

const Hero = () =>{
return(
    <>
<section className="px-3 py-5  w-full h-[50%]  bg-[rgba(255,255,255,0.9)]  lg:py-10">
    <div className="flex justify-between items-center mb-8">
    <img src={logo} alt="logo" className="w-20 text-[#2fff2f] "/>
            <div className="flex">
            <button
                className="mx-8 min-w-20 h-12 border-black border-2 mt-4 p-2.5 bg-white font-medium hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[(0)] shadow-[3px_3px_0px_rgba(0,0,0,1)] " >
            Log In
            </button>
                <button
                className="md:mx-8  text-nowrap border-black border-2 mt-4 p-2.5 bg-black text-white font-medium  hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[(0)] shadow-[3px_3px_0px_rgba(0,0,0,1)] " >
            Sign Up
            </button>
            </div>
    </div>
    
    <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
        <div className="order-2 lg:order-1 mx-10 flex flex-col justify-center md:items-start items-center">
            <p className="text-4xl text font-bold md:text-left text-center md:text-7xl ">Step into the <span className="text-[#ff4911]">Limelight</span></p>
            <p className="mt-2 text-sm md:text-lg md:text-left text-center">Streamline your product publishing journey with Limelight.</p>

            <div className="flex justify-evenly space-x-6">  
            <button
                className="h-12 border-black border-2 font-medium mt-4 p-2.5 bg-[#2fff2f]   shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[(0)] "
                >
            Get Started
            </button>
            </div>
                </div>
        <div className="order-1 lg:order-2 p-8 ">
            <img className="h-72 w-72 md:h-80  md:w-80 object-cover lg:w-[500px] lg:h-[500px] " src="../../public/megaphone-concept-illustration.png" alt=""/>
        </div>
    </div>
</section>
    </>
)
}

export default Hero