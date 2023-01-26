import * as dotenv from 'dotenv';
import express from 'express';
import connectDb from './config/database';
import routes from './routes';

// load environment variables
dotenv.config();

// initialize express
const app = express();

app.use(express.json);

// connect to database through mongoose
connectDb();
// use routes function to simplify call to direction
routes(app);

// check if express is running
app.listen(8080, () => {
  console.log('Server is running in port 8080');
});
