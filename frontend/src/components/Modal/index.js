import React from 'react';
import {
  Modal, ModalBody, ModalHeader, ModalFooter,
} from 'reactstrap';

export default function index() {
  return (
    <Modal isOpen size="lg">
      <ModalHeader>Oi</ModalHeader>
      <ModalBody>
        Oi
        <ModalFooter>
          oi
        </ModalFooter>
      </ModalBody>
    </Modal>
  );
}
