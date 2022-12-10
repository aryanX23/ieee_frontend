import React from "react";
import Navbar from "../Navbar/navbar";
import './events.css';

export default function Events(){
    return(
        <div className="eventBody">
            <div className="eventNav">
                <Navbar/>
            </div>
            <div className="eventMain">
                <img src={process.env.PUBLIC_URL+"/images/bgImg1.jpg"} className="bgImg2" alt="img2" />
                <div className="bodyTitle">
                    <span>OUR <br/>EVENTS</span>
                </div>
                <div className="eventContent">
                    <div className="event">
                        <img src={process.env.PUBLIC_URL+"/images/event1.jpg"} className="img" alt="img1" />
                        <span className="eventTitle">Back To Basics!!!</span>
                        <span className="eventDesc">
                            Sparkies get ready for an exciting event.
                            Get Ready to compete and set things on fire !! 
                            Hoping that all the circuits and connections in your master brain sparks and produce some dopamine through our exciting event.
                            SPONSORED BY EDVENSWA!!
                        </span>
                    </div>
                    <div className="event">
                        <img src={process.env.PUBLIC_URL+"/images/event2.jpg"} className="img" alt="img1" />
                        <span className="eventTitle">Remote IOT Workshop</span>
                        <span className="eventDesc">
                            Using The NI Labview Platform, a fully automated laboratory is built just for you to host experiments.
                            This enables you to interact with remote apparatus in real time.
                            Join our Event, get to know more about how the platform works.
                            SPONSORED By EDVENSWA!!
                        </span>
                    </div>
                    <div className="event">
                        <img src={process.env.PUBLIC_URL+"/images/event3.jpg"} className="img" alt="img1" />
                        <span className="eventTitle">Save Techna From Peril</span>
                        <span className="eventDesc">
                            Gear Up to awaken the dormant saviour in you.
                            We need you help to save Princess Techna from the clutches of the evil monster Bug-eera!!
                            Make your way through 3 different worlds and claim victory in all three
                            to save the princess and get a Golden Internship Opportunity!!
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}