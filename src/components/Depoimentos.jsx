
 import styleDepoimentos from "../styles/Depoimentos.module.css"


 export default function Depoimentos()
 {

    return(
        <>
        
        <div className={styleDepoimentos.Container}>
        <h1 className={styleDepoimentos.Titulo}>DEPOIMENTOS</h1>
        
         <span className={styleDepoimentos.ContainerCard}>
         <div className={styleDepoimentos.CardDepoimento}>
          <p className={styleDepoimentos.Informacoes}>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut recusandae ducimus eius alias doloremque. Illum odit natus, rem voluptatibus recusandae quibusdam pariatur, est nulla delectus neque tempora exercitationem quidem fugiat."</p>
          <h2 className={styleDepoimentos.Autor}>- Autor</h2>
        </div>

        <div className={styleDepoimentos.CardDepoimento}>
        <p className={styleDepoimentos.Informacoes}>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut recusandae ducimus eius alias doloremque. Illum odit natus, rem voluptatibus recusandae quibusdam pariatur, est nulla delectus neque tempora exercitationem quidem fugiat."</p>
          <h2 className={styleDepoimentos.Autor}>- Autor</h2>
        </div>


        <div className={styleDepoimentos.CardDepoimento}>
        <p className={styleDepoimentos.Informacoes}>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut recusandae ducimus eius alias doloremque. Illum odit natus, rem voluptatibus recusandae quibusdam pariatur, est nulla delectus neque tempora exercitationem quidem fugiat."</p>
        <h2 className={styleDepoimentos.Autor}>- Autor</h2>
        </div>
         </span>
        
        </div>
        
        </>
    )
 }