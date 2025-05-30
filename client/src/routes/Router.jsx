import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Signup from '../pages/Signup';
import Signin from '../pages/Signin';
import NotFound from '../pages/NotFound';
import StrengthTraining from '../exercise/Strength Training';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="*" element={<NotFound />} />
            <Route path="StrengthTraining" element={<StrengthTraining />} />  
        </Routes>
    );
};

export default AppRouter;