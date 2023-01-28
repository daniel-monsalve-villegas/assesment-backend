import { Schema, model, Document } from 'mongoose';

export interface FavsDocument extends Document {
  title: string;
  description: string;
  link?: string;
  name: string;
  createdBy: Schema.Types.ObjectId;
}

const FavsSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title'],
  },
  description: {
    type: String,
    required: [true, 'Please provide a description'],
  },
  link: String,
  name: {
    type: String,
    required: [true, 'Please provide a name'],
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

FavsSchema.virtual('list').get(function list() {
  const { title, description, name, createdBy } = this;

  return { title, description, name, createdBy };
});

const List = model<FavsDocument>('List', FavsSchema);

export default List;
