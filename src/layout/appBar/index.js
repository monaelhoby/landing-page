import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';


import NavBar from './navBar';
import OrderLogo from '../../images/logo.png';
import BarclaycardLogo from '../../images/barclaycard.png'
// import DrawerMobile from './Drawer/index.js';
// import drawerScreen from './navbarMaterialui.js'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontFamily: 'Poppins',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    backgroundColor: theme.palette.secondary
  },
  rootBKG: {
    background: "#FFF",
    paddingTop: 5,
    paddingBottom: 5,
  },
  navbar: {
    boxShadow: '1px 1px 2px #AAA',
    background: "#fff !important",
    zIndex: 99,
  },
  staticNav: {
    background: "#4f4f4f !important",
    paddingTop: 70
  },
  XLargeScreen:{
    paddingTop: 100
  },
  staticNavSmallScreen:{
    paddingTop: 5,
    background: "#4f4f4f !important",
  },
  logo:{
    position: "relative",
    zIndex: 9999,
    top: 15
  },
  logoContainer:{
    background: "#FFF",
    borderRadius: 20,
    position: "absolute",
    display: 'inline-block',
    padding: 15,
  },
  logoContainerSmallScreen:{
    position: "static",
  },
  underLogo:{
    color: "#111",
    fontSize: 15,
    marginTop: -10
  },
  sup: {
    color: "#353535", 
    fontWeight: 400, 
    display: "inline-block",
    marginLeft: 5,
    fontSize: 30,
    top : -3
  },
  supSmallScreen:{
    fontSize: 15,
    color: "#000"
  },
  underLogoGo:{
    bottom: -120,
    left: 200,
    fontSize: 18,
    color: '#Dadada',
    fontWeight: "lighter",
    lineSpacing:50
  },
  underLogoGoSmallScreen:{
    display: "none"
  },
  PRMS:{
    paddingTop: 20
  },
  textCenter:{
    textAlign: "center",
    marginBottom: 50,
    display: "block"
  },
  barclaycardDiv:{
    textAlign: "right",
    paddingTop: 20
  },
  header:{
    color:"#f60", 
    fontSize: 60, 
    fontWeight: "600", 
    display: "inline-block",
    lineSpacing:50
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const matcheVerySmallScreen = useMediaQuery('(max-width:330px)');
  const matcheMobileScreen = useMediaQuery('(max-width:400px)');
  const matchMobileDrawer = useMediaQuery('(max-width:670px)')
  const matcheSmallScreen = useMediaQuery('(max-width:960px)');
  const matcheLarge = useMediaQuery('(max-width:1280px) and (min-width:960px');
  const matcheXLargeScreen = useMediaQuery('(max-width:1920px) and (min-width:1281px)');

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.rootBKG}>
        <Grid container>
          <Grid item md={6} sm={4} xs={4} style={{width: matcheVerySmallScreen? "100% !important" : "auto"}}>
          <div className={classes.logo}>
            <div className={matcheSmallScreen?classes.logoContainerSmallScreen:classes.logoContainer}>
              <img src={OrderLogo} alt="..." width={matcheSmallScreen ? "80px" : matcheXLargeScreen ? "219px" : "150px"} height="auto"/>
            </div>
            <sub style={{
              left : matcheXLargeScreen? 263 : 200,
              fontSize: matcheXLargeScreen?18:matcheLarge?14:12,
              bottom: matcheXLargeScreen?-120:matcheLarge?-92:-50
              }} className={matcheSmallScreen ? classes.underLogoGoSmallScreen:classes.underLogoGo}>
              All USPs Protected with Pending Patent Application (#2101647.2)
            </sub>
          </div>
          </Grid>
          {/* <Grid item md={5} sm={4} xs={3} style={{width: matcheVerySmallScreen? "100% !important" : "auto"}}>
          <div className={classes.PRMS}>
            <h5 className={classes.header} style={{fontSize: matcheXLargeScreen? 60 : matcheLarge? 39 :matcheMobileScreen?18: 32}}>RPMS </h5> 
            <sup className={matcheSmallScreen ? classes.underLogoGoSmallScreen:classes.sup} style={{fontSize: matcheXLargeScreen? 30 : matcheLarge? 20 : 14}}> Retailer Process Management Systems</sup>
          </div>
          </Grid> */}
          <Grid item md={6} sm={4} xs={5} style={{width: matcheVerySmallScreen? "100% !important" : "auto"}}>
          <div className={classes.barclaycardDiv} style={{paddingRight: matcheXLargeScreen? 65 : 'auto'}}>
            <img src={BarclaycardLogo} alt="..." width="150px" height="auto"/>
            <p className={matcheSmallScreen ? classes.underLogoGoSmallScreen:classes.underLogo}  style={{fontSize: matcheXLargeScreen? 15 : matcheLarge? 12 : 10}}>Payment System Provider and ISV H&L Partner</p>
          </div>
          </Grid>
        </Grid>
        </Toolbar>
        {/* <DrawerMobile style={{display : matchMobileDrawer ? 'block' : 'none'}}/>
        <drawerScreen style={{display : matchMobileDrawer ? 'none' : 'block'}}/> */}
        <NavBar 
        className={matcheSmallScreen ? classes.staticNavSmallScreen: matcheXLargeScreen ? classes.XLargeScreen: classes.staticNav}/>
      </AppBar>
    </div>
  );
}
