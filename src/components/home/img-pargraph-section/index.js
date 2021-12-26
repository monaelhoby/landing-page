import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Paragraph from './pararaph';



const useStyles = makeStyles(() => ({
  root: {
    paddingTop : 100,
    paddingBottom : 100,
  },
  image: {
    maxWidth: "100%",
    marginBottom: 20,
    marginTop: 20
  },
  title:{
    textAlign: "center",
    marginBottom: 30
  }
}));

const ImgPargraph = (props) => {
  const classes = useStyles();
  const matchesMDScreen = useMediaQuery('(max-width:1200px)');
  const matches = useMediaQuery('(max-width:600px)');


  return (
    <div className={props.classes}>
    <div className={classes.root}>
     <div className={props.heightClass}>
    <Typography variant="h3" className={classes.title} style={{fontSize : matches ? 24 : 36, display: matchesMDScreen? "block" : "none"}}>{props.title}</Typography>
      {props.imgLast 
        ? ( <Grid container>
                <Grid item lg={6} xs={12}><Paragraph data={props.data} subTitle={props.subTitle} title={props.title} delay={props.delay}/></Grid> 
                <Grid item lg={6} xs={12} style={{margin:"auro"}}>{props.image}</Grid>
            </Grid>
        ) : ( <Grid container>
                <Grid item lg={6} xs={12} style={{margin:"auro"}}>{props.image}</Grid>
                <Grid item lg={6} xs={12}><Paragraph data={props.data} subTitle={props.subTitle} title={props.title} delay={props.delay}/></Grid> 
              </Grid>
        )
      }
     </div>
    </div>
    </div>
  );
}

export default ImgPargraph
