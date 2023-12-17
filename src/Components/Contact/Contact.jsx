import React from 'react';
import "./Contact.css"
import AOS from 'aos'
import 'aos/dist/aos.js'
    AOS.init()


const Contact = () => {
    return <>
    
    <div id="contact" style={{ position:"relative" ,zIndex:'5000'}} >
        <div className="position-absolute timerColor"></div>
    <div className="cover position-absolute" ></div>
   <br /><br />
    <br />
    <br />

      <div className="title position-relative" data-aos="zoom-in" data-aos-duration="2000" style={{ zIndex:"5000" ,fontFamily:"woff"}}>
        GET IN TOUCH
      </div>
      <br />
      <p
        className="text-white paragraph"
        data-aos="zoom-out"
        data-aos-duration="1200"
      >
        LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISICING ELIT.
      </p>

      <div className="container text-start total-sec mt-4">
        <div className="row align-items-start justify-content-around">
          <div className=" col-md-6  d-flex justify-content-center align-items-center flex-column">
            <div className="item d-flex justify-content-start flex-column w-100 position-relative border-0 p-3 rounded-3" style={{ zIndex:"2000" ,backgroundColor:"rgba(93, 7, 173, 0.718)",height:"400px"}}>
                <p style={{ fontSize:"25px" , fontWeight:"900" , color:"#6D3C9A"}} className='text-center text-light py-2'>Leave Your Message</p>
              <input  data="true" type="text" className="mb-3 lead rounded-2 p-1" placeholder="Name :"/>
              <input  data="true" type="email" className="mb-3 lead rounded-2 p-1" placeholder="Email :" />
              <textarea
              name='message'
                type="text"
                className="pb-5 lead rounded-2 p-1"
                placeholder="Message :"
              ></textarea>
              <button className="btn bg-white rounded-2 lead btn-contact m-2" type="submit">
                SEND MESSAGE
              </button>
            </div>


          </div>


          <div className="col-md-6 position-relative d-flex align-items-start flex-column justify-content-start" style={{ zIndex:'500000' }}><br/>
<p className='fs-1 p-2 rounded-3 contact-text' style={{ fontFamily:'Wendy One',backgroundColor:'rgb(132, 0, 255)',width:'fit-content',filter:'drop-shadow(0 0 3px black)' }}>Contact <span className='me'>ME</span></p>

<div className="row align-items-center justify-content-start">
  <ul className='col-md-4'>
    <li style={{ listStyle:'none' }} className='my-4'><span className='fw-bold fs-5' data-aos='zoom-out' data-aos-duration='1000' data-aos-delay='250' style={{color:"red",fontFamily: "Black Ops One",fontWeight:'400',filter:'drop-shadow(0 0 2px black)'}}>Email:</span></li>
    <li style={{ listStyle:'none' }} className='my-4'><span className='fw-bold fs-5' data-aos='zoom-out' data-aos-duration='1000' data-aos-delay='500' style={{color:"red",fontFamily: "Black Ops One",fontWeight:'400',filter:'drop-shadow(0 0 2px black)'}}>Address:</span></li>
    <li style={{ listStyle:'none' }} className='my-4'><span className='fw-bold fs-5' data-aos='zoom-out' data-aos-duration='1000' data-aos-delay='750' style={{color:"red",fontFamily: "Black Ops One",fontWeight:'400',filter:'drop-shadow(0 0 2px black)'}}>Phone:</span></li>
    <li style={{ listStyle:'none' }} className='my-4'><span className='fw-bold fs-5' data-aos='zoom-out' data-aos-duration='1000' data-aos-delay='1000' style={{color:"red",fontFamily: "Black Ops One",fontWeight:'400',filter:'drop-shadow(0 0 2px black)'}}>Git Hub:</span></li>
  </ul>



  <ul className='col-md-8'>
    <li style={{ listStyle:"none" }} className='my-4'><a className='text-decoration-none  fs-5 text-white' href='mailto:Hassan300599@gmail.com' data-aos='zoom-out' data-aos-duration='1000' data-aos-delay='1250'  style={{ fontFamily:"Wendy One" }}>Hassan300599@gmail.com.</a></li>
    <li style={{ listStyle:"none" }} className='my-4'><div className=' mx-1 fs-5 text-end text-white d-inline' data-aos='zoom-out' data-aos-duration='1000' data-aos-delay='1500' style={{ fontFamily:"Wendy One" }}>Hadayiq El-Quba - Cairo.</div></li>
    <li style={{ listStyle:"none" }} className='my-4'><a className='d-inline text-decoration-none fs-5 text-white' href='tel:+201142762842' data-aos='zoom-out' data-aos-duration='1000' data-aos-delay='1750'  style={{ fontFamily:"Wendy One" }}>+201142762842.</a></li>
    <li style={{ listStyle:"none" }} className='my-4'><a className=' d-inline text-decoration-none p-2 text-white rounded-2 mt-2 fs-5 ms-4' href='https://github.com/HassanMahmoud3005' target='_blank' data-aos='zoom-out' data-aos-duration='1000' data-aos-delay='2000'  style={{ fontFamily:'Wendy One',backgroundColor:'rgb(132, 0, 255)',width:'fit-content',filter:'drop-shadow(0 0 3px black)' }}>Link</a></li>
  </ul>

</div>















          </div>

    
        </div>      

      </div><br/><br /><br /><br />

      <div className='position-relative py-3 text-white fs-5' style={{zIndex:'1000',backgroundColor:'#270448',fontFamily:"Wendy One"}}>@2023 Hassan Mahmoud Salah</div>

    </div>

    
    
    
    </>
}

export default Contact;
