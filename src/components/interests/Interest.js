import React from "react";
import "./Interest.css";
function Interest() {
	return (
		<div className="mt-5 container-fluid">
			<div className="row jumbotron align-items-center justify-content-center">
				<h1>Interests</h1>
			</div>

			<hr className="p-2" />

			<div className="row jumbotron align-items-center justify-content-center">
				<div className="col-sm-4">
					<h3 className="mb-3">Rider</h3>
					<img
						src="https://images.unsplash.com/photo-1632063239706-99cc47ef748b?q=80&w=829&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						width="250px"
						height="250px"
						alt="Rider"
					/>
				</div>
				<div className="col-sm-4">
					<h3 className="mb-3">Gamer</h3>
					<img
						src="https://images.unsplash.com/photo-1559969143-b2defc6419fd?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						width="250px"
						height="250px"
						alt="Gamer"
					/>
				</div>
				<div className="col-sm-4">
					<h3 className="mb-3">Reader</h3>
					<img
						src="https://images.unsplash.com/photo-1632976032753-2b209dd0a921?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						width="250px"
						height="250px"
						alt="Reader"
					/>
				</div>
			</div>
		</div>
	);
}
export default Interest;
