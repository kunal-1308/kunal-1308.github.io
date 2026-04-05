import React, { useState } from "react";
import Certification from "./certifications/Certification";
import Me from "./me/Me";
import Contact from "./contact/Contact";
import Interest from "./interests/Interest";

function Nav() {
	const [active, setActive] = useState("me");
	const [collapsed, setCollapsed] = useState(true);

	// Detect mobile screen
	const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-dark">
				<button
					className="navbar-toggler"
					type="button"
					aria-controls="navbarSupportedContent"
					aria-expanded={!collapsed}
					aria-label="Toggle navigation"
					onClick={() => setCollapsed(!collapsed)}
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className={`collapse navbar-collapse${collapsed ? "" : " show"}`} id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto p-2 m-3">
						<li className="nav-item ml-2 mr-2">
							<button className="btn btn-dark" onClick={() => setActive("me")}>
								Me<span className="sr-only">(current)</span>
							</button>
						</li>
						<li className="nav-item ml-2 mr-2">
							<button className="btn btn-dark" onClick={() => setActive("interests")}>
								Interests
							</button>
						</li>
						<li className="nav-item ml-2 mr-2">
							<button className="btn btn-dark" onClick={() => setActive("certifications")}>
								Certifications
							</button>
						</li>
						<li className="nav-item ml-2 mr-2">
							<button className="btn btn-dark" onClick={() => setActive("contact")}>
								Contact
							</button>
						</li>
					</ul>
				</div>
			</nav>
			{isMobile && (
				<div className="alert alert-info text-center mt-2 mb-0" style={{ fontSize: "1rem" }}>
					For best viewing experience, use desktop!
				</div>
			)}
			{active === "me" && <Me />}
			{active === "interests" && <Interest />}
			{active === "certifications" && <Certification />}
			{active === "contact" && <Contact />}
		</div>
	);
}

export default Nav;
