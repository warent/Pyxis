import React, { Component } from 'react';
import { Button } from 'react-toolbox/lib/button';
import { AppBar } from 'react-toolbox/lib/app_bar';
import { Navigation } from 'react-toolbox/lib/navigation';
import { Link } from 'react-router';
import SongCard from '../../components/SongCard';
import '!style!css!sass!./_style.scss';

export default class HomePage extends Component {
  render() {
    return (
      <main>
        <SongCard
          trackName="Elixer's Burden"
          artistName="Random Rab"
          albumName="Visurreal"
          albumArt={'http://randomrab.com/wp-content/uploads/2011/12/Random_Rab-Visurreal_Cover1-1024x920.jpg'}
          />
        <SongCard
          trackName="Elixer's Burden"
          artistName="Random Rab"
          albumName="Visurreal"
          albumArt={'http://randomrab.com/wp-content/uploads/2011/12/Random_Rab-Visurreal_Cover1-1024x920.jpg'}
          />
      </main>
    );
  }
}
