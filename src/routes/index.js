import { PAGE_ACCESS } from 'configs/constants';
import posts from './posts';
import home from './home';

const routes = [
  {
    ...home,
    access: PAGE_ACCESS.public,
  },
  {
    ...posts,
    access: PAGE_ACCESS.private,
  },
];

export default routes;
