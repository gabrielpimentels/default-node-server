// index, show, create, update, delete
import { Request, Response } from 'express';

import CreateUserService from '@modules/services/users/CreateUserService';

export class SignUpController {
  constructor() {}

  public async signup(request: Request, response: Response): Promise<Response> {
    const { fullname, email, password } = request.body;

    const user = await CreateUserService.execute({
      fullname,
      email,
      password,
    });

    return response.json(user);
  }
}
