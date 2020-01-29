import React, { Component } from 'react';

import {
  EuiHeader,
  EuiHeaderSectionItem,
  EuiHeaderLogo,
  EuiHeaderLinks,
  EuiHeaderLink,
  EuiHeaderSection,
} from '@elastic/eui';

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
            <EuiHeaderLinks>
              <EuiHeaderLink iconType="user" href="/sign">Sign In</EuiHeaderLink>
            </EuiHeaderLinks>
          </EuiHeaderSection>
        </EuiHeader>
      </div>
    );
  }
}
