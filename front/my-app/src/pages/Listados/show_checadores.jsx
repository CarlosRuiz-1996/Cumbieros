import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

//iconos
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";

import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
//
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

//
import axios from "axios";
// import Swal from "sweetalert2-react-content";
import Swal from "sweetalert2/dist/sweetalert2.all.js";
import withReactContent from "sweetalert2-react-content";

import { show_alert } from "../../js/functions";
// material-table npm
function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(name, calories, fat) {
  return { name, calories, fat };
}


export default function Checadores() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  // const emptyRows =
  //   page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const url = "http://localhost:4000/usuarios/rol=2";
  var urlSave = "";
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
  const [rol, setRol] = useState(2);

  const [checadores, setChecadores] = useState([]);
  const [operacion, setOperacion] = useState(1);
  const [title, setTitle] = useState("");

  useEffect(() => {
    getChecadores();
  }, []);

  const getChecadores = async () => {
    const rol = 2;
    const respuesta = await axios.get(url);
    setChecadores(respuesta.data);
  };

  const openModal = (
    op,
    id,
    nombre,
    apellidoP,
    apellidoM,
    direccion,
    telefono,
    fecha,
    correo,
    usuario,
    password
  ) => {
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
    if (op === 1) {
      setTitle("Registrar Checador");
    } else if (op === 2) {
      setTitle("Editar Checador");
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
    window.setTimeout(function () {
      document.getElementById("nombre").focus();
    }, 500);
  };

  const validar = () => {
    var parametros;
    var metodo;
    if (nombre.trim() === "") {
      show_alert("Escribe el nombre del checador", "warning");
    } else if (apellidoP.trim() === "") {
      show_alert("Escribe el apellido paterno del checador", "warning");
    } else if (apellidoM.trim() === "") {
      show_alert("Escribe el apellido materno del checador", "warning");
    } else if (direccion.trim() === "") {
      show_alert("Escribe dirección del checador", "warning");
    } else if (telefono === "") {
      show_alert("Escribe el teléfono del checador", "warning");
    } else if (fecha === "") {
      show_alert("Escribe la fecha de nacimiento del checador", "warning");
    } else if (correo.trim() === "") {
      show_alert("Escribe el correo del checador", "warning");
    } else if (usuario.trim() === "") {
      show_alert("Escribe el usuario del checador", "warning");
    } else if (password.trim() === "") {
      show_alert("Escribe la contraseña del checador", "warning");
    } else {
      if (operacion === 1) {
        parametros = {
          nombre: nombre,
          apellidoP: apellidoP,
          apellidoM: apellidoM,
          usuario: usuario.trim(),
          correo: correo.trim(),
          password: password.trim(),
          rol: rol,
          telefono: telefono,
          fecha_nacimiento: fecha,
          direccion: direccion,
        };
        // console.log(parametros);
        metodo = "POST";
      } else {
        parametros = {
          id_usuario: id,
          nombre: nombre,
          apellidoP: apellidoP,
          apellidoM: apellidoM,
          usuario: usuario.trim(),
          correo: correo.trim(),
          password: password.trim(),
          telefono: telefono,
          fecha_nacimiento: fecha,
          direccion: direccion,
        };
        // console.log(parametros);
        metodo = "PUT";
      }
      enviarSolicitud(metodo, parametros);
    }
  };

  const enviarSolicitud = async (metodo, parametros) => {
    if (metodo === "POST") {
      urlSave = "http://localhost:4000/api/usuarios";
    } else if (metodo === "DELETE") {
      urlSave = "http://localhost:4000/api/usuarios_d";
    } else {
      urlSave = "http://localhost:4000/api/usuarios_u";
    }
    await axios({ method: metodo, url: urlSave, data: parametros })
      .then(function (respuesta) {
        var tipo = respuesta.data.tipo;
        var msj = respuesta.data.msj;
        show_alert(msj, tipo);
        if (tipo === "success") {
          document.getElementById("btncerrarModal").click();
          getChecadores();
        }
      })
      .catch(({ response }) => {
        console.log(response.data);
        show_alert(response.data.msj, "error");
      });
  };

  const deleteChecador = (id, nombre) => {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: "¿Seguro que desea eliminar a " + nombre + "?",
      icon: "question",
      text: "No se podra dar marcha atrás",
      showCancelButton: true,
      confirmButtonText: "si, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        setId(id);
        enviarSolicitud("DELETE", { id: id });
      } else {
        show_alert("Hay un problema y no se pudo eliminar", "info");
      }
    });
  };
  // console.log(cookies)

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

      <React.Fragment>
        <CssBaseline />

        <Container maxWidth="xl" sx={{ marginTop: "30px" }}>
        <Toolbar
            sx={{
              backgroundColor: "#1D3E51",
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            
            <Typography
              component="h1"
              variant="h4"
              color="#fff"
              noWrap
              sx={{ flexGrow: 1 }}
              align="center"
            >            
            CHECADOR

            </Typography>
            <Button
            variant="contained"
            color="success"
            onClick={() => openModal(1)}
            data-bs-toggle="modal"
            data-bs-target="#modalChecadores"
            size="large"
            startIcon={<AddIcon />}
          >
            Añadir
          </Button>
          </Toolbar>
         
          <TableContainer component={Paper} sx={{ marginTop: "10px" }}>
            <div className="row mt-3">
              <div className="col-md-4 offset-md-4">
                <div className="d-grid mx-auto"></div>
              </div>
            </div>
            <div className="container">
            <Table sx={{ minWidth: 500 }} aria-label="customized  pagination table">
              <thead className="table">
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
              <TableBody>
                {checadores.map((checador, id) => (
                  <TableRow key={checador.id_usuario}>
                    <td>{checador.id_usuario}</td>
                    <TableCell component="th" scope="row">
                      {checador.nombre +
                        " " +
                        checador.apellidoP +
                        " " +
                        checador.apellidoM}
                    </TableCell>
                    <TableCell style={{ width: 160 }} align="right">
                      {checador.direccion}
                    </TableCell>
                    <TableCell style={{ width: 160 }} align="right">
                      {checador.telefono}
                    </TableCell>
                    <TableCell style={{ width: 160 }} align="right">
                      {checador.fecha}
                    </TableCell>
                    <TableCell style={{ width: 160 }} align="right">
                      {checador.correo}
                    </TableCell>
                    <TableCell style={{ width: 160 }} align="right">
                      {checador.password}
                    </TableCell>
                    <TableCell style={{ width: 160 }} align="right">
                      {checador.usuario}
                    </TableCell>
                    <TableCell>
                      <Button
                        color="secondary"
                        variant="outlined"
                        startIcon={<EditIcon />}
                        onClick={() =>
                          openModal(
                            2,
                            checador.id_usuario,
                            checador.nombre,
                            checador.apellidoP,
                            checador.apellidoM,
                            checador.direccion,
                            checador.telefono,
                            checador.fecha_nacimiento,
                            checador.correo,
                            checador.usuario,
                            checador.password
                          )
                        }
                        data-bs-toggle="modal"
                        data-bs-target="#modalChecadores"
                      >
                        EDITAR
                      </Button>
                      &nbsp;
                      <Button
                        color="error"
                        variant="outlined"
                        startIcon={<DeleteIcon />}
                        onClick={() =>
                          deleteChecador(checador.id_usuario, checador.nombre)
                        }
                      >
                        ELIMINAR
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}

                {/* {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )} */}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[
                      1,
                      5,
                      10,
                      25,
                      { label: "All", value: -1 },
                    ]}
                    colSpan={3}
                    count={checadores.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                      inputProps: {
                        "aria-label": "rows per page ",
                      },
                      native: true,
                    }}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                  />
                </TableRow>
              </TableFooter>
            </Table>
            </div>
            <div className="modal" id="modalChecadores">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">{title}</h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <input type="hidden" name="" id="id" />
                    <div className="input-group mb-3">
                      <span className="input-group-text">
                        <i className="fa fa-user"></i>
                      </span>
                      <input
                        type="text"
                        name="nombre"
                        id="nombre"
                        className="form-control"
                        placeholder="Nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                      />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text">
                        <i className="fa fa-user"></i>
                      </span>
                      <input
                        type="text"
                        name="apellidoP"
                        id="apellidoP"
                        className="form-control"
                        placeholder="Apellido paterno"
                        value={apellidoP}
                        onChange={(e) => setApellidoP(e.target.value)}
                      />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text">
                        <i className="fa fa-user"></i>
                      </span>
                      <input
                        type="text"
                        name="apellidoM"
                        id="apellidoM"
                        className="form-control"
                        placeholder="Apellido materno"
                        value={apellidoM}
                        onChange={(e) => setApellidoM(e.target.value)}
                      />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text">
                        <i className="fa fa-phone"></i>
                      </span>
                      <input
                        type="text"
                        name="direccion"
                        id="direccion"
                        className="form-control"
                        placeholder="Dirección"
                        value={direccion}
                        onChange={(e) => setDireccion(e.target.value)}
                      />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text">
                        <i className="fa fa-phone"></i>
                      </span>
                      <input
                        type="number"
                        name="telefono"
                        id="telefono"
                        className="form-control"
                        placeholder="Telefono"
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                      />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text">
                        <i className="fa fa-calendar"></i>
                      </span>
                      <input
                        type="date"
                        name="fecha"
                        id="fecha"
                        className="form-control"
                        placeholder="Fecha de nacimiento"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                      />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text">
                        <i className="fa fa-envelope"></i>
                      </span>
                      <input
                        type="email"
                        name="correo"
                        id="correo"
                        className="form-control"
                        placeholder="Correo"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                      />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text">
                        <i className="fa fa-user"></i>
                      </span>
                      <input
                        type="text"
                        name="usuario"
                        id="usuario"
                        className="form-control"
                        placeholder="Usuario"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                      />
                    </div>
                    {/* <div className="input-group mb-3">
                      <span className="input-group-text">
                        <i className="fa fa-user"></i>
                      </span>
                      <input
                        type="text"
                        name="alias"
                        id="alias"
                        className="form-control"
                        placeholder="Alias(opcional)"
                        value=''
                        // onChange={(e) => setUsuario(e.target.value)}
                      />
                    </div> */}
                    <div className="input-group mb-3">
                      <span className="input-group-text">
                        <i className="fa fa-unlock-alt"></i>
                      </span>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="form-control"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      id="btncerrarModal"
                      className="btn btn-danger"
                      data-bs-dismiss="modal"
                    >
                      <i className="fa fa-times"></i> CANCELAR
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => validar()}
                    >
                      <i className="fa-solid fa-floppy-disk"></i> ACEPTAR
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </TableContainer>
        </Container>
      </React.Fragment>
    </Box>
  );
}
