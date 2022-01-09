import React, {
  createContext,
  useState,
  useContext,
  useEffect,
} from 'react';
import { authLogin } from 'api/auth';
import PropTypes from 'prop-types';
import swal from 'sweetalert2';
import { AUTH_COOKIE_NAME } from 'configs/constants';
import cookies from 'utils/cookies';

const AuthContext = createContext({});

function AuthProvider(props) {
  const { children } = props;

  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isAuth, setAuth] = useState(!!cookies.get(AUTH_COOKIE_NAME));

  useEffect(
    () => () => {
      setAuth(null);
      setIsLoggingIn(null);
    },
    [],
  );

  async function login(formData) {
    try {
      setIsLoggingIn(true);
      const { data } = await authLogin(formData);
      const { token } = data;

      const today = new Date();
      today.setHours(today.getHours() + 2);
      cookies.set(AUTH_COOKIE_NAME, token, { expires: today });
      setAuth(true);
    } catch (e) {
      await swal.fire({
        title: 'Error!',
        text: `${e.message}`,
        icon: 'error',
      });
    }
    setIsLoggingIn(false);
  }

  function logout() {
    cookies.remove(AUTH_COOKIE_NAME);
    setAuth(false);
  }

  return (
    <AuthContext.Provider
      value={{ isAuth, login, logout, isLoggingIn }}
    >
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const useAuth = () => useContext(AuthContext);

export { AuthContext, AuthProvider, useAuth };
