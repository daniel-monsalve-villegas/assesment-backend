import { Schema, model } from 'mongoose';

const FavsSchema = new Schema(
  {
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
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const List = model('List', FavsSchema);

export default List;
