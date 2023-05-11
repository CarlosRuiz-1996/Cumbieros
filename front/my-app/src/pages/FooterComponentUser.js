import React from 'react'
import "../css/footerUser.css";
import combi from "../img/combid.png"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function FooterComponent() {
  return (
    <>
    
    <footer className="pie-pagina">
        <div className="grupo-1">
            <div className="box">
                <figure>
                    <a href="login.jsx">
                        <img src= {combi} />
                    </a>
                </figure>
            </div>
            <div className="box">
                <h2>SOBRE NOSOTROS</h2>
                <p>Somos una ruta de transporte público que busca lo mejor para todos los pasajeros, el objetivo es que estos mismos se sientan comodos y seguros.</p>
            </div>
            <div className="box">
                <h2>SIGUENOS</h2>
                <div className="red-social">
					
					<FacebookIcon className='icons'  href="facebook.com"/>
					<TwitterIcon className='icons' href="twitter.com" />
					<InstagramIcon className='icons' href="instagram.com"  />
					
                </div>
            </div>
        </div>
        <div className="grupo-2">
            <small>&copy; 2023 <b>CUMBIEROS</b> - Todos los Derechos Reservados.</small>
        </div>
    </footer>
   
    </>
  )
}

export default FooterComponent