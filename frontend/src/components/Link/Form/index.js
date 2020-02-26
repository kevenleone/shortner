import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Row, Col, Button,
} from 'reactstrap';
import Modal, { Footer } from '../../Modal';
import { Input, Select, DatePicker, Form } from '../../Form';
import schemas, { setErrors } from '../../../config/schemas';
import { constants } from '../../../utils';

const { selectBoolean, countries: countriesList } = constants;
const countries = countriesList.map(({code: value, emoji, name}) => ({ value, label: `${emoji} ${name}` }));

export default function LinkForm({ dispatchType, initialData, showModal, setShowModal, items }) {
  const dispatch = useDispatch();
  const formRef = useRef(null);

  useEffect(() => {
    setShowModal(false);
  }, [items, setShowModal]);

  async function handleSubmit(data) {
    try {
      await schemas.shortner.basic.validate(data, { abortEarly: false });
      const payload = {
        initialData,
        body: {
          ...data,
          active: !!data.active,
          ...( data.expires_in && { expires_in: new Date(data.expires_in).toISOString() } ),
        }
      }
      dispatch({ type: dispatchType, payload });
    } catch (e) {
      console.log(e)
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
          initialData={initialData}
        >
          <Input 
            label="Original URL" 
            name="url" 
          />
          <Row>
            <Col>
              <Input
                type="number" 
                label="Hits Limit" 
                name="hits_limit" />
            </Col>
            <Col>
              <DatePicker 
                label="Expires In" 
                name="expires_in" 
              />
            </Col>
          </Row>
          <Select 
            label="Not available in" 
            isMulti 
            name="not_available_in" 
            options={countries} 
          />
           <Select 
            label="Link is active ?" 
            name="active"
            defaultValue={selectBoolean[0]} 
            options={selectBoolean} 
          />
          <Footer toggle={() => setShowModal(false)}>
            <Button outline color="info" type="submit">Save</Button>
          </Footer>
        </Form>
      </Modal>
    </div>
  );
}

LinkForm.propTypes = {
  showModal: PropTypes.bool,
  setShowModal: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.object),
};

LinkForm.defaultProps = {
  showModal: false,
  items: [],
};
