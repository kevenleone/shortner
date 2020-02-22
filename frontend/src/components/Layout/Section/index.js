import React from 'react';
import {
  Card, CardBody, CardHeader, CardTitle,
} from 'reactstrap';

export default function index({ children, title }) {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>
            {title}
          </CardTitle>
        </CardHeader>
        <CardBody>
          { children }
        </CardBody>
      </Card>
    </div>
  );
}
