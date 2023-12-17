import React from 'react';
import './Home.css'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import AOS from 'aos'
import 'aos/dist/aos.js'
import cv from './Cv Developer.pdf'


<script>
AOS.init()

</script>


const Home = () => {





   const [text] = useTypewriter({
words :['Designer' , 'Developer' , 'Photographer'],
loop:{},
typeSpeed:200,

   })
    return <>
    

    <div className="home ">
<br />
        <div className="container-fluid">
           <div className="row justify-content-center align-items-end">
           <div className=" col-sm-6 col-md-6  align-self-center">
                <div className="part-right mt-5">
                    <h4 className='hello display-4 fw-medium text-white'  data-aos= 'fade-left' data-aos-delay='' style={{ fontFamily:"Wendy One"}}>Hello,</h4>
                    <h3 className='iamhassan display-5 fw-bold text-light' data-aos= 'fade-left' data-aos-delay='800' style={{fontFamily:"Wendy One"}}>I'am, Hassan Mahmoud</h3>

                    <h3 className='changing display-4 fw-medium' data-aos= 'fade-left' data-aos-delay='1600' style={{ fontFamily:"Black Ops One" ,color:"blueviolet"}}>{text}<Cursor/></h3>
                    <br />
<div className="d-flex btnContainer">
<a href={cv} download='Cv Developer.pdf' className='btn fs-2 activebtn mx-3' data-aos= 'zoom-in' data-aos-delay='2000' style={{ fontFamily:"Wendy One" }} >Download CV</a>
<a href='https://wa.me/201142762842' target='_blank' className='btn fs-2 origan mx-3' data-aos= 'zoom-in' data-aos-delay='2000' style={{ fontFamily:"Wendy One" }}><span><i class="fa-brands fa-whatsapp"></i></span> Contact</a>

</div>

                </div>

            </div>
            <div className="col-sm-6 col-md-6 align-self-end">
                <div className="part-left text-center d-flex align-items-center justify-content-end" style={{ overflow:"hidden" }}>
                    <img className='ms-5 imgHome mt-5 w-75' data-aos= 'slide-up' data-aos-duration='1800' data-aos-delay='2400' data src={require('../../image/lookLeft.jpg')} alt="img" />
                <div className="d-flex flex-column me-4">
               <a href="https://www.facebook.com/Hassan3005" target='_blank'><i className="my-2 fs-5 iconHome fa-brands fa-facebook text-white" data-aos= 'zoom-out'  data-aos-delay='2400' ></i></a> 
               <a href="mailto:Hassan300599@gmail.com" target='_blank'><i className="fa-brands fa-google-plus-g iconHome" data-aos= 'zoom-out'  data-aos-delay='2600' ></i></a> 
               <a href="https://www.instagram.com/hassanmahmoud.salah?igshid=NGVhN2U2NjQ0Yg==" target='_blank'><i className="my-2 fs-5 iconHome fa-brands fa-instagram" data-aos= 'zoom-out'  data-aos-delay='2800' ></i></a> 
               <a href="https://www.linkedin.com/in/hassan-mahmoud-salah-2ab28a276/" target='_blank'><i className="my-2 fs-5 iconHome fa-brands fa-linkedin" data-aos= 'zoom-out'  data-aos-delay='2900' ></i></a> 
                </div>
                </div>
            </div>
           </div>
        </div>


    </div>
    
    
    
    
    
    </>
    
}
export default Home;
