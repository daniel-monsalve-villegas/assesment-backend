import { Application } from 'express';
import user from './user';
import list from './list';
import authLocal from './auth';

// Declare routes to access differente models
function routes(app: Application): void {
  app.use('/api/users', user);
  app.use('/api/list', list);

  // auth routes
  app.use('/auth/local', authLocal);
}

export default routes;
