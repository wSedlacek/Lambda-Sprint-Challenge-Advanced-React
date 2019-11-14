import React from 'react';
import axios from 'axios';

import { CircularProgress } from '@material-ui/core';

import { Player } from '../../models/Player';
import { PlayerCard } from '../../components/player-card/player-card.component';

type PlayersPageProps = {};
type PlayersPageState = { players: Player[] };

class PlayersPage extends React.Component<PlayersPageProps, PlayersPageState> {
  private _isMounted = false;

  constructor(props: PlayersPageProps) {
    super(props);
    this.state = {
      players: [],
    };
  }

  componentDidMount() {
    this._isMounted = true;
    axios
      .get<Player[]>('http://localhost:5000/api/players')
      .then((res) => res.data)
      .then((players) => {
        if (this._isMounted) {
          this.setState({ players });
        }
      });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { players } = this.state;
    if (players.length === 0)
      return <CircularProgress data-testid='loading' variant='indeterminate' />;
    return players.map((player) => <PlayerCard player={player} key={player.id} />);
  }
}

export { PlayersPage };
