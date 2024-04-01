import logo from './logo.svg';
import './App.css';
import Home from "./page/Home/Home"
import Landing from "./page/Landing/Landing"
import Pages from "./page/Pages/Pages"
import AboutUs from "./page/AboutUs/AboutUs"
import ThemPage from "./page/ThemPage/ThemPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (

    <BrowserRouter>
    <Routes>

    <Route path="/" element={<Home />} />
    <Route path="/Landing" element={<Landing />} />
    <Route path="/Pages" element={<Pages />} />
    <Route path="/AboutUs" element={<AboutUs />} />
    <Route path="/ThemPage/:id" element={<ThemPage />}/>


    </Routes>

    </BrowserRouter>

   
   
   
    
  );
}


export default App;
