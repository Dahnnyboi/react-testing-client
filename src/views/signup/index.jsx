import React from 'react';
import { PublicPage } from '@/components/pages';
import SignupForm from './SignupForm';
import useUserSignup from './useUserSignup';

function Index() {
  const { isSigningup, onSignup } = useUserSignup();

  return (
    <PublicPage className="d-flex justify-content-center align-items-center">
      <SignupForm onSubmit={onSignup} isSubmitting={isSigningup} />
    </PublicPage>
  );
}

export default Index;
