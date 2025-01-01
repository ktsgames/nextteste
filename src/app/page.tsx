// app/page.js
import Head  from 'next/head';
import Inicio from '@/app/Componentes/inicio/Inicio'

export default function Home() {
  return (
    
     <div>
           <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Meu Site</title>
      </Head>
        <Inicio/>
        
     </div>
    
  );
}
