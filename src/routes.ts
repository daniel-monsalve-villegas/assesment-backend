import user from './user';
import list from './list';

function routes(app) {
  app.use('/api/users', user);
  app.use('/api/list', list);
}

export default routes;
