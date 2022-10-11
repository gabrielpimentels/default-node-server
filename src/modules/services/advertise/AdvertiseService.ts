import { IAdvertiseModelDocument } from '@modules/models/advertise/IAdvertiseModelDocument';

import AdvertiseRepository from '@modules/repositories/adertise/AdvertiseRepository';

class CreateAdvertiseService {
  constructor() {}

  public async getAll(user_id: string): Promise<IAdvertiseModelDocument[]> {
    const advertises = await AdvertiseRepository.getAll(user_id);

    return advertises;
  }

  public async getOne(
    advertise_id: string,
  ): Promise<IAdvertiseModelDocument | null> {
    const advertise = await AdvertiseRepository.getOne(advertise_id);
    return advertise;
  }

  public async create({
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

    createdBy,
  }: IAdvertiseModelDocument): Promise<IAdvertiseModelDocument> {
    const advertise = await AdvertiseRepository.create({
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

      createdBy,
    });

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

    createdBy,
  }: any): Promise<IAdvertiseModelDocument | null> {
    const advertise = await AdvertiseRepository.update({
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

      createdBy,
    });

    return advertise;
  }
}

export default new CreateAdvertiseService();
