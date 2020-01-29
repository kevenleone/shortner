import React from 'react';
import { useSelector } from 'react-redux';
import {
  EuiPanel,
  EuiFlexGroup,
  EuiFlexItem,
} from '@elastic/eui';
import { If, Then, Else } from 'react-if';
import { SignIn, SignUp } from '../../components/Sign';

import './Sign.scss';

export default function Sign() {
  const { pageType } = useSelector((state) => state.base);
  return (
    <div className="Sign">
      <EuiFlexGroup justifyContent="center">
        <EuiFlexItem style={{ maxWidth: 1200 }}>
          <EuiPanel
            betaBadgeLabel={pageType}
            className="content"
          >
            <EuiFlexGroup justifyContent="center">
              <EuiFlexItem>
                <img
                  alt="illustration"
                  src="https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
                />
              </EuiFlexItem>
              <EuiFlexItem style={{ marginTop: 40 }}>
                <If condition={pageType === 'SignIn'}>
                  <Then>
                    <SignIn />
                  </Then>
                  <Else>
                    <SignUp />
                  </Else>
                </If>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiPanel>
        </EuiFlexItem>
      </EuiFlexGroup>
    </div>
  );
}
