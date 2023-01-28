import List from './list.model';

export function getAllLists() {
  return List.find({}).populate({
    path: 'createdBy',
    select: 'firstName lastName',
  });
}

export function getList(id) {
  return List.findById(id).populate({
    path: 'createdBy',
    select: 'firstName lastName',
  });
}

export function getListByField(field, value) {
  return List.find({ [field]: value });
}

export function createList(list) {
  return List.create(list);
}

export function updateList(id, list) {
  return List.findByIdAndUpdate(id, list, { new: true });
}

export function deleteList(id) {
  return List.findByIdAndDelete(id);
}
