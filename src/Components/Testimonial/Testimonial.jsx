import React from 'react';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from "react-slick";
import './Testimonial.css'

const Testimonial = () => {



          const settings = {
            dots: false,
            infinite: true,
            speed: 800,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay:true,
            centerMode: true,
            pauseOnHover: true



            
          };
         
        

      






    return <>


    

    <div id='test' className='m-0 p-0 text-center' ><br /><br />
    <div className='text-white display-5' style={{ fontFamily:'Wendy One' }}>Testimonial</div>
    <p className='text-white pt-2'>Throughout the project, communication was seamless, and they were always available to address any questions or concerns we had. Their dedication to understanding our unique requirements and incorporating our feedback into the development process was commendable.</p>

   
              <Slider {...settings} style={{ marginTop:'-65px' }} className='mainSlider'>
              
                <div >
                  <h3>
                      <div  className="total min-vh-100  d-flex align-items-center justify-content-center position-relative" >
               
                        <div className="itemoTest m-0 p-0 text-center d-flex justify-content-center flex-column align-items-center w-100 text-center m-auto">
                            <div style={{ cursor:'pointer' }} className="captionTest p-3 position-relative">
                            <div className="layerTest">
                            <img src={require('../../image/face1.jpg')} alt="img" style={{ width:'120px',height:'100px' }} />
                        </div><br />
                            <h4 className='text-white'>Robin Jonas</h4>
                            <h6 className='secondTest text-white'>Web Designer</h6>
                            <p className='fs-6 w-75 m-auto text-white mt-3  explanTest'>A very wonderful website in terms of design, use, and adding some aesthetic touches to the implementation.</p>
                            <div className="iconStar d-flex justify-content-center align-item-center mt-4">
                            <i className="fa-solid fa-star" style={{ color:'gold' }}></i>
                            <i className="fa-solid fa-star" style={{ color:'gold' }}></i>
                            <i className="fa-solid fa-star" style={{ color:'gold' }}></i>
                            <i className="fa-solid fa-star" style={{ color:'gold' }}></i>
                            <i className="fa-regular fa-star" style={{ color:'gold' }}></i>
                            </div>
                            </div>
                          
                        </div>
                      
                    </div>
                  </h3>
                </div>
                <div>
                  <h3>
                      <div  className="total min-vh-100 d-flex align-items-center justify-content-center position-relative">
               
                        <div className="itemoTest m-0 p-0 text-center d-flex justify-content-center flex-column align-items-center w-100 text-center m-auto">
                            <div style={{ cursor:'pointer' }} className="captionTest p-3 position-relative">
                            <div className="layerTest">
                            <img src={require('../../image/face2.jpg')} alt="img" style={{ width:'120px',height:'100px' }} />
                        </div><br />
                            <h4 className='text-white'>Jonas Dego</h4>
                            <h6 className='secondTest text-white'>Photography</h6>
                            <p className='fs-6 w-75 m-auto text-white mt-3 explanTest'>Unforgettable design and implementation with some magical touches to the site.
Not the last deal, my dear.</p>
                            <div className="iconStar d-flex justify-content-center align-item-center mt-4">
                            <i className="fa-solid fa-star" style={{ color:'gold' }}></i>
                            <i className="fa-solid fa-star" style={{ color:'gold' }}></i>
                            <i className="fa-solid fa-star" style={{ color:'gold' }}></i>
                            <i className="fa-solid fa-star" style={{ color:'gold' }}></i>
                            <i className="fa-regular fa-star" style={{ color:'gold' }}></i>
                            </div>
                            </div>
                          
                        </div>
                      
                    </div>
                  </h3>
                </div>
                <div>
                  <h3>
                      <div  className="total min-vh-100 d-flex align-items-center justify-content-center position-relative">
               
                        <div className="itemoTest m-0 p-0 text-center d-flex justify-content-center flex-column align-items-center w-100 text-center m-auto">
                            <div style={{ cursor:'pointer' }} className="captionTest p-3 position-relative">
                            <div className="layerTest">
                            <img src={require('../../image/face3.jpg')} alt="img" style={{ width:'120px',height:'100px' }} />
                        </div><br />
                            <h4 className='text-white'>Michael Tommy</h4>
                            <h6 className='secondTest text-white'>Graphic Design</h6>
                            <p className='fs-6 w-75 m-auto text-white mt-3 explanTest'>A person with a high taste in implementation makes the site have magical.</p>
                            <div className="iconStar d-flex justify-content-center align-item-center mt-4">
                            <i className="fa-solid fa-star" style={{ color:'gold' }}></i>
                            <i className="fa-solid fa-star" style={{ color:'gold' }}></i>
                            <i className="fa-solid fa-star" style={{ color:'gold' }}></i>
                            <i className="fa-solid fa-star" style={{ color:'gold' }}></i>
                            <i className="fa-regular fa-star" style={{ color:'gold' }}></i>
                            </div>
                            </div>
                          
                        </div>
                      
                    </div>
                  </h3>
                </div>
                <div>
                  <h3>
                      <div  className="total min-vh-100 d-flex align-items-center justify-content-center position-relative">
               
                        <div className="itemoTest m-0 p-0 text-center d-flex justify-content-center flex-column align-items-center w-100 text-center m-auto">
                            <div style={{ cursor:'pointer' }} className="captionTest p-3 position-relative">
                            <div className="layerTest">
                            <img src={require('../../image/face4.jpg')} alt="img" style={{ width:'120px',height:'100px' }} />
                        </div><br />
                            <h4 className='text-white'>John Barker</h4>
                            <h6 className='secondTest text-white'>Web Designer</h6>
                            <p className='fs-6 w-75 m-auto text-white mt-3 explanTest'>After browsing the project, I felt like I owned an electronic treasure.
Thank you.</p>
                            <div className="iconStar d-flex justify-content-center align-item-center mt-4">
                            <i className="fa-solid fa-star" style={{ color:'gold' }}></i>
                            <i className="fa-solid fa-star" style={{ color:'gold' }}></i>
                            <i className="fa-solid fa-star" style={{ color:'gold' }}></i>
                            <i className="fa-solid fa-star" style={{ color:'gold' }}></i>
                            <i className="fa-regular fa-star" style={{ color:'gold' }}></i>
                            </div>
                            </div>
                          
                        </div>
                      
                    </div>
                  </h3>
                </div>
             
              </Slider>
            </div>

    
    
    
    
    </>
}

export default Testimonial;
