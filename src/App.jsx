import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import WeatherDashboard from './pages/WeatherDashboard';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<WeatherDashboard />} />
      </Routes>
    </>
  )
}

export default App
