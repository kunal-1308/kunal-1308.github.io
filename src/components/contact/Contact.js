import React from "react";
import "./Contact.css"
import "./ContactIcons"
import ContactIcons from "./ContactIcons";
function Contact(){
    return(
        <div className="mt-5 container-fluid">
            <div className="jumbotron row align-items-center justify-content-center"> 
                <h1>Contact</h1>
            </div>
            <hr className="p-2"/>
        <div className="">
            <div className="row jumbotron">
                <div className="col-sm-5 align-items-start justify-content-start">
                    {/* <span className="glyphicon glyphicon-map-marker">  </span> */}
                    <div className="">
                        <h5> 📍 Sanawad (PIN-451111), dist. Khargone, Madhya Pradesh, India</h5>
                    </div>
                    <br/>
                    <div className="">
                        <h5> 📞 +91 9174950049</h5>
                    </div>
                    <br/>
                    <div className="">
                        <h5> 📧 bhapkarkunal@gmail.com</h5>
                    </div>
                </div>
            <ContactIcons/>    
            </div>
            </div>
        </div>
    );
}
export default Contact;


