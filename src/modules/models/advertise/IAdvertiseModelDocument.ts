import { Document } from 'mongoose';

export interface IAdvertiseModelDocument extends Document {
  _id?: string;
  
  collectWith: string;
  deliveryTo: string;
  collectAt: string;
  deliveryAt: string;
  timeCollect: string;
  timeDelivery: string;

  payment: string;
  paymentMethod: string;
  offers: string;

  description: string;

  createdBy: string;
}
