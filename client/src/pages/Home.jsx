import { useNavigate } from "react-router-dom";

function Home(props) {
    const navigate = useNavigate();

    const handleClick = () => {
        if (localStorage.getItem('user')) {
            navigate('/InnerHome');
        } else {
            navigate('/Signup');
        }
    }

    return (
        <>
            {/* Header with Indigo Background */}
            <header className="bg-indigo-600 text-white py-4">
                <div className="container mx-auto flex justify-between items-center px-4">
                    <h1 className="text-2xl font-bold">Zenergy</h1>
                    <div className="flex space-x-6">
                        <button
                            className="text-white hover:text-gray-300 font-semibold"
                            onClick={() => navigate('/signin')}
                        >
                            Sign-in
                        </button>
                        <button
                            className="text-white hover:text-gray-300 font-semibold"
                            onClick={() => navigate('/signup')}
                        >
                            Sign-up
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content with Light Blue Background */}
            <main className="container mx-auto px-4 py-8 bg-blue-100 min-h-screen">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-semibold text-center text-gray-800 mb-6">
                        Welcome to Zenergy
                    </h1>
                    <p className="text-center text-lg text-gray-700 max-w-2xl">
                        "Push yourself because no one else is going to do it for you."
                    </p>
                    <p className="text-center text-lg text-gray-700 mt-2 max-w-2xl">
                        "Energy and persistence conquer all things."
                    </p>
                    <button
                        className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition-colors duration-200"
                        onClick={handleClick}
                    >
                        Get Started
                    </button>
                </div>

                {/* Features Section */}
                <section className="mt-16">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Why Zenergy?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                            <h3 className="text-xl font-semibold mb-2">Personalized Workouts</h3>
                            <p className="text-gray-600">Tailor your training to your goals and fitness level. Get daily workout suggestions that evolve with your progress.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                            <h3 className="text-xl font-semibold mb-2">Nutrition Tracking</h3>
                            <p className="text-gray-600">Log meals, track macros, and follow custom diet plans made to fuel your body right.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                            <h3 className="text-xl font-semibold mb-2">Progress Monitoring</h3>
                            <p className="text-gray-600">Visualize your improvements through stats, charts, and milestones. Stay motivated with real progress.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                            <h3 className="text-xl font-semibold mb-2">Community Challenges</h3>
                            <p className="text-gray-600">Join like-minded fitness warriors in weekly challenges to push your limits together.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                            <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
                            <p className="text-gray-600">Access video tutorials, live Q&As, and articles from certified trainers and nutritionists.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                            <h3 className="text-xl font-semibold mb-2">Mind & Body Balance</h3>
                            <p className="text-gray-600">Incorporate yoga, meditation, and mindfulness practices to recover and grow stronger.</p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Home;

