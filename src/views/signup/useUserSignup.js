import { useState } from 'react';
import { userSignupPost } from 'api/user';
import { toast } from 'react-toastify';

function useUserSignup() {
  const [isSigningup, setIsSigningup] = useState(false);

  async function onSignup(data) {
    setIsSigningup(true);

    try {
      await userSignupPost(data);

      toast.success('Successfully created a user!');
    } catch (e) {
      toast.error('Something went wrong!');
    } finally {
      setIsSigningup(false);
    }
  }

  return { isSigningup, onSignup };
}

export default useUserSignup;
