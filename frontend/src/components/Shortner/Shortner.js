import React, { useState } from 'react';
import {
  Row, Col, Input, Button,
} from 'reactstrap';
import api, { baseURL } from '../../services/api';
import './Shortner.scss';

export default function Shortner() {
  const [link, setLink] = useState('');
  const [short, setShort] = useState('');

  console.log(short);

  async function handleSubmit() {
    if (link) {
      try {
        const response = await api.post('/api/shortner', { link });
        const redirectURL = `${baseURL}/${response.data.short}`;
        setShort(redirectURL);
      } catch (e) {
        console.log(e.message);
      }
    }
  }

  return (
    <div className="Shortner">
      <Row className="main">
        <div className="box">
          <div className="form">
            <Input
              className="shortner-input"
              name="link"
              id="link"
              placeholder="Shortner a link here..."
              value={link}
              onChange={({ target: { value } }) => setLink(value)}
            />
            <Button
              className="buttonSubmit"
              onClick={handleSubmit}
            >
            Shorten It
            </Button>
          </div>

        </div>
        <div className="links">
          <Row>
            <Col xs={8}>https://facebook.com/react</Col>
            <Col>
              <a href="https://enct.rlt">
                https://enct.rlt
              </a>
              {' '}
              <Button className="ml-5">Copy</Button>
            </Col>
          </Row>
        </div>
        <div className="links">
          <Row>
            <Col xs={8}>https://facebook.com/react</Col>
            <Col>
              <a href="https://enct.rlt">
                https://enct.rlt
              </a>
              {' '}
              <Button className="ml-5">Copy</Button>
            </Col>
          </Row>
        </div>
        <div className="links">
          <Row>
            <Col xs={8}>https://facebook.com/react</Col>
            <Col>
              <a href="https://enct.rlt">
                https://enct.rlt
              </a>
              {' '}
              <Button className="ml-5">Copy</Button>
            </Col>
          </Row>
        </div>
      </Row>
    </div>
  );
}
