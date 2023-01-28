import { Router } from 'express';

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
router.get('/', handleGetAllLists);

// GET /api/list/:id
router.get('/:id', handleGetList);

// POST /api/list
router.post('/', handleCreateList);

// PATCH /api/list/:id
router.patch('/:id', handleUpdateList);

// DELETE /api/list/:id
router.delete('/:id', handleDeleteList);

export default router;
