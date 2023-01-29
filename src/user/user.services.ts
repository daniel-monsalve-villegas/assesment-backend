import { FilterQuery, DocumentDefinition } from 'mongoose';
import User, { UserDocument } from './user.model';

export function getAllUsers() {
  return User.find({}, { password: 0 });
}

export function getUserById(id: string) {
  const user = User.findById(id);
  return user;
}

export function getUser(filter: FilterQuery<UserDocument>) {
  const user = User.findOne(filter);

  return user;
}

export function createUser(
  user: DocumentDefinition<Omit<UserDocument, 'createdAt' | 'updatedAt'>>
) {
  return User.create(user);
}

export function updateUser(
  id: string,
  user: DocumentDefinition<Omit<UserDocument, 'createdAt' | 'updatedAt'>>
) {
  const updatedUser = User.findByIdAndUpdate(id, user, { new: true });
  return updatedUser;
}

export function deleteUser(id: string) {
  const deletedUser = User.findByIdAndDelete(id);
  return deletedUser;
}
