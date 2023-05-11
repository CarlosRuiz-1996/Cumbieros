import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
//iconos
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from '@mui/icons-material/Add';


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



export default function Unidades() {
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

  const url = "http://localhost:4000/unidades";
  var urlSave = "";
  const [modelo, setModelo] = useState("");
  const [año, setAño] = useState("");
  const [placas, setPlacas] = useState("");
  const [no_economico, setNo_economico] = useState("");
  const [status, setStatus] = useState("");
  const [fecha_alta, setFecha_alta] = useState("");
  const [chofer, setChofer] = useState("");
  const [dueño, setDueño] = useState("");
  const [id, setId] = useState("");

  const [unidades, setUnidades] = useState([]);
  const [operacion, setOperacion] = useState(1);
  const [title, setTitle] = useState("");

  useEffect(() => {
    getUnidades();
  }, []);

  const getUnidades = async () => {
    // const rol = 2;
    const respuesta = await axios.get(url);
    setUnidades(respuesta.data);
  };

  const openModal = (
    op,
    id,
    modelo,
    año,
    placas,
    no_economico
    
  ) => {
    setId("");
    setModelo("");
    setAño("");
    setPlacas("");
    setNo_economico("");
    // setStatus("");
    // setFecha_alta("");
    // setChofer("");
    // setDueño("");
    // setUsuario("");
    // setPassword("");

    setOperacion(op);
    if (op === 1) {
      setTitle("Registrar Unidad");
    } else if (op === 2) {
      setTitle("Editar Unidad");
      setId(id);
      setModelo(modelo);
      setAño(año);
      setPlacas(placas);
      setNo_economico(no_economico);
      // setStatus(status);
      // setFecha_alta(fecha_alta);
      // setChofer(chofer);
      // setDueño(dueño);
    }
    window.setTimeout(function () {
      document.getElementById("modelo").focus();
    }, 500);
  };

  const validar = () => {
    var parametros;
    var metodo;
    if (modelo.trim() === "") {
      show_alert("Escribe el modelo de la unidad", "warning");
    } else if (año.trim() === "") {
      show_alert("Escribe el año de la unidad", "warning");
    } else if (placas.trim() === "") {
      show_alert("Escribe las placas de la unidad", "warning");
    } else if (no_economico.trim() === "") {
      show_alert("Escribe numero economico de la unidad", "warning");
    // }else if (chofer.trim() === "") {
    //   show_alert("Elige chofer de la unidad", "warning");
    // } else if (dueño.trim() === "") {
    //   show_alert("Elige al dueño de la unidad", "warning");
    } else {
      if (operacion === 1) {
        parametros = {
          modelo: modelo,
          año: año,
          placas: placas,
          no_economico: no_economico,
          // chofer: 'chofer',
          // dueño: 'dueño'
         
        };
        // console.log(parametros);
        metodo = "POST";
      } else {
        parametros = {
          id_unidad: id,
          modelo: modelo,
          año: año,
          placas: placas,
          no_economico: no_economico,
          // chofer: 'chofer',
          // dueño: 'dueño'
        };
        // console.log(parametros);
        metodo = "PUT";
      }
      enviarSolicitud(metodo, parametros);
    }
  };

  const enviarSolicitud = async (metodo, parametros) => {
    if (metodo === "POST") {
      urlSave = "http://localhost:4000/api/unidades";
    } else if (metodo === "DELETE") {
      urlSave = "http://localhost:4000/api/unidades_d";
    } else {
      urlSave = "http://localhost:4000/api/unidades_u";
    }
    await axios({ method: metodo, url: urlSave, data: parametros })
      .then(function (respuesta) {
        var tipo = respuesta.data.tipo;
        var msj = respuesta.data.msj;
        show_alert(msj, tipo);
        if (tipo === "success") {
          document.getElementById("btncerrarModal").click();
          getUnidades();
        }
      })
      .catch(({ response }) => {
        console.log(response.data);
        show_alert(response.data.msj, "error");
      });
  };

  const deleteUnidad = (id, modelo) => {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: "¿Seguro que desea eliminar la unidad " + modelo + "?",
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
      <Container maxWidth="xl" sx={{marginTop: '30px'}}>
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
              UNIDADES
            </Typography>
        <Button
          variant="contained"
          color="success"
          onClick={() => openModal(1)}
          data-bs-toggle="modal"
          data-bs-target="#modalUnidades"
          size="large"
          startIcon={<AddIcon/>}

        >
          Añadir
        </Button>
        </Toolbar>
        <TableContainer component={Paper} sx={{marginTop: '10px'}}>
          <div className="row mt-3">
            <div className="col-md-4 offset-md-4">
              <div className="d-grid mx-auto"></div>
            </div>
          </div>
          <div className="container">

          <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
            <thead align="center">
              <tr>
                <th>#</th>
                <th>MODELO</th>
                <th>AÑO</th>
                <th>PLACAS</th>
                <th>NUMERO ECONOMICO</th>
                <th>ESTATUS</th>
                <th>FECHA ALTA</th>
                <th>CHEFER</th>
                <th>DUEÑO</th>
                <th>ACCIONES</th>
              </tr>
            </thead>
            <TableBody>
              {unidades.map((unidad, id) => (
                <TableRow key={unidad.id_unidad}>
                  <td>{unidad.id_unidad}</td>
                  <TableCell component="th" scope="row">
                    {unidad.modelo}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                    {unidad.año}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                    {unidad.placas}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                    {unidad.no_economico}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                    {unidad.status== 1? 'activo':'inactivo'}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                    {unidad.fecha_alta}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                    chofer
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                    dueño
                  </TableCell>
                  <TableCell>
                    <Button
                      color="secondary"
                      variant="outlined"
                      startIcon={<EditIcon />}
                      onClick={() =>
                        openModal(
                          2,
                          unidad.id_unidad,
                          unidad.modelo,
                          unidad.año,
                          unidad.placas,
                          unidad.no_economico,
                          
                        )
                      }
                      data-bs-toggle="modal"
                      data-bs-target="#modalUnidades"
                    >
                      EDITAR
                    </Button>
                    &nbsp;
                    <Button
                      color="error"
                      variant="outlined"
                      startIcon={<DeleteIcon />}
                      onClick={() =>
                        deleteUnidad(unidad.id_unidad, unidad.modelo)
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
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                  colSpan={3}
                  count={unidades.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: {
                      "aria-label": "Registros encontrados",
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
          <div className="modal" id="modalUnidades">
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
                      name="modelo"
                      id="modelo"
                      className="form-control"
                      placeholder="Modelo"
                      value={modelo}
                      onChange={(e) => setModelo(e.target.value)}
                    />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text">
                      <i className="fa fa-user"></i>
                    </span>
                    <input
                      type="text"
                      name="año"
                      id="año"
                      className="form-control"
                      placeholder="Año"
                      value={año}
                      onChange={(e) => setAño(e.target.value)}
                    />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text">
                      <i className="fa fa-user"></i>
                    </span>
                    <input
                      type="text"
                      name="placas"
                      id="placas"
                      className="form-control"
                      placeholder="Placas"
                      value={placas}
                      onChange={(e) => setPlacas(e.target.value)}
                    />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text">
                      <i className="fa fa-phone"></i>
                    </span>
                    <input
                      type="text"
                      name="no_economico"
                      id="no_economico"
                      className="form-control"
                      placeholder="No economico"
                      value={no_economico}
                      onChange={(e) => setNo_economico(e.target.value)}
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
