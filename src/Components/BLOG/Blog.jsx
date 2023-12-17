import React, { useState } from "react";
import "./Blog.css";
import { TypeAnimation } from "react-type-animation";
import { useEffect } from "react";




const Blog = () => {

  const [scroll, setScroll] = useState(0);


  useEffect(() => {
      window.addEventListener("scroll" , ()=>{
   setScroll(window.scrollY)
  
      })
      return window.removeEventListener("scroll" , ()=>{})
  
      
  }, []);
  
  return (
    <>

    
      <div className="blog  py-2">
      <h1 className='text-white text-center mt-3 mb-4' style={{ fontFamily:"Wendy One" }}>BLOG</h1>
      <div className='text-center text-white mb-5 '>Positive results of the sites and features available to us.</div>


        <div className="container py-1">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-4">
              <div className="card my-3 m-auto" style={{height:'480px' }}>

    <img className="card-img-top w-100" src={require ('../../image/blog3.jpg')} alt="Title"/>

    <div className="card-body">
        <h4 className="card-title fs-5 fw-bold" style={{ fontFamily:"Black Ops One" ,color:'red'}}>Clean Code</h4>
        <p className="card-text " style={{fontFamily:'Heebo !important'}}>{scroll >3300 &&<>   <TypeAnimation
        sequence={[
          "refers to well-structured, readable, and maintainable programming code that is easy to understand and modify.",
          5000,
         
        ]}
        speed={120}
        repeat={Infinity}
        style={{ fontSize: '16px' ,fontFamily: "Heebo ",fontWeight:'800',fontSize:"18px"}}
        cursor={false}
      /></>}</p>
      <button className="btn text-white" style={{ backgroundColor:"rgba(93, 7, 173, 0.718)" }}>Get More</button>
    </div>

              </div>
            </div>
            <div className="col-md-4">
              <div className="card my-3 m-auto" style={{height:'480px' }}>

    <img className="card-img-top w-100" src={require ('../../image/blog1.jpg')} alt="Title"/>
    <div className="card-body">
        <h4 className="card-title fs-5" style={{ fontFamily:'Black Ops One' }}>Accuracy in implementation</h4>
        <p className="card-text"  style={{fontFamily:'Heebo !important'}}>{scroll >3300 &&<>   <TypeAnimation
        sequence={[
          "Accuracy in implementation refers to the level of precision and correctness with which a plan, strategy, or solution is put into action.",
          5000,
         
        ]}
        speed={120}
        repeat={Infinity}
        style={{ fontSize: '16px' ,fontFamily: "Heebo ",fontWeight:'800',fontSize:"18px"}}
        cursor={false}
      /></>}</p>
      <button className="btn text-white" style={{ backgroundColor:"rgba(93, 7, 173, 0.718)" }}>Get More</button>
    </div>


              </div>
            </div>
            <div className="col-md-4">
              <div className="card my-3 m-auto" style={{height:'480px' }}>

    <img className="card-img-top w-100" src={require ('../../image/blog2.jpg')} alt="Title"/>
    <div className="card-body">
        <h4 className="card-title fs-5" style={{ fontFamily:'Black Ops One' }}>Accurate performance</h4>
        <p className="card-text " style={{fontFamily:'Heebo !important'}}>{scroll >3300 &&<>   <TypeAnimation
        sequence={[
          "describe the level of precision and correctness with which a task or activity is executed. It implies that the outcome or result aligns closely with the desired or expected goal.          ",
          5000,
         
        ]}
        speed={120}
        repeat={Infinity}
        style={{ fontSize: '16px' ,fontFamily: "Heebo",fontWeight:'800',fontSize:"18px"}}
        cursor={false}
      /></>}</p>
      <button className="btn text-white" style={{ backgroundColor:"rgba(93, 7, 173, 0.718)" }}>Get More</button>
    </div>


              </div>
            </div>
          </div>
        </div>
      </div>





  
    </>
  );

}
export default Blog;
