import React from "react"

export default function Marquee() {    
    return (
    <div className="py-16 px-8">
        <div className="relative flex overflow-x-hidden bg-white border-b-2 border-t-2 border-black">
        <div className="py-12 animate-marquee whitespace-nowrap">
            <span className="text-4xl font-medium mx-16"><img className="w-20 inline-block" src="https://play-lh.googleusercontent.com/4_RW0mQ5mJhGGJVydTlQsQ0pnqAYq9UoTVm2_gElrgRM13Q02w43HPgYVaMFy4b4smmF" alt="" />Google play console</span>
            <span className="text-4xl font-medium mx-16"><img className="w-20 inline-block" src="https://fonts.gstatic.com/s/i/productlogos/chrome_store/v7/192px.svg"/> Chrome web extension</span>
            <span className="text-4xl font-medium mx-16"><img className="w-20 inline-block"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/2048px-Steam_icon_logo.svg.png"/>Steam</span>
            <span className="text-4xl font-medium mx-16"><img className="w-20 inline-block"  src="https://www.freepnglogos.com/uploads/logo-internet-png/logo-internet-chemiphase-updated-website-goes-live-chemiphase-ltd-12.png"/>Websites Hosting</span>
            <span className="text-4xl font-medium mx-16"><img className="w-20 inline-block" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/App_Store_%28iOS%29.svg/512px-App_Store_%28iOS%29.svg.png"/> Apple Store</span>
        </div>
  
        <div className="absolute top-0 ml-96 py-12 animate-marquee2 whitespace-nowrap">
            <span className="text-4xl font-medium mx-16"><img className="w-20 inline-block" src="https://play-lh.googleusercontent.com/4_RW0mQ5mJhGGJVydTlQsQ0pnqAYq9UoTVm2_gElrgRM13Q02w43HPgYVaMFy4b4smmF" alt="" />Google play console</span>
            <span className="text-4xl font-medium mx-16"><img className="w-20 inline-block" src="https://fonts.gstatic.com/s/i/productlogos/chrome_store/v7/192px.svg"/> Chrome web extension</span>
            <span className="text-4xl font-medium mx-16"><img className="w-20 inline-block"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/2048px-Steam_icon_logo.svg.png"/>Steam</span>
            <span className="text-4xl font-medium mx-16"><img className="w-20 inline-block"  src="https://www.freepnglogos.com/uploads/logo-internet-png/logo-internet-chemiphase-updated-website-goes-live-chemiphase-ltd-12.png"/>Websites Hosting</span>
            <span className="text-4xl font-medium mx-16"><img className="w-20 inline-block" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/App_Store_%28iOS%29.svg/512px-App_Store_%28iOS%29.svg.png"/> Apple Store</span>
        </div>
  </div>

    </div>
    )
  }
  