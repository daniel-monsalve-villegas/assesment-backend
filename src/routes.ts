import { Application } from 'express';
import user from './user';
import list from './list';

function routes(app: Application): void {
  app.use('/api/users', user);
  /* app.use('/api/list', list); */
}

export default routes;
