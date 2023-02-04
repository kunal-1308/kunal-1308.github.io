import React , { useState } from "react";
import Certification from "./certifications/Certification";
import Me from './me/Me';
import Contact from './contact/Contact';
import Interest from "./interests/Interest";

function Nav(){
    const [active, setActive] = useState("me");
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto p-2 m-3">
                    <li class="nav-item ml-2 mr-2">
                        <button class="btn btn-light" onClick={() => setActive("me")}>Me<span class="sr-only">(current)</span></button>
                    </li>
                    <li class="nav-item ml-2 mr-2">
                    <button class="btn btn-light" onClick={() => setActive("interests")}>Interests</button>
                    </li>
                    <li class="nav-item ml-2 mr-2" >
                        <button class="btn btn-light" onClick={() => setActive("certifications")}>Certifications</button>
                    </li>
                    <li class="nav-item ml-2 mr-2">
                        <button class="btn btn-light" onClick={() => setActive("contact")}>Contact</button>
                    </li>
                    </ul>
                </div>
                
            </nav>
                {active === "me" && <Me/>}
                {active === "interests" && <Interest/>}
                {active === "certifications" && <Certification/>}
                {active === "contact" && <Contact/>}
        </div>
        
    );
}

export default Nav;