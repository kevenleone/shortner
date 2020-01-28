import React from 'react';
import { Row, Col } from 'reactstrap';
import Logo from '../../assets/images/logo.svg';
import Instagram from '../../assets/images/icon-instagram.svg';
import Facebook from '../../assets/images/icon-facebook.svg';
import Twitter from '../../assets/images/icon-twitter.svg';

import './Footer.scss';

export default function Footer() {
  return (
    <div className="Footer">
      <Row>
        <Col xs={3}>
          <img className="logo" alt="logo shortly" src={Logo} />
        </Col>
        <Col>
          <h5>Features</h5>
          <div className="links">
            <a href="/">Link Shortening</a>
            <a href="/">Branded Links</a>
            <a href="/">Analytics</a>
          </div>
        </Col>
        <Col>
          <h5>Resources</h5>
          <div className="links">
            <a href="/">Link Shortening</a>
            <a href="/">Branded Links</a>
            <a href="/">Analytics</a>
          </div>
        </Col>
        <Col>
          <h5>Company</h5>
          <div className="links">
            <a href="/">Link Shortening</a>
            <a href="/">Branded Links</a>
            <a href="/">Analytics</a>
          </div>
        </Col>
        <Col className="social-medias">
          <img alt="social-media-facebook" src={Facebook} />
          <img alt="social-media-instagram" src={Instagram} />
          <img alt="social-media-twitter" src={Twitter} />
        </Col>

      </Row>


    </div>
  );
}
