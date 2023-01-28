import { Schema, model, Document } from 'mongoose';

type userProfileType = {
  firstName: string;
  lastName: string;
  email: string;
};

export interface UserDocument extends Document {
  user: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;

  profile: userProfileType;
}

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, 'Please provide a first namee'],
    },
    lastName: {
      type: String,
      required: [true, 'Please provide a last name'],
    },
    email: {
      type: String,
      required: [true, 'Please provide an email'],
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
      min: 6,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

UserSchema.virtual('profile').get(function profile() {
  const { firstName, lastName, email } = this;

  return { firstName, lastName, email };
});

const User = model<UserDocument>('User', UserSchema);

export default User;
