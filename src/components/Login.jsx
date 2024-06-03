import styleLogin from "../styles/Login.module.css";
import { GiBiceps } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import Spinner from "./spinner";

export default function Login({ propLogin, propToken }) {
  const navigate = useNavigate("");
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [Logar, setLogar] = useState("");

  const lista = [
    { user: "Jean", pass: "Jean123" },
    { user: "Any", pass: "Any123" },
    { user: "Sara", pass: "Sara123" },
    { user: "Cauã", pass: "Caua123" },
  ];

  function pegarSenha(e) {
    const variavel2 = e.target.value;
    setSenha(variavel2);
  }

  function pegarUser(e) {
    const variavel = e.target.value;
    setUsuario(variavel);
  }

  function comparar() {
    for (let i = 0; i < lista.length; i++) {
      if (
        usuario.toLowerCase() === lista[i].user.toLowerCase() &&
        senha === lista[i].pass
      ) {
        setTimeout(() => {
          navigate("/Logado");

          propLogin(usuario);
          propToken(true);
        }, 2000);

        setLogar(<Spinner />);

        return; // Se encontrarmos uma correspondência, podemos sair da função imediatamente
      }
    }

    navigate("/Login");

    setLogar(
      <div className={styleLogin.ContainerSenha}>
        <p className={styleLogin.usuarioIncorreto}>
          Senha ou usuário incorretos
        </p>
      </div>
    );

    propToken(false);
  }

  return (
    <>
      <div className={styleLogin.body}>
        <span className={styleLogin.LogotipoContainer}>
          <Link to={"/"}>
            <GiBiceps className={styleLogin.Icone} />
          </Link>

          <h1 className={styleLogin.TituloNav}>GOES GYM</h1>
        </span>

        <h1 className={styleLogin.Titulo}>Área do Cliente</h1>

        <div className={styleLogin.inputsContainer}>
          <input
            required
            placeholder="Informe seu nome de usuário"
            onChange={pegarUser}
            className={styleLogin.inputCampoTexto}
            type="text"
          />
          <input
            required
            placeholder="Informe sua senha"
            onChange={pegarSenha}
            className={styleLogin.inputSenha}
            type="password"
          />

          <p>{Logar}</p>
          <button onClick={comparar} className={styleLogin.botao}>
            ENTRAR
          </button>
        </div>
      </div>
    </>
  );
}
