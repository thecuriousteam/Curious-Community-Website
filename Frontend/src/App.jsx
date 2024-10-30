import "./App.css";
import curiousLogo from "./assets/CDC.png"; // Assuming you have the logo image in your project

function App() {
	return (
		<div className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-800 flex items-center justify-center">
			<div className="bg-white shadow-lg rounded-lg p-8 text-center max-w-md transform transition-transform hover:scale-105">
				<h1 className="text-3xl font-mono text-blue-700 font-extrabold mb-4">
					Curious Developers Community
				</h1>
				<p className="text-lg font-light text-gray-600 mb-6">
					Where curious minds come together to learn, share, and grow in the world of development.<br /> #LetsGrowAllTogether
				</p>
				<a
					href="https://community.curiousdevelopers.in/"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
				>
					Join Now
				</a>

				<div className="mt-8 animate-spin-slow">
					<img
						src={curiousLogo}
						alt="Curious Developers Logo"
						className="w-24 h-24 mx-auto"
					/>
				</div>
				<div className="mt-4 text-sm text-gray-500">
					Stay curious, stay creative!
				</div>
			</div>
		</div>
	);
}

export default App;
