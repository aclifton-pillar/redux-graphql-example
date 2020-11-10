import React, { Fragment } from 'react';
import { Router } from '@reach/router';

import Launch from './launch';
import Launches from './launches';
import Cart from './cart';
import ProfileConnector from './profile-connector';
import { Footer, PageContainer } from '../components';

export default function Pages() {
  return (
    <Fragment>
      <PageContainer>
        <Router primary={false} component={Fragment}>
          <Launches path="/" />
          <Launch path="launch/:launchId" />
          <Cart path="cart" />
          <ProfileConnector path="profile" />
        </Router>
      </PageContainer>
      <Footer />
    </Fragment>
  );
}
