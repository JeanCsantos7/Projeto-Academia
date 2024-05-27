
import styleFooter from "../styles/Footer.module.css"
import { GrLocationPin } from "react-icons/gr";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import FooterMobile from "./FooterMobile";




export default function Footer()
{
    return(
        <>
         
         <div className={styleFooter.Container}>
         <h1 className={styleFooter.Titulo}> <span className={styleFooter.span1}>ENTRE EM <br /> CONTATO</span> <br /> <span className={styleFooter.span2}>CONOSCO</span>  </h1>
         
         <footer className={styleFooter.FooterDesktop}>
          
          <div className={styleFooter.CardFooter}>
          <div>
            <h1 className={styleFooter.TituloCard}>Endereço</h1>
            <span className={styleFooter.Email_Endereco}> <GrLocationPin className={styleFooter.icone}/> <p className={styleFooter.dados}>Rua Teste, 123</p> </span>
          </div>

          <div>
            <h1 className={styleFooter.TituloCard}>Email</h1>
            <span className={styleFooter.Email_Endereco} > <MdOutlineMailOutline className={styleFooter.icone}/>  <p className={styleFooter.dados}>ComercialGYM77@gmail.com</p></span>
          </div>

          <div>
            <h1 className={styleFooter.TituloCard}>Redes Sociais</h1>
            <span className={styleFooter.RedesSociais}> <FaInstagram className={styleFooter.icone} /> <FaWhatsapp className={styleFooter.icone}/> <FaTiktok className={styleFooter.icone}/> </span>
          </div>


          </div>
        
         
         </footer>
         
         <FooterMobile/>
         
         </div>

    
        </>
    )
}