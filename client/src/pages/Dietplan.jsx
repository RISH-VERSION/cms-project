import React from 'react';

function Dietplan(props) {
    const [fat, setFat] = React.useState('');
    const [protein, setProtein] = React.useState('');
    const [fiber, setFiber] = React.useState('');
    const [carbs, setCarbs] = React.useState('');

    const [total, setTotal] = React.useState(null);

    const handleAdd = () => {
        const sum =
            Number(fat || 0) +
            Number(protein || 0) +
            Number(fiber || 0) +
            Number(carbs || 0);
        setTotal(sum);
        setFat('');
        setProtein('');
        setFiber('');
        setCarbs('');
    };

    // 1g fat = 9 calories
    // 1g protein = 4 calories
    // 1g fiber = 2 calories (approx)
    // 1g carbs = 4 calories
    // Calories from carbs should exclude fiber

    const [calories, setCalories] = React.useState(null);

    React.useEffect(() => {
        const fatVal = Number(fat || 0);
        const proteinVal = Number(protein || 0);
        const fiberVal = Number(fiber || 0);
        const carbsVal = Number(carbs || 0);

        const fatCal = fatVal * 9;
        const proteinCal = proteinVal * 4;
        const fiberCal = fiberVal * 2;
        // Subtract fiber from carbs for net carbs
        const netCarbs = Math.max(carbsVal - fiberVal, 0);
        const carbsCal = netCarbs * 4;

        const totalCal = fatCal + proteinCal + fiberCal + carbsCal;
        setCalories(totalCal);
    }, [fat, protein, fiber, carbs]);

    return (
        <div className="p-10">
            <div className="flex flex-col gap-4">
                <div className="bg-white shadow rounded p-4 flex flex-col items-start gap-4 border border-gray-400 w-64">
                    <div className="flex items-center gap-2 w-full">
                        <label className="block font-semibold mb-0 w-20">Fat (g)</label>
                        <input
                            type="number"
                            className="border rounded px-2 py-1 w-32"
                            placeholder="Enter fat"
                            value={fat}
                            onChange={e => setFat(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center gap-2 w-full">
                        <label className="block font-semibold mb-0 w-20">Protein (g)</label>
                        <input
                            type="number"
                            className="border rounded px-2 py-1 w-32"
                            placeholder="Enter protein"
                            value={protein}
                            onChange={e => setProtein(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center gap-2 w-full">
                        <label className="block font-semibold mb-0 w-20">Fiber (g)</label>
                        <input
                            type="number"
                            className="border rounded px-2 py-1 w-32"
                            placeholder="Enter fiber"
                            value={fiber}
                            onChange={e => setFiber(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center gap-2 w-full">
                        <label className="block font-semibold mb-0 w-20">Carbs (g)</label>
                        <input
                            type="number"
                            className="border rounded px-2 py-1 w-32"
                            placeholder="Enter carbs"
                            value={carbs}
                            onChange={e => setCarbs(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            {calories !== null && (
                <div className="mt-6 font-bold text-black-700">
                    Calories: {calories}
                </div>
            )}
        </div>
    );
}

export default Dietplan;