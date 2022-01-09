import loadable from '@loadable/component';

const home = {
  exact: true,
  path: '/',
  Component: loadable(() => import('views/home')),
};

export default home;
