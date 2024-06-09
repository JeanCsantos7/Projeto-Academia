import styleLogado from "../styles/Logado.module.css";

import { Link } from "react-router-dom";
import { GiBiceps } from "react-icons/gi";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaHeadphones } from "react-icons/fa";
import { BsMegaphoneFill } from "react-icons/bs";
import { FaDumbbell } from "react-icons/fa6";
import { HiMiniDocumentText } from "react-icons/hi2";
import { IoIosPeople } from "react-icons/io";

export default function Logado({ propLogado }) {
  return (
    <>
      <div className={styleLogado.body}>
        <p className={styleLogado.EstiloProp}> Bem-vindo(a) {propLogado}</p>

        <div className={styleLogado.Container}>
          <span className={styleLogado.logoContainer}>
            <GiBiceps className={styleLogado.Icone}></GiBiceps>
            <h1 className={styleLogado.TituloNav}>GOES GYM</h1>
          </span>

          <Link className={styleLogado.Sair} to={"/Login"}>
            <p>Sair</p>
          </Link>
        </div>

        <div className={styleLogado.ContainerCard}>
          <div className={styleLogado.Card}>
            <RiMoneyDollarCircleFill className={styleLogado.IconesCard} />
            <h1 className={styleLogado.TituloCard}>Financeiro</h1>
          </div>

          <div className={styleLogado.Card}>
            <FaHeadphones className={styleLogado.IconesCard} />
            <h1 className={styleLogado.TituloCard}>Suporte Online</h1>
          </div>

          <div className={styleLogado.Card}>
            <BsMegaphoneFill className={styleLogado.IconesCard} />
            <h1 className={styleLogado.TituloCard}>Comunicados</h1>
          </div>
        </div>

        <div className={styleLogado.ContainerCard}>
          <div className={styleLogado.Card}>
            <FaDumbbell className={styleLogado.IconesCard} />
            <h1 className={styleLogado.TituloCard}>Planos</h1>
          </div>

          <div className={styleLogado.Card}>
            <HiMiniDocumentText className={styleLogado.IconesCard} />
            <h1 className={styleLogado.TituloCard}>Documentos</h1>
          </div>

          <div className={styleLogado.Card}>
            <IoIosPeople className={styleLogado.IconesCard} />
            <h1 className={styleLogado.TituloCard}>Seja um Franqueado</h1>
          </div>
        </div>
      </div>
    </>
  );
}
