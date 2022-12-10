import React from "react";
import Navbar from "../Navbar/navbar";
import './home.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

export default function Home(){
    const handleDragStart = (e) => e.preventDefault();
    const items = [
      <div className="imageDiv" data-value="1" ><img src={process.env.PUBLIC_URL+"/images/mon1.jpg"} onDragStart={handleDragStart} alt="img" className="image"/></div>,
      <div className="imageDiv" data-value="2" ><img src={process.env.PUBLIC_URL+"/images/mon2.jpg"} onDragStart={handleDragStart} alt="img" className="image"/></div>,
      <div className="imageDiv" data-value="3" ><img src={process.env.PUBLIC_URL+"/images/mon4.jpg"} onDragStart={handleDragStart} alt="img" className="image"/></div>,
      <div className="imageDiv" data-value="4" ><img src={process.env.PUBLIC_URL+"/images/mon5.jpg"} onDragStart={handleDragStart} alt="img" className="image"/></div>,
      <div className="imageDiv" data-value="5" ><img src={process.env.PUBLIC_URL+"/images/mon6.jpg"} onDragStart={handleDragStart} alt="img" className="image"/></div>
    ];
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1000: { items: 3 }
      };
    return(
        <div className="homeBody">
            <div className="upperFrame">
                <Navbar/>
                <img src={process.env.PUBLIC_URL+"/images/bgImg1.jpg"} alt="bgImg1" className="bgImg1" />
                <div className="content">
                    <span className="contentTitle">Save Techna From Peril</span>
                    <span className="contentBody">Greetings from the second world! 
                        But access to this arena is not an easy provision either, calling for another fun assessment. 
                        Once completed, your task is all the effort you put into creating a static replica of that website. 
                        There is a catch though, you only have 2 hours.
                    </span>
                </div>
            </div>
            <div className="lowerFrame">
                <div className="lowerFrameTitle"><span>Bageera's Henchmen</span></div>
                <div className="lowerFrameBody">
                    <div style={{width:"69vw",overflow:"visible"}}>
                    <AliceCarousel
                        mouseTracking
                        items={items}
                        responsive={responsive}
                        autoPlay
                        infinite
                        autoPlayInterval={1000}
                        animationDuration={1000}
                        disableDotsControls
                        renderPrevButton={() => {
                            return <p className="arrowLeft"><img src={process.env.PUBLIC_URL+"/images/leftArrow.png"} alt="leftArrow" /></p>
                          }}
                          renderNextButton={() => {
                            return <p className="arrowRight"><img src={process.env.PUBLIC_URL+"/images/rightArrow.png"} alt="rightArrow" /></p>
                          }}
                    />
                    </div>
                </div>
            </div>
        </div>
    );
}