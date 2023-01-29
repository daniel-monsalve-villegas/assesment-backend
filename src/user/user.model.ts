import { Schema, model, Document } from 'mongoose';
import bcrypt from 'bcryptjs';

type userProfileType = {
  firstName: string;
  lastName: string;
  email: string;
};

// Define types to use UserDocument type
export interface UserDocument extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;

  profile: userProfileType;
  comparePassword: (password: string) => Promise<boolean>
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

// Encrypt password with Bcryptjs
UserSchema.pre('save', async function save(next: Function) {
  const user = this as UserDocument;

  try {
    if (!user.isModified('password')) {
      return next();
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);

    user.password = hash;
  } catch (error: any) {
    next(error);
  }
});

// Create a virtual schema to get these values when use GET petition
UserSchema.virtual('profile').get(function profile() {
  const { firstName, lastName, email } = this;

  return { firstName, lastName, email };
});

UserSchema.methods.comparePassword = async function comparePassword(
  this: UserDocument,
  candidatePassword: string,
  next: Function
): Promise<boolean> {
  const user = this;

  try {
    const isMatch = await bcrypt.compare(candidatePassword, user.password);

    return isMatch;
  } catch (error: any) {
    next(error);
    return false;
  }
};

const User = model<UserDocument>('User', UserSchema);

export default User;
