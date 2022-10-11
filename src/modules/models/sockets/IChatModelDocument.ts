import { Document } from 'mongoose';

export interface IChatModelDocument extends Document {
  text: string;
  from: string;
  to: string;
  dateSent: number;
}
