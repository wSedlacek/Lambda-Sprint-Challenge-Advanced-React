import React from 'react';
import { Card, CardContent, Typography, makeStyles } from '@material-ui/core';
import { Player } from '../../models/Player';

const useStyles = makeStyles({
  root: {
    margin: 10,
  },
});

type PlayerCardProps = {
  player: Player;
};

const PlayerCard = ({ player }: PlayerCardProps) => {
  const classes = useStyles({});

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant='h4'>{player.name}</Typography>
        <Typography variant='subtitle1' gutterBottom>
          {player.country}
        </Typography>
      </CardContent>
    </Card>
  );
};

export { PlayerCard };
