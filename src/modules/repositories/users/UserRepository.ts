import { Model } from 'mongoose';

import User from '@modules/models/users/User';

import { IUserRepository } from '@modules/interfaces/users/IUserRepository';

import { IUserModelDocument } from '@modules/models/users/IUserModelDocument';
import { ICreateUsersDTO } from '@modules/dtos/users';

class UserRepository implements IUserRepository {
  private collection: Model<IUserModelDocument>;

  constructor() {
    this.collection = User;
  }

  public async create(userData: ICreateUsersDTO): Promise<IUserModelDocument> {
    const user = await this.collection.create(userData);

    const savedUser = await user.save();
    savedUser.set('password', null);

    return savedUser;
  }

  public async findUserByEmail(
    email: string,
  ): Promise<IUserModelDocument | null> {
    const userEmail = await this.collection
      .findOne({ email })
      .select('+password')
      .lean()
      .exec();

    return userEmail;
  }

  public async findUserByEmailandPassword(
    email: string,
    password: string,
  ): Promise<IUserModelDocument | null> {
    const userEmailandPassword = await this.collection
      .findOne({ email, password })
      .select('+password')
      .lean()
      .exec();

    return userEmailandPassword;
  }

  public async getProfile(_id: string): Promise<IUserModelDocument | null> {
    const profile = await this.collection
      .findOne({ _id })
      .select('+password')
      .lean()
      .exec();

    return profile;
  }
}

export default new UserRepository();
