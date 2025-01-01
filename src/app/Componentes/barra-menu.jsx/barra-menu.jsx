import Image from 'next/image'
import Ftperfil from './logo/euuu.jpeg'
import Link from 'next/link'

//estilo
import estilos from './barra-menu.module.css'


export default function Barra() {
  return (
    

       <div className={estilos.container}>
          <Image
          className={estilos.img}
          src={Ftperfil}
          alt='my-ft-perfil'
          width={250}
          height={250}
          
          />

          <h2>Kaique Tavares</h2>

           <div className={estilos.containerLink}>

            <p><Link className={estilos.links} href="3">Inicio</Link></p>
            <p><Link className={estilos.links} href="3">Sobre min</Link></p>
            <p><Link className={estilos.links} href="3">Oque eu faço</Link></p>
            <p><Link className={estilos.links} href="3">Skills</Link></p>
            <p><Link className={estilos.links} href="3">Projetos</Link></p>
            <p><Link className={estilos.links} href="3">Contato</Link></p>

           </div>

            <button 
               className='btn btn-primary'>
                Envia-via Whatsapp 
                <i className='bi bi-whatsapp'></i>
            </button>
          <div className={estilos.icons}>
            <i className="bi bi-github"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-twitter-x"></i>
            <i className="bi bi-facebook"></i>
           </div>

       </div>
    
    
    
  )
}