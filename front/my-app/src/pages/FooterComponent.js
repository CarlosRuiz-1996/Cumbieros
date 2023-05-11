import React from 'react'
import "../css/footer.css";
import combi from "../img/combid.png"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function FooterComponent() {
  return (
    <>
    <script src="https://kit.fontawesome.com/eb496ab1a0.js" crossOrigin="anonymous"></script>
    
    <footer className="pie-pagina2">
        <div className="grupo-2">
            <div className="box2">
                <figure>
                    <a href="login.jsx">
                        <img src= {combi} />
                    </a>
                </figure>
            </div>
            <div className="box2">
                <h2 className='Sobre'>SOBRE NOSOTROS</h2>
                <p>Somos una ruta de transporte público que busca lo mejor para todos los pasajeros, el objetivo es que estos mismos se sientan comodos y seguros.</p>
            </div>
            <div className="box2">
                <h2>SIGUENOS</h2>
                <div className="red-social2">
					
					<FacebookIcon className='icons'  href="facebook.com"/>
					<TwitterIcon className='icons' href="twitter.com" />
					<InstagramIcon className='icons' href="instagram.com"  />
					
                </div>
            </div>
        </div>
        <div className="grupo-3">
            <small>&copy; 2023 <b>CUMBIEROS</b> - Todos los Derechos Reservados.</small>
        </div>
    </footer>
   
    </>
  )
}

export default FooterComponent