
 import { BrowserRouter, Route, Routes } from "react-router-dom";
 import Login from "./components/Login";
import Home from "./Pages/Home";

 export default function Rotas()
 {
    return(
        <>
      
        <BrowserRouter>
        
         <Routes>
             <Route path="/" element={<Home/>}></Route>
             <Route path="/Login" element={<Login/>}></Route>

         </Routes>
        </BrowserRouter>
        </>
    )
 }