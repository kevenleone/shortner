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
} from '@elastic/eui';

import { When } from 'react-if';
import { useSelector, useDispatch } from 'react-redux';

export default function Add() {
  const { shortners } = useSelector((state) => state.shortner);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [active, setActive] = useState(false);
  const [originalLink, setOriginalLink] = useState('');

  useEffect(() => {
    if (showModal) {
      setShowModal(false);
    }
  }, [shortners]);

  function handleSubmit() {
    if (originalLink) {
      dispatch({
        type: 'ADD_SHORTNER_SAGA',
        payload: { original_link: originalLink, active },
      });
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
                <EuiFormRow label="A link to short">
                  <EuiFieldText
                    name="original_link"
                    value={originalLink}
                    onChange={({ target: { value } }) => setOriginalLink(value)}
                  />
                </EuiFormRow>

                <EuiFormRow>
                  <EuiSwitch
                    name="active"
                    label="The link is active?"
                    checked={active}
                    onChange={({ target: { checked } }) => setActive(checked)}
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
