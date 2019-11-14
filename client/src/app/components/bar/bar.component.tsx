import React from 'react';
import {
  makeStyles,
  AppBar,
  Typography,
  Toolbar,
  Switch,
  FormControlLabel,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
});

type BarProps = {
  enabled: boolean;
  onSwitch: (enabled: boolean) => void;
};

const Bar = ({ enabled, onSwitch }: BarProps) => {
  const classes = useStyles({});

  return (
    <AppBar position='sticky'>
      <Toolbar>
        <Typography variant='h6' className={classes.title}>
          Women's World Cup
        </Typography>
        <FormControlLabel
          control={<Switch checked={enabled} onChange={(_, enabled) => onSwitch(enabled)} />}
          label='Dark Mode'
        />
      </Toolbar>
    </AppBar>
  );
};

export { Bar };
