import styleUnidades from "../styles/Unidades.module.css";
import { useState } from "react";
import imagemSantoAmaro from "../assets/UnidadeStoAmaro.jpeg"
import imagemOsasco from "../assets/UnidadeOsasco.jpg"
import imagemSantana from "../assets/unidadeSantana.webp"
import imagemItaquera from "../assets/UnidadeItaquera.jpg"
import imagemCapao from "../assets/UnidadeCapao.png"

export default function Unidades() {
  const [mudarElemento, setMudarElemento] = useState(
    <button className={styleUnidades.btn}>Ver Unidades</button>
  );
  const [unidade, setUnidade] = useState("");
  
  const lista = [
    {
      id: "1",
      unidade: "Unidade Osasco",
      endereco: "R. Salém Bechara, 140, Centro, Osasco São Paulo – SP",
      funcionamento: "Seg. a Sex. das 05h30 às 23h Sáb. das 11h30 às 19h10",
      imagem: imagemOsasco
    },
    {
      id: "2",
      unidade: "Unidade Capão Redondo",
      endereco: "Av. Comendador Sant'Anna, 576",
      funcionamento: "Seg. a Sex. das 05h30 às 23h Sáb. das 11h30 às 19h10",
      imagem: imagemCapao
    },
    {
      id: "3",
      unidade: "Unidade Sto Amaro",
      endereco: "Av. Adolfo Pinheiro, 1735, Santo Amaro",
      funcionamento: "Seg. a Sex. das 05h30 às 23h Sáb. das 11h30 às 19h10",
      imagem: imagemSantoAmaro
    },
    {
      id: "4",
      unidade: "Unidade Santana",
      endereco: "Avenida Braz Leme, 1732, Santana São Paulo – SP",
      funcionamento: "Seg. a Sex. das 05h30 às 23h Sáb. das 11h30 às 19h10",
      imagem: imagemSantana
    },
    {
      id: "5",
      unidade: "Unidade Itaquera",
      endereco: "Av Pires do Rio, 4172 - Itaquera, São Paulo - SP",
      funcionamento: "Seg. a Sex. das 05h30 às 23h Sáb. das 11h30 às 19h10",
      imagem: imagemItaquera
    }
  ];


  function pegarDado(e){

    const valores = e.target.value;
    setUnidade(valores)
    
  }

  function criandoSelect() {
      setMudarElemento(
      <select name="opcao" id="opcao" onChange={pegarDado} className={styleUnidades.containerSelect}>
        <option disabled  >
          Escolha uma unidade
        </option>
        <option value="1">
          Unidade Osasco
        </option>
        <option value="2" >
          Unidade Capão Redondo
        </option>
        <option value="3" >
          Unidade Santo Amaro
        </option>
        <option value="4" >
          Unidade Santana
        </option>
        <option value="5" >
          Unidade Itaquera
        </option>
      </select>


      
    );

    
   
    
  
  }

  return (
    <>
       
  
      <div className={styleUnidades.ContainerPrincipal}>
        <h1 className={styleUnidades.Titulo}>UNIDADES</h1>
        <hr className={styleUnidades.linhaPrincipal} />
        <p className={styleUnidades.Informacoes}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque ea
          unde iusto alias quis enim perspiciatis eius facilis natus tempora non
          rerum dicta officia, accusantium ipsa, rem nisi neque odit?
        </p>
        <div className={styleUnidades.btnUnidade} onClick={criandoSelect}>
          {mudarElemento}
        </div>

        {
        lista
        .filter((filtroOpcao) => {

          return filtroOpcao.id === unidade
         
        })
        .map((dados) => {
         return(
          <div className={styleUnidades.ContainerUnidades} key={dados.id}>
            
            <div className={styleUnidades.ContainerCards}>
            <h1 className={styleUnidades.unidades}>{dados.unidade}</h1>
            <hr className={styleUnidades.linhaSegundaria} />
            <h2 className={styleUnidades.endereco}>{dados.endereco}</h2>
            <h2 className={styleUnidades.funcionamento}>{dados.funcionamento}</h2>
            </div>
          
            <img className={styleUnidades.imagemCards} src={dados.imagem} alt="" />

          </div>


         )
          
           
        })
      }


        
      </div>

      

      
   


   
    </>
  );
}
