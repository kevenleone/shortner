import React, { useState } from 'react';
import { When } from 'react-if';

import {
  EuiHeader,
  EuiHeaderSectionItem,
  EuiHeaderLogo,
  EuiHeaderLinks,
  EuiHeaderLink,
  EuiHeaderSection,
  EuiConfirmModal,
  EuiOverlayMask,
  EuiHeaderSectionItemButton,
  EuiIcon,
} from '@elastic/eui';

import './Header.scss';

export default function Header() {
  const [showModal, setShowModal] = useState(false);

  function handleLogout() {
    localStorage.removeItem('@token');
    localStorage.removeItem('@me');
    window.location.href = '/sign';
  }

  return (
    <div className="Header">
      <When condition={showModal}>
        <EuiOverlayMask>
          <EuiConfirmModal
            title="Do you want to leave?"
            onCancel={() => setShowModal(false)}
            onConfirm={handleLogout}
            cancelButtonText="No, don't do it"
            confirmButtonText="Yes, do it"
            defaultFocusedButton="confirm"
          />
        </EuiOverlayMask>
      </When>
      <EuiHeader className="header-eui">
        <EuiHeaderSectionItem border="right">
          <EuiHeaderLogo href="#">Shortly</EuiHeaderLogo>
        </EuiHeaderSectionItem>

        <EuiHeaderLinks>
          <EuiHeaderLink href="#" isActive>
            Docs
          </EuiHeaderLink>
          <EuiHeaderLink href="#">Code</EuiHeaderLink>
          <EuiHeaderLink iconType="help" href="#">
            Help
          </EuiHeaderLink>
        </EuiHeaderLinks>
        <EuiHeaderSection side="right">
          <EuiHeaderSectionItem>
            <EuiHeaderSectionItemButton aria-label="Search" onClick={() => setShowModal(true)}>
              <EuiIcon type="exit" size="m" />
            </EuiHeaderSectionItemButton>
          </EuiHeaderSectionItem>
        </EuiHeaderSection>
      </EuiHeader>
    </div>
  );
}
