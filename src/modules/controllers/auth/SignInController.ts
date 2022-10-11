import { Request, Response } from 'express';

import signInService from '@modules/services/auth/SignInService';

export class SignInController {
  public async signin(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const { user, token } = await signInService.execute({
      email,
      password,
    });

    return response.json({ user, token });
  }

  public async getProfile(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { _id } = request.body;

    const { user } = await signInService.getProfile(_id);

    return response.json({ user });
  }
}
