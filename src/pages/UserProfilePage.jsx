import { Link } from "react-router-dom";

function UserProfilePage() {
	const userProfile = {
		image:
			"https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-cohort-tools-routing/profile-1.png",
		name: "Jane Doe",
		email: "janed@example.com",
		role: "Lead Teacher",
	};

	return (
		<div className="px-4 py-6 m-2 bg-gray-100 border-2 StudentDetailsPage border-violet-500">
			<h1>User Profile Page</h1>
			<div className="p-8 mb-6 bg-white rounded-lg shadow-md">
				{userProfile && (
					<>
						<img
							src={userProfile.image}
							alt="profile-photo"
							className="object-cover w-32 h-32 border-2 border-gray-300 rounded-full"
						/>
						<h1 className="absolute mt-4 text-2xl font-bold">
							{userProfile.name}
						</h1>

						<div className="grid grid-cols-1 gap-6 pb-4 mt-24 mb-4 border-b md:grid-cols-2">
							<p className="pb-2 mb-2 text-left">
								<strong>Email:</strong> {userProfile.email}
							</p>
							<p className="pb-2 mb-2 text-left">
								<strong>Role:</strong> {userProfile.role}
							</p>
						</div>
					</>
				)}

				{/* Back button */}
				<Link to="/">
					<button className="px-4 py-2 text-white transition duration-300 ease-in-out bg-green-500 rounded hover:bg-green-600">
						Back
					</button>
				</Link>
			</div>
		</div>
	);
}

export default UserProfilePage;
