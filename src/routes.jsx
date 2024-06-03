import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./Pages/Home";
import Logado from "./components/Logado";
import Error404 from "./components/Error404";
import { useState } from "react";

export default function Rotas() {
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [auth, setAuth] = useState("");

  function atualizarEstado(valor) {
    setNomeUsuario(valor);
  }

  function autenticar(autenticar) {
    setAuth(autenticar);
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/Login"
            element={
              <Login propLogin={atualizarEstado} propToken={autenticar} />
            }
          ></Route>

          <Route path="*" element={<Error404 />}></Route>

          {auth ? (
            <Route
              path="/Logado"
              element={<Logado propLogado={nomeUsuario} />}
            ></Route>
          ) : (
            ""
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}
