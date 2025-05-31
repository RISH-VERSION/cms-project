import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Signup from '../pages/Signup';
import Signin from '../pages/Signin';
import NotFound from '../pages/NotFound';
import InnerHome from '../pages/InnerHome';
import Exercise from '../exercise/Exercise';
import StrengthTraining from '../exercise/StrengthTraining';
import WeightLoss from '../exercise/WeightLoss';
import BMI from '../pages/BMI';
const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/innerHome" element={<InnerHome/>} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/exercise" element={<Exercise/>} />
            <Route path="/strengthTraining" element={<StrengthTraining/>}/>
            <Route path="/weightLoss" element={<WeightLoss/>}/>
            <Route path="/bmi" element={<BMI/>}/>
        </Routes>
    );
};

export default AppRouter;