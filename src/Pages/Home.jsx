import styleHome from "../styles/Home.module.css";
import Escolhas from "../components/Escolhas";
import Modalidades from "../components/Modalidades";
import Unidades from "../components/Unidades";
import Depoimentos from "../components/Depoimentos";
import Footer from "../components/Footer";
import { GiBiceps } from "react-icons/gi";
import { MdAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import styleNavBar from "../styles/NavBar.module.css";
import MenuMobile from "../components/MenuMobile";
import { useState } from "react";

export default function Home() {
  const [menuMobiles, setMenuMobiles] = useState("");
  const [toggle, setToggle] = useState(true);

  function testes() {
    setMenuMobiles(toggle ? <MenuMobile /> : "");
    setToggle(!toggle);
  }

  return (
    <>
      <main>
        <div className={styleNavBar.ContainerNav}>
          <span className={styleNavBar.Logotipos}>
            <GiBiceps className={styleNavBar.Icone} />
            <h1 className={styleNavBar.TituloNav}>GOES GYM</h1>
          </span>

          <nav>
            <a className={styleNavBar.Link} href="#Modalidades">
              Modalidades
            </a>
            <a className={styleNavBar.Link} href="#Unidades">
              Unidades
            </a>
            <a className={styleNavBar.Link} href="#Depoimentos">
              Depoimentos
            </a>
            <MdOutlineMenu
              onClick={testes}
              className={styleNavBar.MenuMobile}
            />
            <Link to={"/Login"}>
              <MdAccountCircle className={styleNavBar.IconeEntrar} />
            </Link>
          </nav>
        </div>

        <div>{menuMobiles}</div>

        <div className={styleHome.Container}>
          <h1 className={styleHome.Titulo}>
            {" "}
            <span className={styleHome.span1}>
              Prepare-se <br /> para mudar <br />{" "}
            </span>{" "}
            <span className={styleHome.span2}>para melhor.</span>
          </h1>
        </div>
      </main>

      <Escolhas></Escolhas>
      <span id="Modalidades">
        <Modalidades></Modalidades>
      </span>
      <span id="Unidades">
        <Unidades></Unidades>
      </span>
      <span id="Depoimentos">
        <Depoimentos />
      </span>
      <Footer />
    </>
  );
}
