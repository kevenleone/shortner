import React from 'react';
import { Row, Col } from 'reactstrap';
import {
  EuiPanel,
  EuiCode,
  EuiCard,
  EuiIcon,
  EuiFlexGroup,
  EuiFlexItem,
} from '@elastic/eui';
import Line from '../../components/Charts/Line';
import Composed from '../../components/Charts/Composed/Composed';
import './Dashboard.scss';

const icons = ['Beats', 'Cloud', 'Logging', 'Kibana'];


export default function Dashboard() {
  return (
    <div className="Dashboard">
      <EuiFlexGroup gutterSize="l">
        {
        icons.map((item, index) => (
          <EuiFlexItem key={index}>
            <EuiCard
              icon={<EuiIcon size="xxl" type={`logo${item}`} />}
              title={`Elastic ${item}`}
              isDisabled={item === 'Kibana'}
              description="Example of a card's description. Stick to one or two sentences."
              onClick={() => window.alert('Card clicked')}
            />
          </EuiFlexItem>
        ))
}
      </EuiFlexGroup>

      <div className="charts">
        <Col className="chartArea" xs={6}>
          <Composed />
        </Col>
        <Col className="chartArea" xs={4}>
          <Line />
        </Col>
      </div>
    </div>
  );
}
