import styleMenu from "../styles/MenuMobile.module.css";

export default function MenuMobile() {
  return (
    <>
      <nav className={styleMenu.nav}>
        <a className={styleMenu.Link} href="#Modalidades">
          Modalidades
        </a>
        <a className={styleMenu.Link} href="#Unidades">
          Unidades
        </a>
        <a className={styleMenu.Link} href="#Depoimentos">
          Depoimentos
        </a>
      </nav>
    </>
  );
}
