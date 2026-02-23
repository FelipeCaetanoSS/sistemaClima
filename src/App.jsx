import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './templates/Home.jsx';
import InitialPage from './templates/InitialPage.jsx';
import Locals from './templates/Locals';
import Gastos from './templates/gastos';
import DadosApi from '../Apis/weatherService.jsx';


function App() {
  return (

    <Home/>

    // <BrowserRouter>
    //   <Routes>
    //     <Route path="" element={initilPage/>} />
    //     <Route path="/home" element={<Home/>} />
    //     <Route path="/clima" element={<Clima/>} />
    //     <Route path="/locais" element={<Locals/>} />
    //     <Route path="/gastos" element={<Gastos/>} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;