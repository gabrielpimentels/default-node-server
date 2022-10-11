import { Request, Response } from 'express';

import AdvertiseService from '@modules/services/advertise/AdvertiseService';

export class AdvertiseController {
  public async getAll(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.body;

    const advertises = await AdvertiseService.getAll(user_id);

    return response.json(advertises);
  }

  public async getOne(request: Request, response: Response): Promise<Response> {
    const { advertise_id } = request.params;

    const advertises = await AdvertiseService.getOne(advertise_id);

    return response.json(advertises);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const advertise = await AdvertiseService.create(request.body);

    console.log(request.body)

    return response.json({ advertise });
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const {
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
    } = request.body;

    const advertises = await AdvertiseService.update({
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

    return response.json(advertises);
  }
}
