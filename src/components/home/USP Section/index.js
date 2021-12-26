import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import DesktopImg from '../../../images/sec2/Background.png'
import BkgImg from '../../../images/sec2/sec2bkg.png'

const useStyles = makeStyles(() =>({
    root:{
        fontFamily: 'Poppins',
        paddingTop: 100,
        paddingBottom: 100,
        textAlign:'center',
        backgroundImage: "url("+BkgImg+")",
        backgroundRepeat: "no-repeat",
        backgroundPosition:  "right",
        backgroundAttachment: "fixed",
        backgroundSize: "50%",
        zIndex: -1
    },
    title:{
        fontSize: 36,
        fontWeight: 600,
        color: "#000",
        marginBottom: 30,
        textAlign:'center'
    },
    subTitle:{
        color: "#434343",
        fontSize: 15,
        maxWidth : 1000,
        margin: "auto auto 20px" 
    },
    link :{
        display: "inline-block",
        height:70,
        width:70,
        borderRadius: "50%",
        color: "#FFF",
        lineHeight: '70px',
        position: "absolute",
        left: 0
    },
    text:{
        display: "inline-block",
        color: "#434343",
        boxShadow: "1px 1px 2px rgba(0, 0, 0, 11%), -1px -1px 2px rgba(0, 0, 0, 11%)",
        padding: "20px 30px",
        background: "#FFF",
        borderRadius: 50,
        marginLeft: -25,
        position: "absolute",
        left: 70,
        zIndex: -1
    },
    container:{
        position: "relative",
        width: 350,
        margin: "auto auto 20px",
        zIndex: 9999,
        left:20
    },
    orangeBKG:{
        background: "#FF6600 !important",
    },
    grayBKG:{
        background: "#434343 !important",
    }
}))


const UspDifferentiation = props => {
    const classes = useStyles();
    const matches = useMediaQuery('(max-width:600px)')
    return (
        <div className={classes.root}>
        <Typography variant="h2" className={classes.title} style={{fontSize:matches?28 : 36}}>USPs & Differentiation</Typography>
        <Typography className={classes.subTitle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown ...</Typography>
            <Grid container>
            <Grid item md={4} sm={6} xs={12}>
                <div style={{height: "50%"}}>
                <div className={classes.container} style={{height:matches? 120 : "auto"}}>
                    <a href="#" className={`${classes.link} ${classes.orangeBKG}`}>01</a><span className={classes.text}> Scan QR Code</span>
                </div>
                </div>
                <div style={{height: "50%"}}>
                <div className={classes.container}>
                    <a href="#" className={`${classes.link} ${classes.grayBKG}`}>02</a><span className={classes.text}> Scan QR Code</span>
                </div>
                </div>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
                <img src={DesktopImg} width="100%"/>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
                <div style={{height: "50%"}}>
                <div className={classes.container} style={{height:matches? 120 : "auto"}}>
                    <a href="#" className={`${classes.link} ${classes.grayBKG}`}>06</a><span className={classes.text}> Scan QR Code</span>
                </div>
                </div>
                <div style={{height: "50%"}}>
                <div className={classes.container} style={{height:matches? 120 : "auto"}}>
                    <a href="#" className={`${classes.link} ${classes.orangeBKG}`}>05</a><span className={classes.text}> Scan QR Code</span>
                </div>
                </div>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
                <div className={classes.container} style={{height:matches? 120 : "auto"}}>
                    <a href="#" className={`${classes.link} ${classes.orangeBKG}`}>03</a><span className={classes.text}> Scan QR Code</span>
                </div>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
                <div className={classes.container} style={{height:matches? 120 : "auto"}}>
                    <a href="#" className={`${classes.link} ${classes.grayBKG}`}>04</a><span className={classes.text}> Scan QR Code</span>
                </div>
            </Grid>
            </Grid>
        </div>
    )
}


export default UspDifferentiation
