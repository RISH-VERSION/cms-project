import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
function InnerHome() {
  const navigate = useNavigate();
  
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const handleLogut = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
    navigate("/");
  };

  return (
    <>
      <nav>
        <ul className="flex space-x-4 items-center p-4 bg-white shadow rounded-lg">
          <li>
            <button
              className="text-indigo-600 font-semibold hover:underline"
              onClick={() => navigate("/")}
            >
              Home
            </button>
          </li>
          <li className="ml-auto">
            <button
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
              onClick={handleLogut}
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
      <div
        className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-green-100 flex flex-col justify-between animate-fadeIn"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(99,102,241,0.15) 0, transparent 60%), radial-gradient(circle at 20% 80%, rgba(34,197,94,0.12) 0, transparent 60%)",
        }}
      >
        {/* Welcome Section */}
        <div className="flex-grow flex flex-col items-center justify-center p-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 animate-slideDown">
            Welcome back <span className="text-indigo-600">{user.name}</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mb-8 animate-fadeInDelay">
            Elevate your fitness journey with smart workouts, clean nutrition, and total body-mind balance.
          </p>

          {/* Feature Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <button className="w-52 bg-indigo-600 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-indigo-700 transition transform hover:scale-105 duration-200 animate-popIn" onClick={() => navigate("/Exercise")}>
              Exercise Plans
            </button>
            <button className="w-52 bg-green-500 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-green-600 transition transform hover:scale-105 duration-200 animate-popIn delay-100" onClick={() => navigate("/bmi")}>
              Diet Plans
            </button>
            <button className="w-52 bg-blue-500 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-blue-600 transition transform hover:scale-105 duration-200 animate-popIn delay-200">
              Tracker
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center py-4 text-gray-500 text-sm animate-fadeInDelay">
          © {new Date().getFullYear()} Zenergy. All rights reserved.
        </footer>
      </div>
      <style> 
        {`
              @keyframes fadeIn {
                from { opacity: 0 }
                to { opacity: 1 }
              }
              @keyframes slideDown {
                from { opacity: 0; transform: translateY(-40px);}
                to { opacity: 1; transform: translateY(0);}
              }
              @keyframes popIn {
                0% { opacity: 0; transform: scale(0.8);}
                80% { opacity: 1; transform: scale(1.05);}
                100% { opacity: 1; transform: scale(1);}
              }
              .animate-fadeIn {
                animation: fadeIn 1s ease;
              }
              .animate-fadeInDelay {
                animation: fadeIn 1.5s 0.5s ease both;
              }
              .animate-slideDown {
                animation: slideDown 1s cubic-bezier(.23,1.01,.32,1) both;
              }
              .animate-popIn {
                animation: popIn 0.7s cubic-bezier(.23,1.01,.32,1) both;
              }
              .animate-popIn.delay-100 {
                animation-delay: 0.1s;
              }
              .animate-popIn.delay-200 {
                animation-delay: 0.2s;
              }
            `}
      </style>
    </>
  );
}

export default InnerHome;