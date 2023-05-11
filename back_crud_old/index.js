const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: "10mb" }));
// const JWT = require('jsonwebtoken')
// const secretWord = 'Samus#Aran'

const credentials = {
  host: "localhost",
  user: "root",
  password: "",
  database: "cumbieros",
};

app.get("/", (req, res) => {
  res.send("hola desde tu primera ruta de la Api");
});

// app.post('/api/login', (req, res) => {
app.get("/", (req, res) => {
  // const { username, password } = req.body
  // const values = [username, password]
  var connection = mysql.createConnection(credentials);
  // connection.query("SELECT * FROM usuarios WHERE correo = ? AND contraseña = ?", values, (err, result) => {
  connection.query("SELECT * FROM usuarios", (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      // if (result.length > 0) {
      // 	res.status(200).send({
      // 		"id": result[0].id,
      // 		"user": result[0].user,
      // 		"username": result[0].username
      // 	})
      // } else {
      // 	res.status(400).send('Usuario no existe')
      // }
      res.status(200).send(result);
    }
  });
  connection.end();
});

app.post("/api/login", (req, res) => {
  const { usuario, password } = req.body;
  const values = [usuario, password];
  var connection = mysql.createConnection(credentials);
  connection.query(
    "SELECT * FROM users WHERE correo = ? AND password = ?",
    values,
    (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        if (result.length > 0) {
          // res.status(200).send({
          //   id: result[0].id_usuario,
          //   nombre: result[0].nombre,
          //   apellidoP: result[0].apellidoP,
          //   correo: result[0].correo,
          // });
          res.status(200).send(result[0]);
        } else {
          res.status(400).send("Usuario no existeeeeeeeeeee");
        }
      }
    }
  );
  connection.end();
});

app.post("/api/register", (req, res) => {
  const { nombre, aPaterno, aMaterno, correo, password } = req.body;
  const values = [nombre, aPaterno, aMaterno, correo, password];
  var connection = mysql.createConnection(credentials);
  connection.query(
    "INSERT INTO users( nombre, apellidoP, apellidoM, correo, password, estatus, rol, fecha_alta, fecha_cambio)" +
      "VALUES (?,?,?,?,?,1,1,NOW(),NULL)",
    values,
    (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        if (result) {
          res.send(result);
        } else {
          res.send({ message: "Error al aguardar!" });
        }
      }
    }
  );
  connection.end();
});




//usuarios 

//usuarios 
app.get("/usuarios/:rol", (req, res) => {
  let rol = req.params.rol;
  
  var connection = mysql.createConnection(credentials);
  // connection.query("SELECT * FROM usuarios WHERE correo = ? AND contraseña = ?", values, (err, result) => {
  connection.query("SELECT *,DATE(fecha_nacimiento) as fecha  FROM users WHERE "+rol+" order by id_usuario desc", (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      if (result.length > 0) {
      	res.status(200).send(result);
      } else {
      	res.status(400).send(err)
      }
      // res.status(200).send(result);
    }
  });

  connection.end();
});
 
app.post("/api/usuarios", (req, res) => {
  const {
	nombre, apellidoP, apellidoM,usuario, correo, password, rol, telefono, fecha_nacimiento, direccion
  } = req.body;
  const values = [
	nombre, apellidoP, apellidoM,usuario, correo, password, rol,telefono, fecha_nacimiento, direccion
  ];
  var connection = mysql.createConnection(credentials);
  connection.query(
    "INSERT INTO users( nombre, apellidoP, apellidoM,usuario, correo, password, estatus, rol, fecha_alta, fecha_cambio, telefono, fecha_nacimiento, direccion)" +
      "VALUES (?,?,?,?,?,?,1,?,NOW(),NULL, ?,?,?)",
    values,
    (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        if (result) {
        //   res.send(result);
		  res.status(200).send({
            tipo: "success",
            msj: "Checador guardado con exito",
            
          });
        } else {
          res.send({ message: "Error al aguardar!" });
        }
      }
    }
  );
  connection.end();
});

app.put("/api/usuarios_u", (req, res) => {
	const id = req.body.id_usuario;
	const nombre = req.body.nombre;
	const apellidoP = req.body.apellidoP;
	const apellidoM = req.body.apellidoM;
	const usuario = req.body.usuario;
	const correo = req.body.correo;
	const password = req.body.password;
	const telefono = req.body.telefono;
	const fecha_nacimiento = req.body.fecha_nacimiento;
	const direccion = req.body.direccion;

	var connection = mysql.createConnection(credentials);
			//nombre=?,apellidoP=?,apellidoM=?,usuario=?,correo=?,password=?,fecha_cambio=NOW(),telefono=?,fecha_nacimiento=?,direccion=? WHERE id_usuario="+id,
	connection.query(
	  "UPDATE users SET nombre=\""+nombre+"\",apellidoP=\""+apellidoP+"\",apellidoM=\""+apellidoM+
	  "\",usuario=\""+usuario+"\",correo=\""+correo+"\", password=\""+password+"\", telefono=\""+telefono+
	  "\", fecha_nacimiento=\""+fecha_nacimiento+"\", direccion =\""+direccion+"\" WHERE id_usuario="+id,
	  (err, result) => {	
		if (err) {
		  res.status(500).send({
			err:err,
			tipo:'warning',
			msj: "Ha sucedido un error intente mas tarde",
		});
		} else {
		  if (result) {
		  //   res.send(result);
			res.status(200).send({
			  tipo: "success",
			  msj: "Checador actualizado con exito",
			  
			});
		  } else {
			res.send({ message: "Error al aguardar!" });
		  }
		}
	  }
	);
	connection.end();
});
app.delete("/api/usuarios_d", (req, res) => {
	const id = req.body.id;
	var connection = mysql.createConnection(credentials);
	connection.query(
	  "DELETE FROM users WHERE id_usuario="+id,
	  (err, result) => {
		if (err) {
		  res.status(500).send({
			err:err,
			tipo:'warning',
			msj: "Ha sucedido un error intente mas tarde",
		});
		} else {
		  if (result) {
		  //   res.send(result);
			res.status(200).send({
			  tipo: "success",
			  msj: "Checador eliminado con exito",
			  
			});
		  } else {
			res.send({ message: "Error al aguardar!" });
		  }
		}
	  }
	);
	connection.end();
});


// UNIDADES
app.get("/unidades", (req, res) => {
  let rol = req.params.rol;
  
  var connection = mysql.createConnection(credentials);
  // connection.query("SELECT * FROM usuarios WHERE correo = ? AND contraseña = ?", values, (err, result) => {
  connection.query("SELECT * FROM unidades order by id_unidad desc", (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      if (result.length > 0) {
      	res.status(200).send(result);
      } else {
      	res.status(404).send({
          err:err,
          msj:'no se encontraron datos'
        })
      }
      // res.status(200).send(result);
    }
  });

  connection.end();
});
 
app.post("/api/unidades", (req, res) => {
  const {
    modelo, año, placas,no_economico
  } = req.body;
  const values = [
    modelo, año, placas,no_economico
    ];
  var connection = mysql.createConnection(credentials);
  connection.query(
    
    "INSERT INTO unidades( modelo, año, placas,no_economico, status, fecha_alta, fecha_cambio)" +
      "VALUES (?,?,?,?,1,NOW(),NULL)",
    values,
    (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        if (result) {
        //   res.send(result);
		  res.status(200).send({
            tipo: "success",
            msj: "Unidad guardado con exito",
            
          });
        } else {
          res.send({ message: "Error al aguardar!" });
        }
      }
    }
  );
  connection.end();
});

app.put("/api/unidades_u", (req, res) => {
	const id = req.body.id_unidad;
	const modelo = req.body.modelo;
	const año = req.body.año;
	const placas = req.body.placas;
	const no_economico = req.body.no_economico;
	

	var connection = mysql.createConnection(credentials);
	connection.query(
	  "UPDATE unidades SET modelo=\""+modelo+"\",año=\""+año+"\",placas=\""+placas+
	  "\",no_economico=\""+no_economico+"\" WHERE id_unidad="+id,
	  (err, result) => {	
		if (err) {
		  res.status(500).send({
			err:err,
			tipo:'warning',
			msj: "Ha sucedido un error intente mas tarde",
		});
		} else {
		  if (result) {
		  //   res.send(result);
			res.status(200).send({
			  tipo: "success",
			  msj: "Checador actualizado con exito",
			  
			});
		  } else {
			res.send({ message: "Error al aguardar!" });
		  }
		}
	  }
	);
	connection.end();
});
app.delete("/api/unidades_d", (req, res) => {
	const id = req.body.id;
	var connection = mysql.createConnection(credentials);
	connection.query(
	  "DELETE FROM unidades WHERE id_unidad="+id,
	  (err, result) => {
		if (err) {
		  res.status(500).send({
			err:err,
			tipo:'warning',
			msj: "Ha sucedido un error intente mas tarde",
		});
		} else {
		  if (result) {
		  //   res.send(result);
			res.status(200).send({
			  tipo: "success",
			  msj: "Checador eliminado con exito",
			  
			});
		  } else {
			res.send({ message: "Error al aguardar!" });
		  }
		}
	  }
	);
	connection.end();
});

app.listen(4000, () => console.log("hola soy el servidor"));
