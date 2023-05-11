import React from 'react'
import Cookies from "universal-cookie";
import "bootstrap/dist/css/bootstrap.min.css";
import Mapa from "../img/mapa3.jpg"
import BodyComponent from './BodyComponent';
import AppBarComponent from './AppBarComponent';

const cookies = new Cookies();
function HomeUser() {
    
        return (

          <>
          <BodyComponent/> 
          {/* <h1>hola</h1> */}

          </>
          
        );
      }

export default HomeUser