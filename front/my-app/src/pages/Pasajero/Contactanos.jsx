import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Contactanos from "../../img/contactanos.png"
import Mapa from "../Components/MapComponent";
import Facebook from "../../img/facebook.png"
import Twitter from "../../img/twitter.png"
import Instagram from "../../img/instagram3.png"
import Phone from "../../img/phone3.png"
import Email from "../../img/email4.png"
import ContactForm from "../Components/ContactForm";




export default function MultiActionAreaCard() {
  return (

    <>

        <Mapa/>

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
              Contactanos
            </Typography>
            <Typography variant="h5" align="justify" color="text.secondary" paragraph>
            En este apartado puedes ponerte en contacto con nosotros mediante nuestras redes sociales 
            correo electronico o nuestro  telefono, igual puedes darnos cualquier tipo de queja o reporte 
            en cualquiera de los 2 puntos de base (Santa elena - Santa Martha), la opinion de nuestros usuarios
            es lo mas importante para nosotros. asi que ten por seguro que le daremos seguimiento a cualquier
            situacion que nos hagan llegar, esperamos recibir tanto comentarios buenos y malos, todos son bien
            recibidos y se les dara la importancia debida.

            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
            </Stack>
          </Container>

          <img src={Contactanos} alt="" className='ContactanosImg'/>


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
              ¡SIGUENOS EN NUESTRAS REDES SOCIALES!
            </Typography>

         <Container sx={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: '50px'
         }}>  

            <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="240"
                image= {Facebook}
                alt="facebook"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    FACEBOOK
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    En facebook podras ponerte en contacto con nosotros a todas
                    horas y esperamos poder darte respuesta lo antes posible.
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
            <a href="https://www.facebook.com/" className='BotonRedes'> Ir a Facebook</a>
            </CardActions>
            </Card>

            <Card sx={{ maxWidth: 345, marginLeft: '100px' }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="240"
                image={Twitter}
                alt="twitter"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    TWITTER
                </Typography>
                <Typography variant="body2" color="text.secondary">
                   En Twitter podras ponerte en contacto con nosotros a todas
                    horas y esperamos poder darte respuesta lo antes posible.
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <a href="https://twitter.com/?lang=es" className='BotonRedes'> Ir a Twitter</a>
            </CardActions>
            </Card>

            <Card sx={{ maxWidth: 345, marginLeft: '100px' }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="240"
                image={Instagram}
                alt="Instagram"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    INSTAGRAM
                </Typography>
                <Typography variant="body2" color="text.secondary">
                   En Instagram podras ponerte en contacto con nosotros a todas
                    horas y esperamos poder darte respuesta lo antes posible.
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
            <a href="https://www.instagram.com/" className='BotonRedes'> Ir a Instagram</a>
            
            </CardActions>
            </Card>
       </Container>


       <Container sx={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: '50px'
         }}>  

            <Card sx={{ maxWidth: 345, marginLeft: '150px' }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="240"
                image= {Phone}
                alt="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    TELEFONO
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Con nuestro numero de telefono podras ponerte en contacto con nosotros a todas
                    horas y esperamos poder darte respuesta lo antes posible.
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    5577856213
                </Button>
            </CardActions>
            </Card>

            <Card sx={{ maxWidth: 345, marginLeft: '100px' }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="240"
                image={Email}
                alt="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    EMAIL
                </Typography>
                <Typography variant="body2" color="text.secondary">
                   Con nuestro correo electronico podras ponerte en contacto con nosotros a todas
                    horas y esperamos poder darte respuesta lo antes posible.
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                cumbieros13@gmail.com
                </Button>
            </CardActions>
            </Card>

       </Container>
         

    </>
  );
}
