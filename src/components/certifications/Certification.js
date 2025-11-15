import React from "react";
import "./Certification.css";

function Certification() {
	return (
		<div className="mt-5 container-fluid">
			<div className="row jumbotron align-items-center justify-content-center">
				<h1>Certifications</h1>
			</div>

			<hr className="p-2" />

			<div className="row mt-5 mb-5 jumbotron flex-column flex-md-row align-items-center">
				<div className="col-12 col-md-3 d-flex align-items-center justify-content-center mb-3 mb-md-0">
					<img
						src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						width="200px"
						height="200px"
						alt="Certification visual"
						style={{ maxWidth: "100%", height: "auto", borderRadius: "12px" }}
					/>
				</div>
				<div className="col-12 col-md-9 d-flex flex-column align-items-center justify-content-center">
					<div className="p-2 w-100 text-center text-md-left">
						<a href="https://www.coursera.org/account/accomplishments/verify/N9DQ4KQZ2UDP">
							<h4>Python for Data Science and AI</h4>
						</a>
					</div>

					<div className="p-2 w-100 text-center text-md-left">
						<a href="https://www.udemy.com/certificate/UC-3a098948-df32-41a4-8eb9-363e6b9e69d5/">
							<h4>React - The Complete Guide</h4>
						</a>
					</div>

					<div className="p-2 w-100 text-center text-md-left">
						<a href="https://www.coursera.org/account/accomplishments/verify/D5EYTAXKKRUA">
							<h4>Machine Learning with Python</h4>
						</a>
					</div>

					<div className="p-2 w-100 text-center text-md-left">
						<a href="https://www.coursera.org/account/accomplishments/specialization/certificate/NJXATYUYJWAU">
							<h4>IBM Data Science Specialization</h4>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Certification;
