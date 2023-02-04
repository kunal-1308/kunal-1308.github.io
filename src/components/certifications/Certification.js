import React from "react";
import "./Certification.css";

function Certification(){
    return(
        <div className="mt-5 container-fluid">
            <div className="row jumbotron align-items-center justify-content-center">
                <h1>Certifications</h1>
            </div>
            
            <hr className="p-2"/>

            <div className="row mt-5 mb-5 jumbotron">
                <div className="col-sm-3 align-items-start justify-content-start">
                <img src="https://source.unsplash.com/random/280x280/?study"/>
                </div>
                <div className="col-sm-9 d-flex align-items-center justify-content-center">
                   <div className="p-2"><a href="https://www.coursera.org/account/accomplishments/verify/N9DQ4KQZ2UDP"><h4>Python for Data Science and AI</h4> </a></div>
                   
                   <div className="p-2"><a href="https://www.udemy.com/certificate/UC-3a098948-df32-41a4-8eb9-363e6b9e69d5/"><h4>React - The Complete Guide</h4> </a>
                   </div>

                   <div className="p-2"><a href="https://www.coursera.org/account/accomplishments/verify/D5EYTAXKKRUA"><h4>Machine Learning with Python</h4> </a>
                   </div>

                   <div className="p-2"><a href="https://www.coursera.org/account/accomplishments/specialization/certificate/NJXATYUYJWAU"><h4>IBM Data Science Specialization</h4> </a>
                   </div>

                </div>
            </div>
        </div>
    );
}
export default Certification;
