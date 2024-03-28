import React from "react";
//import logo from '../../public/logo.svg';
import logo from '../../public/logo.png'

const Hero = () =>{
return(
    <>
<section className="px-3 py-5 bg-[#69d2e7]  lg:py-10">
    
    <div className="flex justify-between items-center mb-8">
    <img src={logo} alt="logo" className="w-20 "/>
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
            <p className="text-4xl text font-bold md:text-7xl ">Step into the <span className="text-orange-600">Limelight</span></p>
            <p className="mt-2 text-sm md:text-lg">Streamline your app publishing journey with our intuitive platform.</p>

            <div className="flex justify-evenly space-x-6">  
            <button
                className="h-12 border-black border-2 font-medium mt-4 p-2.5 bg-[#2fff2f]   shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[(0)] "
                >
            Get Started
            </button>
            </div>
                </div>
        <div className="order-1 lg:order-2">
            <img className=" h-80 w-80 object-cover lg:w-[500px] lg:h-[500px] shadow-[7px_7px_0px_rgba(0,0,0,1)]" src="https://img.freepik.com/free-vector/happy-man-standing-spotlight_74855-16900.jpg?w=996&t=st=1711590066~exp=1711590666~hmac=41faaf3d80e19a4031be24afea45cf2ccb7fcf05f0d2e5dde958e043ec391042" alt=""/>
        </div>
    </div>
</section>
    </>
)
}

export default Hero