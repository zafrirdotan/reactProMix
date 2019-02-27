import React, { Component } from 'react';
import './Home.scss';
import YouTube from '../../components/youTube/YouTube';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

import Dialog from '@material-ui/core/Dialog';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDialogOpen: false,
    };
  }

  handleClickOpen = () => {
    this.setState({ isDialogOpen: true });
  };

  handleClose = () => {
    this.setState({ isDialogOpen: false });
  };

  render() {
    return (
      <div className="home-page-container">
        <div className="container-1">
          <div className="slogan-box">
            <h1 className="slogan">המשכנתא שלך, בדרך שלך</h1>
          </div>
          <div className="descriptive-box">
            <h2 className="descriptive">
              השווה בין כל המשכנתאות בארץ וחסוך עשרות אלפי שקלים
            </h2>
          </div>
          <div className="button-container">
            <Link
              style={{ display: 'block', height: '100%' }}
              to="/Application"
            >
              <Button
                className="action-button"
                color="primary"
                variant="contained"
              >
                !לחץ כאן והתחל להשוות
              </Button>
            </Link>
          </div>
          <div className="interdiction-video">
            <div className="video-button">
              <Button onClick={this.handleClickOpen}>
                <Icon fontSize="large" color="primary">
                  play_circle_filled_white
                </Icon>
                <div className="text"> צפה בסרטון</div>
              </Button>
            </div>
            <Dialog
              open={this.state.isDialogOpen}
              onClose={this.handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <div className="dialog">
                <YouTube video="mYFaghHyMKc" autoplay="0" rel="0" modest="1" />
              </div>
            </Dialog>
          </div>
        </div>
      </div>
    );
  }
}
