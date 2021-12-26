import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';


const useStyles = makeStyles(() => ({
  root: {
    overflow: "hidden",
    // height: "100vh",
    minHeight: "100vh",
    fontFamily: 'Poppins',
  },
  subTitle: {
    fontSize: 14,
    marginBottom: 60,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 25,
    marginTop: 15
  },
  content: {
    fontSize: 17,
    lineHeight: '24px',
    fontWeight: 200,
    marginBottom: 50,
    width: "90%",
    letterSpacing : 1,
    marginLeft: 20
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  cover: {
    width: 35,
    height: 35,
  },
  paddingLarge: {
    paddingLeft: 80,
  },
  paddingXS: {
    paddingLeft: 10,
  },
  iconContainer: {
    height: 77,
    width: 77,
    margin: "auto",
    borderRadius: "50%",
    background: "#FF6600",
    textAlign: "center",
    lineHeight: "77px"
  }
}));

const Pargraph = (props) => {
  const classes = useStyles();
  const matches = useMediaQuery('(max-width:600px)')
  const matchesMDScreen = useMediaQuery('(max-width:1200px)');
  const matcheLarge = useMediaQuery('(max-width:1280px) and (min-width:960px');

  return (
  <div className={matches ? classes.paddingXS : classes.paddingLarge} >
    <Typography variant="h3" className={classes.title} style={{fontSize : matches? 24 : 36, display:matchesMDScreen? "none" : "block"}}>{props.title}</Typography>
    <Typography variant="h6" className={classes.subTitle}>{props.subTitle}</Typography>
      {props.data.map((item, index) => (
        <Grid container key={index}>
          <Grid item lg={1} md={1} sm={2} xs={12}>
            <div className={classes.iconContainer} style={{margin: matches? "auto" : 0}}>
              <img
                className={classes.cover}
                src={item.icon}
                alt="Live from space album cover"
              />
            </div>
          </Grid>
          <Grid item md={10} sm={10} xs={12}>
            <p color="textSecondary" className={classes.content} style={{fontSize : matches? 14 : 17, paddingLeft: matches? "20px" : matcheLarge?  "50px" : "10px", marginTop: matches? 25 : 0}}>
              {item.brief}
            </p>
          </Grid>
        </Grid>
      ))}
  </div>
  );
}

export default Pargraph
