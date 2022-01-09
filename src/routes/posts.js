import loadable from '@loadable/component';

const posts = {
  path: '/posts',
  Component: loadable(() => import('views/posts')),
};

export default posts;
