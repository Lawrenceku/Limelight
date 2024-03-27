import React from "react";
import logo from '../../public/logo.svg';
//import logo from '../../public/logo.png'

const Hero = () =>{
return(
    <>
<section className="px-3 py-5 bg-neutral-100  lg:py-10">
    
    <div className="flex justify-between items-center mb-8">
    <img src={logo} alt="logo" className="w-20 "/>
            <div>
            <button
                className="mx-8 w-20 h-12 border-black border-2 mt-4 p-2.5 bg-white font-medium hover:shadow-[0] shadow-[3px_3px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF]" >
            Log In
            </button>
                <button
                className="mx-8  h-12 border-black border-2 mt-4 p-2.5 bg-black text-white font-medium  hover:shadow-[0] shadow-[3px_3px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF]" >
            Sign Up
            </button>
            </div>
    </div>

    
    <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
        <div className="order-2 lg:order-1 flex flex-col justify-center items-center">
            <p className="text-4xl text-center font-bold md:text-7xl text-orange-600">Step into the Limelight.</p>
            <p className="text-4xl text-center font-bold md:text-7xl">Publish Your Dreams with Limelight</p>
            <p className="mt-2 text-sm md:text-lg">Streamline your app publishing journey with our intuitive platform.</p>

            <div className="flex justify-evenly space-x-6">  
            <button
                className="h-12 border-black border-2 mt-4 p-2.5 bg-[#82ff82]  hover:shadow-[0] shadow-[3px_3px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF]"
                >
            Get Started
            </button>
            </div>
                </div>
        <div className="order-1 lg:order-2">
            <img className=" h-80 w-80 object-cover lg:w-[500px] lg:h-[500px]" src="https://1000logos.net/wp-content/uploads/2024/01/Rocket-Emoji.png" alt=""/>
        </div>
    </div>
</section>
    </>
)
}

export default Hero