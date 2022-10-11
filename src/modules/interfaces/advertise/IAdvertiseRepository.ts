import { IAdvertiseDTO } from '@modules/dtos/advertise/IAdvertiseDTO';
import { IAdvertiseModelDocument } from '@modules/models/advertise/IAdvertiseModelDocument';

export interface IAdvertiseRepository {
  getAll(user_id: string): Promise<IAdvertiseModelDocument[] | null>;
  getOne(advertise_id: string): Promise<IAdvertiseModelDocument | null>;
  create(data: IAdvertiseDTO): Promise<IAdvertiseModelDocument>;
  update(data: IAdvertiseDTO): Promise<IAdvertiseModelDocument | null>;
}
