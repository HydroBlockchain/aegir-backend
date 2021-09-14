import bcrypt from 'bcryptjs';
import { model, Schema } from 'mongoose';
import { IUser } from '../interfaces/Iuser';

const userSchema = new Schema({
  address: {
    trim: true,
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  }
});

userSchema.pre<IUser>('save', async function (next) {
  const user = this;

  if(!user.isModified('password')) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
  } catch(error) {}

  next();
});

userSchema.methods.comparePassword = function(password: string):  Promise<boolean> {
  return bcrypt.compare(password, this.password)
}

export default model<IUser>('User', userSchema);