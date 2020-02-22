import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import {
  Row, Col, Label, Button,
} from 'reactstrap';
import Section from '../../components/Layout/Section';
import Input, { Form } from '../../components/Form/Input';
import schemas, { setErrors } from '../../config/schemas';
import './Settings.scss';

export default function Settings() {
  const {
    loggedUser,
  } = useSelector((state) => state.base);

  const formRef = useRef(null);

  function handleLoadPreview(e) {
    const output = document.getElementById('output');
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      formRef.current.setFieldValue('photo', e.target.result);
    };
    output.src = URL.createObjectURL(file);
  }

  async function handleSubmit(data) {
    try {
      await schemas.user.update.validate(data, { abortEarly: false });
    } catch (err) {
      setErrors(err, formRef);
    }
  }

  return (
    <div className="Settings">
      <Section title="User Settings">
        <Form ref={formRef} initialData={loggedUser} onSubmit={handleSubmit}>
          <div className="center">
            <img src={loggedUser.photo} className="avatar" alt="" id="output" />
            <br />
            <Label htmlFor="upload-photo">Select Photo</Label>
            <input onChange={handleLoadPreview} type="file" name="img" id="upload-photo" />
          </div>
          <Row>
            <Col>
              <Input label="Name" name="username" />
            </Col>
            <Col>
              <Input label="Email" name="email" />
            </Col>
          </Row>
          <Input label="Organization" name="organization" />
          <Input type="hidden" name="photo" />
          <Button type="submit">Save</Button>
        </Form>
      </Section>
    </div>
  );
}
