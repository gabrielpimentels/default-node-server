import { Request, Response } from 'express';
import socketService from '@modules/services/socket/SocketService';

export class ChatController {
  public async getAll(request: Request, response: Response): Promise<Response> {
    const { to } = request.body;

    const messages = await socketService.getAll(to);

    return response.json(messages);
  }
}
