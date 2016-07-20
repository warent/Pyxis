import React, { Component } from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import { Button } from 'react-toolbox/lib/button';
import 'font-awesome/css/font-awesome.css';
import '!style!css!sass!./_style.scss';


export default class SongCard extends Component {
  render() {
    return (
      <Card style={{ width: '350px' }}>
        <CardText>{this.props.trackName}</CardText>
        <CardMedia
          aspectRatio="wide"
          image={this.props.albumArt}
        />
        <CardTitle
          avatar="https://placeimg.com/80/80/animals"
          title={'Artist: ' + this.props.artistName}
          subtitle={'Album: ' + this.props.albumName}
        />
        <CardActions className='SongCardActions'>
          <Button><i className={'fa fa-fw fa-thumbs-up'}></i></Button>
          <Button><i className={'fa fa-fw fa-thumbs-down'}></i></Button>
        </CardActions>
      </Card>
    );
  }
};
