import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import img1 from '../../../images/sec5/img1.svg'
import img2 from '../../../images/sec5/img2.svg'
import img3 from '../../../images/sec5/img3.svg'
import img4 from '../../../images/sec5/img4.svg'

const useStyles = makeStyles(() =>({
    root:{
        fontFamily: 'Poppins',
        paddingTop: 100,
        paddingBottom: 80,
        textAlign:'center',
        background: "#434343"
    },
    underImg: {
        fontSize: 23,
        color: "#FFF",
        marginTop:40,
        marginBottom: 80
    },
    titleContainer:{
        lineHeight: "50%",
        marginBottom:20
    },
    headerSec: {
        fontSize: 44,
        fontWeight: "bold",
        fontFamily: 'Poppins',
        color: "#FF6600"
    },
    headerBold: {
        color: "#FFF"
    },
    underHeader: {
        fontSize: 17,
        color: "#FFF"
    }
}))


const OnlinePayment = props => {
    const classes = useStyles();
    const matches = useMediaQuery('(max-width:600px)')
    return (
        <div className={classes.root}>
          <Grid container>
            <Grid item md={4} sm={6} xs={12}>
                <div style={{textAlign: "center"}}>
                    <img src={img1} width="50%" />
                    <h5 className={classes.underImg}>No Rent Fees</h5>
                </div>
                <div style={{textAlign: "center"}}>
                    <img src={img2} width="50%" />
                    <h5 className={classes.underImg}>No Hidden Fees Outside Payment Costs</h5>
                </div>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
                <div style={{height: "50%"}}></div>
                <div className={classes.titleContainer} style={{marginBottom: matches? 150 : "auto"}}>
                    <h2 className={classes.headerSec} style={{fontSize: matches? 24 : 44}}><span className={classes.headerBold}>Just</span> 1.75%</h2>
                    <p className={classes.underHeader} style={{fontSize: matches? 13 : 17}}>Online Payment 1.75</p>
                </div>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
                <div style={{textAlign: "center"}}>
                    <img src={img3} width="50%" />
                    <h5 className={classes.underImg} style={{fontSize: matches? 15 : 23}}>No Monthly Fees</h5>
                </div>
                <div style={{textAlign: "center"}}>
                    <img src={img4} width="50%" />
                    <h5 className={classes.underImg} style={{fontSize: matches? 15 : 23}}>No PCI Fees</h5>
                </div>
            </Grid>
            </Grid>
        </div>
    )
}


export default OnlinePayment
