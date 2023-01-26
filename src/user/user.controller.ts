import User from './user.model';

export async function getAllUsers() {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getUserById(id) {
  try {
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
}
