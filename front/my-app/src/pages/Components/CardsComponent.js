import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Container } from '@mui/material';
import card1 from "../../img/chofer.jpg"
import card2 from "../../img/checador.jpg"
import card3 from "../../img/unidades.jpg"
import card4 from "../../img/reporte.jpg"
import card5 from "../../img/dueno.jpg"

export default function MultiActionAreaCard() {
  return (
    <>
    <Typography
              component="h1"
              variant="h6"
              color="inherit"
              
              sx={{ fontSize: '35px',
                    alignItems: 'center',
                    marginLeft: '350px',
                    marginTop: '50px'

            }}
            >
             ADMINISTRA Y GESTIONA
            </Typography>
    <Container sx={{
        display: 'flex',
        flexDirection: 'row',
        marginTop: '30px',
        justifyContent: 'space-between',
        alignItems: 'center'
    }}>
    <Card sx={{ maxWidth: 450, marginLeft: '100px', marginRight: '0px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={card1}
          alt="conductor"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            CONDUCTORES
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Aqui puedes administrar y gestionar la información de los conductores de la Ruta 92,
            actualizar, consultar, eliminar y agregar cada dato.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button sx={{
            fontSize: '15px',
            justifyContent: 'center',
            color: '#fff',
            backgroundColor: '#1D3E53',
            marginLeft: '150px'
        }}>
          ADMINISTRAR
        </Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 450, marginLeft: '-80px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={card2}
          alt="checador"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            CHECADORES
          </Typography>
          <Typography variant="body2" color="text.secondary">
             Aqui puedes administrar y gestionar la información de los checadores de la Ruta 92,
            actualizar, consultar, eliminar y agregar cada dato.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button sx={{
            fontSize: '15px',
            justifyContent: 'center',
            color: '#fff',
            backgroundColor: '#1D3E53',
            marginLeft: '150px'
        }}>
          ADMINISTRAR
        </Button>
      </CardActions>
    </Card>

    </Container>





    <Container sx={{
        display: 'flex',
        flexDirection: 'row',
        marginTop: '20px',
        justifyContent: 'space-between'
    }}>
    <Card sx={{ maxWidth: 450, marginLeft: '-150px', marginRight: '20px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={card3}
          alt="unidades"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            UNIDADES
          </Typography>
          <Typography variant="body2" color="text.secondary">
             Aqui puedes administrar y gestionar la información de las unidades de la Ruta 92,
            actualizar, consultar, eliminar y agregar cada dato.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button sx={{
            fontSize: '15px',
            justifyContent: 'center',
            color: '#fff',
            backgroundColor: '#1D3E53',
            marginLeft: '150px'
        }}>
          ADMINISTRAR
        </Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 450, marginRight: '20px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={card4}
          alt="reporte"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            REPORTES
          </Typography>
          <Typography variant="body2" color="text.secondary">
              Aqui puedes administrar y gestionar los reportes generados de manera general,
              los reportes hechos por los conductores, las sanciones de los conductores, reportes por checadores y/o usuarios.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button sx={{
            fontSize: '15px',
            justifyContent: 'center',
            color: '#fff',
            backgroundColor: '#1D3E53',
            marginLeft: '150px'
        }}>
          ADMINISTRAR
        </Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 450, marginRight: '-180px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={card5}
          alt="dueño"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            PROPIETARIOS
          </Typography>
          <Typography variant="body2" color="text.secondary">
              Aqui puedes administrar y gestionar la información de los propietarios de la Ruta 92,
            actualizar, consultar, eliminar y agregar cada dato.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button sx={{
            fontSize: '15px',
            justifyContent: 'center',
            color: '#fff',
            backgroundColor: '#1D3E53',
            marginLeft: '150px'
        }}>
          ADMINISTRAR
        </Button>
      </CardActions>
    </Card>

    </Container>


    </>
  );
}