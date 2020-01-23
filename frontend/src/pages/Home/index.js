import React, { useState } from "react";
import { Row, Col, Container, Input, Label, Button, Alert } from "reactstrap";
import api, { baseURL } from "../../services/api";
import "./Home.scss";

export default function Home() {
  const [link, setLink] = useState('');
  const [short, setShort] = useState('');

  async function handleSubmit() {
    if (link) {
     try {
      const response = await api.post('/api/shortner', { link });
      const redirectURL = `${baseURL}/${response.data.short}`
      setShort(redirectURL);
     } catch (e) {
      console.log(e.message);
     }
    }
  } 

  return (
    <div className="HomeScreen mt-3">
      <Container>
        { short && (
            <Row>
              <Alert color="success"> Olá, seu link encurtado é <a href={short}> {short} </a> </Alert>
            </Row>
          )}
        
        <Row>
          <Col xs={9}>
            <Label for="link">Qual link gostaria de encurtar ?</Label>
            <Input 
              name="link" 
              id="link" 
              placeholder="https://google.com.br" 
              value={link}
              onChange={({ target: { value } }) => setLink(value) } 
            />
          </Col>
          <Col className='btn-short'>
            <Button 
              onClick={handleSubmit} 
              color="primary">Encurtar</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
