import React, { useEffect, useState } from 'react';
import "./Services.css"
import AOS from 'aos'
import 'aos/dist/aos.js'
import { TypeAnimation } from 'react-type-animation';



    AOS.init()



const Services = () => {



const [scroll, setScroll] = useState(0);


useEffect(() => {
    window.addEventListener("scroll" , ()=>{
setScroll(window.scrollY)

    })
    return window.removeEventListener("scroll" , ()=>{})

    
}, []);






return <>

<div className="services  position-relative text-center m-auto " style={{ minHeight:'50vh' }}>
<div className="position-absolute timerColor"></div>

<div className="container w-100  m-auto text-center position-relative" style={{ zIndex:"2000" }}>
    <br /><br />
    <h1 className='text-white text-center position-relative z-3 display-4'  style={{ fontFamily:"Wendy One" ,zIndex:"200", fontFamily:"Wendy One"}} >Services</h1>
    <p className='text-white my-2'>We are proud to offer a wide range of services to cater to your needs. Our goal is to provide high-quality solutions that meet your requirements and exceed your expectations. Whether you're an individual, a small business, or a large corporation, we have the expertise and resources to address your specific needs. Here are some of the key services we provide.</p>
<br />
<div className="row g-4 justify-content-center align-items-center m-auto text-center w-100">
    <div className="col-md-3 position-relative">
        <div className="item"><br />
        <i className="icon fa-solid fa-signal display-5"></i>
                <h4 className='mt-2 fw-bold title'>SEO</h4>
                <p className='text-white'>{scroll >1100 &&<>   <TypeAnimation
        sequence={[
          "Keyword Research: SEO services often include comprehensive keyword research to identify the most relevant and valuable keywords for your business.",
          5000,
         
        ]}
        speed={140}
        repeat={Infinity}
        style={{ fontSize: '16px' ,fontFamily: "Black Ops One "}}
        cursor={false}
      /></>}</p>         <div className="layer">
              <div className='position-relative'>
            <button className='btnDetails btn position-relative text-white z-3 w-100' style={{ overflow:"hidden" }}>More Details </button>
            <div className='layerBtn position-absolute z-1' data-aos="slide-up" data-aos-duration="400"></div>

            </div>
        </div>
        </div>
    </div>
    <div className="col-md-3 position-relative">
        <div className="item"><br />
        <i className="icon fa-solid fa-mobile-screen display-5"></i>
        <h4 className='mt-2 fw-bold title'>Lifetime Validity</h4>
        <p className='text-white'>{scroll >1100 &&<>   <TypeAnimation
        sequence={[
          "Warranty and Support: Support for the website and repair services in the event of any errors and access to the appearance to be implemented. ",
          5000,
         
        ]}
        speed={140}
        repeat={Infinity}
        style={{ fontSize: '16px' ,fontFamily:"Wendy One"}}
        cursor={false}
      /></>}</p> 
        <div className="layer">
        <div className='position-relative'>
            <button className='btnDetails btn position-relative text-white z-3 w-100' style={{ overflow:"hidden" }}>More Details </button>
            <div className='layerBtn position-absolute z-1' data-aos="slide-up" data-aos-duration="400"></div>

            </div>
        </div>

        </div>
    </div>
    <div className="col-md-3 position-relative">
        <div className="item"><br />
        <i className="icon fa-solid fa-globe display-5"></i>
        <h4 className='mt-2 fw-bold title'>Responsive Website</h4>
        <p className='text-white'>{scroll >1100 &&<>   <TypeAnimation
        sequence={[
          "Fluid and Flexible Design: Responsive website services focus on creating a design that adapts and adjusts seamlessly to various screen sizes, including desktops, laptops, tablets, and smartphones.",
          5000,
         
        ]}
        speed={140}
        repeat={Infinity}
        style={{ fontSize: '16px' ,fontFamily:"Wendy One"}}
        cursor={false}
      /></>}</p> 
        <div className="layer">
            <div className='position-relative'>
            <button className='btnDetails btn position-relative text-white z-3 w-100' style={{ overflow:"hidden" }}>More Details </button>
            <div className='layerBtn position-absolute z-1' data-aos="slide-up" data-aos-duration="400"></div>

            </div>
        </div>

        </div>
    </div>
    <div className="col-md-3 position-relative">
        <div className="item"><br />
        <i className="icon fa-solid fa-dollar-sign display-5"></i>
        <h4 className='mt-2 fw-bold title'>Special Prices</h4>
        <p className='text-white'>{scroll >1100 &&<>   <TypeAnimation
        sequence={[
          "Introductory Offers: Businesses sometimes provide special prices as an introductory offer for new customers. These discounted rates are designed to attract new clients and encourage them to try out the product or service.",
          5000,
         
        ]}
        speed={140}
        repeat={Infinity}
        style={{ fontSize: '16px',fontFamily:"Wendy One" }}
        cursor={false}
      /></>}</p> 
        <div className="layer">
            <div className='position-relative'>
            <button className='btnDetails btn position-relative text-white z-3 w-100' style={{ overflow:"hidden" }}>More Details </button>
            <div className='layerBtn position-absolute z-1' data-aos="slide-up" data-aos-duration="400"></div>

            </div>
        </div>

        </div>
    </div>
</div>
</div>
<br /><br />

    </div>    
    
    </>
}

export default Services;
