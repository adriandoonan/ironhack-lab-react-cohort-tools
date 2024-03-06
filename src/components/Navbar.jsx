import { NavLink } from "react-router-dom";
import logo from "./../assets/logo-ironhack-blue.png";

function Navbar() {
	return (
		<nav className="fixed top-0 left-0 z-50 w-full text-white bg-blue-600 shadow-md">
			<div className="flex items-center justify-between h-20 px-4">
				<div className="flex items-center w-1/4 space-x-2">
					{/* Home Button (Logo) */}
					<NavLink to="/">
						<button className="flex items-center py-1 text-l">
							<img src={logo} alt="Logo" className="w-auto h-8" />
						</button>
					</NavLink>
				</div>

				<div className="flex justify-center w-1/2">
					<span className="text-xl">Cohort Tools</span>
				</div>

				<div className="flex justify-end w-1/4 mr-4">
					{/* User Profile Button */}
					<NavLink to="/profile">
						<button className="flex items-center py-1 text-l">
							<img
								src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-cohort-tools-routing/profile-1.png"
								alt="Logo"
								className="w-auto h-10 p-1 border border-white border-solid rounded-3xl"
							/>
						</button>
					</NavLink>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
