import User from './user.model';

export async function getAllUsers() {
  return User.find();
}

export async function getUserById(id) {
  const user = await User.findById(id);
  return user;
}

export async function createUser(user) {
  return User.create(user);
}

export async function updateUser(id, user) {
  const updatedUser = User.findByIdAndUpdate(id, user, { new: true });
  return updatedUser;
}
