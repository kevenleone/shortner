import React, { useState, useEffect } from 'react';
import {
  EuiButton,
  EuiButtonEmpty,
  EuiModalFooter,
  EuiModalBody,
  EuiForm,
  EuiModalHeaderTitle,
  EuiModalHeader,
  EuiOverlayMask,
  EuiFieldText,
  EuiFormRow,
  EuiModal,
  EuiSwitch,
  EuiDatePicker,
} from '@elastic/eui';

import { When } from 'react-if';
import { useSelector, useDispatch } from 'react-redux';

export default function Add() {
  const { shortners } = useSelector((state) => state.shortner);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(true);

  const [form, setForm] = useState({ url: '', active: false, expires_in: null });

  console.log(showModal)

  function handleChange({ target: { name, value, checked } }) {
    form[name] = name === 'active' ? checked : value;
    setForm({ ...form });
  }

  useEffect(() => {
    if (showModal) {
      // setShowModal(false);
    }
  }, [shortners]);

  function handleSubmit() {
    if (form.url) {
      // dispatch({
      //   type: 'ADD_SHORTNER_SAGA',
      //   payload: form,
      // });
    }
  }

  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <EuiButton onClick={() => setShowModal(true)} fill>
        Create Shortner
        </EuiButton>
      </div>
      <When condition={showModal}>
        <EuiOverlayMask>
          <EuiModal
            onClose={() => setShowModal(false)}
            initialFocus="[name=popswitch]"
            maxWidth={600}
          >
            <EuiModalHeader>
              <EuiModalHeaderTitle>Add Shortner</EuiModalHeaderTitle>
            </EuiModalHeader>

            <EuiModalBody>
              <EuiForm>
              <EuiFormRow>
                  <EuiSwitch
                    name="active"
                    label="The link is active?"
                    checked={form.active}
                    onChange={handleChange}
                  />
                </EuiFormRow>
                <EuiFormRow>
                <EuiDatePicker
                  showTimeSelect
                  name="expires_in"
                  selected={form.expires_in}
                  onChange={handleChange}
                  placeholder="Placeholder text"
                />

                </EuiFormRow>
                <EuiFormRow label="A link to short">
                  <EuiFieldText
                    name="url"
                    value={form.url}
                    onChange={handleChange}
                  />
                </EuiFormRow>

              
              </EuiForm>
            </EuiModalBody>

            <EuiModalFooter>
              <EuiButtonEmpty onClick={() => setShowModal(false)}>Cancel</EuiButtonEmpty>

              <EuiButton onClick={handleSubmit} fill>
                Save
              </EuiButton>
            </EuiModalFooter>
          </EuiModal>
        </EuiOverlayMask>
      </When>
    </div>
  );
}
