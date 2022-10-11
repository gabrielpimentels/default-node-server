import { Schema, model } from 'mongoose';

import { IAdvertiseModelDocument } from './IAdvertiseModelDocument';

// schemaVersion: change once we have a new data model.
// _clubs: that the user is affiliate to and his role in that club.

const AdvertiseSchema = new Schema<IAdvertiseModelDocument>(
  {
    collectWith: { type: String, required: true },
    deliveryTo: { type: String, required: true },
    collectAt: { type: String, required: true },
    deliveryAt: { type: String, required: true },
    timeCollect: { type: String, required: true },
    timeDelivery: { type: String, required: true },

    payment: { type: String, required: true },
    paymentMethod: { type: String, required: true },
    offers: { type: String, required: true },

    description: { type: String, required: true },

    createdBy: { type: String, required: true },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
    toObject: { virtuals: true }, // So `toObject()` output includes virtuals
  },
);

export default model('Advertise', AdvertiseSchema);
