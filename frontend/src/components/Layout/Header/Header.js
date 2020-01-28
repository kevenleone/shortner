import React, { Component } from 'react';

import {
  EuiHeader,
  EuiHeaderSectionItem,
  EuiHeaderLogo,
  EuiHeaderLinks,
  EuiHeaderLink,
  EuiHeaderSection,
  EuiHeaderSectionItemButton,
  EuiIcon,
} from '@elastic/eui';

// import Logo from '../../../assets/images/logo.svg';

import './Header.scss';

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAppMenuOpen: false,
    };
  }

  render() {
    return (
      <div className="Header">
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
              <EuiHeaderSectionItemButton aria-label="Search">
                <EuiIcon type="search" size="m" />
              </EuiHeaderSectionItemButton>
            </EuiHeaderSectionItem>
          </EuiHeaderSection>
        </EuiHeader>
      </div>
    );
  }
}
