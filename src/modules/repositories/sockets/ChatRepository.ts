import { Model } from 'mongoose';

import Chat from '@modules/models/sockets/Chat';

import { IChatRepository } from '@modules/interfaces/sockets/IChatRepository';

import { IChatModelDocument } from '@modules/models/sockets/IChatModelDocument';
import { IChatDTO } from '@modules/dtos/sockets/IChatDTO';

class ChatRepository implements IChatRepository {
  private collection: Model<IChatModelDocument>;

  constructor() {
    this.collection = Chat;
  }

  public async getAll(sentTo: string): Promise<IChatModelDocument[]> {
    const messages = await this.collection.find({ to: sentTo });

    return messages;
  }

  public async create(data: IChatDTO): Promise<IChatModelDocument> {
    const message = await this.collection.create(data);

    const savedMessage = await message.save();

    return savedMessage;
  }
}

export default new ChatRepository();
