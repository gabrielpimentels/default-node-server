import { Document } from 'mongoose';

export interface IUserModelDocument extends Document {
  fullname: string;
  email: string;
  password: string;
}
