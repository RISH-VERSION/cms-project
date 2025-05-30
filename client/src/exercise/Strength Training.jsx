
function StrengthTraining(){
    return(
       <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <header className="bg-indigo-600 text-white py-8 px-4 text-center">
        <h1 className="text-4xl font-bold">Strength Training</h1>
        <p className="text-lg mt-2">Unleash your strength and power with expert routines.</p>
        <p className="text-lg mt-2">Results happen over time, not overnight – stay committed</p>
        
      </header>

      {/* Navigation Section */}
      <nav className="flex justify-center gap-6 bg-gray-200 py-4">
        <a href="#benefits" className="text-indigo-600 hover:text-indigo-800 font-semibold">
          Benefits
        </a>
        <a href="#exercises" className="text-indigo-600 hover:text-indigo-800 font-semibold">
          Exercises
        </a>
        <a href="#tips" className="text-indigo-600 hover:text-indigo-800 font-semibold">
          Tips
        </a>
      </nav>

    
      <section id="exercises" className="p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Popular Strength Training Exercises</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
            <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
            <img
              src="https://ih1.redbubble.net/image.4716271300.4555/fposter,small,wall_texture,product,750x1000.jpg"
              alt="Deadlift Exercise"
              className="https://ih1.redbubble.net/image.4716271300.4555/fposter,small,wall_texture,product,750x1000.jpg"
            />
            <h3 className="text-xl font-bold mt-4">Wide Grip Pull Up</h3>
            <p className="text-gray-700 mt-2">
              A powerful compound exercise for Works the back, biceps, and shoulders.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
            <img
              src="https://ih1.redbubble.net/image.4716269609.4507/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
              alt="Deadlift Exercise"
              className="https://ih1.redbubble.net/image.4716271300.4555/fposter,small,wall_texture,product,750x1000.jpg"
            />
            <h3 className="text-xl font-bold mt-4">DeadLift</h3>
            <p className="text-gray-700 mt-2">
              A powerful compound exercise for focusing on posterior chain muscles.
            </p>
          </div>
      
          <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
            <img
              src="https://ih1.redbubble.net/image.4716268859.4481/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
              alt="Deadlift Exercise"
              className="https://ih1.redbubble.net/image.4716271300.4555/fposter,small,wall_texture,product,750x1000.jpg"
            />
            <h3 className="text-xl font-bold mt-4">Barbel Bend Over Row</h3>
            <p className="text-gray-700 mt-2">
              A powerful compound exercise for tLats, traps, biceps, and lower back.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
            <img
              src="https://ih1.redbubble.net/image.4716272811.4597/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
              alt="Deadlift Exercise"
              className="https://ih1.redbubble.net/image.4716271300.4555/fposter,small,wall_texture,product,750x1000.jpg"
            />
            <h3 className="text-xl font-bold mt-4">Barbell Back Squat</h3>
            <p className="text-gray-700 mt-2">
              Position a barbell on a squat rack at about chest height.
            </p>
          </div>
              
          

          <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
            <img
              src="https://ih1.redbubble.net/image.4716273774.4620/fposter,small,wall_texture,square_product,600x600.jpg"
              alt="Deadlift Exercise"
              className="https://ih1.redbubble.net/image.4716271300.4555/fposter,small,wall_texture,product,750x1000.jpg"
            />
            <h3 className="text-xl font-bold mt-4">Bench Press</h3>
            <p className="text-gray-700 mt-2">
              A powerful compound exercise for Targets the chest, shoulders, and triceps.
            </p>
            <p className="text-gray-700 mt-2">
              Keep your feet flat on the floor and avoid lifting them during the exercise.
            </p>
            <p className="text-gray-700 mt-2">
              Maintain control throughout the lift—avoid bouncing the bar off your chest.
            </p>
            <p className="text-gray-700 mt-2">
              Engage your core and glutes for added stability.
            </p>

          </div>

          <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
            <img
              src="https://th.bing.com/th/id/OIP.x8LRs3Pr77kG2D7E4V4lxgHaI7?w=746&h=900&rs=1&pid=ImgDetMain"
              alt="Deadlift Exercise"
              className="https://ih1.redbubble.net/image.4716271300.4555/fposter,small,wall_texture,product,750x1000.jpg"
            />
            <h3 className="text-xl font-bold mt-4">Squad Workout Plan</h3>
            <p className="text-gray-700 mt-2">
              A powerful compound exercise for Builds quads, glutes, and hamstrings.
            </p>
          </div>

          
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="bg-gray-100 py-6 px-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Benefits of Strength Training</h2>
        <div className="text-gray-700 max-w-3xl mx-auto">
          <ul className="list-disc ml-6">
            <li>Increases muscle mass and strength.</li>
            <li>Improves overall physical performance and endurance.</li>
            <li>Enhances bone density and joint stability.</li>
            <li>Boosts metabolism and aids in weight management.</li>
          </ul>
        </div>
      </section>

      {/* Tips Section */}
      <section id="tips" className="py-6 px-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Strength Training Tips</h2>
        <div className="text-gray-700 max-w-3xl mx-auto">
          <ul className="list-disc ml-6">
            <li>Focus on compound exercises like squats, deadlifts, and presses.</li>
            <li>Progressively overload by increasing weights gradually.</li>
            <li>Maintain proper form to prevent injuries.</li>
            <li>Ensure adequate rest between sets and training sessions.</li>
          </ul>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-indigo-600 text-white py-4 text-center">
        <p>&copy; 2025 Zenergy. All rights reserved.</p>
        <p className="text-sm mt-2">Follow us on social media for more strength training tips!</p>
      </footer>
    </div>
    );
}
export default StrengthTraining;