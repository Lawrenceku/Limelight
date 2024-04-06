import React from "react";
import logo from '../../public/logo.svg';
//import logo from '../../public/logo.png'

const Hero = () =>{
return(
    <>
<section className="px-3 py-5 bg-[#a388ee] bg-top bg-cover bg-center bg-no-repeat w-full h-[50%] bg- lg:py-10">
    
    <div className="flex justify-between items-center mb-8">
    <img src={logo} alt="logo" className="w-20 text-[#2fff2f] "/>
            <div>
            <button
                className="mx-8 w-20 h-12 border-black border-2 mt-4 p-2.5 bg-white font-medium hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[(0)] shadow-[3px_3px_0px_rgba(0,0,0,1)] " >
            Log In
            </button>
                <button
                className="mx-8  h-12 border-black border-2 mt-4 p-2.5 bg-black text-white font-medium  hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[(0)] shadow-[3px_3px_0px_rgba(0,0,0,1)] " >
            Sign Up
            </button>
            </div>
    </div>

    
    <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
        <div className="order-2 lg:order-1 mx-10 flex flex-col justify-center md:items-start items-center">
            <p className="text-4xl text font-bold md:text-7xl ">Step into the <span className="text-[#ff4911]">Limelight</span></p>
            <p className="mt-2 text-sm md:text-lg">Streamline your app publishing journey with our intuitive platform.</p>

            <div className="flex justify-evenly space-x-6">  
            <button
                className="h-12 border-black border-2 font-medium mt-4 p-2.5 bg-[#2fff2f]   shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[(0)] "
                >
            Get Started
            </button>
            </div>
                </div>
        <div className="order-1 lg:order-2 p-8 bg-[#ff4911] shadow-[8px_8px_0px_rgba(0,0,0,1)]">
            <img className=" h-80  w-80 object-cover lg:w-[500px] lg:h-[500px] " src="../../public/illustration.jpg" alt=""/>
        </div>
    </div>
</section>
    </>
)
}

export default Hero