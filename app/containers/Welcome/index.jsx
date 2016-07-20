import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router';
import { Button } from 'react-toolbox/lib/button';
import '!style!css!sass!./_style.scss';

export default class WelcomePage extends Component {

  goto(options) {
    hashHistory.push('/' + options.location);
  }

  render() {
    return (
      <main className={'page-welcome'}>
        <h1>Welcome to Pyxis</h1>
        <h2>The unofficial Pandora desktop application</h2>
        <Button onClick={this.goto({location: 'home'})}>
          Sign In
        </Button>
      </main>
    );
  }
}
