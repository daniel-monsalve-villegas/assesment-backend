import { Router } from 'express';
import { isAuthenticated } from '../auth/local.services';
import {
  handleCreateUser,
  handleDeleteUser,
  handleGetAllUsers,
  handleGetUser,
  handleUpdateUser,
} from './user.controller';

const router = Router();

// RESTful API

// GET /api/users
router.get('/', handleGetAllUsers);

// GET /api/users/:id
router.get('/:id', isAuthenticated, handleGetUser);

// POST /api/users
router.post('/', handleCreateUser);

// PATCH /api/users/:id
router.patch('/:id', isAuthenticated, handleUpdateUser);

// DELETE /api/users/:id
router.delete('/:id', isAuthenticated, handleDeleteUser);

export default router;
