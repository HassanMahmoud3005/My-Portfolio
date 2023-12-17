import React, { useEffect, useState } from "react";
import './Skills.css'
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
const Skills = () => {



  const [scroll, setScroll] = useState(false);











  return (
    <>
      <div
        id="skills"
        className="py-5 min-vh-100 position-relative text-center m-auto d-flex justify-content-center align-items-center"
        style={{ minHeight:"50vh" }}
      >
        <div className="position-absolute timerColor"></div>
        <div className="layer"></div>

        <div className="position-relative min-vh-100" style={{ zIndex: 5000 }}>
          <div
            className="container min-vh-100"
            style={{ minHeight: "100vh !important" }}
            data-aos="zoom-in"
          >
            <div
              className="row justify-content-center align-items-center text-center g-4 "
              style={{ minHeight: "100vh" }}
            >
              <div className="col-md-4 ">
                <div className="skill m-auto">
                  <div className="outer ">
                    <div
                      className="inner text-center d-flex flex-column align-items-center justify-content-center fw-bold fs-2"
                      style={{ color: "red" }}
                    >
                      <div className="d-flex justify-content-center align-items-center">
                        <ScrollTrigger onEnter={()=>setScroll(true)} onExit={()=>setScroll(false)}>
                        <div id="numberCounter" className="fs-1">
                          {scroll? <CountUp start={0} end={85} duration={5}/>:85}
                          
                        </div>
                        </ScrollTrigger>
                        
                        <span>%</span>
                      </div>
                      <div className="fs-4 fw-bold classhtml">HTML</div>
                    </div>
                  </div>
                  <svg width="100" height="100" viewBox="0 0 100 100">
                    <circle
                      r="40"
                      cx="50"
                      cy="50"
                      fill="transparent"
                      stroke="#e0e0e0"
                      strokeWidth="12px"
                    ></circle>
                    <circle
                      r="40"
                      cx="50"
                      cy="50"
                      fill="transparent"
                      stroke="#e0e0e0"
                      strokeWidth="12px"
                    ></circle>
                  </svg>
                </div>
              </div>

              <div className="col-md-4 ">
                <div className="skill m-auto">
                  <div className="outer ">
                    <div
                      className="inner text-center d-flex flex-column align-items-center justify-content-center fw-bold fs-2"
                      style={{ color: "greenyellow" }}
                    >
                      <div className="d-flex justify-content-center align-items-center">
                        <div id="numberCounterTwo">  <ScrollTrigger onEnter={()=>setScroll(true)} onExit={()=>setScroll(false)}>
                        <div id="numberCounter" className="fs-1">
                          {scroll? <CountUp start={0} end={80} duration={5}/>:80}
                          
                        </div>
                        </ScrollTrigger></div>
                        <span>%</span>
                      </div>
                      <div className="fs-4">CSS</div>
                    </div>
                  </div>
                  <svg width="100" height="100" viewBox="0 0 100 100">
                    <circle
                      className="progressTwo"
                      r="40"
                      cx="50"
                      cy="50"
                      fill="transparent"
                      stroke="#e0e0e0"
                      strokeWidth="12px"
                    ></circle>
                    <circle
                      className="progressTwo"
                      r="40"
                      cx="50"
                      cy="50"
                      fill="transparent"
                      stroke="#e0e0e0"
                      strokeWidth="12px"
                    ></circle>
                  </svg>
                </div>
              </div>

              <div className="col-md-4 ">
                <div className="skill m-auto">
                  <div className="outer ">
                    <div
                      className="inner text-center d-flex flex-column align-items-center justify-content-center fw-bold fs-2"
                      style={{ color: "rgb(0, 217, 255)" }}
                    >
                      <div className="d-flex justify-content-center align-items-center">
                        <div id="numberCounterThree"> <ScrollTrigger onEnter={()=>setScroll(true)} onExit={()=>setScroll(false)}>
                        <div id="numberCounter" className="fs-1">
                          {scroll? <CountUp start={0} end={93} duration={5}/>:93}
                          
                        </div>
                        </ScrollTrigger></div>
                        <span>%</span>
                      </div>
                      <div className="fs-4">BootStrap</div>
                    </div>
                  </div>
                  <svg width="100" height="100" viewBox="0 0 100 100">
                    <circle
                      className="progressThree"
                      r="40"
                      cx="50"
                      cy="50"
                      fill="transparent"
                      stroke="#e0e0e0"
                      strokeWidth="12px"
                    ></circle>
                    <circle
                      className="progressThree"
                      r="40"
                      cx="50"
                      cy="50"
                      fill="transparent"
                      stroke="#e0e0e0"
                      strokeWidth="12px"
                    ></circle>
                  </svg>
                </div>
              </div>

              <div
                style={{ color: "white", fontFamily: "Wendy One" }}
                className="display-2 skillCenter"
              >
                Skills
              </div>

              <div className="col-md-4 ">
                <div className="skill m-auto">
                  <div className="outer ">
                    <div
                      className="inner text-center d-flex flex-column align-items-center justify-content-center fw-bold fs-2"
                      style={{ color: "orange" }}
                    >
                      <div className="d-flex justify-content-center align-items-center">
                        <div id="numberCounterFour"> <ScrollTrigger onEnter={()=>setScroll(true)} onExit={()=>setScroll(false)}>
                        <div id="numberCounter" className="fs-1">
                          {scroll? <CountUp start={0} end={80} duration={5}/>:80}
                          
                        </div>
                        </ScrollTrigger></div>
                        <span>%</span>
                      </div>
                      <div className="fs-4">JavaScript</div>
                    </div>
                  </div>
                  <svg width="100" height="100" viewBox="0 0 100 100">
                    <circle
                      className="progressFour"
                      r="40"
                      cx="50"
                      cy="50"
                      fill="transparent"
                      stroke="#e0e0e0"
                      strokeWidth="12px"
                    ></circle>
                    <circle
                      className="progressFour"
                      r="40"
                      cx="50"
                      cy="50"
                      fill="transparent"
                      stroke="#e0e0e0"
                      strokeWidth="12px"
                    ></circle>
                  </svg>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="skill m-auto">
                  <div className="outer ">
                    <div
                      className="inner text-center d-flex flex-column align-items-center justify-content-center fw-bold fs-2"
                      style={{ color: "white" }}
                    >
                      <div className="d-flex justify-content-center align-items-center">
                        <div id="numberCounterFive">
                        <ScrollTrigger onEnter={()=>setScroll(true)} onExit={()=>setScroll(false)}>
                        <div id="numberCounter" className="fs-1">
                          {scroll? <CountUp start={0} end={82} duration={5}/>:82}
                          
                        </div>
                        </ScrollTrigger>
                          </div>
                        <span>%</span>
                      </div>
                      <div className="fs-4">jQuery</div>
                    </div>
                  </div>
                  <svg width="100" height="100" viewBox="0 0 100 100">
                    <circle
                      className="progressFive"
                      r="40"
                      cx="50"
                      cy="50"
                      fill="transparent"
                      stroke="#e0e0e0"
                      strokeWidth="12px"
                    ></circle>
                    <circle
                      className="progressFive"
                      r="40"
                      cx="50"
                      cy="50"
                      fill="transparent"
                      stroke="#e0e0e0"
                      strokeWidth="12px"
                    ></circle>
                  </svg>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="skill m-auto">
                  <div className="outer ">
                    <div
                      className="inner text-center d-flex flex-column align-items-center justify-content-center fw-bold fs-2"
                      style={{ color: "rgb(255, 0, 157)" }}
                    >
                      <div className="d-flex justify-content-center align-items-center">
                      <ScrollTrigger onEnter={()=>setScroll(true)} onExit={()=>setScroll(false)}>
                        <div id="numberCounter" className="fs-1">
                          {scroll? <CountUp start={0} end={75} duration={5}/>:75}
                          
                        </div>
                        </ScrollTrigger>
                        <span>%</span>
                      </div>
                      <div className="fs-4">React</div>
                    </div>
                  </div>
                  <svg width="100" height="100" viewBox="0 0 100 100">
                    <circle
                      className="progressSix"
                      r="40"
                      cx="50"
                      cy="50"
                      fill="transparent"
                      stroke="#e0e0e0"
                      strokeWidth="12px"
                    ></circle>
                    <circle
                      className="progressSix"
                      r="40"
                      cx="50"
                      cy="50"
                      fill="transparent"
                      stroke="#e0e0e0"
                      strokeWidth="12px"
                    ></circle>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    </>
  );
};

export default Skills;
