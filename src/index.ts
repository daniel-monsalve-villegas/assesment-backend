import * as dotenv from 'dotenv';

// load environment variables
dotenv.config();

import express from 'express';
import connectDb from './config/database';
import routes from './routes';
import configExpress from './config/express';

// initialize express
const app = express();

// Check if there an environment variable with the port of use one by default
const port = process.env.PORT || 8080;

// Setup express
configExpress(app);

// Connect to MongoDB
connectDb();

// Use routes function to simplify call to direction
routes(app);

// Check if express is running
app.listen(port, () => {
  console.log(`Server is running in port ${port}`);
});
