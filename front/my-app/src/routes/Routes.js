import { BrowserRouter, Routes as Ruta, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Registrer from "../pages/Registrer";
import Checadores from "../pages/Listados/show_checadores";
import Dueños from "../pages/Listados/show_dueño";
import Choferes from "../pages/Listados/show_chofer";
import Unidades from "../pages/Listados/show_unidades";
import Contactanos from "../pages/Pasajero/Contactanos";
import CustomPaginationActionsTable from "../pages/Listados/Tabla";
import Sansiones from "../pages/Listados/Sansiones";
import UnidadesUsuario from "../pages/Pasajero/Unidades";
import RutaUser from "../pages/Pasajero/Ruta";
import ErrorNoFound from "../pages/Layouts/errors/404";
import Layout from "../pages/Layout";
import HomeUser from "../pages/HomeUser";
import Perfil from "../pages/Perfil";
// import { useContext } from "react"
// import {AuthContext} from '../pages/Auth/AuthProvider'
// import Dashboard from "../pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";

function Routes() {
  // const {contexValue} = useContext(AuthContext);
  // console.log(contexValue);
  return (
    <BrowserRouter>
      <Ruta>
        <Route path="/login" element={<Login />} />
        <Route path="/registrer" element={<Registrer />} />

        {/* rutas privadas Admin*/}
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomeUser />} />
            <Route path="/home" element={<Home />} />
            <Route path="/homeUser" element={<HomeUser />} />
            <Route path="/perfil" element={<Perfil />} />

            <Route path="/checadores" element={<Checadores />} />
            <Route path="/dueños" element={<Dueños />} />
            <Route path="/Contactanos" element={<Contactanos />} />
            <Route path="/UnidadesUsuario" element={<UnidadesUsuario />} />
            <Route path="/RutaUser" element={<RutaUser />} />
            <Route path="/choferes" element={<Choferes />} />
            <Route path="/unidades" element={<Unidades />} />
            <Route path="/tabla" element={<CustomPaginationActionsTable />} />
            
            <Route path="/sansiones" element={<Sansiones />} />

          </Route>
        </Route>
        
        {/* ruta para cuando se meta mal la url */}
        <Route path="*" element={<ErrorNoFound />}></Route>
      </Ruta>
    </BrowserRouter>
  );
}

export default Routes;
