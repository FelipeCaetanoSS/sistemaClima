import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./templates/Home.jsx";
import InitialPage from "./templates/InitialPage.jsx";
import Locals from "./templates/Locals.jsx";
import Gastos from "./templates/Gastos.jsx";
import WeatherCalendar from "./components/componentsWeather/WeatherCalendar.jsx";
import Clima from "./templates/Clima.jsx";
import { WeatherProvider } from "./services/weatherContext.jsx";

function App() {
  return (
    <WeatherProvider>
      <Home />
  </WeatherProvider>
  //     {/* <BrowserRouter>
  //    <Routes>
  //      <Route exct path="/" element={initilPage/>} />
  //      <Route path="/home" element={<Home/>} />
  //      <Route path="/climate" element={<Clima/>} />
  //      <Route path="/locals" element={<Locals/>} />
  //      <Route path="/outgoing" element={<Gastos/>} />
  //    </Routes>
  //  </BrowserRouter> */}
    
  );
}

export default App;
