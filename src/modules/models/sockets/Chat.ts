import { Schema, model } from 'mongoose';
import { IChatModelDocument } from './IChatModelDocument';

// schemaVersion: change once we have a new data model.
// _clubs: that the user is affiliate to and his role in that club.

const ChatSchema = new Schema<IChatModelDocument>(
  {
    text: {
      type: String,
      required: true,
    },
    from: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      select: false,
    },
    dateSent: {
      type: Number,
      select: false,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
    toObject: { virtuals: true }, // So `toObject()` output includes virtuals
  },
);

export default model('Chat', ChatSchema);
