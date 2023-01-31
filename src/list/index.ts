import { Router } from 'express';
import { isAuthenticated } from '../auth/local.services';

import {
  handleGetAllLists,
  handleCreateList,
  handleDeleteList,
  handleGetList,
  handleUpdateList,
} from './list.controller';

const router = Router();

// RESTful API

// GET /api/list
router.get('/', isAuthenticated, handleGetAllLists);

// GET /api/list/:id
router.get('/:id', isAuthenticated, handleGetList);

// POST /api/list
router.post('/', isAuthenticated, handleCreateList);

// PATCH /api/list/:id
router.patch('/:id', isAuthenticated, handleUpdateList);

// DELETE /api/list/:id
router.delete('/:id', isAuthenticated, handleDeleteList);

export default router;
