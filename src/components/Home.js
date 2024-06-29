import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SearchIcon from '@material-ui/icons/Search';
import ListIcon from '@material-ui/icons/List';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import CustomIcon from '../assets/images/samay.webp';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';

const drawerWidth = 240;
const drawerWidthCollapsed = 60;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100vh',
    margin: 0,
    padding: 0,
  },
  toolbar: {
    paddingRight: 24,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundColor: 'rgba(52,111,123,255)',
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  drawerPaperCollapsed: {
    width: drawerWidthCollapsed,
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  content: {
    flexGrow: 1,
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      paddingTop: 0,
      paddingBottom: 0,
    },
  },
  mapContainer: {
    height: 'calc(100vh - 56px)',
    width: '100%',
    margin: 0,
    padding: 0,
    [theme.breakpoints.down('sm')]: {
      height: 'calc(88vh - 56px)',
      margin: 0,
      padding: 0,
    },
  },
  bottomNav: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    backgroundColor: 'rgba(52,111,123,255)',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  bottomNavAction: {
    color: 'white',
    '&.Mui-selected': {
      color: 'white',
    },
  },
  desktopDrawer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: theme.spacing(2),
  },
  mobileSearchBar: {
    display: 'flex',
    alignItems: 'center',
    margin: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  searchField: {
    borderRadius: '16px',
  },
  logo: {
    width: '100px',
    height: '100px',
    marginBottom: theme.spacing(1),
  },
  logoText: {
    fontFamily: 'cursive',
    fontSize: '1.5rem',
    marginBottom: theme.spacing(2),
  },
  drawerLink: {
    margin: theme.spacing(1, 0),
    width: '100%',
    textAlign: 'center',
    padding: theme.spacing(1),
    borderRadius: '8px',
    textDecoration: 'none',
    color: 'white',
    '&:hover': {
      backgroundColor: 'rgba(52,111,123,255, 0.8)',
    },
  },
  drawerIcon: {
    color: 'white',
  },
}));

export default function Home() {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [bottomNavValue, setBottomNavValue] = useState(0);
  const [markerPosition, setMarkerPosition] = useState(null);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleBottomNavChange = (event, newValue) => {
    setBottomNavValue(newValue);
  };

  function LocationMarker() {
    useMapEvents({
      click(e) {
        setMarkerPosition(e.latlng);
      },
    });

    return markerPosition === null ? null : (
      <Marker position={markerPosition}>
        <Popup>Marker is at {markerPosition.toString()}</Popup>
      </Marker>
    );
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperCollapsed),
        }}
        open={open}
      >
        <div className={classes.desktopDrawer}>
          <IconButton onClick={toggleDrawer}>
            {open ? <ChevronLeftIcon style={{ color: 'white' }} /> : <MenuIcon style={{ color: 'white' }} />}
          </IconButton>
          {open ? (
            <>
              <img src={CustomIcon} alt="Samay Logo" className={classes.logo} />
              <Typography className={classes.logoText}>Samay</Typography>
              <Divider style={{ backgroundColor: 'white' }} />
              <Link href="/search" className={classes.drawerLink}>Buscar</Link>
              <Link href="/list" className={classes.drawerLink}>Lista</Link>
              <Link href="/home" className={classes.drawerLink}>Inicio</Link>
              <Link href="/user" className={classes.drawerLink}>Usuario</Link>
            </>
          ) : (
            <>
              <Link href="/search" className={classes.drawerLink}>
                <SearchIcon className={classes.drawerIcon} />
              </Link>
              <Link href="/list" className={classes.drawerLink}>
                <ListIcon className={classes.drawerIcon} />
              </Link>
              <Link href="/home" className={classes.drawerLink}>
                <HomeIcon className={classes.drawerIcon} />
              </Link>
              <Link href="/user" className={classes.drawerLink}>
                <PersonIcon className={classes.drawerIcon} />
              </Link>
            </>
          )}
        </div>
      </Drawer>
      <main className={classes.content}>
        <Container maxWidth="lg" className={classes.container}>
          <div className={classes.mobileSearchBar}>
            <TextField
              label="Buscar lugar"
              variant="outlined"
              fullWidth
              className={classes.searchField}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <MapContainer center={[51.505, -0.09]} zoom={13} className={classes.mapContainer}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker />
          </MapContainer>
        </Container>
        <BottomNavigation
          value={bottomNavValue}
          onChange={handleBottomNavChange}
          className={classes.bottomNav}
        >
          <BottomNavigationAction label="Buscar" icon={<SearchIcon />} className={classes.bottomNavAction} />
          <BottomNavigationAction label="Lista" icon={<ListIcon />} className={classes.bottomNavAction} />
          <BottomNavigationAction label="Inicio" icon={<HomeIcon />} className={classes.bottomNavAction} />
          <BottomNavigationAction label="Usuario" icon={<PersonIcon />} className={classes.bottomNavAction} />
        </BottomNavigation>
      </main>
    </div>
  );
}
