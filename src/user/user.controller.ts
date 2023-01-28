import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from './user.services';

export async function handleGetAllUsers(req, res) {
  try {
    const users = await getAllUsers();
    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
}

export async function handleGetUser(req, res) {
  const { id } = req.params;
  try {
    const user = await getUserById(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json(user.profile);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
}

export async function handleCreateUser(req, res) {
  const data = req.body;
  try {
    const user = await createUser(data);

    return res.status(201).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error.message);
  }
}

export async function handleUpdateUser(req, res) {
  const { id } = req.params;
  const { name, description } = req.body;

  try {
    const user = await updateUser(id, { name, description });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.status(200).json(user.profile);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
}

export async function handleDeleteUser(req, res) {
  const { id } = req.params;
  try {
    await deleteUser(id);

    return res.status(200).json({ message: 'User deleted' });
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
}
