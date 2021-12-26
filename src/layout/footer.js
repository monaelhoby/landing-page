import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';


import Bkg from '../images/footer.svg';
// import img1 from '../images/rent_fee.jpg';
// import img2 from '../images/monthly_fee.jpg';
// import img3 from '../images/hidden_fee.jpg';


const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: "#4f4f4f !important"
    },
    "& .MuiFormLabel-root": {
      color: "#FFF" 
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#4f4f4f',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#FFF',
      },
      '&:hover fieldset': {
        borderColor: '#4f4f4f',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#4f4f4f',
      }
    },
  },
})(TextField);


const useStyles = makeStyles(() => ({
  root: {
    background: "#FF6600",
    paddingTop: 120,
    height: "100vh",
    textAlign: "left",
    fontFamily: 'Poppins',
  },
  subTitle: {
    fontFamily: 'Poppins',
    fontSize: 13
  },
  title: {
    fontFamily: 'Poppins',
    fontSize: 26,
    fontWeight: 500,
    marginBottom: 15,
    width: "70%"
  },
  content: {
    fontFamily: 'Poppins',
    fontSize: 16,
    lineHeight: '150%',
    fontWeight: 200,
    width: "80%",
    marginBottom: 50
  },
  pargraphSide: {
    paddingTop: 80,
    paddingBottom: 80,
    color: "#FFF"
  },
  form:{
    width: "100%",
    // display: "flex",
    // justifyContent: "space-between"
  },
  button: {
    background: "#4f4f4f",
    color: "#FFF",
    padding: "15px",
    marginLeft: 25,
    '&:hover': {
      color: '#4f4f4f'
    }
  },
  img: {
    borderRadius : "50%"
  },
  title:{
    marginBottom: 40,
    color: "#FFF"
  },
  subTitle:{
    marginTop: -10,
    color: "#FFF"
  }
}));

export default function Footer() {
  const classes = useStyles();
  const matcheSmall = useMediaQuery('(max-width:700px)');

  return (
    <div className={classes.root}>
      <Grid container >
        <Grid item md={6} xs={12}>
          <div className={classes.pargraphSide} style={{paddingLeft : matcheSmall ? 10 : 80}}>
            <Typography variant="h5" className={classes.title}>Subscribe Our News letter For Updates & News</Typography>
            <Typography variant="h6" className={classes.content}>
            Subscribe to our news letter program and get supdates about order go.Please enter your email and stay in touch with us!
            </Typography>
            <form className={classes.form} noValidate autoComplete="on">
            <CssTextField
              label="Email"
              variant="outlined"
              id="custom-css-outlined-input"
            />
            <Button
              variant="contained"
              color="default"
              className={classes.button}
            >
              Subscribe
            </Button>
            </form>
          </div>
        </Grid>
        <Grid item md={6} xs={12}>
          <img src={Bkg} alt="footer-image" width="100%" height="100%" />
        </Grid>
        {/* <Grid item md={4} xs={12}>
          <div>
            <img src={img1} width="90%" alt=".." className={classes.img}/>
            <h5 className={classes.subTitle}>No Rent Fees</h5>
          </div>
        </Grid>
        <Grid item md={4} xs={12}>
          <div>
            <img src={img2} width="90%" alt=".." className={classes.img}/>
            <h5 className={classes.subTitle}>No Monthly Fees</h5>
          </div>
        </Grid>
        <Grid item md={4} xs={12}>
          <div>
            <img src={img3} width="90%" alt=".." className={classes.img}/>
            <h5 className={classes.subTitle}>No any Hidden Fees</h5>
          </div>
        </Grid> */}
      </Grid>
    </div>
  );
}
