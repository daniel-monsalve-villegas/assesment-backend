import { Request, Response } from 'express';
import {
  getAllLists,
  getList,
  createList,
  updateList,
  deleteList,
} from './list.services';

export async function handleGetAllLists(req: Request, res: Response) {
  const lists = await getAllLists();

  return res.status(200).json(lists);
}
export async function handleGetList(req: Request, res: Response) {
  const { id } = req.params;

  const list = await getList(id);

  if (!list) {
    return res.status(404).json({ message: 'List not found' });
  }

  return res.status(200).json(list);
}

export async function handleCreateList(req: Request, res: Response) {
  const data = req.body;

  try {
    const list = await createList(data);
    return res.status(201).json(list);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function handleUpdateList(req: Request, res: Response) {
  const { id } = req.params;
  const { title, description, link, name } = req.body;

  const list = await updateList(id, { title, description, link, name });

  if (!list) {
    return res.status(404).json({ message: 'List not found' });
  }

  return res.status(200).json(list);
}

export async function handleDeleteList(req: Request, res: Response) {
  const { id } = req.params;

  const list = await deleteList(id);

  if (!list) {
    return res.status(404).json({ message: 'List not found' });
  }

  return res.status(200).json(list);
}
