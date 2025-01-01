import Image from 'next/image';
import Capa from './img/capa3.jpg';
import estilos from './inicio.module.css'


export default function Inicio() {
    return(
        <div className={estilos.content}>

              <Image
                src={Capa}
                alt='Capa_fundo'
                className={estilos.img}
              
              />
           <div>

            <h1>Bem-Vindo</h1>
           <div className={estilos.blocotexto}>
            <div className={estilos.typewriter}>
              <span>
              Software Developer
              </span>
            </div>
           </div>

       

            


           <button type="button" className="btn btn-outline-primary">Contate-me</button>


            

           </div>
       </div>
        
    )
}