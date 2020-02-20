import React from 'react';
import { Row, Col } from 'reactstrap';
import Line from '../../components/Charts/Line';
import Composed from '../../components/Charts/Composed/Composed';
import './Dashboard.scss';

export default function Dashboard() {
  return (
    <div className="Dashboard">
      <Row className="cards">
        <Col className="card">
          <h3>Sales Today</h3>
          <span className="value">1.500</span>
          <span className="info">Since last week</span>
        </Col>
        <Col className="card">
          <h3>Sales Today</h3>
          <span className="value">1.500</span>
          <span className="info">Since last week</span>
        </Col>
        <Col className="card">
          <h3>Sales Today</h3>
          <span className="value">1.500</span>
          <span className="info">Since last week</span>
        </Col>
        <Col className="card">
          <h3>Sales Today</h3>
          <span className="value">1.500</span>
          <span className="info">Since last week</span>
        </Col>
      </Row>
      <Row>
        <Col className="chartArea" xs={6}>
          <Composed />
        </Col>
        <Col className="chartArea" xs={4}>
          <Line />
        </Col>
      </Row>
    </div>
  );
}
