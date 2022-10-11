import { Schema, model } from 'mongoose';

import { IUserModelDocument } from './IUserModelDocument';

// schemaVersion: change once we have a new data model.
// _clubs: that the user is affiliate to and his role in that club.

const UserSchema = new Schema<IUserModelDocument>(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      select: false,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
    toObject: { virtuals: true }, // So `toObject()` output includes virtuals
  },
);

export default model('User', UserSchema);
