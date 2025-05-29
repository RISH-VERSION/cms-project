import { useNavigate } from "react-router-dom";
function Home(props) {
    const navigate = useNavigate();
    return (
        <>
            <header className="bg-gray-800 text-white py-4">
                <div className="container mx-auto flex justify-between items-center px-4">
                    <h1 className="text-2xl font-bold">Logo</h1>
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
            <main className="container mx-auto px-4 py-8">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-semibold text-center text-gray-800">Welcome to Our Website</h1>
                    <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition-colors duration-200">
                        Get Started
                    </button>
                </div>
            </main>
        </>
    );
}

export default Home;