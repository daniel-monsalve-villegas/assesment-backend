import { NextFunction, Request, Response } from 'express';
import { verifyToken } from '../auth/local.services';
import { AuthRequest } from '../auth/local.types';
import {
  getAllLists,
  getList,
  createList,
  deleteList,
  updateList,
} from './list.services';

export async function handleGetAllLists(req: Request, res: Response) {
  try {
    const lists = await getAllLists();
    return res.status(200).json(lists);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
}

export async function handleGetList(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const list = await getList(id);

    if (!list) {
      return res.status(404).json({ message: 'List not found' });
    }

    return res.status(200).json(list);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
}

export async function handleCreateList(req: AuthRequest, res: Response) {
  const data = req.body;
  const user = req.user;

  try {
    const list = await createList({ ...data, userId: user?._id });
    console.log(list);

    return res.status(201).json(list);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function handleUpdateList(req: AuthRequest, res: Response) {
  const { id } = req.params;
  const data = req.body;

  try {
    const list = await updateList(id, data);

    if (!list) {
      return res.status(404).json({ message: 'List not found' });
    }
    return res.status(200).json(list);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function handleDeleteList(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;

  console.log('comprueba');

  try {
    const list = await deleteList(id);

    if (!list) {
      return res.status(400).json({ message: 'List not found' });
    }
    return res.status(200).json({ message: 'List deleted' });
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
}
