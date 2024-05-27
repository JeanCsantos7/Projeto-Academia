
import styleModalidades from "../styles/Modalidades.module.css"
import Card1 from "../components/Card1"
import Card2 from "../components/Card2"
import Card3 from "../components/Card3"



export default function Modalidades()
{
    
 

  
   
    
    return(
        <>
        
        <div className={styleModalidades.Container}>
        <h1 className={styleModalidades.Titulo}>CONHEÇA AS <br /> NOSSAS   <span className={styleModalidades.textoVermelho}>MODALIDADES</span></h1>
       
        
        <div className={styleModalidades.ContainerCard}>
       
       <Card1/>
       <Card2/>
       <Card3/>
       
          
          

       
     
         

    
      </div>
       
       
       
        
        </div>

       
      
        </>
    )
}