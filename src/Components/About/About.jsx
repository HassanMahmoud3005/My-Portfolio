import React from 'react';
import "./About.css"
import AOS from 'aos'
import 'aos/dist/aos.js'

AOS.init()

const About = () => {
    return <>
    
    <div className="about " style={{ overflowY:"hidden"}}>

        <div className="container py-5" style={{ minHeight:"50vh" }}>
          
            <div className="row justify-content-betwen align-items-center">
                <div className="col-md-5">
                    <div className="part-left me-5">
                        <img src={require("../../image/great.png")} alt="img" className='w-100 imgAbout' data-aos= 'flip-left' data-aos-duration='1800' style={{ borderRadius:'50%' }}/>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="part-right">
<h1 style={{ fontFamily:"Wendy One" , color:"white"}} className='display-5'>About <span style={{ color:"red" }}>Me</span></h1>
<h4 style={{ fontFamily:"Wendy One" ,color:'#8400FF'}}>My Definition</h4>
<h6 className="text-white fs-5">My name is Hassan Mahmoud Salah, graduate of the Faculty of Education, Helwan University, born in 1999. I currently live in Hadayek Al-Qubba in Cairo.
I started studying programming online in late 2022 until May 5 in 2023. <br /><br />
I initially studied website programming online for about 3 months, and then i studied front-end developer at Root Academy for a period of 6 months and studied everything related to the field of programming for website development Including HTML, Css, JavaScript, jQuery, BootStrap and React. <br /><br />
My wish is to work for an organization in which I can show all my creativity and skills and where I aspire to the best and career advancement.</h6>
                    </div>
                </div>
            </div>
        </div>

    </div>
    
    
    
    </>
}

export default About;
