import React, { useState, useEffect } from "react";

function Me() {
	const name = "< Kunal Bhapkar />";
	const [displayedName, setDisplayedName] = useState("");
	const [isDeleting, setIsDeleting] = useState(false);

	useEffect(() => {
		// Animation timings (in milliseconds)
		const typingSpeed = 150;
		const deletingSpeed = 75; // Backspacing is usually faster
		const pauseDelay = 1200; // How long to wait before deleting or restarting

		let timeoutId;

		// 1. If fully typed, pause, then start deleting
		if (!isDeleting && displayedName === name) {
			timeoutId = setTimeout(() => setIsDeleting(true), pauseDelay);
		}
		// 2. If fully deleted, pause, then start typing again
		else if (isDeleting && displayedName === "") {
			timeoutId = setTimeout(() => setIsDeleting(false), pauseDelay / 2);
		}
		// 3. Handle the actual typing and deleting
		else {
			const speed = isDeleting ? deletingSpeed : typingSpeed;

			timeoutId = setTimeout(() => {
				setDisplayedName((prev) => {
					if (isDeleting) {
						return name.substring(0, prev.length - 1);
					} else {
						return name.substring(0, prev.length + 1);
					}
				});
			}, speed);
		}

		// Cleanup to prevent memory leaks
		return () => clearTimeout(timeoutId);
	}, [displayedName, isDeleting, name]);
	return (
		<div className="mt-5 container-fluid">
			<div className="jumbotron row align-items-center justify-content-center">
				<h1>
					{displayedName}
					{/* Keep the blinking cursor from the previous step */}
					<span className="typewriter-cursor">|</span>
				</h1>
			</div>

			<hr className="p-2" />

			<div className="jumbotron row align-items-center justify-content-center">
				<div>
					<h3>Who am I ?</h3>
				</div>
			</div>

			<hr className="p-2" />

			<div className="jumbotron row align-items-center justify-content-center">
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
