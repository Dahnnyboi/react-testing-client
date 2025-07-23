/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { useAuth } from 'contexts/AuthContext';
import {
  Switch,
  Route,
  withRouter,
  Redirect,
} from 'react-router-dom';
import { PAGE_ACCESS } from 'configs/constants';
import PropTypes from 'prop-types';

function RouteComponent(props) {
  const { access, path, Component, ...rest } = props;
  const { isAuth } = useAuth();

  if (access === PAGE_ACCESS.private && !isAuth) {
    return <Redirect to="/" />;
  }

  if (access === PAGE_ACCESS.public && isAuth) {
    return <Redirect to="/posts" />;
  }

  return (
    <Route
      path={path}
      render={(componentProps) => <Component {...componentProps} />}
      {...rest}
    />
  );
}

function renderRoutes(routes) {
  return (
    <Switch>
      {routes.map((route, index) => {
        const { access, path, Component, ...rest } = route;
        const ComponentWithRouter = withRouter(RouteComponent);

        return (
          <ComponentWithRouter
            key={index}
            access={access}
            path={path}
            Component={Component}
            {...rest}
          />
        );
      })}
    </Switch>
  );
}

RouteComponent.propTypes = {
  access: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  Component: PropTypes.any.isRequired,
};

export default renderRoutes;
