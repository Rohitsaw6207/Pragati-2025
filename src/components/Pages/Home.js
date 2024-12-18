import React, { useEffect } from "react";
import "./css/home.css";
import "./css/index.css";
import hp from "../images/hp.png"; // Adjust the path as needed
import nike from "../images/nike.jpg"; // Adjust the path as needed


import Footer from '../Footer';



export const Home = () => {

  return (
    <div>

<div className="pages">      
      <div className="segment1">
        <div className="segment1-1">
          <h1>Welcome Pragati 2K25,<br />Battleground of Students</h1>
          <p>Unleash Brainwave's potential & show <br />the power of your knowledge</p>

        </div>
      </div>




      
    </div> 
      <div className="segment7">
          <div className="segment7-2">
            <div className="marq"><marquee className="geryish-color">Pragati 2K25 IS COMMING SOON <span className="yellow">☣</span> Pragati 2K25 IS COMMING SOON !!!</marquee></div>
          </div>
      </div>
      <div className="pages"> 

              <div className="segment1">
                <div className="segment1-100">
                    <div className="videobox1">
                    {/* <video width="480" height="300" controls> */}
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/vYxILGZ9IpQ?si=jEFhOZSQV4KJNmj1" title="YouTube video player" frameborder="0" allow=" autoplay;" allowfullscreen></iframe>
                    {/* </video> */}
                    </div>
                    <div className="videobox2">
                      <div className="vid-about">  <h1 className="head-cen">About The Event<br />Pragati 2K25</h1><br></br>
                    <p>Pragati is a celebration of coding and innovation, designed to bring together technology enthusiasts and aspiring developers in a dynamic and collaborative environment. This event provides an incredible opportunity to challenge your problem-solving skills, explore new technologies, and gain invaluable knowledge from experts in the field. Through engaging coding challenges, insightful sessions, and interactive activities, Pragati aims to ignite creativity and foster a spirit of collaboration among participants. It is a space where ideas take shape, skills are honed, and lasting connections are made. Whether you are new to coding or a seasoned programmer, Pragati is the perfect stage to showcase your talents and be part of a transformative journey in technology.</p>
                   </div>
                   </div>

                </div>
              </div>
              <div className="segment1-1-1">
                <div className="segment1-100-1">
                    <h1>Pragati2k25 Events</h1>
                    
                    <button class="custom-btn custom-view-more">
                      VIEW MORE
                      <span class="custom-icon custom-left"></span>
                      <span class="custom-icon custom-right"></span>
                    </button>
                    
                    <button class="custom-btn custom-purchase-game">
                      PURCHASE GAME
                      <span class="custom-icon custom-left"></span>
                      <span class="custom-icon custom-right"></span>
                    </button>
                </div>
              </div>

              <div className="segment1-1-1">
                <div className="segment1-100-1">
                  <div>
                    <h1>Pragati2k25 Sponsors</h1><br/><br/>
                    
                     <div className="sponsor-cell">
                       <img src={hp} alt="Description of image" className="sponsor-images"/>
                       <img src={nike} alt="Description of image" className="sponsor-images"/>

                      </div>
                  </div>    
                </div>
              </div>


              <div className="segment1">
                <div className="segment1-100">
                <div className="videobox2">
                      <div className="vid-about">  <h1 className="head-cen">Pragati2k25 Event<br />Venue</h1><br></br>
                    <p className="head-cen">MCKV Institute of Engineering
                    243, G T Road North,<br></br> Liluah, Howrah, <br></br>West Bengal 711204</p>
                   </div>
                   </div>
                    <div className="videobox1">
                    <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.9151917805607!2d88.34512757435475!3d22.61964193124633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89d65da7b3775%3A0x30915f7e98f1b0d5!2sMCKV%20Institute%20of%20Engineering!5e0!3m2!1sen!2sin!4v1733461586378!5m2!1sen!2sin"
  width="450"
  height="370"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
                    </div>
                    

                </div>
              </div>

      </div>

      

      <Footer />
     
    </div>
  );
};
