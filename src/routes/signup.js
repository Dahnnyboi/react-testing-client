import loadable from '@loadable/component';

const posts = {
  path: '/signup',
  Component: loadable(() => import('views/signup')),
};

export default posts;
