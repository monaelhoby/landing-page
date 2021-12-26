import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inside: {
    height: 'auto',
    marginTop: '30px',
    marginBottom: '20px',
  },
  circle: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    margin: 'auto',
    right: 0,
  },
}));

export default function Loading({ small, inside }) {
  const classes = useStyles();

  return (
    <>
      {inside ? (
        <div className={`${classes.root} ${classes.inside}`}>
          <CircularProgress size={small ? 30 : 75} />
        </div>
      ) : (
        <div>
          <CircularProgress size={small ? 30 : 75} className={classes.circle} />
        </div>
      )}
    </>
  );
}
