import React from 'react';

function BMI(props) {
    const [gender, setGender] = React.useState('');
    const [weight, setWeight] = React.useState('');
    const [height, setHeight] = React.useState('');
    const [bmi, setBmi] = React.useState(null);

    const handleGender = (selectedGender) => {
        setGender(selectedGender);
    };

    // (Removed duplicate handleSubmit function to fix redeclaration error)

    // State for calories and activity level
    const [activity, setActivity] = React.useState('');
    const [age, setAge] = React.useState('');
    const [calories, setCalories] = React.useState(null);

    // Calculate calories when form is submitted
    const calculateCalories = () => {
        if (weight && height && age && gender && activity) {
            // Mifflin-St Jeor Equation
            const w = parseFloat(weight);
            const h = parseFloat(height);
            const a = parseFloat(age);
            let bmr;
            if (gender === 'male') {
                bmr = 10 * w + 6.25 * h - 5 * a + 5;
            } else {
                bmr = 10 * w + 6.25 * h - 5 * a - 161;
            }
            // Activity factor
            let factor = 1.2;
            if (activity === 'light') factor = 1.375;
            else if (activity === 'moderate') factor = 1.55;
            else if (activity === 'active') factor = 1.725;
            else if (activity === 'very-active') factor = 1.9;
            setCalories(Math.round(bmr * factor));
        }
    };

    // Update calories on submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if (weight && height) {
            const heightInMeters = parseFloat(height) / 100;
            const bmiValue = parseFloat(weight) / (heightInMeters * heightInMeters);
            setBmi(bmiValue.toFixed(2));
        }
        calculateCalories();
    };

    return (
        <div className="min-h-screen flex items-center justify-center relative bg-gray-50">
            <div className="relative z-10 flex flex-col md:flex-row bg-white bg-opacity-80 rounded-lg shadow-lg max-w-3xl w-full overflow-hidden">

                {/* Left Side: Form */}
                <div className="md:w-1/2 w-full p-8 flex flex-col space-y-4 border-b md:border-b-0 md:border-r border-gray-200 bg-gradient-to-br from-blue-50 to-purple-100">
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col space-y-6 animate-fade-in"
                    >
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1 tracking-wide">
                                Age
                            </label>
                            <input
                                type="number"
                                min="1"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1 tracking-wide">
                                Gender
                            </label>
                            <div className="flex space-x-4">
                                <label className={`flex items-center space-x-2 cursor-pointer px-3 py-1 rounded transition ${gender === 'male' ? 'bg-blue-200' : 'hover:bg-blue-100'}`}>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="male"
                                        checked={gender === 'male'}
                                        onChange={() => handleGender('male')}
                                        className="form-radio accent-blue-500"
                                        required
                                    />
                                    <span>Male</span>
                                </label>
                                <label className={`flex items-center space-x-2 cursor-pointer px-3 py-1 rounded transition ${gender === 'female' ? 'bg-pink-200' : 'hover:bg-pink-100'}`}>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="female"
                                        checked={gender === 'female'}
                                        onChange={() => handleGender('female')}
                                        className="form-radio accent-pink-500"
                                        required
                                    />
                                    <span>Female</span>
                                </label>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1 tracking-wide">
                                Weight (kg)
                            </label>
                            <input
                                type="number"
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
                                min="1"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1 tracking-wide">
                                Height (cm)
                            </label>
                            <input
                                type="number"
                                value={height}
                                onChange={(e) => setHeight(e.target.value)}
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
                                min="1"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1 tracking-wide">
                                Activity level
                            </label>
                            <select
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
                                value={activity}
                                onChange={(e) => setActivity(e.target.value)}
                                required
                            >
                                <option value="">Select activity level</option>
                                <option value="sedentary">Sedentary</option>
                                <option value="light">Lightly active</option>
                                <option value="moderate">Moderately active</option>
                                <option value="active">Active</option>
                                <option value="very-active">Very active</option>
                            </select>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-400 to-purple-400 text-white py-2 rounded shadow-lg font-bold text-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-200 transform hover:scale-105"
                        >
                            Calculate BMI and Calories
                        </button>
                    </form>
                </div>
                {/* Right Side: BMI & Calories Result */}
                <div className="md:w-1/2 w-full flex flex-col justify-center items-center p-8 bg-gradient-to-br from-purple-50 to-blue-100">
                    <div className="w-full max-w-xs mx-auto flex flex-col gap-6">
                        <div className="flex flex-col items-center border rounded-lg p-4 bg-white shadow mb-4 animate-fade-in">
                            <div className="text-center mb-2">
                                <span className="font-semibold text-2xl text-black-700">
                                    Your BMI: {bmi ? bmi : '--'}
                                </span>
                            </div>
                            <BMICategoryBox bmi={bmi ? bmi : 0} />
                            {/* Healthy range line under the Underweight button */}
                            <small className="text-xs text-gray-600 text-center mt-2 block">
                                Healthy range: 18.5 kg/m2 - 25 kg/m2
                            </small>
                            <div className="mt-4 w-full">
                                <BMIMeter bmi={bmi ? bmi : 0} />
                            </div>
                        </div>
                        {/* Calories Box */}
                        <div className="flex flex-col items-center border rounded-lg p-4 bg-white shadow animate-fade-in">
                            <div className="font-semibold text-lg text-gray-700 mb-2 text-center">
                                Estimated Daily Calories
                            </div>
                            <div className="rounded p-3 bg-purple-400 text-white font-bold text-xl text-center w-full">
                                {calories ? `${calories} kcal/day` : '--'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    // Helper to get BMI category and color
    function getBMICategory(bmi) {
        const value = parseFloat(bmi);
        if (value < 18.5) return { label: 'Underweight', color: 'bg-blue-400', meterColor: '#60a5fa' };
        if (value < 25) return { label: 'Normal weight', color: 'bg-green-400', meterColor: '#34d399' };
        if (value < 30) return { label: 'Overweight', color: 'bg-yellow-400', meterColor: '#fbbf24' };
        return { label: 'Obesity', color: 'bg-red-400', meterColor: '#f87171' };
    }

    // BMI Category Box Component
    function BMICategoryBox({ bmi }) {
        const { label, color } = getBMICategory(bmi);
        return (
            <div className={`rounded p-3 text-white font-bold text-center mb-4 ${color}`}>
                {label}
            </div>
        );
    }
    // BMI Meter Component
    function BMIMeter({ bmi }) {
        const value = Math.min(Math.max(parseFloat(bmi), 10), 40); // Clamp for meter
        const percent = ((value - 10) / (40 - 10)) * 100;
        const { meterColor } = getBMICategory(bmi);

        return (
            <div className="w-full bg-gray-200 rounded h-4 relative">
                <div
                    className="h-4 rounded"
                    style={{
                        width: `${percent}%`,
                        background: meterColor,
                        transition: 'width 0.5s'
                    }}
                />
                <div className="absolute left-0 right-0 top-0 flex justify-between text-xs px-1 text-gray-600">
                    <span>0</span>
                    <span>100</span>
                </div>
            </div>
        );
    }
}

export default BMI;