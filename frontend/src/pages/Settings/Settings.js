import React, { useRef, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import {
  Row, Col, Label, Button,
} from 'reactstrap';
import Section from '../../components/Layout/Section';
import Input, { Form } from '../../components/Form/Input';
import schemas, { setErrors } from '../../config/schemas';
import Avatar from '../../components/Avatar';
import './Settings.scss';

export default function Settings() {
  const {
    loggedUser,
  } = useSelector((state) => state.base);
  const [preview, setPreview] = useState('');

  const formRef = useRef(null);

  const handlePreview = useCallback((e) => {
    const file = e.target.files[0];
    if (!file) {
      setPreview(null);
      return;
    }

    const previewURL = URL.createObjectURL(file);
    formRef.current.setFieldValue('photo', e.target.result);
    setPreview(previewURL);
  }, []);

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
        <Form
          ref={formRef}
          initialData={loggedUser}
          onSubmit={handleSubmit}
        >
          <div className="center">
            <Avatar img={preview || loggedUser.photo} />
            <Label htmlFor="upload-photo">Select Photo</Label>
            <input onChange={handlePreview} type="file" name="img" id="upload-photo" />
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
