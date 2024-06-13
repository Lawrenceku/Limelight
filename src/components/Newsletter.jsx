import React from "react";

 const Newsletter =()=>{
  return(
    <div class="relative bg-[#ff6b6b]">
    <div class="absolute inset-x-0 bottom-0">
        <svg className="shadow-[5px,5px,0px,rgba(0,0,0,1)]" viewBox="0 0 224 12" fill="currentColor" class="w-full -mb-1 text-[rgb(250,235,215,1)]" preserveAspectRatio="none">
            <path
                d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z">
            </path>
        </svg>
    </div>
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
            <h2 class="mb-6 font-sans text-4xl text-center font-bold tracking-tight sm:leading-none">
              Subscribe to our newsletter
            </h2>
            <p class="mb-6 text-bold text-center  md:text-lg">
            Stay up to date with the latest news, updates, and exclusive offers from Limelight. Enter your email to subscribe to our newsletter.
            </p>
            <form
              className="flex w-min items-center rounded-md border-2 mx-auto border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              role="form"
            >
              <input
                className="w-[30ch] rounded-md p-[10px] outline-none"
                type="text"
                name="email"
                id="email"
                placeholder="Email"
              />
              <button
                className="rounded-e-[5px] border-l-2 border-black bg-[#C4A1FF] p-[10px] px-5"
                type="submit"
                aria-label="Submit Newsletter"
              >
                Submit
              </button>
            </form>
            <p class="max-w-md mb-10 text-xs tracking-wide mt-2 sm:text-sm sm:mx-auto md:mb-16 text-center  text-white">
            Join our community and be the first to know about our latest app releases, updates, and exclusive offers. Subscribe now to stay in the Limelight!
            </p>
            <a href="/" aria-label="Scroll down"
                className="flex items-center justify-center w-10 h-10 mx-auto text-black duration-300 transform border border-gray-800 shadow-[(7px,7px,0px,rgba(0,0,0,1))] rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110">
                <svg className="shadow-[(7px,7px,0px,rgba(0,0,0,1))] " xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                    <path
                        d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z">
                    </path>
                </svg>
            </a>
        </div>
    </div>
</div>
  )
}

export default Newsletter