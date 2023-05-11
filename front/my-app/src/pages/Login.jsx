import React, { useState } from "react";
import "../css/Login.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Cookies from "universal-cookie";
import logo from "../img/chimalli.png"
import combi from "../img/combii.png"
import AppBarComponent from "../../../../../Cumbieros/front/my-app/src/pages/AppBarComponent";
import Button from '@mui/material/Button';
import FooterComponentUser from "./FooterComponentUser";


const baseUrl = "http://localhost:4000/api/login";
const cookies = new Cookies();
function Login() {
  
  
   const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const params = { usuario: correo, password: password };
  const iniciarSesion = () => {
    console.log(params);
    // if(correo != '' && password != '' ){
    axios
      .post(baseUrl, params)
      .then(({ data }) => {
        // console.log(data.id);
        return data;
        // alert('alert 1');
      })
      .then((data) => {
        // alert('alert 2');

        //   if (data.length > 0) {
        // var respuesta = data[0];
        cookies.set("id", data.id_usuario, { path: "/" });
        cookies.set("rol", data.rol, { path: "/" });

        cookies.set("apellido_paterno", data.apellidoP, {path: "/",
        });
        //   cookies.set("apellido_materno", respuesta.apellido_materno, {
        //     path: "/",
        //   });
        cookies.set("nombre", data.nombre, { path: "/" });
        cookies.set("correo", data.correo, { path: "/" });
        alert(`Bienvenido ${data.nombre} ${data.apellidoP} id: ${data.id_usuario}`);
        // show_alert(`Bienvenido ${data.nombre} ${data.apellidoP} id: ${data.id_usuario}`, "warning");
        if(data.rol!=5){
          window.location.href = "./home";
        }else{
          window.location.href = "./homeUser";
        }
        
        //   } else {
        //     alert("Los datos son incorrectos1");
        //   }
      })
      .catch(({ response }) => {
        console.log(response);
        alert(response.data);
      });

    // }else{
    //   alert('Ingresa correo y contraseña')
    // }
  };

  const componentDidMount = () => {
    if (cookies.get("correo")) {
      window.location.href = "./";
    }
  };
  componentDidMount();
  return (
      <>
      <AppBarComponent/>

    <div className="navabar">

      {/* <nav className="navbar navbar-primary bg-primary">
        <a className="navbar-brand" href="#" color="#fff">
          <img src={ combi } width="30" height="30" color="white" className="d-inline-block align-top" alt=""/>
          CUMBIEROS
        </a>
      </nav> */}

    <div className="containerPrincipal">
      <div className="containerSecundario" >
        <h2>Bienvenido</h2>
        <h6 className="ache6">Inicia sesión con tu usuario y contraseña</h6>
        <div className="form-group">
          <label className="correo">Correo </label>
          <br />
          <input
            type="text"
            className="form-control text-lowercase"
            name="correo" 
            onChange={(e) => setCorreo(e.target.value)}
            
          />
          <br />
          <label className="correo">Contraseña </label>
          <br />
          <input
            type="password"
            className="form-control"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
         
          
          <Button variant="contained" disableElevation sx={{ backgroundColor: '#1D3E53', border: 2 , borderColor: '#77ABB7', }} onClick={() => iniciarSesion()}>
                Iniciar sesión
          </Button>
          
      
       
    
                <div className="otros">
                <h6 className="ache6">¿Aún no tienes una cuenta?</h6>
                <a href="./Registrer" className="RegistrateAhora"> ¡Registrate ahora!</a>
              
                </div>

         
        </div>
      </div>
    </div>
        {/* <h1 className="welcome">Bienvenido a la aplicación de la ruta 92</h1> */}
        <img src= { logo }  alt="" className="chimalli" />


        <h2 className="eslogan">Santa Elena - Santa Martha</h2>
        <img src= {combi} alt="" className="combi" />

        <Button variant="contained" disableElevation href="./Registrer"
        sx={{ 
        position: 'absolute',
        marginLeft: '380px',
        marginTop: '550px',
        backgroundColor: '#1D3E53', 
        border: 2 , 
        borderColor: '#77ABB7', 
        borderRadius: 10,
        fontSize: '15px'
        }}>
                Registrarse
        </Button>
      

    </div>

      <FooterComponentUser/>

    </>
  );
}

export default Login;
