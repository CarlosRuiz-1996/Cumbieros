import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Banner2 from "../../img/banner2.png"
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Urban from "../../img/URBAN.jpg";
import Toyota from "../../img/toyota.jpg";
import Crafter from "../../img/crafter.jpg";
import Interior from "../../img/interior.jpg";
import Interior2 from "../../img/interior2.jpg";
import Interior3 from "../../img/interior3.jpeg";
import Camara from "../../img/camara.png";


export default function ActionAreaCard() {
  return (

    <>

    <img src={Banner2} alt="" className='BannerUnidad'/>

    <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
              sx={{
                marginTop: '50px'
              }}
            >
              NUESTRAS UNIDADES
            </Typography>
            <Typography variant="h5" align="justify" color="text.secondary" paragraph>
              En la ruta 92 otro aspecto muy importante para nosotros son nuestras unidades.
              Las unidades con las que contamos en su mayoria son los mejores modelos de caminonetas
              adaptadas para la comodidad de todos los pasajeros y usuarios, con interiores modificados 
              y camaras de seguridad para que puedan ser motinoreadas en cualquier momento y ser atendidas 
              en caso de cualquier tipo de percance o accidente que se pueda presentar durante el trayecto,
              conocelas un poco más.

            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
            </Stack>
          </Container>

        <Container sx={{
            display: 'flex',
            flexDirection: 'row',

        }} >
                <Card sx={{ maxWidth: 500 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="240"
                    image= { Urban }
                    alt="green iguana"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Nissan Urban
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Uno de los modelos mas utilizados en las combis, uno de los mas
                        amplios ynuevos que se puedan encontrar, ocacionando menos fallas
                        tecnicas poniendo en prioridad la seguridad.
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: 345, marginLeft: '100px' }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="240"
                    image= { Toyota }
                    alt="green iguana"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Toyota Hiace
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Uno de los modelos mas utilizados en las combis, uno de los mas
                        amplios ynuevos que se puedan encontrar, ocacionando menos fallas
                        tecnicas poniendo en prioridad la seguridad.
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: 345, marginLeft: '100px' }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="240"
                    image={ Crafter }
                    alt="green iguana"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Volkswagen Crafter
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                         Uno de los modelos mas utilizados en las combis, uno de los mas
                        amplios ynuevos que se puedan encontrar, ocacionando menos fallas
                        tecnicas poniendo en prioridad la seguridad.
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
        </Container>



        <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
              sx={{
                marginTop: '50px'
              }}
            >
              INTERIORES
            </Typography>
            <Typography variant="h5" align="justify" color="text.secondary" paragraph>
              Los interiores tambien son una parte importante de nuestras unidades, en su mayoria
              todas las unidades cuentan con los mejores interiores diseñados para repeler malos olores,
              ser comodos para que tu viaje sea lo mas placentero posible y espaciosos, conocelos. 

            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
            </Stack>
          </Container>

        <Container sx={{
            display: 'flex',
            flexDirection: 'row',

        }} >
                <Card sx={{ maxWidth: 500 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="240"
                    image= { Interior }
                    alt="green iguana"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Interior de las Urban
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Interiores comodos, sin malos olores, adaptados para todo 
                        tipo de usuarios sin excepcion, asi como espaciosos y poco 
                        contraidos.
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: 345, marginLeft: '100px' }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="240"
                    image= { Interior2 }
                    alt="green iguana"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Interior de las Hiace
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                       Interiores comodos, sin malos olores, adaptados para todo 
                        tipo de usuarios sin excepcion, asi como espaciosos y poco 
                        contraidos.
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: 345, marginLeft: '100px' }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="240"
                    image={ Interior3 }
                    alt="green iguana"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Interior de las Crafter
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Interiores comodos, sin malos olores, adaptados para todo 
                        tipo de usuarios sin excepcion, asi como espaciosos y poco 
                        contraidos.
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
        </Container>

        
        <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
              sx={{
                marginTop: '50px'
              }}
            >
              CAMARAS DE SEGURIDAD
            </Typography>
            <Typography variant="h5" align="justify" color="text.secondary" paragraph>
                Para nosotros la seguridad de los usuarios es algo muy importante
                por eso mismo contamos con camaras de seguridad en la mayoria de las unidades
                respaldando la integridad tanto de los conductores como de los pasajeros, el objetivo
                es brindarles la mejor atención y comodidad, las camaras que utilizamos en casi todas las unidades
                son las siguientes:

            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
            </Stack>
          </Container>

              <img src={ Camara } alt="" className='Camara'/>
    </>
  );
}
