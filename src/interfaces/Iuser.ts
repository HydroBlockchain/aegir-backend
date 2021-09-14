import { Document } from "mongoose";

export interface IUser extends Document {
  address: string;
  password: string;
  comparePassword: (password: string) => Promise<Boolean>;
}