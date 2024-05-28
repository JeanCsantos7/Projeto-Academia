
 import { BrowserRouter, Route, Routes } from "react-router-dom";
 import Login from "./components/Login";
import Home from "./Pages/Home";
import Logado from "./components/Logado";
import { useState } from "react";

 export default function Rotas()
 {


  
    const[nomeUsuario, setNomeUsuario] = useState('')


    function atualizarEstado(valor)
    {
        setNomeUsuario(valor)
    }

    return(
        <>
      
        <BrowserRouter>
        
         <Routes>
             <Route path="/" element={<Home/>}></Route>
             <Route path="/Login" element={<Login propLogin={atualizarEstado} />}></Route>
             <Route path="/Logado" element={<Logado propLogado={nomeUsuario}/>}></Route>

         </Routes>
        </BrowserRouter>
        </>
    )
 }