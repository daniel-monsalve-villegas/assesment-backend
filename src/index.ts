import express from 'express';
import connectDb from './config/database';
import { getAllUsers } from './user/user.controller';

const app = express();

connectDb();

app.get('/api/users', async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.listen(8080, () => {
  console.log('Server is running in port 8080');
});
