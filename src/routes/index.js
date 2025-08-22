import { PAGE_ACCESS } from 'configs/constants';
import posts from './posts';
import home from './home';
import signup from './signup';

const routes = [
  {
    ...home,
    access: PAGE_ACCESS.public,
  },
  {
    ...posts,
    access: PAGE_ACCESS.private,
  },
  {
    ...signup,
    access: PAGE_ACCESS.public,
  },
];

export default routes;
