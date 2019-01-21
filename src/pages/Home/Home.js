import React, { Component } from 'react';
import './Home.scss';
import YouTube from '../../components/youTube/YouTube';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {


  render() {
    return (
      <div>
        <div className="introduction">
          <div className="slogan-container">
            <div className="app-name">PROMIX</div>
            <div className="slogan">!המשכנתא שלך, בדרך שלך</div>
          </div>

          <div className="descriptive-slogan-container">
            <span className="descriptive-slogan">
              השווה
              <Link
                style={{ display: 'block', height: '100%' }}
                to="/Application"
              >
                כאן
              </Link>
              בין כל המשכנתאות בארץ וחסוך עשרות אלפי שקלים
            </span>
          </div>
          <div className="button-container">
            <button
              className="action-button"
            >
              <Link
                style={{ display: 'block', height: '100%' }}
                to="/Application"
              >
                !לחץ כאן והתחל להשוות
              </Link>
            </button>
          </div>
        </div>
        <div className="interdiction-video">
          <YouTube video="mYFaghHyMKc" autoplay="0" rel="0" modest="1" />
        </div>
      </div>
    );
  }
}
