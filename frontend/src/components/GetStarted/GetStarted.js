import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import Illustration from '../../assets/images/illustration-working.svg';
import './GetStarted.scss';

export default function GetStarted() {
  return (
    <div className="GetStarted">
      <Row>
        <Col className="texts">
          <h1>More than just shortner links</h1>
          <p>
            Build your brand's recognition and get detailed insights on
            <br />
            {' '}
            how your links are perfoming.
          </p>
          <Button outline size="lg">
            Get Started
          </Button>
        </Col>
        <Col className="mr-5 illustration">
          <img alt="illustration" src={Illustration} />
        </Col>
      </Row>
    </div>
  );
}
