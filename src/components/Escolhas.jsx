


  import styleEscolhas from "../styles/Escolhas.module.css"

 export default function Escolhas()
 {
    return(

        <>
        <div className={styleEscolhas.Container}>

            <h1 className={styleEscolhas.Titulo}>escolhas mais <br /> saudáveis</h1>
            <p className={styleEscolhas.Informações}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, recusandae repudiandae. Dolorum error harum sint illum id, magnam modi hic aspernatur sit neque ullam, deleniti dolore accusantium dicta, assumenda aperiam.</p>

            <span className={styleEscolhas.ContainerBotões}>

                <button className={styleEscolhas.botões}>PLANO DE TREINO</button>
                <button className={styleEscolhas.botões}>PASSE ANUAL</button>
                <button className={styleEscolhas.botões}>PERSONAL</button>

            </span>

        </div>
        </>
    )
 }