import React from 'react';
import {
  Button, Modal, ModalBody, ModalHeader, ModalFooter,
} from 'reactstrap';

import './Modal.scss';

export default function index({
  children, show, title, className,
}) {
  return (
    <div className="ModalArea">
      <Modal className={className} isOpen={show} size="lg">
        <ModalHeader>{title}</ModalHeader>
        <ModalBody>
          {children}
        </ModalBody>
      </Modal>
    </div>
  );
}

export const Footer = ({ children, toggle }) => (
  <ModalFooter>
    { children }
    <Button onClick={toggle}>Close</Button>
  </ModalFooter>
);
