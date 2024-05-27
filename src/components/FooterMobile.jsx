

import styleFooter from "../styles/Footer.module.css"
import { GiBiceps } from "react-icons/gi";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";


export default function FooterMobile()
{
    return(
        <>
      <footer className={styleFooter.FooterMobile}>
          
          <div className={styleFooter.CardFooter}>
       
            <GiBiceps className={styleFooter.Logotipo}/>

             <div className={styleFooter.RedesSociais}>
             <FaInstagram className={styleFooter.icone}/> 
               <FaWhatsapp className={styleFooter.icone}/>
               <FaTiktok className={styleFooter.icone}/>

             </div>
          
       
           
      

         

        


          </div>
        
         
         </footer>
        </>
    )
}