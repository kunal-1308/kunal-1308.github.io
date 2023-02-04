import React from "react";

function Me(){
    return(
        <div className="mt-5 container-fluid">
               <div className="jumbotron row align-items-center justify-content-center"> 
                <h1>Kunal Bhapkar</h1>
               </div>

               <hr className="p-2"/>

               <div className="jumbotron row align-items-center justify-content-center">
                <div>
                    <h3>Who am I ?</h3>
                </div>
               </div>

               <hr className="p-2"/>

                <div className="jumbotron row align-items-center justify-content-center" >
                    <div className="col-sm-4">
                        <h4>Machine Learning Enthusiast</h4>
                    </div>
                    <div className="col-sm-4">
                        <h4>Software Engineer</h4>
                    </div>                   
                    <div className="col-sm-4">
                        <h4>MERN stack Developer</h4>
                    </div>
                </div>
            </div>
        
    );
}
export default Me;
