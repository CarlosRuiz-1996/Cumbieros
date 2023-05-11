import React from 'react'
import "../css/BodyComponent.css";
import homeimg from "../img/home-img3.png";
import iconimg from "../img/f-icon11.png";
import iconimg2 from "../img/f-icon22.png";
import iconimg3 from "../img/f-icon33.png"
import about from "../img/about-img.png"



function BodyComponent() {
  return (
    <div>
       <section className="home" id="home">

            <div className="content">
                <h3>Bienvenido <span>"USUARIO"</span></h3>
                <p>Desde esta pagina podras consultar el estatus del transporte publico de la RUTA 92 (Santa Elena - Santa Martha)</p>
                
            </div>

            <div className="image">
                <img src={ homeimg} alt=""/>
            </div>

            </section>

            <section className="features" id="features">

            <h1 className="heading"> Conocenos</h1>

            <div className="box-container">

                <div className="box">
                    <img src={iconimg } alt=""/>
                    <h3>RUTA</h3>
                    <p>Conoce los todos los detalles de la ruta 92 de transporte publico (Santa Elena - Santa Martha)</p>
                    <a href="./RutaUser" className="btn">Ver más</a>
                </div>

                <div className="box">
                    <img src={ iconimg2 } alt=""/>
                    <h3>Unidades</h3>
                    <p>Conoce un poco de las unidades que prestan servicio en la ruta 92 y conocelas un poco mas a detalle.</p>
                    <a href="./UnidadesUsuario" className="btn">Ver más</a>
                </div>

                <div className="box">
                    <img src={iconimg3} alt=""/>
                    <h3>Contactanos</h3>
                    <p>¿Tienes alguna queja o sugerencia? Haznoslo saber.</p>
                    <a href="./Contactanos" className="btn">Ver más</a>
                </div>

            </div>

            </section>

            <section className="about" id="about">

                    <h1 className="heading"> Acerca de la aplicación movil (Proximamente) </h1>

                    <div className="column">

                        <div className="image">
                            <img src={homeimg} alt=""/>
                        </div>

                        <div className="content">
                            <h3>Facil y rapida de usar</h3>
                            <p>La aplicacion movil esta planeada a desarrollarse aproximadamente en 6 meses.</p>
                            <p>Se busca que la aplicacion sea sencilla y segura de utilizar, la aplicacion te permitira ver las unidades de transporte publico disponibles en el momento, asi como mte permitira levantar reportes entre mas utilidades.</p>
                            <div className="buttons">
                                <a href="#" className="btn"> <i className="fab fa-apple"></i> app store (Prox)</a>
                                <a href="#" className="btn"> <i className="fab fa-google-play"></i> google-play (Prox)</a>
                            </div>
                        </div>

                    </div>

                </section>

    </div>
  )
}

export default BodyComponent