import { useNavigate } from "react-router";
function WeightLoss(){
  const navigate = useNavigate(); 
    return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-4">
      
      <header className="bg-blue-500 text-white w-full py-8 text-center rounded-lg mb-6">
      <h1 className="text-4xl font-bold">Transform Your Life</h1>
      <p className="text-lg mt-2">Your Weight Loss Journey Starts with Zenergy!</p>
      </header>
      <nav className="w-full flex justify-start mb-6">
      <button
        onClick={() => navigate('/exercise')}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded shadow transition duration-200"
      >
        &larr; Back
      </button>
      </nav>
      
      <section className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl mb-6">
      <h2 className="text-2xl font-semibold mb-4">Welcome to Your Weight Loss Guide</h2>
      <p>
        At our core, we believe in empowering individuals to achieve sustainable and healthy weight loss. Dive into a comprehensive resource to transform your habits and embrace a healthier lifestyle.
      </p>
      </section>

      
      <section className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl mb-6">
      <h2 className="text-2xl font-semibold mb-4">Benefits of Weight Loss</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Improved physical health: Reduce the risk of chronic diseases like diabetes and heart disease.</li>
        <li>Enhanced mental health: Boost confidence and reduce stress.</li>
        <li>Increased energy and better mobility.</li>
      </ul>
      </section>


      <section className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl mb-6">
      <h2 className="text-2xl font-semibold mb-4">Steps to Begin Your Weight Loss Journey</h2>
      <ol className="list-decimal pl-6 space-y-2">
        <li>Set realistic goals using the SMART framework.</li>
        <li>Track your current habits including food, activity, and sleep.</li>
        <li>Focus on nutrition: balanced diet and hydration.</li>
        <li>Incorporate exercise gradually, starting with consistent activities.</li>
        <li>Monitor your progress using apps or journals.</li>
      </ol>
      </section>

      
      <section className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl mb-6">
      <h2 className="text-2xl font-semibold mb-4">Effective Exercises for Weight Loss:</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col items-center">
        <img
          src="https://th.bing.com/th/id/OIP.J06UODzcr9ukdZ967XrTCgHaHa?w=203&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="Walking"
          className="rounded-lg shadow-md mb-2"
        />
        <h3 className="font-semibold">Walking</h3>
        <p>A low-impact activity perfect for beginners to stay active.</p>
        </div>
        <div className="flex flex-col items-center">
        <img
          src="https://cdn.wallpapersafari.com/14/18/v9XWKA.jpg"
          alt="Running"
          className="rounded-lg shadow-md mb-2"
        />
        <h3 className="font-semibold">Running</h3>
        <p>Burns calories quickly and improves cardiovascular health.</p>
        </div>
        <div className="flex flex-col items-center">
        <img
          src="https://th.bing.com/th/id/OIP.QT9HDsyhpg6Nzf2YiP_I4gHaEJ?w=285&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="Cycling"
          className="rounded-lg shadow-md mb-2"
        />
        <h3 className="font-semibold">Cycling</h3>
        <p>Builds endurance and strengthens lower body muscles.</p>
        </div>
        
        <div className="flex flex-col items-center">
        <img
          src="https://i.ytimg.com/vi/DIZwDNTjR8w/maxresdefault.jpg"
          alt="Yoga"
          className="rounded-lg shadow-md mb-2"
        />
        <h3 className="font-semibold">Exercise</h3>
        <p>Strength training is excellent for weight loss as it helps build muscle</p>
        </div>

        <div className="flex flex-col items-center">
        <img
          src="https://th.bing.com/th/id/OIP.qBbIZDJv5KRmr88TD-TXyAHaEK?w=329&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="Yoga"
          className="rounded-lg shadow-md mb-2"
        />
        <h3 className="font-semibold">Yoga</h3>
        <p>Enhances flexibility, strength, and mental clarity.</p>
        </div>

        <div className="flex flex-col items-center">
        <img
          src="https://th.bing.com/th/id/OIP.JM1LNhCT2P1P32mmdZyVFwHaFE?w=211&h=180&c=7&r=0&o=5&pid=1.7"
          alt="Yoga"
          className="rounded-lg shadow-md mb-2"
        />
        <h3 className="font-semibold">Diet</h3>
        <p>helping you achieve your health, fitness, and overall well-being goals.</p>
        </div>
      </div>
      </section>
                           
      <section className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl mb-6">
      <h2 className="text-2xl font-semibold mb-4">Weight Loss Myths vs. Facts</h2>
      <div className="space-y-4">
        <div>
        <p className="font-bold">Myth:</p>
        <p>Crash diets work long-term.</p>
        <p className="font-bold">Fact:</p>
        <p>Crash diets can lead to muscle loss and nutrient deficiencies.</p>
        </div>
        <div>
        <p className="font-bold">Myth:</p>
        <p>Carbs are the enemy.</p>
        <p className="font-bold">Fact:</p>
        <p>Complex carbs are essential for energy.</p>
        </div>
      </div>
      </section>

      <footer className="bg-blue-500 text-white py-7 px-150 rounded-lg text-center">
      <p>&copy; 2025 Zenergy. All rights reserved.</p>
      <p className="text-sm mt-2">Follow us on social media for more Zenergy Training tips!</p>
      </footer>
    </div>
    );
}
export default WeightLoss;
