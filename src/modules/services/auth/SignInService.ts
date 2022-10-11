import { sign } from 'jsonwebtoken';

import authConfig from '@config/auth.config';
import { AppError } from '@shared/errors/AppError';

import { IUserModelDocument } from '@modules/models/users/IUserModelDocument';

import userRepository from '@modules/repositories/users/UserRepository';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: IUserModelDocument;
  token?: string;
}

class SignInService {
  constructor() {}

  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await userRepository.findUserByEmailandPassword(
      email,
      password,
    );

    if (!user) {
      throw new AppError(
        'Please check your credentials.',
        'Incorrect email or password.',
        200,
      );
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({ user_id: user._id, email: user.email }, secret, {
      subject: String(user._id),
      expiresIn,
    });

    return { user, token };
  }

  public async getProfile(_id: string): Promise<IResponse> {
    const user = await userRepository.getProfile(_id);

    if (!user) {
      throw new AppError('Not found.', '', 200);
    }

    return { user };
  }
}

export default new SignInService();
