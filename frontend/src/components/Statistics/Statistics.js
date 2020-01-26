import React from 'react';
import './Statistics.scss';
import Recognition from '../../assets/images/icon-brand-recognition.svg';
import Records from '../../assets/images/icon-detailed-records.svg';
import Customized from '../../assets/images/icon-fully-customizable.svg';


export default function Statistics() {
  return (
    <div className="Statistics">
      <h1>Advanced Statistics</h1>
      <p>
        Track how your links are performing across the web with
        {' '}
        <br />
        {' '}
        our advanced statistics dashboard
      </p>

      <hr />

      <div className="boxes">
        <div className="box">
          <div className="imgbox">
            <img alt="customized" src={Recognition} />
          </div>
          <h2>Brand Recognition</h2>
          <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis consectetur eligendi quaerat iure eum, quia aut eius quod, voluptates reiciendis doloribus atque dolores impedit eveniet quis esse fugiat amet ullam?
          </span>
        </div>
        <div className="box">
          <div className="imgbox">
            <img alt="customized" src={Records} />
          </div>

          <h2>Detailed Records</h2>
          <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis consectetur eligendi quaerat iure eum, quia aut eius quod, voluptates reiciendis doloribus atque dolores impedit eveniet quis esse fugiat amet ullam?
          </span>
        </div>
        <div className="box">
          <div className="imgbox">
            <img alt="customized" src={Customized} />
          </div>
          <h2>Fully Customized</h2>
          <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis consectetur eligendi quaerat iure eum, quia aut eius quod, voluptates reiciendis doloribus atque dolores impedit eveniet quis esse fugiat amet ullam?
          </span>
        </div>
      </div>
    </div>
  );
}
