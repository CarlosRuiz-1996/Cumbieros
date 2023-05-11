import React, { useState } from "react";
import axios from "axios";
import Cookies from 'universal-cookie';
import logo2 from "../img/chimalli.png"
import combi2 from "../img/combid.png"
import Button from '@mui/material/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import AppBarComponent from "./AppBarComponent";
import FooterComponent from "./FooterComponent";
import validator from 'validator'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { show_alert } from "../js/functions";

const baseUrl = "http://localhost:4000/api/register";
const cookies = new Cookies();

function Registrer() {

  const [errorMessage, setErrorMessage] = useState('')
  const [okMessage, setOkMessage] = useState('')
  const [emailError, setEmailError] = useState('')

  const validate = (value) => {
 
    if (validator.isStrongPassword(value, {
      minLength: 8, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) {
      setErrorMessage('');
      setOkMessage('Contraseña segura');
      setPassword(value)
    } else {
      setErrorMessage('Minimo 8 caracteres, un simbolo y un numero');
      setOkMessage('')
    }
  }
  const validateEmail = (e) => {
    var email = e.target.value
  
    if (validator.isEmail(email)) {
      setEmailError('')
      setCorreo(email)
    } else {
      setEmailError('Ingresa un correo correcto!')
    }
  }
  
  const [nombre, setNombre] = useState("");
  const [aPaterno, setAPaterno] = useState("");
  const [aMaterno, setAMaterno] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  const validar = () => {
    
    if (nombre.trim() === "") {
      show_alert("Escribe el nombre", "warning");
    } else if (aPaterno.trim() === "") {
      show_alert("Escribe el apellido paterno", "warning");
    } else if (aMaterno.trim() === "") {
      show_alert("Escribe el apellido materno", "warning");
     } else if (correo.trim() === "") {
      show_alert("Escribe el correo", "warning");
   
    } else if (password.trim() === "") {
      show_alert("Escribe la contraseña", "warning");
    } else {

      register();
    }
  };


  const params = {
    nombre: nombre,
    aPaterno: aPaterno,
    aMaterno: aMaterno,
    correo: correo,
    password: password,
  };

  const componentDidMount = () => {
    if (cookies.get("correo")) {
      window.location.href = "./";
    }
  };
  componentDidMount();

  const register = () => {
    // e.preventDefault();
    axios.post(baseUrl, params).then(({ status }) => {
        console.log(status);
        return status;
      })
      .then((status) => {
        if (status == 200) {
          window.location.href = "./login?ok=1";
        } else {
          alert("Error al Guardar los datos Intenta mas tarde");
        }
      })
      .catch((error) => {
        // console.log(error);
        alert("Error al Guardar los datos Intenta de nuevo");
      });
  };
  return (

    <>
      <AppBarComponent/>

    <form >

      {/* onSubmit={handelSubmit} */}
      <div className="containerRegistro">
        <h1>REGISTRATE</h1>
        <div className="containerSecundario">
          <div className="form-group">
            <label>Nombre: </label>
            <br />
            <input
              type="text"
              className="form-control text-lowercase"
              name="nombre"
              onChange={(e) => setNombre(e.target.value)}
            />
            {/* <div className="alert alert-danger p-1" role="alert">
              Error en el campo nombre!
            </div> */}
            <br />
            <label>Apellido Paterno: </label>
            <br />
            <input
              type="text"
              className="form-control text-lowercase"
              name="aPaterno"
              onChange={(e) => setAPaterno(e.target.value)}
            />
            {/* <div className="alert alert-danger p-1" role="alert">
              Error en el campo apellido paterno!
            </div> */}
            <br />
            <label>Apellido Materno: </label>
            <br />
            <input
              type="text"
              className="form-control text-lowercase"
              name="aMaterno"
              onChange={(e) => setAMaterno(e.target.value)}
            />
            {/* <div className="alert alert-danger p-1" role="alert">
              Error en el campo apellido materno!
            </div> */}
            <br />

            <label>Correo: </label>
            <br />
            <input
              type="text"
              className="form-control text-lowercase"
              name="correo"
              onChange={(e) => validateEmail(e)}></input> <br />
        <Stack sx={{ width: '100%' }} spacing={2} style={{
          fontWeight: 'bold',
          color: 'red',
        }}>
           {emailError === '' ? null :
        <Alert severity="error" style={{
              fontWeight: 'bold',
              color: 'red',
            }}>{emailError}</Alert>}
        </Stack>
            <br />
           
            <label>Contraseña: </label>
            <br />
            <input
              type="password"
              className="form-control text-lowercase"
              name="password"
              onChange={(e) => validate(e.target.value)}
              />
                <Stack sx={{ width: '100%' }} spacing={2}>
               {errorMessage === '' ? null :
               
            <Alert severity="error" style={{
              fontWeight: 'bold',
              color: 'red',
            }}>{errorMessage}</Alert>}
            
            {okMessage === '' ? null :
               
               <Alert severity="success" style={{
                 fontWeight: 'bold',
                 color: 'blue',
               }}>{okMessage}</Alert>}

            <br />
            </Stack>
     
   


            <Button variant="contained" disableElevation 
            sx={{ backgroundColor: '#1D3E53', 
            border: 2 , 
            borderColor: '#77ABB7', 
            }} onClick={() => validar()}>
                Registrarse
          </Button>

            
          </div>
        </div>
        <br />
        <a href="./" className="LoginP">Tengo una cuenta</a>
      </div>

            {/* <h1 className="welcome">Bienvenido a la aplicación de la ruta 92</h1> */}
        <img src= { logo2 }  alt="" className="chimalli2" />

        <h2 className="eslogan2">Santa Elena - Santa Martha</h2>
        <img src= {combi2 } alt="" className="combi2" />

        <Button variant="contained" disableElevation href="./Login"
        sx={{ 
        position: 'absolute',
        marginLeft: '-1000px',
        marginTop: '600px',
        backgroundColor: '#1D3E53', 
        border: 2 , 
        borderColor: '#77ABB7', 
        borderRadius: 10,
        fontSize: '15px'
        }}>
                Iniciar sesión
        </Button>

    </form>

      <FooterComponent/>  
      
   </>
  );
}

export default Registrer;
