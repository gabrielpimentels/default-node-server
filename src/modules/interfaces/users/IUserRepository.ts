import { ICreateUsersDTO } from '@modules/dtos/users';
import { IUserModelDocument } from '@modules/models/users/IUserModelDocument';

export interface IValidateEmailDTO {
  _id: string;
  token: string;
}

export interface IUpdateUserAvatarDTO {
  _id: string;
  avatar: string;
}

export interface IUserRepository {
  create(data: ICreateUsersDTO): Promise<IUserModelDocument>;
  findUserByEmail(email: string): Promise<IUserModelDocument | null>;
}
