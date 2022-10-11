// index, show, create, update, delete
import { Request, Response } from 'express';

export class CreateUsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    return response.json(request.body);
  }
}
