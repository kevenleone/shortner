import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  Row, Col, Label, Button,
} from 'reactstrap';
import Modal, { Footer } from '../../Modal';
import Input, { Form } from '../../Form/Input';
import schemas, { setErrors } from '../../../config/schemas';

export default function LinkForm({ showModal, setShowModal, items }) {
  const dispatch = useDispatch();
  const formRef = useRef(null);

  useEffect(() => {
    if (showModal) {
      setShowModal(false);
    }
  }, [items]);

  async function handleSubmit(payload) {
    try {
      await schemas.shortner.basic.validate(payload, { abortEarly: false });
      dispatch({
        type: 'ADD_SHORTNER_SAGA',
        payload,
      });
    } catch (e) {
      setErrors(e, formRef);
    }
  }

  return (
    <div className="mt-3">
      <Modal
        show={showModal}
        title="Link Management"
      >
        <Form
          ref={formRef}
          onSubmit={handleSubmit}
          initialData={{ active: true, hits_limit: 0 }}
        >
          <Input label="Original URL" name="url" />
          <Row>
            <Col>
              <Input label="Hits Limit" name="hits_limit" />
            </Col>
            <Col>
              <Input type="datetime-local" label="Expires In" name="expires_in" />
            </Col>
          </Row>
          <Row>
            <Col className="ml-4" style={{ display: 'flex' }}>
              <Input type="checkbox" name="expires_in" id="expires_in" />
              <Label htmlFor="expires_in">Active</Label>
            </Col>
          </Row>
          <Footer toggle={() => setShowModal(false)}>
            <Button outline color="info" type="submit">Salvar</Button>
          </Footer>
        </Form>
      </Modal>
    </div>
  );
}
