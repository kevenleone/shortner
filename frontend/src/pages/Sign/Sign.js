import React from 'react';
import { useSelector } from 'react-redux';
import { If, Then, Else } from 'react-if';
import { SignIn, SignUp } from '../../components/Sign';
import Logo from '../../assets/images/short2.png';

import './Sign.scss';

export default function Sign() {
  const { pageType } = useSelector((state) => state.user);
  return (
    <div className="Sign">
      <div className="left">
        <img alt="company" src={Logo} />
      </div>
      <div className="right">
        <div className="content">
          <span>Welcome to Shortner</span>
          <If condition={pageType === 'SignIn'}>
            <Then>
              <SignIn />
            </Then>
            <Else>
              <SignUp />
            </Else>
          </If>
        </div>
      </div>
    </div>
  );
}
