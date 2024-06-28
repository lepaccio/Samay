import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import BackgroundImage from '../assets/images/BackgroundSignIn.webp';
// Importa tu archivo SVG
import CustomIcon from '../assets/images/samay.webp';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    margin: 0,
    padding: 0,
  },
  image: {
    backgroundImage: `url(${BackgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    margin: 0,
    width: '100%',
    height: '100%',
    [theme.breakpoints.down('xs')]: {
      backgroundImage: 'none',
      backgroundColor: 'white',
    },
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    padding: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(4),
    boxShadow: theme.shadows[5],
    width: '400px',
    height: '800px',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      boxShadow: 'none',
    },
    [theme.breakpoints.up('sm')]: {
      width: '600px',
    },
    [theme.breakpoints.up('md')]: {
      width: '400px',
      padding: theme.spacing(6),
      marginRight: theme.spacing(8),
    },
  },
  leftText: {
    marginLeft: theme.spacing(8),
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  avatar: {
    margin: theme.spacing(1),
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  inputField: {
    width: '100%',
    marginBottom: theme.spacing(2),
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: 'rgba(52,111,123,255)', // Color del borde al enfocarse
      },
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: 'rgba(52,111,123,255)', // Color del label al enfocarse
    },
  },
  submit: {
    width: '70%',
    margin: theme.spacing(1, 0, 2),
    backgroundColor: 'rgba(52,111,123,255)',
    '&:hover': {
      backgroundColor: 'rgba(52,111,123,200)',
    },
  },
  skip: {
    width: '70%',
    margin: theme.spacing(1, 0, 2),
    color: 'rgba(237,102,75,255)', // Color del texto
    borderColor: 'rgba(237,102,75,255)', // Color del borde
    '&:hover': {
      backgroundColor: 'rgba(237,102,75,20)', // Fondo al pasar el cursor (opcional)
      color: 'rgba(255,255,255,255)', // Asegurar que el borde se mantenga del mismo color
    },
  },
  customLabel: {
    '& .MuiFormLabel-asterisk': {
      display: 'none',
    },
  },
}));

export default function SignInSide() {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleSignIn = (event) => {
    event.preventDefault();
    navigate('/home');
  };

  const handleSkipLogin = () => {
    navigate('/home');
  };

  return (
    <Box className={classes.root}>
      <CssBaseline />
      <Grid container className={classes.image}>
        <Grid item xs={12} className={classes.container}>
          <Typography className={classes.leftText} variant="h4" gutterBottom>
            Samay
          </Typography>
          <Paper className={classes.paper}>
            <img src={CustomIcon} alt="Custom Icon" style={{ width: '100px', height: '100px' }} />
            <Typography component="h1" variant="h5">
              Iniciar sesión
            </Typography>
            <form className={classes.form} noValidate onSubmit={handleSignIn}>
              <TextField
                className={`${classes.inputField} ${classes.customLabel}`}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Dirección de correo electrónico"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                className={`${classes.inputField} ${classes.customLabel}`}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Ingresar
              </Button>
              <Button
                fullWidth
                variant="outlined"
                className={classes.skip}
                onClick={handleSkipLogin}
              >
                Omitir
              </Button>
              <Grid container>
                {/* Comentado estas partes */}
                {/* <Grid item xs>
                  <Link href="#" variant="body2">
                    ¿Has olvidado tu contraseña?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"¿No tienes una cuenta? Regístrate"}
                  </Link>
                </Grid> */}
              </Grid>
              {/* <Box mt={5}>
                <Copyright />
              </Box> */}
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
