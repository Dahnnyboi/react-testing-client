import React from 'react';
import { PublicPage } from 'components/pages';
import HomeLogin from './HomeLogin';

function Index() {
  return (
    <PublicPage className="d-flex justify-content-center align-items-center">
      <HomeLogin />
    </PublicPage>
  );
}

export default Index;
