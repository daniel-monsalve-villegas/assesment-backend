import { NextFunction, Request, Response } from 'express';
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUser,
  getUserById,
  updateUser,
} from './user.services';

export async function handleGetAllUsers(req: Request, res: Response) {
  try {
    const users = await getAllUsers();
    return res.status(200).json(users);
  } catch (error: any) {
    console.error(error);
    return res.status(500).json(error);
  }
}

export async function handleGetUser(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const user = await getUserById(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json(user.profile);
  } catch (error: any) {
    console.error(error);
    res.status(500).json(error);
  }
}

export async function handleCreateUser(req: Request, res: Response) {
  const data = req.body;
  try {
    const user = await createUser(data);

    return res.status(201).json(user);
  } catch (error: any) {
    console.error(error);
    return res.status(500).json(error.message);
  }
}

export async function handleUpdateUser(req: Request, res: Response) {
  const { id } = req.params;
  const data = req.body;

  try {
    const user = await updateUser(id, data);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.status(200).json(user.profile);
  } catch (error: any) {
    console.error(error);
    return res.status(500).json(error);
  }
}

export async function handleDeleteUser(req: Request, res: Response) {
  const { id } = req.params;
  try {
    await deleteUser(id);

    return res.status(200).json({ message: 'User deleted' });
  } catch (error: any) {
    console.error(error);
    return res.status(500).json(error);
  }
}

export async function handleLoginUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { email, password } = req.body;

  try {
    const user = await getUser({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const validatePassword = await user.comparePassword(password);
    return res
      .status(200)
      .json({ message: 'User logged in', validatePassword });
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
}
