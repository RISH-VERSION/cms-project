import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import BMI from './pages/BMI.jsx';
import Dietplan from './pages/Dietplan.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Dietplan/>
  </StrictMode>
)
