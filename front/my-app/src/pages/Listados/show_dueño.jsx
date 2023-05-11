import React, { useEffect, useState } from "react";
import axios from "axios";
// import Swal from "sweetalert2-react-content";
import Swal from 'sweetalert2/dist/sweetalert2.all.js'
import withReactContent from 'sweetalert2-react-content';
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { show_alert } from "../../js/functions";
import Typography from "@mui/material/Typography";

function Dueños() {
 
  const url = "http://localhost:4000/usuarios/rol=3";
  var urlSave="";
  const [nombre, setNombre] = useState("");
  const [apellidoP, setApellidoP] = useState("");
  const [apellidoM, setApellidoM] = useState("");
  const [direccion, setDireccion] = useState("");
  const [fecha, setFecha] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [id, setId] = useState("");
  const [rol, setRol] = useState(3);

  const [checadores, setChecadores] = useState([]);
  const [operacion, setOperacion] = useState(1);
  const [title, setTitle] = useState("");

  useEffect(() => {
    getChecadores();
  }, []);

  const getChecadores = async () => {
    const respuesta = await axios.get(url);
    setChecadores(respuesta.data);
    
  };

  const openModal=(op,id, nombre, apellidoP, apellidoM, direccion,  telefono,fecha, correo, usuario, password )=>{
    setId("");
    setNombre("");
    setApellidoP("");
    setApellidoM("");
    setDireccion("");
    setFecha("");
    setTelefono("");
    setCorreo("");
    setUsuario("");
    setPassword("");

    setOperacion(op);
    if(op=== 1){
        setTitle("Registrar Dueño de Unidades");
    }else if(op=== 2){
      setTitle("Editar Dueño de Unidades");
      setId(id);
      setNombre(nombre);
      setApellidoP(apellidoP);
      setApellidoM(apellidoM);
      setDireccion(direccion);
     
      setFecha(fecha);
      setTelefono(parseInt(telefono));
      setCorreo(correo);
      setUsuario(usuario);
      setPassword(password);
    }
    window.setTimeout(function(){
      document.getElementById('nombre').focus();
    },500)
  };

  const validar = ()=>{
    var parametros;
    var metodo;
    if(nombre.trim()===''){
      show_alert("Escribe el nombre del checador", "warning");
    }else if(apellidoP.trim()===''){
      show_alert("Escribe el apellido paterno del checador", "warning");
    }else if(apellidoM.trim()===''){
      show_alert("Escribe el apellido materno del checador", "warning");
    }else if(direccion.trim()===''){
      show_alert("Escribe dirección del checador", "warning");
    }else if(telefono===''){
      show_alert("Escribe el teléfono del checador", "warning");
    }else if(fecha ===''){
      show_alert("Escribe la fecha de nacimiento del checador", "warning");
    }else if(correo.trim()===''){
      show_alert("Escribe el correo del checador", "warning");
    }else if(usuario.trim()===''){
      show_alert("Escribe el usuario del checador", "warning");
    }else if(password.trim()===''){
      show_alert("Escribe la contraseña del checador", "warning");
    }else{
      if(operacion === 1){
        parametros=
        {
          nombre:nombre,apellidoP:apellidoP, apellidoM:apellidoM, 
          usuario:usuario.trim(),correo:correo.trim(), password:password.trim(),rol:rol,
          telefono:telefono,fecha_nacimiento:fecha,direccion:direccion
        };
        // console.log(parametros);
        metodo='POST';
      }else{
        parametros=
        {
          id_usuario:id,nombre:nombre,apellidoP:apellidoP, apellidoM:apellidoM, 
          usuario:usuario.trim(),correo:correo.trim(), password:password.trim(),
          telefono:telefono,fecha_nacimiento:fecha,direccion:direccion
        };
        // console.log(parametros);
          metodo='PUT';
      }
      enviarSolicitud(metodo,parametros);
    }
  }

  const enviarSolicitud = async(metodo, parametros)=>{
    if (metodo === "POST") {
      urlSave = "http://localhost:4000/api/usuarios";
    } else if (metodo === "DELETE") {
      urlSave = "http://localhost:4000/api/usuarios_d";
    } else {
      urlSave = "http://localhost:4000/api/usuarios_u";
    }
      await axios({method:metodo, url: urlSave,data:parametros}).then(function(respuesta){
        var tipo = respuesta.data.tipo;
        var msj = respuesta.data.msj;
        show_alert(msj, tipo)
        if(tipo === 'success'){
          document.getElementById('btncerrarModal').click();
          getChecadores();
        }
      
      }).catch(({ response }) => {
        console.log(response.data);
        show_alert(response.data.msj, 'error');
      });
  }

  const deleteChecador = (id, nombre)=>{
    const MySwal = withReactContent(Swal);
    MySwal.fire({
        title:'¿Seguro que desea eliminar a '+nombre+'?',
        icon:'question', text: 'No se podra dar marcha atrás',
        showCancelButton:true, confirmButtonText:'si, eliminar', cancelButtonText:'Cancelar'
    }).then((result)=>{
      if(result.isConfirmed){
      setId(id);
      enviarSolicitud('DELETE', {id:id});
      }else{
        show_alert('Hay un problema y no se pudo eliminar', 'info')
      }
    });
  }
  return (
    <Box
    component="main"
    sx={{
      backgroundColor: (theme) =>
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[900],
      flexGrow: 1,
      height: "100vh",
      overflow: "auto",
    }}
  >
    <Toolbar />
    <div className="">
      <div className="container-fluid">
        <div className="row mt-3">
          <div className="col-md-4 offset-md-4">
            <div className="d-grid mx-auto">
              <button
                className="btn btn-dark"
                data-bs-toggle="modal"
                data-bs-target="#modalDueños"
                onClick={()=>openModal(1)}
              >
                <i className="fa-solid fa-circle-plus"></i> Añadir
              </button>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 col-lg-8 offset-lg-2">
            <div className="">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>NOMBRE</th>
                    <th>DIRECCIÓN</th>
                    <th>TELÉFONO</th>
                    <th>FECHA NACIMIENTO</th>
                    <th>CORREO</th>
                    <th>CONTRASEÑA</th>
                    <th>USUARIO</th>
                    <th>ACCIONES</th>
                  </tr>
                </thead>
                <tbody className="table-group-divider">
                  {checadores.map((checador, id) => (
                    <tr key={checador.id_usuario}>
                      <td>{checador.id_usuario}</td>
                      <td>{checador.nombre+' '+checador.apellidoP+' '+checador.apellidoM}</td>
                      <td>{checador.direccion}</td>
                      <td>{checador.telefono}</td>
                      

                      <td>{checador.fecha}</td>
                      <td>{checador.correo}</td>
                      <td>{checador.password}</td>
                      <td>{checador.usuario}</td>
                      <td>
                        <button onClick={()=>openModal(2,checador.id_usuario,checador.nombre,checador.apellidoP,checador.apellidoM, checador.direccion,
                          checador.telefono,checador.fecha_nacimiento,checador.correo, checador.usuario, checador.password )} className="btn btn-warning"
                          data-bs-toggle="modal"
                          data-bs-target="#modalDueños">
                          <i className="fa-solid fa-edit"></i>
                        </button>
                        &nbsp;
                        <button onClick={()=>deleteChecador(checador.id_usuario,checador.nombre)} className="btn btn-danger" >
                          <i className="fa-solid fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="modal" id="modalDueños">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <input type="hidden" name="" id="id" />
                <div className="input-group mb-3">
                    <span className="input-group-text">
                      <i className="fa fa-user"></i>
                    </span>
                    <input type="text" name="nombre" id="nombre" className="form-control" placeholder="Nombre" value={nombre}
                    onChange={(e)=>setNombre(e.target.value)} />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">
                      <i className="fa fa-user"></i>
                    </span>
                    <input type="text" name="apellidoP" id="apellidoP" className="form-control" placeholder="Apellido paterno" value={apellidoP}
                    onChange={(e)=>setApellidoP(e.target.value)} />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">
                      <i className="fa fa-user"></i>
                    </span>
                    <input type="text" name="apellidoM" id="apellidoM" className="form-control" placeholder="Apellido materno" value={apellidoM}
                    onChange={(e)=>setApellidoM(e.target.value)} />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">
                      <i className="fa fa-phone"></i>
                    </span>
                    <input type="text" name="direccion" id="direccion" className="form-control" placeholder="Dirección" value={direccion}
                    onChange={(e)=>setDireccion(e.target.value)} />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">
                      <i className="fa fa-phone"></i>
                    </span>
                    <input type="number" name="telefono" id="telefono" className="form-control" placeholder="Telefono" value={telefono}
                    onChange={(e)=>setTelefono(e.target.value)} />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">
                      <i className="fa fa-calendar"></i>
                    </span>
                    <input type="date" name="fecha" id="fecha" className="form-control" placeholder="Fecha de nacimiento" value={fecha}
                    onChange={(e)=>setFecha(e.target.value)} />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">
                      <i className="fa fa-envelope"></i>
                    </span>
                    <input type="email" name="correo" id="correo" className="form-control" placeholder="Correo" value={correo}
                    onChange={(e)=>setCorreo(e.target.value)} />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">
                      <i className="fa fa-user"></i>
                    </span>
                    <input type="text" name="usuario" id="usuario" className="form-control" placeholder="Usuario" value={usuario}
                    onChange={(e)=>setUsuario(e.target.value)} />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">
                      <i className="fa fa-unlock-alt"></i>
                    </span>
                    <input type="password" name="password" id="password" className="form-control" placeholder="Contraseña" value={password}
                    onChange={(e)=>setPassword(e.target.value)} />
                </div>
            </div>
            <div className="modal-footer">
              <button type="button" id="btncerrarModal" className="btn btn-danger" data-bs-dismiss="modal">
               <i className="fa fa-times"></i> CANCELAR</button>
              <button type="button" className="btn btn-primary" onClick={()=>validar()}>
               <i className="fa-solid fa-floppy-disk"></i> ACEPTAR</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    </Box>
  );
}

export default Dueños;
