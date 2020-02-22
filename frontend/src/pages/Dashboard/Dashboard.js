import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'reactstrap';
import { When } from 'react-if';

import Section from '../../components/Layout/Section';
import charts from '../../config/charts';
import './Dashboard.scss';

export default function Dashboard() {
  const { dashboard } = useSelector((state) => state.shortner);
  return (
    <div className="Dashboard">
      <Row>
        { charts.map(({
          key, title, cols, render: { Component, props },
        }) => (
          <Col key={key} {...cols}>
            <Section title={title} className="mb-5">
              <When condition={!!Component}>
                <Component data={dashboard[key] ? dashboard[key].data : null} {...props} />
              </When>
            </Section>
          </Col>
        ))}
      </Row>
    </div>
  );
}
