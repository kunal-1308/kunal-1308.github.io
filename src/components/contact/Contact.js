import React from "react";
import "./Contact.css";
import "./ContactIcons";
import ContactIcons from "./ContactIcons";
function Contact() {
	return (
		<div className="mt-5 container-fluid">
			<div className="jumbotron row align-items-center justify-content-center">
				<h1>Contact</h1>
			</div>
			<hr className="p-2" />
			<div className="">
				<div className="row jumbotron">
					<div className="col-sm-5 align-items-start justify-content-start">
						<h5> 📍 Pune, India</h5>
					</div>
					<ContactIcons />
				</div>
			</div>
		</div>
	);
}
export default Contact;
