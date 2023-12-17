import React, { useEffect, useState } from 'react';
import './projects.css'
import AOS from 'aos'
import 'aos/dist/aos.js'
import Blog from '../BLOG/Blog';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';


AOS.init()



const Projects = () => {


const [scroll, setScroll] = useState(false);



    return <>
    
    <div className="projects min-vh-100">
        <div className="container-fluid py-5">
            <h1 className='text-white text-center mt-3 mb-4' style={{ fontFamily:"Wendy One" }}>My Projects</h1>
            <div className='text-center text-white mb-5'>Some of my simple projects that I am developing based on one year of experience in the field of front-end developer.</div>
            <div className="row g-4 justify-content-center text-center align-items-center">
             
             
              
                <div className="col-md-6">
                    <div className="item m-auto" data-aos= 'slide-right' data-aos-duration='1000'  data-aos-delay='600'>
                        <img src={require('../../image/robin.png')} alt="img" className='w-100' style={{ backgroundSize:'cover' }}/>

                          <div className="layerBtn position-absolute">
                            <p className='text-white explanProject fs-5'>Robin Portfolio Website design Project Making Using HTML,Css and Bootstrap</p>
                            <div className="position-absolute backcolor"></div>
                             <a className='btn fs-4 origan mx-3 text-decoration-none text-white' style={{ fontFamily:"Wendy One" }} href="https://hassanmahmoud3005.github.io/ROBIN-Portofolio/" target='_blank'>Visit</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="item m-auto" data-aos= 'slide-left' data-aos-duration='1000'  data-aos-delay='600'>
                        <img src={require('../../image/restaurant.png')} alt="img" className='w-100' style={{ backgroundSize:'cover' }}/>

                          <div className="layerBtn position-absolute">
                            <p className='text-white explanProject fs-5'>Restaurans Website Design Project using HTMl and Css using floating</p>
                            <div className="position-absolute backcolor"></div>
                             <a className='btn fs-4 origan mx-3 text-decoration-none text-white' style={{ fontFamily:"Wendy One" }} href="https://hassanmahmoud3005.github.io/Restaurans/" target='_blank'>Visit</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="item m-auto" data-aos= 'slide-right' data-aos-duration='1000'  data-aos-delay='600'>
                        <img src={require('../../image/hospital.png')} alt="img" className='w-100' style={{ backgroundSize:'cover' }}/>

                          <div className="layerBtn position-absolute">
                            <p className='text-white explanProject fs-5'>Care Life Website design Project for Hospital Making Using HTML,Css ,Bootstrap and JavaScript</p>
                            <div className="position-absolute backcolor"></div>
                             <a className='btn fs-4 origan mx-3 text-decoration-none text-white' style={{ fontFamily:"Wendy One" }} href="https://hassanmahmoud3005.github.io/Hospital/" target='_blank'>Visit</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="item m-auto" data-aos= 'slide-left' data-aos-duration='1000'  data-aos-delay='800'>
                    <img src={require('../../image/devfolio.png')} alt="img" className='w-100' style={{ backgroundSize:'cover' }}/>
                          <div className="layerBtn position-absolute">
                            <p className='text-white explanProject fs-5'>Devfolio Portfolio Website design Project Making Using HTML,Css and Bootstrap </p>
                            <div className="position-absolute backcolor"></div>
                             <a className='btn fs-4 origan mx-3 text-decoration-none text-white' style={{ fontFamily:"Wendy One" }} href='https://hassanmahmoud3005.github.io/Devfolio/' target='_blank'>Visit</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="item m-auto" data-aos= 'slide-right' data-aos-duration='1000' data-aos-delay='1000' >
                    <img src={require('../../image/weather.png')} alt="img" className='w-100' style={{ backgroundSize:'cover' }}/>
                          <div className="layerBtn position-absolute">
                            <p className='text-white explanProject fs-5'>Weather App it's Project show State Of Weather To All States in all Countries , Project Majing with using Html,Css,Bootstrap,JavaSript,Api</p>
                            <div className="position-absolute backcolor"></div>
                             <a className='btn fs-4 origan mx-3 text-decoration-none text-white' style={{ fontFamily:"Wendy One" }} href='https://hassanmahmoud3005.github.io/Weather/' target='_blank'>Visit</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="item m-auto" data-aos= 'slide-left' data-aos-duration='1000' data-aos-delay='1500'>
                    <img src={require('../../image/freshCart.png')} alt="img" className='w-100' style={{ backgroundSize:'cover' }}/>

                          <div className="layerBtn position-absolute">
                            <p className='text-white explanProject fs-5'>Fresh Cart Project Website E-Commerce to some Products and available all Dashbord in website, Website set using HTML,css,bootStrap,JavaScript,jQuery and React</p>
                            <div className="position-absolute backcolor"></div>
                             <a className='btn fs-4 origan mx-3 text-decoration-none text-white' style={{ fontFamily:"Wendy One" }} href="https://hassanmahmoud3005.github.io/FreshCart/" target='_blank'>Visit</a>
                        </div>
                    </div>
                </div>
              
              
              
            </div>
        
        



    </div>
    <br /><br />
    
    <div className='timer w-100 mt-5 py-5 position-relative ' style={{ minHeight:'50vh !important' }}>
    <div  className='w-100 imgTimer'/>
    <div className="position-absolute timerColor"></div>
<div className="text row text-white justify-content-between w-100 text-center align-items-center">
<div className="col-md-3" data-aos='zoom-in' data-aos-duration='1000'>
<i className="fa-regular fa-handshake display-3"></i>
    <h4>Deal again</h4>
    <h3 id='number1' >
    <ScrollTrigger onEnter={()=>setScroll(true)} onExit={()=>setScroll(false)}>
                        <div id="numberCounter" className="fs-2">
                          {scroll? <CountUp start={0} end={40} duration={5}/>:40}
                          
                        </div>
                        </ScrollTrigger></h3>
</div>
<div className="col-md-3 " data-aos='zoom-in' data-aos-duration='1000' data-aos-delay='200'>
<i className="fa-solid fa-trophy display-3"></i>
    <h4>Number of reviews</h4>
    <h3 id='number2'>
    <ScrollTrigger onEnter={()=>setScroll(true)} onExit={()=>setScroll(false)}>
                        <div id="numberCounter" className="fs-2">
                          {scroll? <CountUp start={0} end={60} duration={5}/>:60}
                          
                        </div>
                        </ScrollTrigger>
                        </h3>
</div>
<div className="col-md-3 " data-aos='zoom-in' data-aos-duration='1000' data-aos-delay='400'>
<i className="fa-brands fa-java display-1"></i>
    <h4>Positive results</h4>
    <h3 id='number3'>
    <ScrollTrigger onEnter={()=>setScroll(true)} onExit={()=>setScroll(false)}>
                        <div id="numberCounter" className="fs-2">
                          {scroll? <CountUp start={0} end={60} duration={5}/>:60}
                          
                        </div>
                        </ScrollTrigger>
                        </h3>
</div>
<div className="col-md-3 " data-aos='zoom-in' data-aos-duration='1000' data-aos-delay='600'>
<i className="fa-solid fa-masks-theater display-3"></i>
    <h4>Happy Client</h4>
    <h3 id='number4'>
    <ScrollTrigger onEnter={()=>setScroll(true)} onExit={()=>setScroll(false)}>
                        <div id="numberCounter" className="fs-2">
                          {scroll? <CountUp start={0} end={80} duration={5}/>:80}
                          
                        </div>
                        </ScrollTrigger>
                        </h3>
</div>
    </div>    
    
</div>
   


        
        </div>
    
    </>
}

export default Projects;
