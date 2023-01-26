import user from './user';

function routes(app) {
  app.use('/api/users', user);
}

export default routes;
