import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Banner from "../../img/banner.jpg"
import Stack from '@mui/material/Stack';
import Galeria from "../Components/GaleryComponent";
import Container from '@mui/material/Container';
import Time from "../../img/time.png";
import Secure from "../../img/secure.png";
import Fast from "../../img/fast.png";
import Vision from "../../img/supervision.png"
import Transparencia from "../../img/transparencia.png"
import Apreciacion from "../../img/apreciacion.png"
import Responsabilidad from "../../img/responsabilidad.png"
import Collage from "../../img/Collage.png"

export default function ActionAreaCard() {
  return (
    
    <>
    
    
    <img src={Banner} alt="" className='BannerChimal'/>

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
              CONOCENOS
              
            </Typography>
            <Typography variant="h5" align="justify" color="text.secondary" paragraph>
            Somos la ruta 92, una ruta de transporte publico del Estado de México, Chimalhuacán.
            Como principal objetivo tenemos que todos los usuarios y pasajeros se sientan comodos,
            seguros y felices con el servicio que brindamos en general, tenemos una vison, una misión 
            y unos valores bien definidos y estamos comprometidos a seguirlos al pie de la letra esperando
            que sea de agrado de todos, esperamos que disfrutes tus viajes, gracias por estar con nosotros 
            y  que llegues con bien a tu destino. 

            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
            </Stack>
          </Container>


            <img src={Collage } alt="" className='Collage'/>

            <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
              sx={{
                marginTop: '50px',
              }}
            >
              MISIÓN
            </Typography>
            <Typography variant="h5" align="justify" color="text.secondary" paragraph>
            Proporcionar un servicio de transporte accesible y asequible para todos los segmentos de la población, 
            incluyendo personas con discapacidad, adultos mayores y estudiantes, asi como reducir la congestión vehicular
             en las vías de la ciudad, ofreciendo una alternativa viable y sostenible para los desplazamientos urbanos.

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
          display:'flex',
          flexDirection:'row',
          
        }} >
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                image={ Time }
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Llegarás a tiempo a todos lados
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Tenemos los tiempos medidos y establecidos
                  para que los conductores tomen precaución
                  y evitar accidentes.  
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
       
          <Card sx={{ maxWidth: 345, marginLeft: '100px' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                image={ Secure }
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Seguridad
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Tenemos alto indice de respuesta en caso de ser necesario,
                  lo importante es la seguridad de los pasajeros.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ maxWidth: 345, marginLeft: '100px' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                image={ Fast }
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Velocidad
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Debido a que tenemos los tiempos medidos, 
                  tu llegada a todos lados sera a tiempo.
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
                marginTop: '50px',
              }}
            >
              VISIÓN
            </Typography>
            <Typography variant="h5" align="justify" color="text.secondary" paragraph>
            Ser un referente en innovación y tecnología aplicada al transporte público, 
            con soluciones y servicios de vanguardia que mejoren la experiencia del usuario y la eficiencia del sistema,
            asi mismo ser clave en la integración urbana, al conectar de manera rápida y 
            eficiente las diferentes zonas y barrios de la ciudad, y facilitar el acceso a 
            oportunidades de empleo, educación y servicios públicos para todos los ciudadanos.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
            </Stack>

              <img src={ Vision } alt="" className='Vision'/>

          </Container>


          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
              sx={{
                marginTop: '50px',
              }}
            >
              VALORES
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
          display:'flex',
          flexDirection:'row',
          
        }} >
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                image={ Transparencia }
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  TRANSPARENCIA
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Somos transparentes con todos los usuarios 
                  y personal de la ruta 92 para evitar problemas de cualquier tipo. 
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
       
          <Card sx={{ maxWidth: 345, marginLeft: '100px' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                image={ Apreciacion }
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  APRECIACIÓN
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Apreciamos a todos nuestros usuarios y equipo de la ruta 
                  92 y por eso mismo buscamos brindarles la mejor experiencia de viaje.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ maxWidth: 345, marginLeft: '100px' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                image={ Responsabilidad }
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ alignContent:'center' }}>
                  RESPONSABILIDAD
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Somos responsables con todo lo que sucede en nuestras unidades
                    atenderemos cualquier reporte con gusto y se resolverá.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Container>
        
    </>
  );
}
