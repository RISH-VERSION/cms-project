
function Exercise() {
    return (
       <div className="bg-gray-50 min-h-screen">
  <header className="bg-blue-500 text-white py-6 px-4 text-center">
    <h1 className="text-4xl font-bold">Exercise Hub</h1>
    <p className="mt-2 text-lg">Your personalized guide to fitness and wellness</p>
  </header>

  <section className="p-6">
    <h2 className="text-2xl font-bold mb-4">Explore Categories</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

      <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
        <img
          src="https://th.bing.com/th/id/OIP.FiVJZlp67nPeU2hRMNX4GAHaFj?pid=ImgDet&w=179&h=134&c=7&dpr=1.3"
          alt="Weight Training"
          className="rounded-t-lg object-cover h-40 w-full"
        />
        <h3 className="text-xl font-bold mt-4">Strength Training</h3>
        <p className="text-gray-700 mt-2">
          Build strength and endurance with structured Strength training routines.
        </p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Learn More
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
        <img
          src="https://th.bing.com/th/id/OIP.3qQzAFOoyyUhfyfxPVvIwAHaD-?w=336&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="Muscle Gaining"
          className="rounded-t-lg object-cover h-40 w-full"
        />
        <h3 className="text-xl font-bold mt-4">Muscle Gaining</h3>
        <p className="text-gray-700 mt-2">
          Enhance your physique with hypertrophy-focused training plans.
        </p>
        <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
          Learn More
        </button>
      </div>

   
      <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
        <img
          src="https://www.bing.com/th/id/OGC.95be830929beeaa519c32703401255db?pid=1.7&rurl=https%3a%2f%2fmedia1.giphy.com%2fmedia%2fcjFp2Fi94lf1AW7rYv%2fgiphy.gif%3fcid%3d6c09b952jgm2yusdh0lt8f1nmwmu47ftamgno020gfqxsdez%26rid%3dgiphy.gif%26ct%3ds&ehk=8FNggh53%2f4xi%2bfJ9hb6qh5OZgQMaY7neo3mI1x7deW8%3d"
          alt="Weight Loss"
          className="rounded-t-lg object-cover h-40 w-full"
        />
        <h3 className="text-xl font-bold mt-4">Weight Loss</h3>
        <p className="text-gray-700 mt-2">
          Burn calories effectively with our expert weight loss strategies.
        </p>
        <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
          Learn More
        </button>
      </div>

  
      
    </div>
  </section>


 
  <footer className="bg-blue-500 text-white py-4 text-center">
    <p>&copy; 2025 Exercise Hub. All rights reserved.</p>
    <p className="text-sm mt-2">Follow us on social media for more tips!</p>
  </footer>
</div>
  
    );
}

export default Exercise;