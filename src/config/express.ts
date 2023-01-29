import express, { Application } from 'express';
import morgan from 'morgan';

function configExpress(app: Application): void {
  // Config to get data to req.body
  app.use(express.json());

  // Config morgan to see in console functions used and debugging
  app.use(morgan('dev'));
}

export default configExpress;
