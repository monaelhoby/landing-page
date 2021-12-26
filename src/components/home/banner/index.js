import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import videoSource from '../../../assets/video.mp4';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
    width: '100%',
    fontFamily: 'Poppins',
    // height: "calc(100vh - 130px)",
  },
  Container: {
    position: 'relative',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  Video: {
    width: '100%',
    height: '100%',
  },
}));

const BackgroundVideo = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.Container}>
        <video autoPlay="autoplay" loop="loop" muted className={classes.Video}>
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default BackgroundVideo;
