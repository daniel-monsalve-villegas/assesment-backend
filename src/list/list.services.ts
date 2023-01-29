import { DocumentDefinition } from 'mongoose';
import List, { ListDocument } from './list.model';

export function getAllLists() {
  return List.find({}).populate({
    path: 'createdBy',
    select: 'firstName lastName',
  });
}

export function getList(id: string) {
  return List.findById(id).populate({
    path: 'createdBy',
    select: 'firstName lastName',
  });
}

export function getListByField(field, value) {
  return List.find({ [field]: value });
}

export function createList(list: DocumentDefinition<ListDocument) {
  return List.create(list);
}

export function updateList(id: string, list: DocumentDefinition<ListDocument>) {
  return List.findByIdAndUpdate(id, list, { new: true });
}

export function deleteList(id: string) {
  return List.findByIdAndDelete(id);
}
