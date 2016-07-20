import React, { Component } from 'react';
import { Button } from 'react-toolbox/lib/button';
import { Link } from 'react-router';
import Pandora from '../api/pandora';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Button label="Hello World!" />
      </div>
    );
  }
}
