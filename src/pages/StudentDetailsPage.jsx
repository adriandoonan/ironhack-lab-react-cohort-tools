import { Link, useParams } from "react-router-dom";
import placeholderImage from "./../assets/placeholder.png";
import studentsData from "./../assets/students.json";

function StudentDetailsPage() {
	// Find the current student profile by id.
	// In this case, the student with id 1. The `studentId` is hard-coded for now.
	// This could be a URL parameter from React Router, e.g. /students/:studentId
	//const studentId = "1";
	const { studentId } = useParams();
	const studentProfile = studentsData.find(
		(student) => student._id === studentId,
	);

	return (
		<div className="px-4 py-6 m-2 bg-gray-100 border-2 StudentDetailsPage border-fuchsia-500">
			<h1>Student Details Page</h1>
			<div className="p-8 mb-6 bg-white rounded-lg shadow-md">
				{studentProfile && (
					<>
						<img
							src={studentProfile.image || placeholderImage}
							alt="profile-photo"
							className="object-cover w-32 h-32 border-2 border-gray-300 rounded-full"
						/>
						<h1 className="absolute mt-4 text-2xl font-bold">
							{studentProfile.firstName} {studentProfile.lastName}
						</h1>

						<div className="grid grid-cols-1 gap-6 pb-4 mt-24 mb-4 border-b md:grid-cols-2">
							<p className="pb-2 mb-2 text-left border-b">
								<strong>LinkedIn:</strong>{" "}
								<a
									href={studentProfile.linkedinUrl}
									target="_blank"
									rel="noreferrer"
									className="ml-2 text-blue-500 hover:underline"
								>
									{studentProfile.linkedinUrl}
								</a>
							</p>

							<p className="pb-2 mb-2 text-left border-b">
								<strong>Email:</strong>{" "}
								<span className="ml-2 text-blue-500 hover:underline">
									<a href={`mailto:${studentProfile.email}`}>
										{studentProfile.email}
									</a>
								</span>
							</p>

							<p className="pb-2 mb-2 text-left border-b">
								<strong>Languages:</strong>{" "}
								{studentProfile.languages.join(", ")}
							</p>

							<p className="pb-2 mb-2 text-left border-b">
								<strong>Program:</strong> {studentProfile.program}
							</p>

							<p className="pb-2 mb-2 text-left">
								<strong>Background:</strong> {studentProfile.background}
							</p>

							<p className="pb-2 mb-2 text-left">
								<strong>Cohort:</strong>
								<span className="ml-2 text-blue-500 hover:underline">
									{studentProfile.cohort}
								</span>
							</p>
						</div>

						{/* Back button */}
						<Link to="/">
							<button className="px-4 py-2 text-white transition duration-300 ease-in-out bg-green-500 rounded hover:bg-green-600">
								Back
							</button>
						</Link>
					</>
				)}
			</div>
		</div>
	);
}

export default StudentDetailsPage;
