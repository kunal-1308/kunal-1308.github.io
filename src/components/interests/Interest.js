import React from "react";
import "./Interest.css"
function Interest(){
    return(
        <div className="mt-5 container-fluid">
            <div className="row jumbotron align-items-center justify-content-center">
            <h1>Interests</h1>
            </div>

            <hr className="p-2"/>

            <div className="row jumbotron align-items-center justify-content-center">
                <div className="col-sm-4">
                    <h3 className="mb-3">Going for long drives</h3>
                    <img src="https://source.unsplash.com/random/350x350/?longdrives"/>
                </div>
                <div className="col-sm-4">
                    <h3 className="mb-3">Playing Computer games</h3>
                    <img src="https://source.unsplash.com/random/350x350/?computergame"/>
                </div>
                <div className="col-sm-4">
                    <h3 className="mb-3">Reading books</h3>
                    <img src="https://source.unsplash.com/random/350x350/?reading"/>
                </div>
            </div>
        </div>
    );
}
export default Interest;
