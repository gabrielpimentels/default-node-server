import { Model } from 'mongoose';

import Advertise from '@modules/models/advertise/Advertise';

import { IAdvertiseRepository } from '@modules/interfaces/advertise/IAdvertiseRepository';

import { IAdvertiseModelDocument } from '@modules/models/advertise/IAdvertiseModelDocument';

import { IAdvertiseDTO } from '@modules/dtos/advertise/IAdvertiseDTO';

class AdvertiseRepository implements IAdvertiseRepository {
  private collection: Model<IAdvertiseModelDocument>;

  constructor() {
    this.collection = Advertise;
  }

  public async getAll(user_id: string): Promise<IAdvertiseModelDocument[]> {
    const advertises = await this.collection.find({ createdBy: user_id });

    return [...advertises];
  }

  public async getOne(_id: string): Promise<IAdvertiseModelDocument | null> {
    const advertise = await this.collection.findOne({ _id });

    return advertise;
  }

  public async create(
    advertiseData: IAdvertiseDTO,
  ): Promise<IAdvertiseModelDocument> {
    const advertise = await this.collection.create(advertiseData);

    return advertise;
  }

  public async update({
    _id,

    collectWith,
    deliveryTo,
    collectAt,
    deliveryAt,
    timeCollect,
    timeDelivery,

    payment,
    paymentMethod,
    offers,

    description,
  }: IAdvertiseDTO): Promise<IAdvertiseModelDocument | null> {
    const advertise = await this.collection.findOneAndUpdate(
      { _id },
      {
        collectWith,
        deliveryTo,
        collectAt,
        deliveryAt,
        timeCollect,
        timeDelivery,

        payment,
        paymentMethod,
        offers,

        description,
      },
    );

    return advertise;
  }
}

export default new AdvertiseRepository();
