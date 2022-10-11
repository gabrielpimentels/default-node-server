import { AppError } from '@shared/errors/AppError';

import { ICreateUsersDTO } from '@modules/dtos/users';
import { IUserModelDocument } from '@modules/models/users/IUserModelDocument';

import userRepository from '@modules/repositories/users/UserRepository';

class CreateUserService {
  constructor() {}

  public async execute({
    fullname,
    password,
    email,
  }: ICreateUsersDTO): Promise<IUserModelDocument> {
    const checkUserExists = await userRepository.findUserByEmail(email);

    if (checkUserExists) {
      throw new AppError(
        'Email in use.',
        'Email address has been already registered.',
        200,
      );
    }

    const user = await userRepository.create({
      fullname,
      email,
      password,
    });

    return user;
  }
}

export default new CreateUserService();
