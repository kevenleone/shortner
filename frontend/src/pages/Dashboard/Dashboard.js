import React from 'react';
import {
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
        icons.map((item) => (
          <EuiFlexItem key={item}>
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
        <div className="chartArea" xs={6}>
          <Composed />
        </div>
        <div className="chartArea" xs={4}>
          <Line />
        </div>
      </div>
    </div>
  );
}
