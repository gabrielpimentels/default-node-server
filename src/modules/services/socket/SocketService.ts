//import { IUserModelDocument } from '@modules/models/users/IUserModelDocument';

import { IChatModelDocument } from '@modules/models/sockets/IChatModelDocument';
import { IChatDTO } from '@modules/dtos/sockets/IChatDTO';
import chatRepository from '@modules/repositories/sockets/ChatRepository';

class SocketService {
  constructor() {}

  public async getAll(sentTo: string): Promise<IChatModelDocument[]> {
    const messages = await chatRepository.getAll(sentTo);

    return messages;
  }

  public async execute(): Promise<any> {
    console.log('service execute');

    return { user: 1 };
  }

  public async saveMessage({
    text,
    from,
    to,
    dateSent,
  }: IChatDTO): Promise<IChatModelDocument> {
    const message = await chatRepository.create({
      text,
      from,
      to,
      dateSent,
    });

    return message;
  }
}

export default new SocketService();
